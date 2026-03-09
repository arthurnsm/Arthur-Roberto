interface sectionProps{
    title: string
}

export default function Section({title}: sectionProps){
    return(
    <h1 className="flex uppercase font-thin text-5xl w-full justify-center items-center font-[revolin]">
        {title}
    </h1>)
}