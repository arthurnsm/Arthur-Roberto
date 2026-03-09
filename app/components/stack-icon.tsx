import Image from "next/image"

interface stackProps {
  link: string
  className?: string
  name: string
}

export default function StackIcon({ link, className = "", name }: stackProps) {
  return (
    <div className="group relative flex flex-col items-center">
      <Image
        className={`flex w-12 md:w-24 transition-all duration-300 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-4 ${className}`}
        width={1}
        height={1}
        unoptimized
        src={link}
        alt={name}
      />
      <span className="absolute -bottom-5 md:-bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] md:text-xs font-[inter] text-gray-500 dark:text-gray-400 whitespace-nowrap tracking-wide">
        {name}
      </span>
    </div>
  )
}