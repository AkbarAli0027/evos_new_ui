import React from 'react'
import { Box, Container } from '@mui/material'
import SEO from '../../components/seo'
import AboutDesc from '../../components/AboutDesc/AboutDesc'
import { motion } from 'framer-motion'
import { metaData } from '../../mock/metaData'
import { useRouter } from 'next/router'
import dataToArrayStrapiConverter from '../../utils/dataToArrayStrapiConverter'

export default function AboutUs({ data, statistics, topics, galleryItems }) {
  const { locale } = useRouter()

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <SEO
        title={metaData[locale]?.about?.title}
        description={metaData[locale]?.about?.description}
        keywords={metaData[locale]?.about?.keywords}
      />
      {/* <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <NewsDesc />
        </Container>
      </Box> */}
      <AboutDesc
        data={data}
        statistics={statistics}
        topics={topics}
        galleryItems={galleryItems}
      />
    </motion.div>
  )
}
export async function getServerSideProps({ locale }) {
  const response = await fetch(
    process.env.BASE_URL_STRAPI +
      `/about-page?populate=Banner,topics,topics.image,statistics.image,gallery_items.image`
  )
  const data = await response.json()

  const { statistics, topics, gallery_items } = await data?.data?.attributes

  const fromattedTopics = dataToArrayStrapiConverter(topics)
  const fromattedGAlleryItems = dataToArrayStrapiConverter(gallery_items)

  return {
    props: {
      data: data?.data?.attributes,
      statistics,
      topics: fromattedTopics,
      galleryItems: fromattedGAlleryItems,
    },
  }
}
