import { motion } from 'framer-motion'
import PricingSection from '../components/Pricing'

export default function Pricing() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="pt-20">
      <PricingSection />
    </motion.div>
  )
}
