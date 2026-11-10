import React from 'react'
import BranchDesc from '../../../components/BranchDesc/BranchDesc'
import { Box, Container } from '@mui/material'
import { fetchMultipleUrls } from '../../../utils/fetchMultipleUrls'
import SEO from '../../../components/seo'
import { motion } from 'framer-motion'
import { metaData } from '../../../mock/metaData'
import { useRouter } from 'next/router'

export default function branchDescription({ branchItem }) {
  const { locale } = useRouter()
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <SEO
        title={metaData[locale]?.branch?.title}
        description={metaData[locale]?.branch?.description}
        keywords={metaData[locale]?.branch?.keywords}
      />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <BranchDesc branchItem={branchItem} />
        </Container>
      </Box>
    </motion.div>
  )
}

export async function getServerSideProps(ctx) {
  const { query } = ctx
  const branchItem = await fetchMultipleUrls([
    {
      version: 2,
      endpoint: `/service/branch-info`,
      method: 'post',
      body: {
        id: query.id,
      },
    },
  ])

  return {
    props: {
      branchItem,
    },
  }
}
