"use client"
import logoPic from "../assets/logo.PNG"
import Image from "next/image";
import { campaign, campaignMedium, lausanne } from "../styles/fonts";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
    const isAnimationDisabled = useReducedMotion();

    const animateDiv = {
        opacity: 1, y: 0
    }

    const initialDiv = {
        opacity: 0, y: 50
    }

    const animateBtn = {
        opacity: 1, y: 0
    }

    const initialBtn = {
        opacity: 0, y: -50
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <motion.div
                initial={isAnimationDisabled ? animateDiv : initialDiv}
                animate={isAnimationDisabled ? undefined : animateDiv}
                transition={{duration: 1}}
            >
            <div className="items-center justify-center flex flex-col">
                {/*<h1 className={`text-4xl ${campaign.className}`}>About</h1>*/}
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={logoPic}
                        width={200}
                        height={200}
                        alt="Logo Image for Inkblot Book Club"
                        priority={true}
                    >
                    </Image>
                </div>
                <div className="flex flex-col my-10 w-3/4 items-start justify-start">
                    <p className={`text-md md:text-lg ${lausanne.className}`}>
                        Inkblot Book Club is a small community engaging in healthy discussions and critiques 
                        over books. Inkblot community is also interested in films so whether 
                        you're a reader, a cinephile or just curious about Inkblot, click the button below and join us!
                        <br></br>
                        <br></br>
                        Due to resource constraints, we might choose only English books as Book of the Month. 
                        However, you are free to read the BOTM in your native tongue and create 
                        small communities inside Inkblot to discuss literature in other languages. 
                        For more info, head over to our Discord!
                    </p>
                </div>
            </div>
            </motion.div>
            <motion.div
                initial={isAnimationDisabled ? animateBtn : initialBtn}
                animate={isAnimationDisabled ? undefined : animateBtn}
                transition={{duration: 1}}
            >
                <div className="flex flex-col items-center justify-center">
                    <Link href="https://discord.gg/V2xARZ3jeX" target="_blank" className="bg-violet py-2 px-8 rounded-lg text-black border-2 border-white drop-shadow-md hover:bg-black hover:text-white transition active:translate-x-1 active:translate-y-1 active:drop-shadow-none focus:bg-black focus:text-white focus:translate-x-1 focus:translate-y-1 focus:drop-shadow-none">
                            <button className={`items-center justify-center text-xl md:text-2xl ${campaignMedium.className}`}>Join Now</button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}