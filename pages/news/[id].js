import React from 'react'
import { Box, Container } from '@mui/material'
import BlogDesc from '../../components/BlogDesc/BlogDesc'
import SEO from '../../components/seo'
import NewsInfo from '../../components/NewsInfo/NewsInfo'
import { motion } from 'framer-motion'
import { metaData } from '../../mock/metaData'
import { useRouter } from 'next/router'
import dataToArrayStrapiConverter from '../../utils/dataToArrayStrapiConverter'

export default function NewSingle({ news }) {
  const { locale } = useRouter()
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <SEO
        title={metaData[locale]?.news?.title}
        description={metaData[locale]?.news?.description}
        keywords={metaData[locale]?.news?.keywords}
      />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <NewsInfo data={news} />
        </Container>
      </Box>
    </motion.div>
  )
}

export async function getServerSideProps({ query }) {
  const response = await fetch(process.env.BASE_URL_STRAPI + `/news?populate=*`)
  const data = await response.json()

  const news = dataToArrayStrapiConverter(data)
  const singleNewsBySlug = news.find((item) => item.slug == query.id)

  return {
    props: {
      news: singleNewsBySlug,
    },
  }
}
