import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// Define the SectionWrapper higher-order component (HOC) with two parameters
const SectionWrapper = (Component, idName) => 
function HOC() {
  return (
    // Use Framer Motion's motion.section component for animation
    <motion.section
      variants={staggerContainer()} // Animation variants, presumably defined in utils/motion
      initial='hidden' // Initial animation state
      whileInView='show' // Animation state when the component is in view
      viewport={{ once: true, amount: 0.25 }} // Trigger animation when 25% of the component is in view
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      // Apply styling classes to the section element
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
  )
}

export default SectionWrapper;
