import { motion } from "framer-motion";

export default function TextAnimation() {
  return (
    <motion.h1 
    style={{overflow: "hidden", whiteSpace: "nowrap"}}
    initial={{ width: 0 }}>
      Unlimited Movies, TV shows, and more.....
    </motion.h1>
  );
}
