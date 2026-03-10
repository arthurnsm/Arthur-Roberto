import { StaticImageData } from 'next/image';
import Image from "next/image";
import SocialMedia from './socialMedia';
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";

interface repoProps {
  image: StaticImageData
  title: string
  desc: string
  reverse?: boolean
  git: string
  link: string
}

export default function Repo({ image, title, desc, reverse = false, link, git }: repoProps) {
  return (
    <div className={`flex w-full gap-10 ${reverse ? "flex-row-reverse" : "flex-row"}`}>

      <div className="relative flex w-160 h-100 rounded-xl p-[2px] bg-gradient-to-br from-[#6F05F0] via-[#6F05F044] to-transparent shrink-0">
        <div className="w-full h-full rounded-[10px] overflow-hidden bg-[#D2D2D2] dark:bg-[#101010]">
          <Image src={image} alt="" className="object-cover w-full h-full saturate-[0.6] hover:saturate-100 transition-all duration-500" />
        </div>
      </div>

      <div className={`flex mt-10 flex-col ${reverse ? "items-end" : "items-start"}`}>
        <div>
          <h2 className="font-[raintion] uppercase text-5xl">{title}</h2>
        </div>

        <div className="mt-10">
          <span className={`flex max-w-160 font-[inter] text-xl ${reverse ? "text-right" : "text-left"}`}>
            {desc}
          </span>
          <div className={`flex mt-10 gap-10 ${reverse ? "justify-end" : "justify-start"}`}>
            <SocialMedia link={git} icon={FaGithub} />
            <SocialMedia link={link} icon={GrView} />
          </div>
        </div>
      </div>

    </div>
  );
}