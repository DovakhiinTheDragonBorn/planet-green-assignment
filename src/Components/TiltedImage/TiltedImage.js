import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animateVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const TiltedImage = (props) => {
  const { image, angle } = props;

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="TiltedImage"
      ref={ref}
      variants={animateVariant}
      initial="hidden"
      animate={control}
    >
      <img src={image} style={{ transform: `rotate(${angle})` }} />
    </motion.div>
  );
};

export default TiltedImage;
