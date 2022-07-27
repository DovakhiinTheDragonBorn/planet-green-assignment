import React, { useEffect } from "react";
import "./TopTextAndImage.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animateVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const TopTextAndImage = (props) => {
  const { text, image } = props;
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
    <div className="TopTextAndImage">
      <motion.div
        // className=""
        ref={ref}
        variants={animateVariant}
        initial="hidden"
        animate={control}
      >
        <img className="Image" src={image} />
      </motion.div>
      <p className="Text">{text}</p>
    </div>
  );
};

export default TopTextAndImage;
