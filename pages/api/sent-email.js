require('dotenv').config()
const nodemailer = require('nodemailer')

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const { name, phone, file } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  })

  const mailOption = {
    from: `${process.env.EMAIL}`,
    to: `${process.env.EMAIL_TO}`,
    subject: `Contact form from website ${phone}`,
    text: `
    Name: ${name}
    Phone number: ${phone}
    `,
    attachments: [
      {
        path: file,
      },
    ],
  }

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err)
      res.send('error' + JSON.stringify(err))
    } else {
      res.send('success')
    }
  })
}
