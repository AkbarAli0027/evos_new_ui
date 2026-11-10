import { motion } from 'framer-motion'
import SEO from '../components/seo'
import { Box, Container } from '@mui/material'
import CompositionInfo from '../components/CompositionInfo/CompositionInfo'
export default function Composition({ data }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <SEO title={' Product composition'} />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <CompositionInfo data={data?.data} />
        </Container>
      </Box>
    </motion.div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(
    process.env.BASE_URL_STRAPI +
      '/composition-products?populate=*&pagination[start]=0&pagination[limit]=100'
  )
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}
