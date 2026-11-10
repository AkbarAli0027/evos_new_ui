import React from 'react'
import { Box, Container } from '@mui/material'
import SEO from '../../../components/seo'
import GalleryInfo from '../../../components/GalleryInfo/GalleryInfo'
import { useRouter } from 'next/router'
import { metaData } from '../../../mock/metaData'
import dataToArrayStrapiConverter from '../../../utils/dataToArrayStrapiConverter'

export default function NewSingle({ info }) {
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
          <GalleryInfo data={info} />
        </Container>
      </Box>
    </>
  )
}

export async function getServerSideProps({ query, locale }) {
  const response = await fetch(
    process.env.BASE_URL_STRAPI + `/gallery-items?populate=gallery_images`
  )
  const data = await response.json()

  const formattedData = dataToArrayStrapiConverter(data)

  const singleGalletyItemBySlug = formattedData?.find((item) =>
    item.slug.includes(query.id)
  )

  return {
    props: {
      info: singleGalletyItemBySlug,
    },
  }
}
