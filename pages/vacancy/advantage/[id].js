import React from 'react'
import { Box, Container } from '@mui/material'
import SEO from '../../../components/seo'
import { advantage, advantage_uz } from '../../../mock/advantage'
import AdvantageInfo from '../../../components/AdvantageInfo/AdvantageInfo.jsx'
import { metaData } from '../../../mock/metaData'
import { useRouter } from 'next/router'

export default function VacancySingle({ advantageItem }) {
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
          <AdvantageInfo data={advantageItem} />
        </Container>
      </Box>
    </>
  )
}

export async function getServerSideProps({ query, locale }) {
  const response = await fetch(
    process.env.BASE_URL_STRAPI + `/advantage-items/${query.id}`
  )
  const data = await response.json()

  return {  
    props: {
      advantageItem: data?.data?.attributes,
    },
  }
}
