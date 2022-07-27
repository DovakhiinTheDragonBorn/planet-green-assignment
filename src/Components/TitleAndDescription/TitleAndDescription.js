import React, { useEffect } from "react";
import "./TitleAndDescription.scss";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animateVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const TitleAndDescription = (props) => {
  const { title, description } = props;

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
      className="TitleAndDescription"
      ref={ref}
      variants={animateVariant}
      initial="hidden"
      animate={control}
    >
      <p className="Title">{title}</p>
      <p className="Description">{description}</p>
      <hr className="DottedLine" />
    </motion.div>
  );
};

export default TitleAndDescription;
