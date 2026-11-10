import React, { useState } from 'react'
import { requestAxios } from '../../utils/axios'
import { setCookie } from 'nookies'
import { toast } from 'react-toastify'
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Box,
} from '@mui/material'
import CloseIconEffect from '../CloseIcon/CloseIcon'
import ReactInputMask from 'react-input-mask'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'
import { menu, btnText } from '../../mock/menu'
import { makeStyles } from '@mui/styles'
import { useFormik } from 'formik'

const validate = (values) => {
  const errors = {}

  if (!values.phone) {
    errors.phone = 'Required'
  }
}

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '0',
  },
}))

function LoginForm(props) {
  const { open, onClose, setOpenLoginDialog } = props
  const [data, setData] = useState({ phone: '' })
  const router = useRouter()
  const { locale } = router
  const [isLogin, setLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const phoneNumber = data.phone.split('+')[1]
  const classes = useStyles(props)

  const formik = useFormik({
    initialValues: {
      phone: phoneNumber,
    },
    validate,
    onSubmit: (values) => {
      setIsLoading(true)
      requestAxios
        .get(`/client/${values.phone}`)
        .then((res) => {
          if (!res.errorMessage) {
            setLogin(true)
            setCookie({}, 'client_id', res.client.id, {
              path: '/',
            })
            router.push('/orders')
            setOpenLoginDialog(false)
          } else {
            toast.error('Пользователь не найден!')

            setOpenLoginDialog(true)
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    },
  })



  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        id='loginDialog'
        classes={{ paper: classes.paper }}
        BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
      >
        <Box margin='32px'>
          <CloseIconEffect onClick={onClose} />
          <Box sx={{ paddingTop: 0 }}>
            {/* <DialogTitle> */}
            <Typography variant={`h1`} sx={{ paddingBottom: 5 }}>
              {menu[locale].signIn}
            </Typography>
            {/* </DialogTitle> */}
            <form onSubmit={formik.handleSubmit}>
              <DialogContent sx={{ padding: 0, paddingBottom: 5 }}>
                <label htmlFor='phone'>
                  <Typography
                    variant={`h4`}
                    sx={{ paddingBottom: 2, color: '#5B6871' }}
                  >
                    {menu[locale].phoneNumber}
                  </Typography>
                </label>
                <ReactInputMask
                  mask='+\9\98 99 999 99 99'
                  placeholder={menu[locale].enterPhNum}
                  disabled={false}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.errors.phone}
                  //   onChange={(e) =>
                  //     setData({ phone: e.target.value.replace(/ /g, '') })
                  //   }
                  required
                  style={{
                    paddingTop: '17px',
                    paddingBottom: '17px',
                    paddingLeft: '16px',
                    marginBottom: '0',
                    width: '100%',
                  }}
                ></ReactInputMask>
              </DialogContent>
              <DialogActions
                sx={{ padding: 0, display: 'flex', flexDirection: 'column' }}
              >
                <button className='btn' type='submit'>
                  {isLoading ? (
                    <CircularProgress color='inherit' size={18} />
                  ) : (
                    btnText[locale].login
                  )}
                </button>
              </DialogActions>
            </form>
          </Box>
        </Box>
      </Dialog>
    </div>
  )
}

export default LoginForm
