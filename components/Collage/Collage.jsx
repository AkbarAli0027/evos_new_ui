import { Box } from '@mui/material'
import cls from './Collage.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'

function Collage({ mobileImg, img, isMobile }) {
  const { locale } = useRouter()
  const router = useRouter()
  const handleRedirect = () => {
    router.push('/news')
  }

  return (
    <Box className={cls.imgWrapper}>
      <Box className={cls.imgBox}>
        {isMobile ? (
          <img
            className={cls.img}
            src={mobileImg}
            alt='banner-img'
            onClick={handleRedirect}
          />
        ) : (
          <img className={cls.img} src={img} alt='banner-img' />
        )}

        <button className={cls.btn} onClick={handleRedirect}>
          {menu[locale].more} <ArrowForwardIcon />
        </button>
      </Box>
    </Box>
  )
}

export default Collage
