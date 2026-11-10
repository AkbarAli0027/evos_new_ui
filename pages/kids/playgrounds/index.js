import { Container } from '@mui/material'
import { motion } from 'framer-motion'
import KidsPlaygrounds from '../../../components/KidsPlaygrounds/KidsPlaygrounds'

export default function KidsPlaygroundsPage() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Container maxWidth='xl'>
        <KidsPlaygrounds />
      </Container>
    </motion.div>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
