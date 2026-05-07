"use client"

import React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { 
  IconHome, 
  IconBuildingCommunity, 
  IconBatteryCharging, 
  IconTools, 
  IconSettingsAutomation 
} from "@tabler/icons-react"

const services = [
  {
    title: "Residential Solar",
    description: "Rooftop solar for homes",
    icon: <IconHome size={24} className="text-[#1E88E5]" />,
  },
  {
    title: "Commercial Solar",
    description: "Office & retail solar",
    icon: <IconBuildingCommunity size={24} className="text-[#1E88E5]" />,
  },
  {
    title: "Industrial Solar",
    description: "Factory & warehouse solar",
    icon: <IconBuildingCommunity size={24} className="text-[#1E88E5]" />,
  },
  {
    title: "Battery Storage",
    description: "Energy storage systems",
    icon: <IconBatteryCharging size={24} className="text-[#1E88E5]" />,
  },
  {
    title: "Solar AMC",
    description: "Maintenance contracts",
    icon: <IconTools size={24} className="text-[#1E88E5]" />,
  },
  {
    title: "Net Metering",
    description: "Grid connection setup",
    icon: <IconSettingsAutomation size={24} className="text-[#1E88E5]" />,
  },
]

export default function ServiceGrid() {
  const fadeInUp: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.5, ease: "easeOut" }
  }

  return (
    <section className="py-20 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              className="group p-8 rounded-[24px] border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col items-start text-left space-y-4"
            >
              {/* Icon Container with Light Green Background */}
              <div className="h-12 w-12 rounded-xl bg-[#ECFDF5] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-1">
                <h3 className="text-[19px] font-black text-slate-900 font-poppins tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-slate-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}