import React, { useState } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import cls from './VacancyItem.module.scss'
import { useRouter } from 'next/router'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import VacancyRequestForm from '../VacancyRequestDialog/VacancyRequestForm'
import { btnText } from '../../mock/menu'
import Profile from '../Profile/Profile'
import CareerItem from '../CareerItem/CareerItem'
import MobileCareerItem from '../MobileCareerItem/MobileCareerItem'
import strapiTranslater from '../../utils/strapiTranslater'

function VacancyItem({ profiles, data, vacancyItems, career_history }) {
  const router = useRouter()
  const { locale } = router
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleRedirect = (id) => {
    router.push(`/vacancy/${id}`)
  }

  const nextSlide = () => {
    const slider = document.getElementById('slide')
    slider.scrollLeft += 430
  }
  const prevSlide = () => {
    const slider = document.getElementById('slide')
    slider.scrollLeft -= 430
  }
  return (
    <>
      {/* Title and Description */}
      <Box className={cls.textItem}>
        <Typography variant={`h1`} color={`black`} className={cls.title}>
          {strapiTranslater(data, 'title', locale)}
        </Typography>
        <Typography maxWidth='526px' className={cls.desc}>
          {strapiTranslater(data, 'description', locale)}
        </Typography>
      </Box>
      {/* Vacancies */}
      <Box className={cls.wrapper}>
        <Box className={cls.vacansyCards} id='slide'>
          {vacancyItems.map((item, index) => (
            <Box key={item.id} className={cls.cardWrapper}>
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                height='100%'
              >
                <div>
                  <Box marginBottom='24px'>
                    <Typography
                      className={cls.lable}
                      variant={`h16`}
                      sx={{ marginBottom: '24px' }}
                    >
                      {strapiTranslater(item, 'title', locale)}
                    </Typography>
                  </Box>
                  <div
                    className={cls.requirements}
                    dangerouslySetInnerHTML={{
                      __html: strapiTranslater(item, 'requirements', locale),
                    }}
                  />
                </div>
                <Box
                  display='flex'
                  alignItems='flex-end'
                  marginTop='8px'
                  flexGrow='1'
                >
                  <button
                    className={cls.btn}
                    onClick={() => handleRedirect(item.slug)}
                  >
                    {btnText[locale].details}
                  </button>
                  <button className={cls.btnPrimary} onClick={handleOpen}>
                    {btnText[locale].apply}
                  </button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <div className={cls.arrowBtns}>
          <button type='button' className={cls.prevBtn} onClick={prevSlide}>
            <ArrowBackIos className='back-icon' />
          </button>
          <button onClick={nextSlide} type='button' className={cls.nextBtn}>
            <ArrowForwardIos className='forward-icon' />
          </button>
        </div>
      </Box>
      {/* Profiles */}
      <Profile profiles={profiles} />
      {/* Career history */}
      <CareerItem career_history={career_history} />
      <MobileCareerItem career_history={career_history} />
      {/* Vacancy Request Form */}
      <VacancyRequestForm
        onClose={handleClose}
        open={open}
      ></VacancyRequestForm>
    </>
  )
}

export default VacancyItem
