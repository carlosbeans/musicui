import React from "react";
import { motion } from "framer-motion";
import "./CurvedSlider.scss";

function CurvedSlider() {
    return (
      <div className="curvedSlider">
        <motion.div
            drag
            dragConstraints={{ top:0, left: 0, right: 0, bottom: 222 }}
            dragElastic={0}
            dragMomentum={false}
            className="macroKnob"
        >
        </motion.div>
        <svg width="41" height="256" viewBox="0 0 41 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 0C-13.0073 77.1016 -13.0073 178.898 40 256" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
}

export default CurvedSlider;