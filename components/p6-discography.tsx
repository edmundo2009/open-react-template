"use client";
import Image, { StaticImageData } from 'next/image';
import FeaturesImage from "@/public/images/bg03.jpg";
import { useState, useRef, useEffect } from "react";
import useMasonry from "@/utils/useMasonry";

const albums = [
  {
    id: 1,
    title: '女と川',
    image: FeaturesImage,
    releaseDate: '2018.11.28発売',
    price: '定価￥1,100（税込）',
    catalogNumber: 'RMF-R127',
    categories: [1, 2],
  },
  {
    id: 2,
    title: '湖の響き',
    image: '/placeholder.svg',
    releaseDate: '2019.11.03発売',
    price: '定価￥1,500（税込）',
    catalogNumber: 'NLCD-002',
    categories: [1, 2],
  },
  {
    id: 3,
    title: 'タイトル未定',
    image: '/placeholder.svg',
    releaseDate: '2022.11月？',
    price: '定価￥未定',
    catalogNumber: '',
    categories: [1, 2],
  },
  {
    id: 4,
    title: '沖縄の風',
    image: '/placeholder.svg',
    releaseDate: '2007.11.29',
    price: '現在絶版中',
    catalogNumber: '記録的な販売枚数',
    categories: [1, 3],
  },
];

export default function Discography() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);
  const albumRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const handleCategoryChange = (newCategory: number) => {
    setCategory(newCategory);
    
    // Only scroll on mobile devices
    if (window.innerWidth < 768) {
      setTimeout(() => {
        // Find the first album that matches the selected category
        const targetAlbum = albums.find(album => 
          album.categories.includes(newCategory)
        );
        
        if (targetAlbum) {
          const targetRef = albumRefs.current.get(targetAlbum.id);
          if (targetRef) {
            targetRef.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
          }
        }
      }, 100);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
        <h2
              className="animate-[gradient_6s_linear_infinite] 
                bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] 
                bg-[length:200%_auto] bg-clip-text pb-8 
                font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              ディスコグラフィー
            </h2>
        </div>

          {/* Buttons */}
          <div className="flex justify-center pb-8 md:pb-16">
            <div className="relative inline-flex w-full max-w-sm flex-wrap justify-center rounded-[1.25rem] bg-gray-100 p-1 shadow-sm">
              {/* Button #1 */}
              <button
                className={`flex h-8 flex-1 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium 
                  transition-all duration-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200
                  ${category === 1 ? 
                    "relative bg-white shadow-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-indigo-200 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] bg-[length:200%_auto] bg-clip-text text-transparent" 
                    : "text-gray-500 hover:text-gray-900"}`}
                aria-pressed={category === 1}
                onClick={() => handleCategoryChange(1)}
              >
                <span>すべて</span>
              </button>
              {/* Button #2 */}
              <button
                className={`flex h-8 flex-1 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium 
                  transition-all duration-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200
                  ${category === 2 ? 
                    "relative bg-white shadow-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-indigo-200 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] bg-[length:200%_auto] bg-clip-text text-transparent" 
                    : "text-gray-500 hover:text-gray-900"}`}
                aria-pressed={category === 2}
                onClick={() => handleCategoryChange(2)}
              >
                <span>シングル</span>
              </button>
              {/* Button #3 */}
              <button
                className={`flex h-8 flex-1 items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium 
                  transition-all duration-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200
                  ${category === 3 ? 
                    "relative bg-white shadow-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-indigo-200 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] bg-[length:200%_auto] bg-clip-text text-transparent" 
                    : "text-gray-500 hover:text-gray-900"}`}
                aria-pressed={category === 3}
                onClick={() => handleCategoryChange(3)}
              >
                <span>アルバム</span>
              </button>
            </div>
          </div>

          {/* Albums */}
          <div
            className="mx-auto grid grid-cols-1 items-start gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {albums.map((album) => (
              <div 
                key={album.id} 
                className="group"
                ref={el => {
                  if (el) {
                    albumRefs.current.set(album.id, el);
                  }
                }}
              >
                <Album album={album} category={category}>
                  {album.title}
                </Album>
              </div>
            ))}
          </div>
        </div>
      </div>
    // </div>
  );
}

function Album({
  album,
  category,
  children,
}: {
  album: {
    id: number;
    image: StaticImageData | string;
    title: string;
    releaseDate: string;
    price: string;
    catalogNumber: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative transition-opacity duration-300 
        ${!album.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden rounded-lg">
          <Image 
            src={album.image} 
            width={400} 
            height={400} 
            alt={album.title} 
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{children}</h3>
          <p className="text-gray-600">{album.releaseDate}</p>
          <p className="text-gray-700">{album.price}</p>
          <p className="text-gray-500">{album.catalogNumber}</p>
        </div>
      </div>
    </article>
  );
}