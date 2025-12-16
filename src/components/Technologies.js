import { RiReactjsLine } from "react-icons/ri";
import { SiMysql,
         SiLaravel,
         SiPython,
         SiPhp,
         SiJavascript,
         SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () =>{
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                 variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-7xl" />
                </motion.div>
                <motion.div 
                 variants={iconVariants(5)}
                 initial="initial"
                 animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div 
                 variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPhp className="text-7xl text-blue-700" />
                </motion.div>
                <motion.div 
                 variants={iconVariants(2)}
                 initial="initial"
                 animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiLaravel className="text-7xl text-red-400" />
                </motion.div>
                <motion.div 
                 variants={iconVariants(6)}
                 initial="initial"
                 animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div 
                 variants={iconVariants(6)}
                 initial="initial"
                 animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div 
                 variants={iconVariants(4)}
                 initial="initial"
                 animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div 
                 variants={iconVariants(6)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className="text-7xl text-blue-500" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;