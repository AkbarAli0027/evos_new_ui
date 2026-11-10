import React, { useState } from 'react'
import { Typography, Box, Grid, Dialog } from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from './GalleryInfo.module.scss'
import { useRouter } from 'next/router'
import { SearchIcon, ZoomIcon } from '../Icons'
import { menu } from '../../mock/menu'
import dataToArrayStrapiConverter from '../../utils/dataToArrayStrapiConverter'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'
import strapiTranslater from '../../utils/strapiTranslater'

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '4px !important',
    maxWidth: '1248px',
  },
  card: {
    width: '100%',
  },
}))

function GalleryInfo({ data }) {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(null)
  const router = useRouter()
  const { locale } = router
  const handleRedirect = () => {
    router.push(`/about`)
  }
  const handleClickOpen = (currentImage) => {
    setImage(currentImage)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const galleryImages = dataToArrayStrapiConverter(data?.gallery_images)
  return (
    <>
      <Box id='#gallery' mb='47px'>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          mx='auto'
          width='100%'
        >
          <div className={cls.card}>
            <Typography variant={`h4`} fontSize={22} mt={3}>
              {strapiTranslater(data, 'title', locale)}
            </Typography>
            <Typography variant={`body1`} fontSize={15} mt='20px' mb='47px'>
              <div
                dangerouslySetInnerHTML={{
                  __html: strapiTranslater(data, 'context', locale),
                }}
              />
            </Typography>
            <Grid container spacing={3}>
              {galleryImages.map((item) => (
                <Grid
                  key={item.id}
                  onClick={() =>
                    handleClickOpen(
                      process.env.BASE_URL_STRAPI_IMAGE + item?.url
                    )
                  }
                  className={cls.item}
                  item
                  sx={{ borderRadius: 1, overflow: 'hidden' }}
                  lg={3}
                  md={3}
                  sm={4}
                  xs={6}
                >
                  <div className={cls.icon}>
                    <ZoomIcon />
                  </div>
                  <div className={cls.image}>
                    <img
                      src={process.env.BASE_URL_STRAPI_IMAGE + item?.url}
                      alt={data?.title}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
            {}
          </div>
        </Box>
      </Box>
      {/* Button to back */}
      <a href='#gallery'>
        <Box className={cls.button}>
          <span onClick={() => handleRedirect()} className={cls.back}>
            {menu[locale].btnBack}
          </span>
        </Box>
      </a>
      <Dialog
        className={cls.dialog}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%',
              height: '100%', // Set your width here
            },
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <img src={image} />
      </Dialog>
    </>
  )
}

export default GalleryInfo
