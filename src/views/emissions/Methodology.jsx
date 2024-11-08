import React from 'react';
import { motion } from 'framer-motion';
import methodologyGif from '/src/assets/Animation.gif';

 // Add path to your GIF file
 import "./methodology.css";



const MethodologyCard = () => {
  return (
    <div className="card">
      <div className="header">
        <h2><span style={{ color: '#FF6347' }}>Methodology</span></h2>
      </div>
      <p>
        All emission calculations have been generated based on your uploaded transactions and activities - 
        e.g., fuel, transport, business travel, materials - by pairing those with emissions data from Normative’s 
        database; following the GHG Protocol Standard. The Normative methodology follows a hybrid between 
        transaction and activity input data.
      </p>

      {/* Add Animated GIF */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6 }}
      >
        <img src={methodologyGif} alt="Methodology Diagram" style={{ width: '350px',height: '250px',display: 'block', margin: '0 auto'}} 
/>

      </motion.div>
    </div>
  );
};

export default MethodologyCard;
