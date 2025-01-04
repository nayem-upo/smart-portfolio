import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCirclePlay } from 'react-icons/fa6';

const MiddleHeroSection = () => {
    return (
        <div className="flex flex-wrap items-center justify-center mx-auto max-w-7xl md:py-8 px-4">
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="max-w-[400px] flex flex-col gap-4 text-center md:text-left">
                    <p className="uppercase text-[#FF4150] text-lg">Showreel</p>
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Want to stick out in a saturated market?
                    </h1>
                    <p className="text-[#525252] text-base md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna.
                    </p>
                    <Link
                        href="https://www.youtube.com/watch?v=bk7McNUjWgw"
                        className="popup-youtube video-btn flex items-center gap-2 justify-center md:justify-start text-blue-500 hover:text-blue-600 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaCirclePlay className="text-5xl text-[#FF4150]" />
                        <span className="text-black font-semibold text-lg">Watch Video</span>
                    </Link>
                </div>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <Image
                    src="https://angular.envytheme.com/recall-ng/instagram/assets/img/video-img.jpg"
                    alt="Showreel Thumbnail"
                    width={700}
                    height={400}
                    layout="intrinsic"
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
};

export default MiddleHeroSection;
