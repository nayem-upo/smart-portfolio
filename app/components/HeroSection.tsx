import React from 'react';
import SubscribeForm from './SubscribeForm';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div id="home" className="lg:mx-auto md:mx-8 md:py-5 mt-10 flex flex-col md:flex-row items-center justify-center max-w-7xl">
            {/* Text Content */}
            <div className="grid gap-6 md:w-1/2 px-6 md:px-0 text-center md:text-left">
                <h1 className="text-4xl md:text-7xl font-bold">
                    Hi, I AM <br /> Alika Maya
                </h1>
                <p className="text-lg text-[#888888] md:w-2/3 mx-auto md:mx-0">
                    A Photographer & Business Strategist who empowers entrepreneurs to build a brand, market it on social media, and create a life they love.
                </p>
                <SubscribeForm />
            </div>

            {/* Image Content */}
            <div className="flex items-end justify-center w-full md:w-1/2 mt-8 md:mt-0">
                {/* Left Bar Image */}
                <Image
                    src="https://angular.envytheme.com/recall-ng/instagram/assets/img/line-bg1.png"
                    alt="Left Bar"
                    width={130}
                    height={500}
                    layout="intrinsic"
                    className="hidden lg:block"
                />

                {/* Main Image */}
                <Image
                    src="https://angular.envytheme.com/recall-ng/instagram/assets/img/banner-img1.png"
                    alt="Banner Image"
                    width={420}
                    height={300}
                    quality={75}
                    layout="intrinsic"
                    className="max-w-full h-auto px-5 md:px-0"
                />

                {/* Right Bar Image */}
                <Image
                    src="https://angular.envytheme.com/recall-ng/instagram/assets/img/line-bg2.png"
                    alt="Right Bar"
                    width={130}
                    height={500}
                    layout="intrinsic"
                    className="hidden  lg:block -ms-10"
                />
            </div>
        </div>
    );
};

export default HeroSection;
