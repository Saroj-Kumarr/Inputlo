import { Button } from "@/components/ui/button";
import LeftVisual from "./LeftVisual";

export default function MainVisual() {
  return (
    <main className=" bg-[#0b1220] text-white mt-10">
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:gap-12">
        <LeftVisual />

        <div className="space-y-4 md:pl-4">
          <h1 className="text-balance font-sans text-3xl font-medium leading-tight md:text-4xl">
            Your digital Swiss Army Knife.
          </h1>
          <p className="max-w-prose text-pretty text-slate-400 leading-relaxed">
            Paperform does everything short of open bottles. The animated emblem
            visualizes speed, automation, and security with orbiting vector
            icons and subtle pulses.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Button className="bg-cyan-500 text-slate-900 hover:bg-cyan-400">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
