import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import Image from 'next/image'
import { Logout, Notification, UserIcon } from '../Icons'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import order from '../../public/images/svg/food.svg'
import Login from '../Login/Login'
import { menu } from '../../mock/menu'
import nookies, { destroyCookie, parseCookies } from 'nookies'
import MyInfoDialog from '../MyInfoDialog/MyInfoDialog'
import { requestV2 } from '../../utils/axios'
import PhoneIcon from '@mui/icons-material/Phone'
import { useDispatch, } from 'react-redux'
import { clearCartAction } from '../../store/actions/cartActions/cartActions'


const CustomBox = styled(Box)(({ theme }) => ({
  '& .MuiBox-root': {
    cursor: 'pointer',
    paddingTop: '6px',
    paddingBottom: '6px',
    paddingLeft: '8px',
    // 'paddingRight': '18px',
    '&:hover': {
      background: '#F6F8F9',
    },
  },
}))

function LoginPopover() {
  const router = useRouter()
  const { locale } = router
  const [openMyInfo, setOpenMyInfo] = useState(false)
  const [openMyAddress, setOPenMyAddress] = useState(false)
  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  const [isCheckCode, setIsCheckCode] = useState(false)
  const [data, setData] = useState({ phone: '', fullName: '', sms: '' })
  const [client, setClient] = useState(null)
  const { token } = nookies.get()
  if (openMyInfo === true) open = false
  if (openMyAddress === true) open = false
  const dispatch = useDispatch()


  // MY INFO DIALOG
  const handleOpenMyInfo = () => {
    setOpenMyInfo(true)
  }
  const handleCloseMyInfo = (e) => {
    e.preventDefault()
    setOpenMyInfo(false)
    getClientInfo()
  }

  const handleRedirectToOrder = () => {
    if (token) {
      router.push('/orders')
      setOpenLoginDialog(false)
    } else setOpenLoginDialog(true)
  }

  const handleLogout = () => {
    destroyCookie(null, 'token', { path: '/' })
    localStorage.removeItem(`persist:address`)
    dispatch(clearCartAction())
    window.location.replace('/')
  }

  const getClientInfo = () => {
    if (token)
      requestV2
        .get('/service/client-info')

        .then((res) => {
          // console.log('res22',res)

          setClient(res.data)
        })
        .catch((err) => console.log(err))
  }

  useEffect(() => {
    getClientInfo()
  }, [])

  // LOGIN DIALOG

  const handleCloseLogin = () => {
    setData({ phone: '', fullName: '', sms: '' })
    setIsCheckCode(false)
    setOpenLoginDialog(false)
  }

  return (
    <div>
      <Box
        display='flex'
        flexDirection='column'
        width='232px'
        padding='16px'
        borderRadius='4px'
        sx={{
          background: '#ffffff',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.06)',
        }}
      >
        {token && client && (
          <>
            <CustomBox>
              <Box
                display='flex'
                alignItems='center'
                onClick={handleOpenMyInfo}
              >
                <Box
                  alignSelf='center'
                  color='#323232  '
                  verticalAlign='middle'
                >
                  <PhoneIcon />
                </Box>
                <Typography
                  variant={`h4`}
                  sx={{ maxWidth: '144px', marginLeft: '12px' }}
                >
                  {`+${client.phone_number}`}
                </Typography>
              </Box>
            </CustomBox>
            <CustomBox>
              <Box
                display='flex'
                alignItems='center'
                onClick={handleOpenMyInfo}
              >
                <Box alignSelf='center' verticalAlign='middle'>
                  <UserIcon />
                </Box>
                <Typography
                  variant={`h4`}
                  sx={{ maxWidth: '144px', marginLeft: '12px' }}
                >
                  {menu[locale].myInfo}
                </Typography>
              </Box>
            </CustomBox>
          </>
        )}
        <CustomBox>
          <Box
            display='flex'
            alignItems='center'
            onClick={handleRedirectToOrder}
          >
            <Box alignSelf='center' verticalAlign='middle'>
              <Image src={order} width={24} height={24} alt='order' />
            </Box>
            <Typography
              variant={`h4`}
              sx={{ maxWidth: '144px', marginLeft: '12px' }}
            >
              {menu[locale].myOrders}
            </Typography>
          </Box>
        </CustomBox>
        {!token ? (
          <CustomBox>
            <Box
              display='flex'
              alignItems='center'
              onClick={() => setOpenLoginDialog(true)}
            >
              <Box alignSelf='center' verticalAlign='middle'>
                <Logout />
              </Box>
              <Typography
                variant={`h4`}
                sx={{ maxWidth: '144px', marginLeft: '12px' }}
              >
                {menu[locale].login}
              </Typography>
            </Box>
          </CustomBox>
        ) : (
          <CustomBox>
            <Box
              display='flex'
              alignItems='center'
              onClick={() => handleLogout()}
            >
              <Box alignSelf='center' verticalAlign='middle'>
                <Logout />
              </Box>
              <Typography
                variant={`h4`}
                sx={{ maxWidth: '144px', marginLeft: '12px' }}
              >
                {menu[locale].logout} 
              </Typography>
            </Box>
          </CustomBox>
        )}
      </Box>
      <MyInfoDialog
        onClose={handleCloseMyInfo}
        open={openMyInfo}
        client={client}
      />
      {/* <MyAddress onClose={handleCloseMyAddress} open={openMyAddress} /> */}
      {/* <Login open={openLoginDialog} onClose={handleCloseLogin} setOpenLoginDialog={setOpenLoginDialog}/> */}
      <Login
        open={openLoginDialog}
        onClose={handleCloseLogin}
        setOpenLoginDialog={setOpenLoginDialog}
        isCheckCode={isCheckCode}
        setIsCheckCode={setIsCheckCode}
        data={data}
        setData={setData}
      />
    </div>
  )
}

export default LoginPopover
