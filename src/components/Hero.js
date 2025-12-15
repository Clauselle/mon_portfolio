import { HERO_CONTENT } from "..";
import profilePic from "../assets/me.jpg";
import { motion } from "framer-motion";

const container = (delay) =>({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () =>{
    return <div className="border-b border-neutral-900 pg-4 lg:mb-30">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                    >Clauselle RATOVOARISOA</motion.h1>
                    <motion.span variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                    className="bg-gradient-to-r from-pink-400 via-slate-400 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent">Full-Stack Developer Specializing in Secure Web Apps - Laravel · React · Node.js · Next.js</motion.span>
                    <motion.p variants={container()}
                        initial="hidden"
                        animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                       
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    src={profilePic} alt="Clauselle"/>
                </div>
            </div>
            
        </div>
    </div>;
};

export default Hero;