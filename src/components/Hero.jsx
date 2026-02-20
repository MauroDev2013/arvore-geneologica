import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (

    <div className="hero">
      <motion.img
        src="/images/eu.jpg"
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Mauro de Oliveira Lovera
      </motion.h1>
    </div>

  );
}
