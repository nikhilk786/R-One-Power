"use client"

import React from "react"
import Image from "next/image"
import { motion, HTMLMotionProps } from "framer-motion"
import { IconSunHigh } from "@tabler/icons-react"

export default function ServiceBanner() {
  
  const fadeInUp: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.7, ease: "easeOut" }
  }

  return (
    <section className="relative w-full  h-[60vh] md:h-[80vh]  flex items-center justify-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/service-bg.jpg" 
          alt="Solar Solutions Background" 
          fill 
          priority
          className="object-cover"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#1E88E580] to-[#114B7F80]"></div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div {...fadeInUp} className="flex flex-col items-center space-y-6">
          
          {/* Top Badge */}
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#FDEA00]  text-[#FDEA00] backdrop-blur-sm shadow-lg shadow-amber-500/10">
            <IconSunHigh size={16} stroke={2.5} className="text-[#FBBF24]"/>
            <span className="text-[11px] font-black tracking-[0.2em] font-poppins">
              Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl  font-black text-white font-poppins leading-[1.1] tracking-tight">
            Comprehensive <span className="text-yellow-400">Solar</span> <br /> 
            Solutions
          </h1>

          {/* Subtext */}
          <p className="text-white/90 text-sm md:text-lg font-medium font-inter max-w-2xl leading-relaxed">
            End-to-end solar services from design and installation to maintenance and monitoring.
          </p>

        </motion.div>
      </div>

    </section>
  )
}