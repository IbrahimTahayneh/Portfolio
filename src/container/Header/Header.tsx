import React from "react";
//@ts-ignore
import Lottie from "react-lottie";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import { images, animations } from "../../assets";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const defaultOptionsAnimations = {
  loop: true,
  autoplay: true,
  animationData: animations.Developer,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Ibrahim</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Front-End Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* <img src={images.Profile} alt="profile_bg" /> */}
        <Lottie options={defaultOptionsAnimations} height={500} width={500} />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.Circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.Sass, images.HTML, images.React].map((image, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={image} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
