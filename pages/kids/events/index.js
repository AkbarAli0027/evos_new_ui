import { Container } from '@mui/material'
import KidsEvents from '../../../components/KidsEvents/KidsEvents'
import { motion } from 'framer-motion'
export default function KidsEventsPage() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Container maxWidth='xl'>
        <KidsEvents />
      </Container>
    </motion.div>
  )
}
