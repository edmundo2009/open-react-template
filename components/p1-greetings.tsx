import Image from "next/image";
import Spotlight from "@/components/spotlight";
import SectionDivider from "@/components/section-divider0";
import FeaturesImage from "@/public/images/sign.png";


export default function Greetings() {
  return (
  <section className="mx-auto max-w-7xl px-4 sm:px-6">
  <SectionDivider text="" />
    <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.200),transparent)1] md:py-20">
      
      {/* Section Title ご挨拶*/}
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="animate-[gradient_6s_linear_infinite] 
            bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] 
            bg-[length:200%_auto] bg-clip-text pb-8 
            font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
          data-aos="fade-up"
        >
          ご挨拶
        </h2>
      </div>    

      <div className="relative max-w-3xl mx-auto">
        {/* Animated gradient border */}
        <div 
          className="absolute -inset-[1px] rounded-lg bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] 
            bg-[length:200%_auto] animate-[gradient_6s_linear_infinite] opacity-30"
        ></div>

        {/* Content container */}
        <div className="relative bg-white p-8 rounded-lg">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-indigo-50 to-gray-50 opacity-40 rounded-lg"
          ></div>

          <div className="relative z-10 text-lg">
            <p className="text-center mb-6">
              皆様、いつもあたたかいご支援をいただきまして誠にありがとうございます。
            </p>
            <p className="text-center mb-4">
              世界が激動した2020年
            </p>
            <p className="text-center mb-4">
              どんな状況であっても常に新しいエンターテイメントを皆様に提供できるよう
            </p>
            <p className="text-center mb-4">
              「笑いと涙の演歌ぁてぃなぁ～」として日々精進してまいります。
            </p>
            <p className="text-center mb-8">
              これからもご指導、ご鞭撻のほど、何卒よろしくお願いいたします。
            </p>
            <div className="flex justify-end">
              {/* Placeholder for signature image */}
              <div className="w-32 h-16 bg-gray-200 relative">
                <Image
                  src={FeaturesImage} 
                  alt="Signature"
                  className="rounded-lg object-cover w-full h-auto"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}