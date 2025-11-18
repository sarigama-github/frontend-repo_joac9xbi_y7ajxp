import { motion } from 'framer-motion'
import CTA from '../components/CTA'

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="pt-20">
      <CTA />
    </motion.div>
  )
}
