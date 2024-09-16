"use client"
import couchPic from "../assets/couch.png";
import Image from "next/image";
import { campaign, campaignMedium } from "../styles/fonts";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
    const isAnimationDisabled = useReducedMotion();

    const animateImg = {
        opacity: 1
    }

    const initialImg = {
        opacity: 0
    }

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
        <div className="flex flex-col w-full bg-cover bg-center justify-end h-screen">
            <div className="flex flex-col w-full items-start justify-end mb-6">
                <motion.div
                    initial={isAnimationDisabled? animateImg : initialImg}
                    animate={isAnimationDisabled? undefined : animateImg}
                    transition={{duration: 1}}
                >
                    <Image
                        src={couchPic}
                        objectFit={"cover"}
                        objectPosition="center"
                        layout={"fill"}
                        alt="Couch on the Porch, Cos Cob by Childe Hassam"
                        priority={true}
                        className="-z-10"
                        placeholder="blur"
                    ></Image>
                </motion.div>
                <motion.div
                    initial={isAnimationDisabled? animateDiv : initialDiv}
                    animate={isAnimationDisabled? undefined : animateDiv}
                    transition={{duration: 1}}    
                >
                    <div>
                        <h1 className={`z-30 text-6xl md:text-10xl px-8 ${campaign.className}`}>Inkblot Book Club</h1>
                        <p className={`z-30 text-xl md:text-3xl px-8 -mt-4 ${campaignMedium.className}`}>reading between the lines</p>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={isAnimationDisabled ? animateBtn : initialBtn}
                animate={isAnimationDisabled ? undefined : animateBtn}
                transition={{duration: 1}}
            >
                <div className="flex flex-col items-center justify-center my-12">
                    <Link href="https://discord.gg/xzZ7e9XC7j" target="_blank" className="bg-violet py-3 px-10 text-black rounded-lg border-2 border-black drop-shadow-sm hover:bg-black hover:text-white hover:border-2 hover:border-violet transition active:translate-x-1 active:translate-y-1 active:drop-shadow-none focus:bg-black focus:text-white focus:border-2 focus:border-violet focus:translate-x-1 focus:translate-y-1 focus:drop-shadow-none">
                        <button className={`items-center justify-center text-2xl ${campaignMedium.className}`}>Join Now</button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}