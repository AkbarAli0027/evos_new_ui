import { Container } from '@mui/material'
import KidsPage from '../../components/Kids/KidsPage'
import { motion } from 'framer-motion'

function Kids() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Container maxWidth='xl'>
        <KidsPage />
      </Container>
    </motion.div>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Kids
