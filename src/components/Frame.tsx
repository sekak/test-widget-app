import { useContext, useEffect } from "react"
import { motion } from 'framer-motion'
import { CreateContext } from "../context/Context"
import { buttonVr, variants } from "../motion"

const Frame = () => {
    const { open, setOpen } = useContext(CreateContext)
    let t = document.getElementById("iframe")?.getBoundingClientRect()?.top
    console.log(document.getElementById("iframe")?.getBoundingClientRect().top)
    useEffect(()=>{
        let g = document.getElementById("img")
        if(g)
        {
            console.log(t)
            g.style.top = `${t && t + 15}px`
        }
    },[t])
    return (
        <motion.div className={`h-full w-full  `} >
            <motion.iframe id="iframe" variants={variants} animate={open ? 'open' : 'closed'} src='https://widget-app-git-master-sekaks-projects.vercel.app/' className='w-[400px] h-[85%] rounded-[25px] fixed bottom-[120px] right-10 border-gray-100 shadowIframe mobileDv'></motion.iframe>
            <motion.button variants={buttonVr} animate={open ? 'open' : 'closed'} id="img" className={`absolute bg-red right-[15px] sm:hidden block`} onClick={() => setOpen(!open)}>
                <img src='./close.png' className='w-[20px] h-[20px]' />
            </motion.button>
        </motion.div>
    )
}

export default Frame