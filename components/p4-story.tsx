import Image from "next/image";
import FeaturesImage from "@/public/images/bg05.jpg";
import SectionDivider from "@/components/section-divider0";

export default function Story() {
  return (
  <section className="mx-auto max-w-7xl px-4 sm:px-6">
  <SectionDivider text="" />
    <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200/.25),transparent)1] md:py-20">
      
      {/* Section Title 二代目伊吹とし夫 誕生秘話*/}
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="animate-[gradient_6s_linear_infinite] 
            bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] 
            bg-[length:200%_auto] bg-clip-text pb-8 
            font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
          data-aos="fade-up"
        >
          二代目伊吹とし夫 誕生秘話
        </h2>
      </div>    

      <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-8">

        {/* Section img */}
        {/* <div className=""> */}
          <div className="rounded-lg">
          {/* <div className="bg-gray-200 rounded-lg"> */}
            <Image
              src={FeaturesImage} alt="二代目伊吹とし夫"
            />
          </div>
        {/* </div> */}
        
        {/* Section Content */}
        <div className="flex-1">
        {/* <div className="flex-1"> */}
          <p className="text-lg">
          なんで二代目なの？ってよく聞かれます。答えは先代がいるからです。<br/>
          初代伊吹利男先生に師事してとても多くのことを学ばせていただきました。
          先代は常々「感謝ができないやつに歌う資格はない」とおっしゃっていました。
          そんな先代の教えを忠実に守り、細々ながらイベントなどで歌のステージを披露していたある日、
          某音楽プロデューサーの目にとまり「君、面白いステージするね。
          よかったらうちからＣＤ出してみない？」とお誘いを受けたことがきっかけで
          2018年11月自身作詞作曲の「女と川」で全国デビューすることができました。
          僕はプロ歌手の中では決して歌が上手い方ではないです。
          でもそう思っているからこそ皆様にお伝えできることがあると考えています。
          「おごらず謙虚に魅せる」これぞ二代目のステージの醍醐味であり、
          これからも守り通していきたい大切な先代の教えです。
          </p>
        </div>

      </div>
    </div>
  </section>
  );
}
