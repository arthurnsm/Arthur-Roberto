"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "./section";
import Repo from "./repo";
import Caffino from '../../public/images/caffino.jpg'
import Primal from '../../public/images/primal.png'
import { useLanguage } from "../context/languageContext";
import Black from '../../public/images/black.png'
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

export default function Project() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  const repos = [
    {
      image: Caffino,
      title: "Caffino",
      desc: t(
        "O Caffino é um projeto de interface para uma cafeteria digital, desenvolvido como um estudo de caso aprofundado para consolidar fundamentos de Front-end, UI Design e Arquitetura de Componentes no ecossistema React.",
        "Caffino is a digital coffee shop interface project, developed as an in-depth case study to consolidate Front-end fundamentals, UI Design, and Component Architecture in the React ecosystem."
      ),
      git: "https://github.com/arthurnsm/caffino",
      link: "https://caffino-six.vercel.app/"
    },
    {
      image: Primal,
      title: "Primal Training",
      desc: t(
        "O Primal Training é uma plataforma de interface voltada para o setor fitness, desenvolvida como um desafio técnico de Pixel Perfect e Responsividade Avançada, simulando a presença digital de uma academia de alta performance",
        "Primal Training is a fitness-focused interface platform, developed as a technical challenge in Pixel Perfect and Advanced Responsiveness, simulating the digital presence of a high-performance gym."
      ),
      git: "https://github.com/arthurnsm/PrimalTraining",
      link: "https://primal-training-six.vercel.app/"
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="projects"
      className="mt-60 w-full px-4 md:px-30"
      style={{ opacity: mounted ? undefined : 0 }}
    >
      {mounted && (
        <>
          <Section title={t("projetos", "projects")} />

          <div className="flex mt-40 flex-col gap-50">
            {repos.map((repo, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.1}
              >
                <Repo
                  image={repo.image}
                  title={repo.title}
                  desc={repo.desc}
                  git={repo.git}
                  link={repo.link}
                  reverse={index % 2 !== 0}
                />
              </motion.div>
            ))}

            <div className="relative pointer-events-none select-none">
              <motion.div
                className="blur-sm opacity-40"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={0.1}
              >
                <Repo
                  image={Black}
                  title={t("Em breve", "Coming soon")}
                  desc={t(
                    "Novo projeto em desenvolvimento. Fique ligado para novidades em breve.",
                    "New project in development. Stay tuned for updates soon."
                  )}
                  git=""
                  link=""
                  reverse={repos.length % 2 !== 0}
                />
              </motion.div>

              <div className="absolute inset-0 bg-linear-to-b rounded-2xl from-transparent via-white/60 to-white dark:via-black/60 dark:to-black" />

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={0.3}
              >
                <span className="font-[revolin] font-thin text-2xl tracking-widest text-gray-400 dark:text-gray-600">
                  {t("MAIS PROJETOS EM BREVE", "MORE PROJECTS COMING SOON")}
                </span>
              </motion.div>
            </div>

          </div>
        </>
      )}
    </section>
  );
}