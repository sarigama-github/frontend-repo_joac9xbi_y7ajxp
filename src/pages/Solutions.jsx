import { motion } from 'framer-motion'
import Features from '../components/Features'

export default function Solutions() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="pt-20">
      <Features />
    </motion.div>
  )
}
