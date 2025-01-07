/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa6';

const Statistics = () => {
    const datas = [
        {
            platform: 'Facebook',
            followers: '8M',
            handle: '@alikamaya',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            icon: <FaFacebookF className="" />
        },
        {
            platform: 'Pinterest',
            followers: '1.2M',
            handle: '@alikamaya',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            icon: <FaPinterestP className="" />,
        },
        {
            platform: 'Linkedin',
            followers: '58K',
            handle: '@alikamaya',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            icon: <FaLinkedinIn className="" />
        },
    ];

    return (
        <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center pb-10 px-4">
                <h1 className="text-2xl md:text-4xl py-4 font-bold">Social Statistics</h1>
                <p className="text-[#6e6e6e] text-sm md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    <br className="hidden md:block" />
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-8">
                {datas.map((data, index) => (
                    <div
                        key={index}
                        className="relative p-6 w-full md:w-[380px] md:h-[450px] rounded-tr-[50px] hover:rounded-none transition-all duration-500 shadow-2xl text-center bg-white group overflow-hidden hover:border hover:border-[#FF027C]"
                    >
                        <div className="relative z-10 transition-colors duration-500">
                            <h2 className="text-3xl md:text-4xl font-bold pt-10">{data.followers}</h2>
                            <p className="text-lg md:text-xl font-medium italic py-2">
                                {data.platform} followers
                            </p>
                            <p className="mt-2 text-base md:text-lg flex items-center justify-center gap-2">
                                {data.icon}
                                {data.handle}
                            </p>
                            <div className="bg-[#ececec] p-[0.1px] mx-auto my-4"></div>
                            <p className="mt-4 text-sm md:text-lg px-2 md:px-4 py-6">
                                {data.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Audience Section */}
            <div id='instagram-audience' className="flex flex-col lg:flex-row px-4 md:px-6 my-10 gap-6 lg:gap-16">
                {/* Left Images */}
                <div className="flex md:flex-row flex-col gap-8 md:gap-6">
                    <Image
                        src="https://angular.envytheme.com/recall-ng/instagram/assets/img/audience-img1.jpg"
                        alt="Audience"
                        width={270}
                        height={200}
                        layout="intrinsic"
                        className="rounded-tr-[40px] w-full"
                    />
                    <Image
                        src="https://angular.envytheme.com/recall-ng/instagram/assets/img/audience-img2.jpg"
                        alt="Audience"
                        width={270}
                        height={200}
                        layout="intrinsic"
                        className="rounded-tr-[40px] w-full"
                    />
                </div>

                {/* Right Content */}
                <div className="flex flex-col gap-4 md:gap-5 mt-auto">
                    <p className="uppercase text-[#FF4150] text-base md:text-lg">@alikamaya</p>
                    <h1 className="font-bold text-2xl md:text-4xl">Instagram + Audience</h1>
                    <h2 className="text-[#757575] uppercase text-base md:text-lg underline">
                        Instagram Audience
                    </h2>
                    <div className="flex gap-6 lg:gap-20 items-center">
                        <div>
                            <h1 className="text-2xl md:text-4xl font-semibold">
                                78% <span className="text-lg md:text-2xl font-normal">female</span>
                            </h1>
                            <h1 className="text-2xl md:text-4xl font-semibold">
                                25-35 <span className="text-lg md:text-2xl font-normal">years old</span>
                            </h1>
                        </div>
                        <div>
                            <h1 className="font-bold text-lg md:text-2xl">
                                0% <span className="font-normal text-sm md:text-xl">US</span>
                            </h1>
                            <h1 className="font-bold text-lg md:text-2xl">
                                0% <span className="font-normal text-sm md:text-xl">UK</span>
                            </h1>
                            <h1 className="font-bold text-lg md:text-2xl">
                                0% <span className="font-normal text-sm md:text-xl">CANADA</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Sections */}
            <div className="px-4 md:px-6 flex flex-col lg:flex-row gap-6 text-center md:text-left">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <Image
                        src="https://angular.envytheme.com/recall-ng/instagram/assets/img/audience-img3.jpg"
                        alt="Audience"
                        width={560}
                        height={200}
                        layout="intrinsic"
                        className="rounded-tr-[40px]"
                    />
                    <div className="flex justify-evenly text-center">
                        <div>
                            <h1 className="text-[#FF4150] text-4xl md:text-5xl font-bold">OK</h1>
                            <h1 className="text-sm md:text-xl italic text-[#797979] pt-4">followers</h1>
                        </div>
                        <div>
                            <h1 className="text-[#FF4150] text-4xl md:text-5xl font-bold">0%</h1>
                            <h1 className="text-sm md:text-xl italic text-[#777777] pt-4">
                                average post engagement rate
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-[#868686] uppercase text-base md:text-lg underline">
                        Instagram Collaborations
                    </h1>
                    <div className="flex flex-col md:flex-row gap-6 pt-4">
                        <div>
                            <Image
                                src="https://angular.envytheme.com/recall-ng/instagram/assets/img/collaborations-img1.jpg"
                                alt="Collaboration"
                                width={280}
                                height={200}
                                layout="intrinsic"
                                className='md:mx-0 mx-auto'
                            />
                            <h1 className="text-xl md:text-2xl font-semibold pt-3">Alika X Tempest</h1>
                            <p className="text-sm md:text-lg text-[#656565] pt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="https://angular.envytheme.com/recall-ng/instagram/assets/img/collaborations-img2.jpg"
                                alt="Collaboration"
                                width={280}
                                height={200}
                                layout="intrinsic"
                                className='md:mx-0 mx-auto'
                            />
                            <h1 className="text-xl md:text-2xl font-semibold pt-3">Alika X Tempest</h1>
                            <p className="text-sm md:text-lg text-[#656565] pt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
