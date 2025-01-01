import { motion } from "framer-motion";

export default function TextAnimation() {
  return (
    <motion.h1
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
        color: "white",
        textAlign: "center",
        width: "90%",
        margin: "0 auto",
        fontWeight: "700",
      }}
      initial={{ width: 0 }}
      transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
      animate={{ width: "100%" }}
    >
      Unlimited Movies, TV shows, and more.....
    </motion.h1>
  );
}
