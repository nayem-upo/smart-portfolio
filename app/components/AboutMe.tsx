/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
    return (
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-8 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                    <Image
                        src="https://angular.envytheme.com/recall-ng/instagram/assets/img/about-img.png"
                        alt="Main Image"
                        width={520}
                        height={500}
                        layout="responsive"
                        className="z-10 relative"
                    />

                    <Image
                        src="https://angular.envytheme.com/recall-ng/instagram/assets/img/about-shape1.png"
                        alt="Top Shape"
                        width={200}
                        height={200}
                        layout="intrinsic"
                        className="absolute top-0 z-20 animate-bounce-slow md:block hidden"
                    />

                    <Image
                        src="https://angular.envytheme.com/recall-ng/instagram/assets/img/about-shape2.png"
                        alt="Bottom Shape"
                        width={220}
                        height={200}
                        layout="intrinsic"
                        className="absolute right-10 -bottom-10 z-0 animate-slide-slow md:block hidden"
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2">
                <p className="text-[#ff512f] text-sm sm:text-base lg:text-lg uppercase">
                    About Me
                </p>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl py-4 font-bold">
                    I'm an Instagram influencer designer running my own design
                </h1>
                <p className="text-[#6e6e6e] text-sm sm:text-base lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
                <br />
                <p className="text-[#6e6e6e] text-sm sm:text-base lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6">
                    <button
                        type="submit"
                        className="py-3 px-6 text-sm sm:text-base font-semibold text-white bg-[#FF5D18] transition-all duration-500 ease-in-out 
                    hover:bg-[#ee0979]"
                    >
                        Contact Me
                    </button>
                    <p className="text-black cursor-pointer hover:text-[#FF027C] duration-300 text-sm sm:text-base lg:text-lg underline">
                        hello@alikamaya.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
