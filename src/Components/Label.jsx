import React from 'react'
import { motion } from "framer-motion";


const Label = ({mytext}) => {
  return (
    <motion.div
    initial={{y:10}}
    whileInView={{y:0}}
    transition={{duration:0.4}}
    viewport={{once:false}}
     className=' my-16 relative'>
        <span  className=' myLabel inline-block mr-3'></span>
        <span className=' inline-block px-5 py-2 bg-red-100
         text-[#df5646]'>{mytext}</span>
    </motion.div>
  )
}

export default Label