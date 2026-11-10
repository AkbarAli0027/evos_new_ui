import React from 'react'
import { Box, Container } from '@mui/material'
import SEO from '../../components/seo'
import HistoryInfo from '../../components/HistoryInfo/HistoryInfo'
import { metaData } from '../../mock/metaData'
import { useRouter } from 'next/router'
import dataToArrayStrapiConverter from '../../utils/dataToArrayStrapiConverter'

export default function NewSingle({ data }) {
  const { locale } = useRouter()

  return (
    <>
      <SEO
        title={metaData[locale].about.title}
        description={metaData[locale].about.description}
        keywords={metaData[locale].about.keywords}
      />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <HistoryInfo data={data} />
        </Container>
      </Box>
    </>
  )
}

export async function getServerSideProps({ query, locale }) {
  const response = await fetch(
    process.env.BASE_URL_STRAPI + `/topics?populate=image`
  )
  const data = await response.json()

  const formattedData = dataToArrayStrapiConverter(data)

  const singleTopicBySlug = formattedData?.find((item) =>
    item.slug.includes(query.id)
  )
  return {
    props: {
      data: singleTopicBySlug,
    },
  }
}
