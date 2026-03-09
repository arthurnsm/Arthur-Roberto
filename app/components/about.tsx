"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "./section";
import { FaGlobeAmericas } from "react-icons/fa";
import StackIcon from "./stack-icon";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  }),
};

const stacks = [
  { link: "https://cdn.simpleicons.org/react", name: "React", className: "brightness-50 dark:brightness-75" },
  { link: "https://cdn.simpleicons.org/angular/E23137", name: "Angular" },
  { link: "https://cdn.simpleicons.org/tailwindcss", name: "Tailwind CSS" },
  { link: "https://cdn.simpleicons.org/typescript", name: "TypeScript" },
  { link: "https://cdn.simpleicons.org/figma/E40008", name: "Figma" },
  { link: "https://cdn.simpleicons.org/git", name: "Git" },
  { link: "https://cdn.simpleicons.org/github/fff", name: "GitHub", className: "invert dark:invert-0" },
];
export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="flex w-full flex-col px-4 md:px-30"
      style={{ opacity: mounted ? undefined : 0 }}
    >
      {mounted && (
        <>
          <Section title="sobre mim" />

          <div className="flex mt-12 md:mt-24 flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">

            <motion.div
              className="w-full max-w-xs md:max-w-150 h-64 md:w-150 md:h-120 md:min-w-40 bg-[#D2D2D2] rounded-xl dark:bg-[#101010]"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
            />

            <div className="flex w-full md:mt-10 md:ml-10 flex-col items-center md:items-start">

              <motion.div
                className="flex h-10 px-4 max-w-50 hover:border-[#6F05F0] transition-all duration-300 select-none dark:bg-[#1B1B1B] justify-center rounded-xl items-center border-2 shadow-[#6F05F0] dark:border-[#282828]"
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.1}
              >
                <span className="font-[inter] flex justify-center items-center gap-2">
                  <FaGlobeAmericas size={20} className="text-black dark:text-[#858585]" />
                  São Paulo, Brasil
                </span>
              </motion.div>

              <motion.div
                className="flex w-full max-w-200 mt-6 md:mt-10"
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.2}
              >
                <span className="font-[inter] text-base md:text-xl lg:text-2xl text-center md:text-left leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting
                </span>
              </motion.div>

            </div>
          </div>

          <div className="flex mt-16 md:mt-30 w-full justify-center items-center flex-col">

            <motion.span
              className="font-[revolin] font-thin text-2xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={0}
            >
              MINHA STACK
            </motion.span>

            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-8 md:gap-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
            >
       {stacks.map(({ link, className, name }) => (
  <motion.div
    key={link}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      },
    }}
  >
    <StackIcon link={link} className={className} name={name} />
  </motion.div>
))}
            </motion.div>

          </div>
        </>
      )}
    </section>
  );
}