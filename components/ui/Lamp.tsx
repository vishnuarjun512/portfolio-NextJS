"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utls";

interface LampProps {
  title?: string;
  size?: boolean;
}

export const Lamp: React.FC<LampProps> = ({ title, size }) => {
  return (
    <LampContainer size={size}>
      <motion.h1
        initial={{ opacity: 0.5, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-b from-slate-100 to-slate-500 font-bold bg-clip-text text-center text-3xl text-transparent md:text-4xl mt-[70px] sm:mt-[60px] md:mt-[50px] lg:mt-[40px]"
      >
        {title}
      </motion.h1>
    </LampContainer>
  );
};

export const LampContainer = ({
  children,
  className,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  size?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[160px] pt-20 flex-col items-center justify-start overflow-hidden bg-slate-950 w-full rounded-md z-3",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-[0.3] items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: size ? "15rem" : "10rem" }}
          whileInView={{ opacity: 1, width: size ? "30rem" : "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: size ? "15rem" : "10rem" }}
          whileInView={{ opacity: 1, width: size ? "30rem" : "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-30 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-30 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-[10px] w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-20 w-32 -translate-y-[10rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-2 rounded-full w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-[70px] md:-translate-y-[30px] flex-col items-center">
        {children}
      </div>
    </div>
  );
};
