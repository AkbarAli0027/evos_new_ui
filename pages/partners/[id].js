import React from 'react'
import { Box, Container } from '@mui/material'
import SEO from '../../components/seo'
import PhoneNumber from '../../components/PhoneNumber/PhoneNumber.jsx'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { metaData } from '../../mock/metaData.js'
import PartnersOne from '../../components/PartnersOne/PartnersOne'

function PartnersOnePage({ profiles, data, vacancyItems, career_history }) {
  const { locale } = useRouter()

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <SEO
        title={metaData[locale]?.partners?.title}
        description={metaData[locale]?.partners?.description}
        keywords={metaData[locale]?.partners?.keywords}
      />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <PartnersOne />
        </Container>

        <Container>{/* <PhoneNumber /> */}</Container>
      </Box>
    </motion.div>
  )
}

export default PartnersOnePage
