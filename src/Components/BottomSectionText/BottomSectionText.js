import React, { useEffect } from "react";
import "./BottomSectionText.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animateVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const BottomSectionText = () => {
  const controlTitle = useAnimation();
  const controlPara1 = useAnimation();
  const controlPara2 = useAnimation();
  const [refTitle, inViewTitle] = useInView();
  const [refPara1, inViewPara1] = useInView();
  const [refPara2, inViewPara2] = useInView();

  useEffect(() => {
    if (inViewTitle) {
      controlTitle.start("visible");
    } else {
      controlTitle.start("hidden");
    }
  }, [controlTitle, inViewTitle]);

  useEffect(() => {
    if (inViewPara1) {
      controlPara1.start("visible");
    } else {
      controlPara1.start("hidden");
    }
  }, [refPara1, inViewPara1]);

  useEffect(() => {
    if (inViewPara2) {
      controlPara2.start("visible");
    } else {
      controlPara2.start("hidden");
    }
  }, [refPara2, inViewPara2]);

  return (
    <div className="BottomSectionText">
      <motion.div
        className="Title"
        ref={refTitle}
        variants={animateVariant}
        initial="hidden"
        animate={controlTitle}
      >
        Lorem ipsum dolor sit amet, adipiscing elit.
      </motion.div>
      <motion.div
        className="Paragraph"
        ref={refPara1}
        variants={animateVariant}
        initial="hidden"
        animate={controlPara1}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum
        pharetra erat at efficitur. Etiam a quam urna. Aenean pulvinar nunc in
        mattis tincidunt
      </motion.div>
      <hr className="DottedLine" />
      <motion.div
        className="Paragraph"
        ref={refPara2}
        variants={animateVariant}
        initial="hidden"
        animate={controlPara2}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum
        pharetra erat at efficitur. Etiam a quam urna. Aenean pulvinar nunc in
        mattis tincidunt
      </motion.div>
    </div>
  );
};

export default BottomSectionText;
