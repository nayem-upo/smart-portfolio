import React from 'react';

const ContactMe = () => {
    return (
        <div>
            <section
                className="relative bg-fixed bg-cover bg-center py-20"
                style={{
                    backgroundImage:
                        "url('https://www.kickfurther.com/wp-content/uploads/2021/12/iStock-1320976219-scaled-1.jpg')",
                }}
            >
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-10 rounded-lg bg-[#00000065]">
                    {/* Left Side */}
                    <div className="w-full md:w-1/2 text-white space-y-6">
                        <h2 className="md:text-4xl text-3xl font-bold">Join with me</h2>
                        <p className="md:text-lg text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <div className="flex items-center md:gap-6 gap-2">
                            <button className="py-3 md:text-lg text-sm px-6 bg-gradient-to-r from-[#FF5D18] to-[#F6136C] text-white font-semibold md:rounded-lg shadow-lg hover:from-[#FF027C] hover:to-[#ee0979] transition duration-300">
                                Contact Me
                            </button>
                            <p className="md:text-lg text-sm font-medium hover:underline cursor-pointer">hello@alikamaya.com</p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full md:w-1/2 bg-white rounded-lg shadow-xl p-8 mt-8 md:mt-0">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FF5D18]"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FF5D18]"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FF5D18]"
                            />
                            <button
                                type="submit"
                                className="py-3 px-6 w-full bg-gradient-to-r from-[#FF5D18] to-[#F6136C] text-white font-semibold rounded-md shadow-lg hover:from-[#FF027C] hover:to-[#ee0979] transition duration-300"
                            >
                                Join with me now
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactMe;