

import { ThemeToggle } from "@/components/ThemeToggle"



export default function Index() {

  return (
    <>
      <div className="min-h-screen w-full bg-background  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="space-y-10">

          <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Nextjs , AceternityUI, Redux Starter
          </p>

        </div>
      </div>
      <div className="absolute top-2 left-2">
        <ThemeToggle />
      </div>
    </>
  )
}
