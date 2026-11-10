import { Container } from '@mui/material'
import { motion } from 'framer-motion'
import KidsAquagrim from '../../../components/KidsAquagrim/KidsAquagrim'

export default function KidsAquagrimPage() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Container maxWidth='xl'>
        <KidsAquagrim />
      </Container>
    </motion.div>
  )
}
