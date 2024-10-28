import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      {/* Adjusted blur shape for light theme */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2 opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-50/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] 
                bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] 
                bg-[length:200%_auto] bg-clip-text pb-8 
                font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Join the content-first platform
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="group relative inline-flex items-center justify-center 
                    rounded-full bg-gradient-to-b from-indigo-500 to-indigo-600 
                    px-6 py-3 text-base font-medium text-white shadow-sm 
                    transition-all duration-200 ease-in-out
                    hover:from-indigo-600 hover:to-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-indigo-400 
                    focus:ring-offset-2 sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Start Building
                    <span className="ml-1 tracking-normal text-white/90 
                      transition-transform duration-150 ease-in-out 
                      group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}