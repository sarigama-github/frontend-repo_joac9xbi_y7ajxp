import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Integrations from '../components/Integrations'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Home() {
  return (
    <div className="pt-16">
      <motion.div initial="hidden" animate="show" variants={fadeIn}>
        <Hero />
      </motion.div>
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
        <About />
      </motion.section>
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
        <Features />
      </motion.section>
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
        <Integrations />
      </motion.section>
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
        <Pricing />
      </motion.section>
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
        <FAQ />
      </motion.section>
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
        <CTA />
      </motion.section>
    </div>
  )
}
