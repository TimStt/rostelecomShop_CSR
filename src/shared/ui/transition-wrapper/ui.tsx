import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const { asPath } = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, width: "100%" }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, width: "100%" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionWrapper;
