import { FaGithub } from "react-icons/fa";
import { IconType } from 'react-icons';
interface socialMediaProps{
    icon: IconType
    link: string
}

export default function SocialMedia ({icon: Icon, link}:socialMediaProps){
    return(
    
    <a target="_blank" href={link} className="flex rounded-full p-4 border-2  hover:border-black dark:hover:border-white hover:scale-105 transition-all duration-200 hover:cursor-pointer border-[#9C9C9C] dark:border-[#282828]">
        <Icon size={50}/>
    </a>)
}