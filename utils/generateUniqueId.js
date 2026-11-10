export const generateUniqueId = (phoneNumber) => {
  const salepointId = '8'
  //   const randomNumber = Math.floor(1000 + Math.random() * 9000)
  const timeNow = new Date().getTime().toString()
  const last4digits = timeNow.substring(timeNow.length - 4)
  const phone = phoneNumber.substring(3)
  const uniqueID = salepointId + phone + last4digits
  return parseInt(uniqueID)
}
export function generatePaymentUniqueId(length) {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
