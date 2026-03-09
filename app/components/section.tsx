interface sectionProps{
    title: string
}

export default function Section({title}: sectionProps){
    return(
    <span className="flex uppercase font-thin text-5xl w-full justify-center items-center font-[revolin]">
        {title}
    </span>)
}