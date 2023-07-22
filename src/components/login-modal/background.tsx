import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

export const LoginBackground = ({ handler }: { handler: string }) => {
  const controls = useAnimationControls()

  const animateLoginBackground = async () => {
    try {
      await controls.start({ rotate: 90, transformOrigin: 'top left', zIndex: 0 });

      await new Promise((resolve) => setTimeout(resolve, 50));

      await controls.start({ rotate: -6, transformOrigin: 'center', zIndex: 50 });

      await new Promise((resolve) => setTimeout(resolve, 250));

      await controls.start({ rotate: 90, transformOrigin: 'top left', zIndex: 50 });

      await new Promise((resolve) => setTimeout(resolve, 50));

      await controls.start({ rotate: -6, transformOrigin: 'center', zIndex: 0 });
    } catch (err) {
      return
    }
  };
  useEffect(() => {
    animateLoginBackground()
  }, [handler]);

  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-600 shadow-lg transform sm:rounded-3xl"
      animate={controls}
      exit={{ opacity: 0 }}
    ></motion.div>
  )
}