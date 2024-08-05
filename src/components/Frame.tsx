import { useContext, useEffect } from "react"
import { motion } from 'framer-motion'
import { CreateContext } from "../context/Context"
import {  variants } from "../motion"

const Frame = () => {
    const { open, setOpen } = useContext(CreateContext)
    
    return (
        <motion.div className={`h-full w-full  `} >
            <motion.iframe id="iframe" variants={variants} animate={open ? 'open' : 'closed'} src='https://widget-app-git-master-sekaks-projects.vercel.app/' className='w-[400px] h-[85%] rounded-[25px] fixed bottom-[120px] right-10 border-gray-100 shadowIframe mobileDv'></motion.iframe>
            <div className="w-[400px] h-[85%] rounded-[25px] fixed bottom-[120px] right-10 border-gray-100 shadowIframe mobileDv">
                {/* <div className="w-full absolute right-0"> */}
                    <img alt='img1' src="./icon-1.png"  className='absolute right-0 top-5 w-[22px] h-[15px] '/>
                {/* </div> */}
            </div>
        </motion.div>
    )
}

export default Frame  