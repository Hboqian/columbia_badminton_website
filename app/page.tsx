"use client";

import { Navbar } from "@/components/ui/NavBar";
import { motion } from "framer-motion"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

  export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <Navbar className="top-2"/> 
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <div className="mb-20">
          Ready to Smash?
        </div>
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-blue-500 via-blue-250 to-blue-100 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Register Now.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-500 via-blue-250 to-blue-100 py-4">
            <span className="">Register Now.</span>
          </div>
        </div>
      </h2>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Register Now
        </span>
      </button>
    </BackgroundBeamsWithCollision>
  );
} 
