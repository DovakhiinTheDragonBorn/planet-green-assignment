import React, { useEffect } from "react";
import "./OverlappingImages.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animateVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const OverlappingImages = (props) => {
  const { image1, image2 } = props;
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
    <div className="OverlappingImages">
      <div className="imageStack">
        <motion.div
          className="imageStackItemTopDiv"
          ref={ref}
          variants={animateVariant}
          initial="hidden"
          animate={control}
        >
          <img className="imageStackItemTop" src={image1} alt="" />
        </motion.div>
        <motion.div
          className="imageStackItemBottomDiv"
          ref={ref}
          variants={animateVariant}
          initial="hidden"
          animate={control}
        >
          <img src={image2} alt="" className="imageStackItemBottom" />
        </motion.div>
      </div>
    </div>
  );
};

export default OverlappingImages;
