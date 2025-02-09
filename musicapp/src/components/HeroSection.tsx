import Link from "next/link"
import { Spotlight } from "./ui/SpotLight"
import { Button } from "./ui/moving-border"

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of music</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                Dive into the world of music with our expertly crafted courses and lessons.
                your journey to becoming a music master starts here.
                Wheather you're a beginner or a seasoned pro, we have something for you.
            </p>
            <div className="mt-4">
            <Button 
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
      </Button>
            </div>    
        </div>    
    </div>
  )
}

export default HeroSection