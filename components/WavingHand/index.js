import { motion } from "framer-motion";

const WavingHand = () => {
  return (
    <motion.div
      style={{
        marginBottom: '-20px',
        marginRight: '-45px',
        paddingBottom: '20px',
        paddingRight: '45px',
        display: 'inline-block',
      }}
      whileInView={{ rotate: 20 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        from: 0,
        duration: 0.3,
        ease: 'easeInOut',
        type: 'tween',
      }}
    >
      👋
    </motion.div>
  );
};

export default WavingHand;
