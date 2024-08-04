import { useContext } from "react"
import { motion } from 'framer-motion'
import { CreateContext } from "../context/Context"
import { buttonVr, variants } from "../motion"

const Frame = () => {
    const { open, setOpen } = useContext(CreateContext)

    return (
        <motion.div className={`h-full w-full  `} >
            <motion.iframe variants={variants} animate={open ? 'open' : 'closed'} src='https://widget-app-git-master-sekaks-projects.vercel.app/' className='w-[400px] h-[85%] rounded-[25px] fixed bottom-[120px] right-10 border-gray-100 shadowIframe mobileDv'></motion.iframe>
            <motion.button variants={buttonVr} animate={open ? 'open' : 'closed'} className="absolute bg-red right-[15px] top-[22%] sm:hidden block" onClick={() => setOpen(!open)}>
                <img src='./close.png' className='w-[20px] h-[20px]' />
            </motion.button>
        </motion.div>
    )
}

export default Frame