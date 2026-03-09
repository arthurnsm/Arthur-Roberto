"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SocialMedia from "./socialMedia";
import Section from "./section";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={`${inter.className} flex w-full flex-col items-center justify-center min-h-screen px-4 py-20 gap-12`}
      style={{ opacity: mounted ? undefined : 0 }}
    >
      {mounted && (
        <>
          <div className="flex flex-col items-center gap-4 text-center">
            <motion.h1
              className="font-[intan] text-6xl md:text-8xl lg:text-9xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              ARTHUR ROBERTO
            </motion.h1>

            <motion.h2
              className="text-xl md:text-3xl lg:text-4xl font-[revolin] font-thin text-[#6F05F0]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              DESENVOLVEDOR FRONT END
            </motion.h2>
          </div>

          <motion.h3
            className="text-base md:text-lg lg:text-xl text-center max-w-200 leading-relaxed text-gray-700 dark:text-gray-300"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            Desenvolvo soluções{" "}
            <span className="text-[#6F05F0] font-medium">
              web responsivas{" "}
            </span>
            que unem a estética do{" "}
            <span className="text-[#6F05F0] font-medium">
              design moderno
            </span>
            {" "}com as{" "}
            <span className="text-[#6F05F0] font-medium">
              tecnologias mais atuais do mercado.
            </span>
            {" "}Crio experiências digitais fluidas e intuitivas, garantindo
            personalidade em qualquer dispositivo.
          </motion.h3>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.7}
          >
            <motion.a
                target="_blank"
              href=""
              className="flex items-center justify-center border border-[#6F05F0] text-[#6F05F0] rounded-xl px-10 py-4 w-full sm:w-auto"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#6F05F0",
                color: "#ffffff",
                boxShadow: "0 0 24px #6F05F088, 0 0 6px #6F05F0cc",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <span className="font-[revolin] font-thin text-lg md:text-2xl whitespace-nowrap">
                Baixar meu CV
              </span>
            </motion.a>

            <motion.a
              href="mailto:arthur.rdnascimento@gmail.com"
              target="_blank"
              className="flex items-center justify-center border border-[#6F05F0] bg-[#6F05F0] text-white rounded-xl px-10 py-4 w-full sm:w-auto"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 28px #6F05F0bb, 0 0 8px #6F05F0dd",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <span className="font-[revolin] font-thin text-lg md:text-2xl whitespace-nowrap">
                Entrar em contato
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.9}
          >
            <SocialMedia link="mailto:arthur.rdnascimento@gmail.com" icon={SiGmail} />
            <SocialMedia link="https://github.com/arthurnsm" icon={FaGithub} />
            <SocialMedia link="https://www.linkedin.com/in/arthrnsm/" icon={FaLinkedinIn} />
          </motion.div>
        </>
      )}
    </section>
  );
}