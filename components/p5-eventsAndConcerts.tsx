// 'use client';
import React from 'react';
import Image from 'next/image';

// Import all event images
import poster1 from "@/public/images/IMG_20.png";
import poster2 from "@/public/images/0613.jpg";
import poster3 from "@/public/images/IMG_21.jpg";
import poster4 from "@/public/images/taishi.png";
import poster5 from "@/public/images/3years.jpg";
import poster6 from "@/public/images/hatsu.jpg";

const events = [
  {
    id: 1,
    date: '2021.4.10 (土)',
    description: '春風亭みすずさん歌謡ショー出演',
    image: poster1
  },
  {
    id: 2,
    date: '2021.6.13 (日)',
    description: 'しがのうましんがーずLIVE出演',
    image: poster2
  },
  {
    id: 3,
    date: '2021.8.22 (日)',
    description: 'みすき舞新曲発表会出演',
    image: poster3
  },
  {
    id: 4,
    date: '2022.2.27 (日)',
    description: '太子ホールライブ出演',
    image: poster4
  },
  {
    id: 5,
    date: '2022.5.1 (日)',
    description: '二代目伊吹とし夫デビュー3周年コンサート開催',
    image: poster5
  },
  {
    id: 6,
    date: '2022.2.10 (木)',
    description: '初春エクシブコンサート　コロナのため中止',
    image: poster6
  }
];

export default function EventsAndConcerts() {
  return (
    <section className="bg-sky-50 py-16 px-8">
      {/* Section Title イベント・コンサート*/}
      <div className="mx-auto max-w-3xl text-center">
      <h2
        className="animate-[gradient_6s_linear_infinite] 
          bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] 
          bg-[length:200%_auto] bg-clip-text pb-8 
          font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
        data-aos="fade-up"
      >
        イベント・コンサート
      </h2>
      </div>    

      {/* Event Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div 
            key={event.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={event.image}
                alt={`Event ${event.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <p className="font-bold mb-2 text-gray-900">
                {event.date}
              </p>
              <p className="text-sm text-gray-700">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="text-center text-sm text-gray-600 mt-8">
        ※その他スケジュールは新型コロナウイルスの拡大のため調整中です
      </p>
    </section>
  );
}