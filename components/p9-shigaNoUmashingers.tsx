import React from 'react';
import Image from 'next/image';
import FeaturesImage from "@/public/images/bg02.jpg";

export default function ShigaNoUmashingers() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-blue-100 py-4">
          <span className="text-red-600">し</span>がの
          <span className="text-red-600">うま</span>
          <span className="text-red-600">しん</span>が
          <span className="text-red-600">ー</span>ず
        </h2>
        
        <p className="text-lg mb-8">
          滋賀在住のトップシンガーをジャンルフリーで集め、滋賀県の魅力を歌のステージを通して全国に発信する歌唱グループです。その活動が滋賀県に認められ、マザーレイクロゴの使用許可、おいしがうれしがが公式サポーターに任命されています。うましんがーずメンバーにはなんとあの下尾礼子ちゃんも在籍！
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Image
            src="/placeholder1.svg"
            alt="Shiga no Umashingers event 1"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src="/placeholder2.svg"
            alt="Shiga no Umashingers event 2"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src="/placeholder3.svg"
            alt="Shiga no Umashingers event 3"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>

        <div className="mb-8">
          <Image
            src="/placeholder-banner.svg"
            alt="Shiga no Umashingers banner"
            width={1200}
            height={300}
            layout="responsive"
            className="rounded-lg"
          />
        </div>

        <p className="text-center text-lg font-semibold">
          しがのうましんがーずへのお仕事のご依頼も承ります！
        </p>
      </div>
    </section>
  );
}