import Image from "next/image";
import FeaturesImage from "@/public/images/kv_hero-image-01.jpg";

export default function Hero() {
  return (
  <section className="pb-12">
  <div className="mx-auto max-w-fit px-4 sm:px-6">
    <div className="">

      <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
        <Image
          className="w-full lg:w-auto lg:flex-grow"
          src={FeaturesImage}
          width={1400}
          height={384}
          alt="Features"
          priority
        />
      </div>

      {/* Items */}

      {/* <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none 
      sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
        <article>
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
        </article>

        <article>            
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
          
        </article>

        <article>
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
          
        </article>

      </div> */}
    </div>
  </div>
  </section>
  );
}
