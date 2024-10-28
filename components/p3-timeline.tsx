"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import FeaturesImage from "@/public/images/bg03.jpg";
import AnimatedSectionHeader from "@/components/section-divider";
import SectionDivider from "@/components/section-divider0";
import { Circle } from 'lucide-react';


const timelineData = [
  {
    year: '1995年',
    description: '某ビジュアル系バンドのドラムを担当'
  },
  {
    year: '1996年',
    description: '化粧による肌荒れのためバンド活動を断念\n脱退'
  },
  {
    year: '2007年',
    description: '「歌手竹内」の名前でアルバム「沖縄の風」\nでインディーズデビュー\n販売枚数が記録的な不発に終わる\nその後はずっと泣かず飛ばず・・・'
  },
  {
    year: '2017年',
    description: '初代伊吹利男（としお）先生に入門'
  },
  {
    year: '2018年春',
    description: '初代が引退のため名前を襲名　二代目伊吹とし夫　となる'
  },
  {
    year: '2018年冬',
    description: 'デビューシングル「女と川」発売'
  },
  {
    year: '2019年',
    description: '「しがのうましんがーず」座長就任\nおいしがうれしがプロジェクト公式サポーター任命\n滋賀県よりマザーレイクロゴの使用許可を得る'
  },
  {
    year: '2020年',
    description: 'えふえむ草津「歌って応援滋賀！」\nラジオパーソナリティー就任\n「伊吹大根大使」就任'
  }
];
export default function Timeline() {
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);
  return (
  <section className="mx-auto max-w-7xl px-4 sm:px-6">
    <SectionDivider text="" />
    <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200/.25),transparent)1] md:py-20">
      
      {/* Section Title 経歴*/}
      <div className="mx-auto max-w-3xl text-center">
      <h2
        className="animate-[gradient_6s_linear_infinite] 
          bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] 
          bg-[length:200%_auto] bg-clip-text pb-8 
          font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
        data-aos="fade-up"
      >
        経歴
      </h2>
      </div>   

      <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-8">
        {/* Timeline Content */}
        <div className="flex-1">
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-6 items-start">
            {timelineData.map((item) => (
              <React.Fragment key={item.year}>
                {/* Wrapper div for the entire row */}
                <div 
                  className="contents cursor-pointer"
                  onMouseEnter={() => setHoveredYear(item.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  <dt className="font-bold whitespace-nowrap flex items-center gap-1 pt-1">
                    <Circle 
                      size={12} 
                      className={`transition-colors duration-200 ${
                        hoveredYear === item.year ? 'text-blue-600 fill-blue-100' : 'text-blue-500'
                      }`} 
                    />
                    <span className={`transition-colors duration-200 ${
                      hoveredYear === item.year ? 'text-blue-600' : ''
                    }`}>
                      {item.year}
                    </span>
                  </dt>
                  <dd 
                    className={`transition-colors duration-200 ${
                      hoveredYear === item.year ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.description.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < item.description.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </dd>
                </div>
              </React.Fragment>
            ))}
          </dl>
        </div>

        {/* Image Container */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src={FeaturesImage}
            alt="二代目伊吹とし夫"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
  );
}
