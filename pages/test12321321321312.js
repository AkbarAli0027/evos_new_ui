import PromotionPage from '../components/Promotion/PromotionPage'
import { motion } from 'framer-motion'
import SEO from '../components/seo'

export default function Promotion() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
    >
      
      <PromotionPage />
    </motion.div>
  )
}


