"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  IconBolt,
  IconTrendingDown,
  IconCurrencyRupee,
  IconCalculator,
} from "@tabler/icons-react";

export default function SolarCalculator() {
  const fadeInUp: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section className="py-24 bg-linear-to-b from-[#F9FCFA] to-[#F4F9F6] font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div {...fadeInUp} className="flex justify-center">
            <span className="flex items-center gap-2 bg-[#DCEEFE] text-[#1E88E5] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
              <IconCalculator size={14} /> Quick Quote Calculator
            </span>
          </motion.div>
          <motion.h2
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 font-poppins"
          >
            Instant <span className="text-[#1E88E5]">Solar Pricing</span>{" "}
            Estimate
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-medium"
          >
            Get a detailed cost estimate and savings projection in seconds
          </motion.p>
        </div>

        {/* Calculator Card */}
        <motion.div
          {...fadeInUp}
          className="max-w-5xl mx-auto bg-[#F0FDF44D] rounded-xl overflow-hidden shadow-xl shadow-blue-900/5 flex flex-col lg:flex-row border border-slate-100"
        >
          {/* Left Side: Form */}
          <div className="flex-1 p-8 md:p-12 space-y-8">
            <h3 className="text-2xl font-black text-slate-900 font-poppins">
              Your Details
            </h3>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Current Sanction Load
                </label>
                <Select defaultValue="3kw">
                  <SelectTrigger className="py-6 w-full bg-white border-slate-200 rounded-xl">
                    <SelectValue placeholder="Select Load" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3kw">3 KW</SelectItem>
                    <SelectItem value="5kw">5 KW</SelectItem>
                    <SelectItem value="6kw">6 KW</SelectItem>
                    <SelectItem value="8kw">8 KW</SelectItem>
                    <SelectItem value="10kw">10 KW</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Phase
                </label>
                <Select defaultValue="three">
                  <SelectTrigger className="py-6 w-full  bg-white border-slate-200 rounded-xl">
                    <SelectValue placeholder="Select Phase" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single Phase</SelectItem>
                    <SelectItem value="three">Three Phase</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Avg Units Consumed (last 12 months per month)
                </label>
                <Input
                  type="number"
                  defaultValue="650"
                  className="h-14 border-slate-200 rounded-xl focus-visible:ring-[#1E88E5]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Avg Bill Amount (last 12 months per month) ₹
                </label>
                <Input
                  type="number"
                  defaultValue="4200"
                  className="h-14 border-slate-200 rounded-xl focus-visible:ring-[#1E88E5]"
                />
              </div>

              <Button className="w-full h-14 bg-[#90CAF9] hover:bg-[#64B5F6] text-white font-black text-lg rounded-xl shadow-lg transition-all mt-4">
                Calculate Savings
              </Button>
            </div>
          </div>

          {/* Right Side: Estimate Display */}
          <div className="lg:w-[50%] bg-linear-to-r from-[#1E88E5] to-[#6EC6FF] p-8 md:p-12 text-white flex flex-col justify-between">
            <h3 className="text-2xl font-black font-poppins mb-10">
              Your Estimate
            </h3>

            <div className="space-y-6">
              {/* Reco Card */}
              <div className="flex">
                {/* Icon Box */}
                <div className="w-[60px]  rounded-md bg-white/10 flex items-center justify-center shrink-0 mr-3">
                  <IconBolt size={34} className="text-white" />
                </div>

                {/* Content Box */}
                <div className="flex-1 rounded-md bg-white/10 px-6 py-5">
                  <p className="text-sm font-semibold text-white/80">
                    We Recommend
                  </p>

                  <h4 className="text-3xl font-black text-white leading-tight mt-1">
                    6 KW Three Phase
                  </h4>

                  <p className="text-sm mt-3 text-white">
                    To reduce your monthly bill to{" "}
                    <span className="text-yellow-300 font-bold">Net Zero</span>
                  </p>
                </div>
              </div>

              {/* Savings Card */}
              <div className="flex ">
                <div className="w-[60px]  rounded-md bg-white/10 flex items-center justify-center shrink-0 mr-3">
                  <IconTrendingDown size={28} className="text-white" />
                </div>
                <div className="flex-1 rounded-md bg-white/10 px-6 py-5">
                  <p className="text-xs font-bold opacity-80">
                    Monthly Savings
                  </p>
                  <h4 className="text-3xl font-black">₹5,320</h4>
                  <p className="text-xs font-bold mt-1 opacity-90">
                    ₹50,400 per year
                  </p>
                </div>
              </div>

              {/* Price Card */}
              <div className="flex ">
                <div className="w-[60px]  rounded-md bg-white/10 flex items-center justify-center shrink-0 mr-3">
                  <IconCurrencyRupee size={28} className="text-white" />
                </div>
                <div className="flex-1 rounded-md bg-white/10 px-6 py-5">
                  <p className="text-xs font-bold opacity-80">Starting Price</p>
                  <h4 className="text-3xl font-black">₹289,990</h4>
                  <p className="text-xs font-bold mt-1 opacity-90">
                    With ₹78,000 Govt. Subsidy (DCR)
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="secondary"
              className="w-full h-14 bg-white text-[#1E88E5] hover:bg-slate-50 text-lg rounded-xl mt-10"
            >
              Get Detailed Proposal
            </Button>
          </div>
        </motion.div>

        {/* Bottom Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-[13px] font-bold text-[#717A75]">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#1E88E5]" /> No Hidden
            Costs
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#1E88E5]" /> Transparent
            Pricing
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#1E88E5]" /> Free Site
            Visit
          </div>
        </div>
      </div>
    </section>
  );
}
