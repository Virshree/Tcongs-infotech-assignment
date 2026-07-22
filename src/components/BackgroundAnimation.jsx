import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Blob 1 */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"
        initial={{ x: -100, y: -50 }}
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute right-10 top-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
}