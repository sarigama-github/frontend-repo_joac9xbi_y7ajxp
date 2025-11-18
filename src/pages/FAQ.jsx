import { motion } from 'framer-motion'
import FAQSection from '../components/FAQ'

export default function FAQ() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="pt-20">
      <FAQSection />
    </motion.div>
  )
}
