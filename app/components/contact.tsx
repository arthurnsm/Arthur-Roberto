"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "./section";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SocialMedia from "./socialMedia";
import { useLanguage } from "../context/languageContext";

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

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="contact"
      className="mt-60 w-full px-4 md:px-30 flex flex-col"
      style={{ opacity: mounted ? undefined : 0 }}
    >
      {mounted && (
        <>
          <div className="flex flex-col items-center mt-24 gap-16">

            <motion.h2
              className="font-[intan] text-4xl md:text-6xl lg:text-7xl text-center leading-tight"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.1}
            >
              {t("VAMOS TRABALHAR", "LET'S WORK")}
              <br />
              <span className="text-[#6F05F0]">
                {t("JUNTOS?", "TOGETHER?")}
              </span>
            </motion.h2>

            <motion.p
              className="font-[inter] text-base md:text-lg text-center max-w-xl leading-relaxed text-gray-500 dark:text-gray-400"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.2}
            >
              {t(
                "Estou disponível para novos projetos e oportunidades. Se você tem uma ideia ou quer conversar, é só me chamar.",
                "I'm available for new projects and opportunities. If you have an idea or just want to talk, feel free to reach out."
              )}
            </motion.p>

            <motion.a
              href="mailto:arthurroberto@email.com"
              className="flex items-center justify-center border border-[#6F05F0] bg-[#6F05F0] text-white rounded-xl px-12 py-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.3}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 28px #6F05F0bb, 0 0 8px #6F05F0dd",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <span className="font-[revolin] font-thin text-xl md:text-2xl whitespace-nowrap">
                {t("Entrar em contato", "Get in touch")}
              </span>
            </motion.a>

            <motion.div
              className="flex items-center gap-6 w-full max-w-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.4}
            >
              <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-800" />
              <span className="font-[inter] text-sm text-gray-400 dark:text-gray-600 whitespace-nowrap">
                {t("ou me encontre em", "or find me on")}
              </span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-800" />
            </motion.div>

            <motion.div
              className="flex gap-10 pb-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.5}
            >
              <SocialMedia link="mailto:arthurroberto@email.com" icon={SiGmail} />
              <SocialMedia link="https://github.com/arthurnsm" icon={FaGithub} />
              <SocialMedia link="https://linkedin.com/in/arthurnsm" icon={FaLinkedinIn} />
            </motion.div>

          </div>
        </>
      )}
    </section>
  );
}