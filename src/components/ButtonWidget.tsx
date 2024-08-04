import React, { useContext } from 'react'
import { CreateContext } from '../context/Context'
import {motion} from "framer-motion"
import { variantsChange } from '../motion'

const ButtonWidget = () => {
    const {open ,setOpen} = useContext(CreateContext)

    return (
        <div className={`w-full h-full ${open && 'buttonWdHdSh'}`}>
            <div className='fixed sm:bottom-10 sm:right-10 bottom-4 right-4 p-2 sm:flex cursor-pointer z-[999]'>
                 <motion.button variants={variantsChange} animate={open ? "open1" : "closed1"} className='w-[50px] h-[50px] bg-gray-500 rounded-full relative flex items-center justify-center' onClick={()=>setOpen(!open)}>
                    <img alt='img1' src="./Vector.png"  className='w-[20px] h-[20px] shadowIcon'/>
                 </motion.button>
            </div>
        </div>
    )
}

export default ButtonWidget