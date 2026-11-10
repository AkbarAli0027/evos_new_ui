import React from 'react'
import { Box, Container } from '@mui/material'
import VacancyItem from '../../components/VacancyItem/VacancyItem.jsx'
import SEO from '../../components/seo'
import { vacancies, vacancies_uz } from '../../mock/vacancies'
import Advantage from '../../components/Advantage/Advantage.jsx'
import PhoneNumber from '../../components/PhoneNumber/PhoneNumber.jsx'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { metaData } from '../../mock/metaData.js'
import dataToArrayStrapiConverter from '../../utils/dataToArrayStrapiConverter.js'
import strapiTranslater from '../../utils/strapiTranslater'

function Vacancy({
  profiles,
  data,
  vacancyItems,
  advantage_items,
  career_history,
}) {
  const { locale } = useRouter()

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <SEO
        title={metaData[locale]?.vacancy?.title}
        description={metaData[locale]?.vacancy?.description}
        keywords={metaData[locale]?.vacancy?.keywords}
      />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <VacancyItem
            data={data}
            profiles={profiles}
            vacancyItems={vacancyItems}
            career_history={career_history}
          />
        </Container>
        <Advantage advantage_items={advantage_items} />
        <Container>
          {/* <PhoneNumber /> */}
        </Container>
      </Box>
    </motion.div>
  )
}

export async function getServerSideProps({ locale }) {
  const response = await fetch(
    process.env.BASE_URL_STRAPI +
      `/vacancy-page?populate=profiles,profiles.image,vacancy_items,advantage_items,advantage_items.image,career_history.image`
  )
  const data = await response.json()
  const { profiles, vacancy_items, advantage_items, career_history } =
    data?.data?.attributes

  const formattedVacancyItems = dataToArrayStrapiConverter(vacancy_items)
  const formattedAdvantageItems = dataToArrayStrapiConverter(advantage_items)

  return {
    props: {
      profiles,
      data: data?.data?.attributes,
      vacancyItems: formattedVacancyItems,
      advantage_items: formattedAdvantageItems,
      career_history,
    },
  }
}
export default Vacancy
