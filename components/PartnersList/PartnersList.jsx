import React, { useState } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import cls from './PartnersList.module.scss'
import { useRouter } from 'next/router'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import VacancyRequestForm from '../VacancyRequestDialog/VacancyRequestForm'
import { btnText } from '../../mock/menu'
import strapiTranslater from '../../utils/strapiTranslater'
const items = [
  {
    title: 'Маркетинг',
    desc: (
      <p>
        Примеры услуг и товаров, которые для нас всегда актуальны: <br />-
        современные рейтинговые информационные каналы (ТВ, радио,
        интернет-порталы) <br />- сувенирная и полиграфическая продукция, <br />
        - продакшн (видеоролики, фильмы и т.д.) <br />- блоггеры с актуальным и
        социально-приемлемым контентом <br />- владельцы официально оформленной
        наружной рекламы <br />- социально важные проекты <br />- маркетинговые
        и PR агентства полного цикла
      </p>
    ),
  },
  {
    title: 'Отдел снабжения',
    desc: (
      <p>
        Примеры услуг и товаров, которые для нас всегда актуальны: <br />-
        продукты питания, полуфабрикаты <br />- оборудование для HoReCa <br />-
        тара, упаковка <br />- химия для HoReCa
      </p>
    ),
  },
  {
    title: 'Аренда/покупка   недвижимости',
    desc: (
      <p>
        Основные требования к помещениям, рассматриваемых под аренду/покупку:{' '}
        <br />- Рассматриваемая площадь: от 200 м2 <br />- Расположение
        сооружения (помещения): первая линия <br />- Этажность здания: всех
        видов (жилые дома, общественные здания и сооружения) <br />- Наличие
        документации: кадастр, согласование проектов, разращение на
        реконструкцию, согласование от жильцов (жилые дома). <br />- Наличие
        коммуникаций: газоснабжение, водоснабжение, электроснабжение,
        канализационные выходы. Основные требования к земельным участкам,
        рассматриваемых под аренду/покупку: <br />- рассматриваемая площадь: от
        400 м2 (4 сотки) <br />- наличие подъездных путей: первая линия <br />-
        наличие документаций: кадастр. <br />
        По остальным вопросам: <br />
        Корпоративная почта: oppbo@evos.uz <br />
        Google почта: evosoppbo@gmail.com <br />
        Тел: +998948181212
      </p>
    ),
  },
]

function PartnersList() {
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
          Для партнеров
        </Typography>
        <div className={cls.card}>
          <img src='/images/win-win.jpg' alt='partners' />
          <Typography fontWeight='400' maxWidth='526px' className={cls.desc}>
            Мы создаём бизнес-систему EVOS по принципу Win-Win. Её основа –
            баланс всех интересов: в приоритете данного подхода взаимовыгодные
            интересы всех сторон. Наши партнеры производят для нас
            высококачественные товары, материалы и актуальные для нас услуги по
            нашим требованиям, а взамен получают надежного крупного партнера на
            долгие годы.
            <br />
            <b style={{ color: 'black' }}>
              Если у вас есть, что предложить для нас, свяжитесь с нами в
              подходящем для вас разделе и мы обязательно рассмотрим ваше
              предложение!
            </b>
          </Typography>
        </div>
      </Box>
      {/* Vacancies */}
      <Box className={cls.wrapper}>
        <Box className={cls.vacansyCards} id='slide'>
          {items.map((item, index) => (
            <Box key={item.id} className={cls.cardWrapper}>
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                height='100%'
              >
                {/* <Typography
                  className={cls.lable}
                  variant={`h16`}
                  mb='10px'
                  textAlign='center'
                >
                  {item.title}
                </Typography>

                <div className={cls.requirements}>{item.desc}</div> */}

                <Box
                // display='flex'
                // alignItems='flex-end'
                // marginTop='15px'
                // flexGrow='1'
                >
                  {/* <button
                    className={cls.btn}
                    onClick={() => handleRedirect(item.slug)}
                  >
                    {btnText[locale].details}
                  </button> */}
                  <button
                    onClick={() => router.push(`/partners/${index}`)}
                    className={cls.btnPrimary}
                    // onClick={handleOpen}
                  >
                    {item.title}
                  </button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        {/* <div className={cls.arrowBtns}>
          <button type='button' className={cls.prevBtn} onClick={prevSlide}>
            <ArrowBackIos className='back-icon' />
          </button>
          <button onClick={nextSlide} type='button' className={cls.nextBtn}>
            <ArrowForwardIos className='forward-icon' />
          </button>
        </div> */}
      </Box>
    </>
  )
}

export default PartnersList
