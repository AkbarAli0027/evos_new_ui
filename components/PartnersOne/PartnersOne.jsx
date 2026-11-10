// PartnersOne.js
import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import cls from './PartnersOne.module.scss'
import { useRouter } from 'next/router'
import VacancyRequestForm from '../VacancyRequestDialog/VacancyRequestForm'
import {
  TitleOne,
  InputField,
  RequestLeft,
  RequestRight,
} from './RequestComponents/RequestComponents'
import {
  marketingDesc,
  supplyDesc,
  realEstateDesc,
  locationsDesc,
  realEstateDetails,
} from './TextContent/TextContent'
import { menu } from '../../mock/menu'



function PartnersOne() {
  const router = useRouter()
  const { locale } = router
  const [open, setOpen] = useState(false)
  const realEstateDescVar = realEstateDesc(locale)
  const locationsDescVar = locationsDesc(locale)
  const realEstateDetailsVar = realEstateDetails(locale)





  const items = [
    { title: menu[locale].marketing, desc: marketingDesc },
    { title: 'Отдел снабжения', desc: supplyDesc },
    {
      title: menu[locale].realEstate,
      desc: realEstateDescVar,
      details: realEstateDetailsVar,
      desctop: locationsDescVar,
      desclab: (
        <>
          <TitleOne />
          <Box className={cls.request}>
            <RequestLeft />
            <RequestRight />
          </Box>
        </>
      ),
    },
    { title: 'Заявка на добавление локаций', desc: locationsDescVar },
  ]

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Box className={cls.textItem}>
        <h1  color={`black`} className={cls.title}>
          {items[router.query.id]?.title}
        </h1>

        <Box className={cls.myCustomClass}>
          <Typography fontWeight='400' maxWidth='526px' className={cls.desc}>
            {items[router.query.id]?.desc}
          </Typography>
          <Typography className={cls.right}>
            {items[router.query.id]?.details &&
              items[router.query.id]?.details.map((item, index) => (
                <div key={index} className={cls.mainSquare}>
                  <div className={cls.iconPlace}>{item.icon}</div>
                  <div className={cls.mainTextSection}>
                    <div className={cls.textSection}>{item.text[0]}</div>
                    <div className={cls.underTextSection}>{item.text[1]}</div>
                  </div>
                </div>
              ))}
          </Typography>
        </Box>
        <Typography className={cls.aplication}>
          {items[router.query.id]?.desctop}
        </Typography>

        <Box className={cls.TextMain}>{items[router.query.id]?.desclab}</Box>
      </Box>

      <VacancyRequestForm onClose={handleClose} open={open} />
    </>
  )
}

export default PartnersOne
