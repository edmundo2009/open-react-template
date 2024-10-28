import Image from 'next/image';
import SectionDivider from '@/components/section-divider0';
import FeaturesImage from "@/public/images/sign.png";

export default function Contest() {
  return (
  <section className="mx-auto max-w-7xl px-4 sm:px-6">
  <SectionDivider text="" />
    <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200/.25),transparent)1] md:py-20">

      {/* Section Title 全国歌のチャンピオン選手権大会*/}
      <div className="mx-auto max-w-3xl text-center">
        <h2
        className="animate-[gradient_6s_linear_infinite] 
        bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] 
        bg-[length:200%_auto] bg-clip-text pb-8 
        font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
        data-aos="fade-up"
        >
            全国歌のチャンピオン選手権大会
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
            <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">第3回全国歌のチャンピオン選手権大会情報</h3>
            <ul className="space-y-4">
            <li>
                <span className="font-bold">開催日時：</span>次の日が海の日で祝日なので遠方の方も参加しやすい！
                <p className="text-xl font-bold mt-2">2025年7月19日（土）、20日（日）</p>
            </li>
            <li>
                <span className="font-bold">開催場所：</span>新大阪駅から地下鉄で4駅「淀屋橋」駅12番出口に直結
                <p className="text-xl font-bold mt-2">「朝日生命ホール」</p>
            </li>
            </ul>
            <p className="text-center mt-6 font-bold text-lg">詳細は追ってアップします！</p>
          </div>  

          {/* this adds whole landing page bg light blue overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 opacity-50">
          </div> */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">応募方法</h3>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-center mb-4">第2回の出場者の募集は終了いたしました。</p>
              <p className="text-center mb-8">第3回募集開始までお待ちください。</p>
              <div className="flex flex-col items-center">
              <p className="mb-2">公式ラインはこちら</p>
              <Image
                  src={FeaturesImage}
                  width={200}
                  height={200}
                  alt="Official LINE QR Code"
                  className="mb-2"
              />
              <p>↑公式ラインはこちらから↑</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

