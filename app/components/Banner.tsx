import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
      <div className="bg-[#13131305] rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131313] leading-tight font-serif">
            Books to freshen up <br className="hidden sm:inline" />
            your bookshelf
          </h1>
          
          <div>
            <Link
              href="http://localhost:3000/listed-book"
              className="inline-block bg-[#23BE0A] hover:bg-[#1fa308] text-white text-base font-bold px-6 py-3.5 rounded-xl transition-colors duration-200"
            >
              View The List
            </Link>
          </div>
        </div>

        {/* Book Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-[210px] sm:w-[260px] h-[280px] sm:h-[350px]">
            <Image
              src="/pngwing 1.png"
              alt="Featured Book Cover"
              fill
              priority
              className="object-contain drop-shadow-md"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;