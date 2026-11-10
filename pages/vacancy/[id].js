import React from 'react'
import { Box, Container } from '@mui/material'
import VacancyDesc from '../../components/VacancyDesc/VacancyDesc'
import SEO from '../../components/seo'
import { vacancies } from '../../mock/vacancies'
import { metaData } from '../../mock/metaData.js'
import { useRouter } from 'next/router'

export default function VacancySingle({ vacancy }) {
  const { locale } = useRouter()

  return (
    <>
      <SEO
        title={metaData[locale]?.vacancy?.title}
        description={metaData[locale]?.vacancy?.description}
        keywords={metaData[locale]?.vacancy?.keywords}
      />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <VacancyDesc data={vacancy} />
        </Container>
      </Box>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const response = await fetch(
    process.env.BASE_URL_STRAPI + `/vacancy-items/${query.id}`
  )
  const vacancy = await response.json()

  return {
    props: {
      vacancy: vacancy?.data?.attributes,
    },
  }
}
