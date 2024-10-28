import Image from "next/image";
import FeaturesImage from "@/public/images/bg02.jpg";
import SectionDivider from "@/components/section-divider0";

export default function Profile() {
  return (
  <section className="mx-auto max-w-7xl px-4 sm:px-6">
  <SectionDivider text="" />
  <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200/.25),transparent)1] md:py-20">
    
    {/* Section Title プロフィール*/}
    <div className="mx-auto max-w-3xl text-center">
    <h2
      className="animate-[gradient_6s_linear_infinite] 
        bg-[linear-gradient(to_right,theme(colors.gray.700),theme(colors.indigo.600),theme(colors.gray.800),theme(colors.indigo.700),theme(colors.gray.700))] 
        bg-[length:200%_auto] bg-clip-text pb-8 
        font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
      data-aos="fade-up"
    >
      プロフィール
    </h2>
    </div>  


    <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-8">

      {/* Section img */}
      <div className="flex-1">
        <div className="bg-gray-200 rounded-lg">
          <Image
            src={FeaturesImage} alt="二代目伊吹とし夫"
          />
        </div>
      </div>
      
      {/* Section Content */}
      <div className="flex-1">
        
        <dl className="inline-grid grid-cols-[auto_1fr] gap-x-4 gap-y-2  ">
          <dt className="flex font-bold whitespace-nowrap">
            <svg
              className="mb-3 fill-blue-500" xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
            >
              <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
              <path fillOpacity=".48"
                d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
              />
            </svg>
            <span className="ml-4">出身地</span>
          </dt>        
          <dd>滋賀県彦根市</dd>

          <dt className="font-bold whitespace-nowrap text-right">生年月日</dt>
          <dd>1975年9月26日</dd>
          <dt className="font-bold whitespace-nowrap text-right">血液型</dt>
          <dd>A型</dd>

          <dt className="flex font-bold whitespace-nowrap">
          <svg
              className="mb-3 fill-black-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
            >
              <path
                fillOpacity=".48"
                d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
              />
              <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
            </svg>
            <span className="ml-8">趣味</span>
          </dt>             
          
          <dd>映画鑑賞 ドライブ</dd>


          <dt className="font-bold whitespace-nowrap text-right">好物</dt>
          <dd>創作和食 寿司</dd>
          <dt className="font-bold whitespace-nowrap text-right">特徴</dt>
          <dd>女性がいないところには出没しない</dd>
          <dt className="font-bold whitespace-nowrap text-right">モットー</dt>
          <dd>皆様に笑いと感動を与えられる演者になる</dd>


          <dt className="font-bold whitespace-nowrap text-right">その他</dt>

          <dd>伊吹大根大使就任</dd>


          <dt className="flex font-bold whitespace-nowrap">
          <svg
              className="mb-3 fill-black-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
            >
              <path
                fillOpacity=".48"
                d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
              />
              <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
            </svg>
            <span className="ml-8">所属</span>
          </dt>           
          <dd>リアルミュージックファクトリー®</dd>
        </dl>
      </div>

    </div>
  </div>
  </section>
  );
}

// export default function Profile() {
//   return (
//     <div className="relative mx-auto max-w-fit px-4 sm:px-6">
//     {/* <div className="w-full lg:w-auto lg:flex-grow"> */}
//       <h2 className="text-3xl font-bold text-center mb-8">プロフィール</h2>
      
//       {/* Wrapper for image and content */}
//       <div className="relative bg-gray-200 rounded-lg overflow-hidden">

//         {/* Set the image as background */}
//         <Image
//           src={FeaturesImage}
//           alt="二代目伊吹とし夫"
//           layout="fill" // Ensures the image spans the entire div
//           objectFit="cover" // Ensures the image covers the background
//           className="absolute inset-0 z-0" // Ensure it spans the whole section
//         />

//         {/* Profile content */}
//         <div className="relative z-10 flex flex-col items-start justify-center h-full p-6 text-black bg-opacity-80">
//           <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
//             <dt className="font-bold">出身地</dt>
//             <dd>滋賀県彦根市</dd>
//             <dt className="font-bold">生年月日</dt>
//             <dd>1975年9月26日</dd>
//             <dt className="font-bold">血液型</dt>
//             <dd>A型</dd>
//             <dt className="font-bold">趣味</dt>
//             <dd>映画鑑賞 ドライブ</dd>
//             <dt className="font-bold">好物</dt>
//             <dd>創作和食 寿司</dd>
//             <dt className="font-bold">特徴</dt>
//             <dd>女性がいないところには出没しない</dd>
//             <dt className="font-bold">モットー</dt>
//             <dd>皆様に笑いと感動を与えられる演者になる</dd>
//             <dt className="font-bold">その他</dt>
//             <dd>伊吹大根大使就任</dd>
//             <dt className="font-bold">所属</dt>
//             <dd>リアルミュージックファクトリー®</dd>
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function Profile() {
//   return (
//     <div className="mx-auto max-w-6xl px-4 sm:px-6">
//       <h2 className="text-3xl font-bold text-center mb-8">プロフィール</h2>
      
//       <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
//         {/* Background Image Container */}
//         <div className="absolute inset-0">
//           <Image
//             src={FeaturesImage}
//             alt="二代目伊吹とし夫"
//             className="object-cover w-full h-full"
//           />
//           {/* Dark overlay for better text readability */}
//           <div className="absolute inset-0" />
//         </div>

//         {/* Content overlay */}
//         <div className="relative z-10 p-8">
//           <dl className="inline-grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 bg-white/10 p-6 rounded-lg">
//             <dt className="font-bold whitespace-nowrap">出身地</dt>
//             <dd>滋賀県彦根市</dd>
//             <dt className="font-bold whitespace-nowrap">生年月日</dt>
//             <dd>1975年9月26日</dd>
//             <dt className="font-bold whitespace-nowrap">血液型</dt>
//             <dd>A型</dd>
//             <dt className="font-bold whitespace-nowrap">趣味</dt>
//             <dd>映画鑑賞 ドライブ</dd>
//             <dt className="font-bold whitespace-nowrap">好物</dt>
//             <dd>創作和食 寿司</dd>
//             <dt className="font-bold whitespace-nowrap">特徴</dt>
//             <dd>女性がいないところには出没しない</dd>
//             <dt className="font-bold whitespace-nowrap">モットー</dt>
//             <dd>皆様に笑いと感動を与えられる演者になる</dd>
//             <dt className="font-bold whitespace-nowrap">その他</dt>
//             <dd>伊吹大根大使就任</dd>
//             <dt className="font-bold whitespace-nowrap">所属</dt>
//             <dd>リアルミュージックファクトリー®</dd>
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// }