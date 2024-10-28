import React from 'react';
import Image from 'next/image';
import FeaturesImage from "@/public/images/bg03.jpg";


export default function FanClub() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-blue-100 py-4">ファンクラブ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-gray-100 p-4 rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="伊吹大根"
              width={400}
              height={300}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">【入会特典】</h3>
            <ul className="list-inside space-y-2 mb-6 " >
              <li>★ 会員証を発行します</li>
              <li>★ ファンクラブ会員証を発行します</li>
              <li>★ コンサートのチケットご予約を最優先でご案内します</li>
              <li>★ 不定期開催の交流イベントへの優先参加をお約束します</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4">【会費】</h3>
            <p className="mb-2">入会金1,000円</p>
            <p className="mb-6">年会費3,000円</p>
            
            <h3 className="text-2xl font-semibold mb-4">【入会方法・お申込み】</h3>
            <p className="mb-2">現在二代目伊吹とし夫ファンクラブは活動休止中です。</p>
            <p>活動再開をお待ちください。</p>
          </div>
        </div>
      </div>
    </section>
  );
}