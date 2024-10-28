import React from 'react';
import Image from 'next/image';
import FeaturesImage from "@/public/images/bg03.jpg";

export default function SupportShiga() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-blue-100 py-4">歌って応援滋賀！</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <Image
              src="/placeholder.svg"
              alt="二代目伊吹とし夫の歌って応援ソングロゴ"
              width={400}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          
          <div>
            <p className="mb-4">
              えふえむ草津（<a href="https://fm785.jp/" className="text-blue-600 hover:underline">https://fm785.jp/</a>）人気番組「歌って応援滋賀！」では毎週楽しいゲストをお呼びして軽快なトークとともに滋賀県の魅力を全国の皆様に発信しております。
            </p>
            <p className="mb-4">
              名物コーナー「ご当地食レポ対決！」では毎回ゲストの方のご当地グルメと滋賀県のグルメの食レポを聞いていただいてどちらが食べたくなったかをリアルタイムでアンケートをとるというリスナー参加型の番組となっております。
            </p>
            <p className="mb-4">
              また「しがのうましんがーず」メンバーの歌唱も番組に花を添えてくれています。
            </p>
            <p className="mb-4">
              放送は毎週火曜日夜9時から2021年9月で放送終了しました
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Image
            src="/placeholder.svg"
            alt="えふえむ草津 FM78.5MHz バナー"
            width={800}
            height={200}
            layout="responsive"
            className="rounded-lg"
          />
        </div>

        <p className="text-center mt-8 text-lg font-semibold">
          全世界でお聞きになることが可能です！
        </p>
      </div>
    </section>
  );
}