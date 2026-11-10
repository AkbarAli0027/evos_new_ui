import React from 'react'
import { Box, Container } from '@mui/material'
import BlogItems from '../../components/BlogItems/BlogItems'
import SEO from '../../components/seo'
import { news } from '../../mock/news'
import NewsItems from '../../components/NewsItems/NewsItems'
import { motion } from 'framer-motion'
import { metaData } from '../../mock/metaData'
import { useRouter } from 'next/router'
import dataToArrayStrapiConverter from '../../utils/dataToArrayStrapiConverter'

export default function News({ news }) {
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
      <Box id='blogRoot'>
        <Container maxWidth='xl'>
          <Box display='flex' id='verticalMargin'>
            <Box width='100%'>
              <NewsItems news={news} />
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  )
}
export async function getServerSideProps() {
  const response = await fetch(process.env.BASE_URL_STRAPI + `/news?populate=*`)
  const data = await response.json()

  const news = dataToArrayStrapiConverter(data)
  return {
    props: {
      news,
    },
  }
}
