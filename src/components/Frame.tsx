import { useContext, useEffect } from "react"
import { motion } from 'framer-motion'
import { CreateContext } from "../context/Context"
import {  variants } from "../motion"

const Frame = () => {
    const { open, setOpen } = useContext(CreateContext)
    
    return (
        <motion.div className='h-full w-full' >
            <motion.iframe 
                id="iframe" 
                variants={variants} 
                animate={open ? 'open' : 'closed'} 
                src='https://widget-app-bay.vercel.app/' 
                className={`w-[400px] h-[85%] rounded-[25px] fixed bottom-[120px] right-10 border-gray-100 shadowIframe mobileDv z-[1]  ${!open && 'hidden'}`}
                >
                </motion.iframe>
        </motion.div>
    )
}

export default Frame  