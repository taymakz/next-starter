import { ThemeToggle } from "@/components/ThemeToggle";

export default function Index() {
  return (
    <>
      <div className="relative flex min-h-screen w-full items-center justify-center bg-background bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="space-y-10">
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8  font-bold text-transparent text-clamp-lg ">
            Nextjs , AceternityUI, Framer Motion, Shadcn Starter
          </p>
        </div>
      </div>
      <div className="absolute left-2 top-2">
        <ThemeToggle />
      </div>
    </>
  );
}
