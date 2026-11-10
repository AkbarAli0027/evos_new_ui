import { Container } from '@mui/material'
import { motion } from 'framer-motion'
import CTableService from '../components/CTableService/CTableService'

export default function TableService() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Container maxWidth='xl'>
        <CTableService />
      </Container>
    </motion.div>
  )
}
