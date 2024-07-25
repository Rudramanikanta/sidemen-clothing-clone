import React from 'react'
import {motion} from "framer-motion"
import Item from './Item';
const Clothes = ({arr}) => {
   
    
  return (
    <div className='flex py-10 mt-5 ml-3 mb-7 gap-x-8 justify-evenly'>
        {
            arr.map((value,index)=>{
                return <Item key={index} value={value} index={index}></Item>
            })
        }

    </div>
  )
}

export default Clothes