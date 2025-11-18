import { motion } from 'framer-motion'
import AboutSection from '../components/About'

export default function About() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="pt-20">
      <AboutSection />
    </motion.div>
  )
}
