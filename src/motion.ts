export const variants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    closed: { opacity: 0, y: "100px", transition: { duration: 0.5 }, },
}


export const variantsChange={
    open1: { opacity: 1,rotate:360,transition:{duration:0.8} },
    closed1: { opacity: 1,rotate:0 ,transition:{duration:0.8} },
}

export const variantsUl = {
    open: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
        }
    },
    closed: {
        opacity: 0,
        transition: {
            staggerChildren: -0.5,
            delayChildren: 0.2,
        }
    }
}