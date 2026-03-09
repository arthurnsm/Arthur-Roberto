import Section from "./section";
import { FaGlobeAmericas } from "react-icons/fa";

export default function About() {
    return(
    <section className="flex w-full flex-col md:px-30">
        <Section title="sobre mim"/>
        <div className="flex mt-24 flex-row">
            <div className=" flex w-120 h-120 bg-[#D2D2D2] rounded-xl  dark:bg-[#101010]">
        </div>
        <div className="flex mt-10 ml-10 flex-col">
            <div className="flex h-10 px-4 max-w-50  hover:border-[#6F05F0] transition-all duration-300 select-none dark:bg-[#1B1B1B] justify-center rounded-xl  items-center border-2  shadow-[#6F05F0] dark:border-[#282828]">
                <span className="font-[inter] flex justify-center items-center gap-2"><FaGlobeAmericas size={20} className="text-black dark:text-[#858585]"/>São Paulo, Brasil</span>
            </div>
        <div className="flex max-w-200 mt-10">
            <span className="font-[inter] text-2xl">
                Lorem Ipsum is simply dummy text of the printing and
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
        </div>

        </div>
        </div>
    </section>)
}