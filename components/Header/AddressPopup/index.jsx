import { Popover } from '@mui/material'
import styles from './style.module.scss'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import { setCurrentAddress } from '../../../store/actions/addressActions/addressActions'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { menu } from '../../../mock/menu'

export default function AddressPopup({ anchorEl, handleClose, onOpenAddress }) {
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  const { addresses, currentAddress } = useSelector((state) => state.address)
  const dispatch = useDispatch()
  const router = useRouter()
  const { locale } = useRouter()

  const openAddAddress = () => {
    onOpenAddress()
    handleClose()
  }



  const changeCurrentAddress = (item) => {
    dispatch(setCurrentAddress(item))
    handleClose()
    setCookie({}, 'geoLocation', item.geo, {
      path: '/',
      maxAge: 30 * 24 * 60 * 60,
    })
    setTimeout(() => {
      router.replace('/')
    }, 2000)
  }

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      PaperProps={{
        style: {
          borderRadius: '4px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, .2)',
        },
      }}
    >
      <div className={styles.list}>
        <div className={styles.item} onClick={openAddAddress}>
          <p>{menu[locale].addNewAddress}</p>
          <AddIcon />
        </div>

        {addresses.slice(0, 5).map((item) => (
          <div
            onClick={() => changeCurrentAddress(item)}
            className={styles.item}
            key={item.geo}
          >
            <p>{item.address.replace('Узбекистан, Ташкент,', '')}</p>

            {currentAddress?.geo === item?.geo &&
              item?.address === currentAddress?.address && (
                <CheckRoundedIcon fontSize='small' />
              )}
          </div>
        ))}
      </div>
    </Popover>
  )
}
