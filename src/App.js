import React from 'react';
import './App.scss';
import { motion } from "framer-motion";
import BtnPlay from './BtnPlay';

function App() {
  return (
    <div className="App">      
      <motion.div className="col">
        <BtnPlay />
      </motion.div>
    </div>
  );
}

export default App;
