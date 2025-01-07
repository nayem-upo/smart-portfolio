'use client'
import { useState } from "react";

const SubscribeForm = () => {
    const [email, setEmail] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Subscribed with email: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit} className="flex lg:flex-none md:flex-row flex-col lg:items-center mt-6 md:gap-0 gap-4">
            <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleInputChange}
                className="p-3 text-base bg-[#EFEFEF] md:w-80 focus:outline-none md:rounded-none rounded-tr-3xl"
                required
            />
            <button
                type="submit"
                className="py-3 px-6 text-base font-semibold md:w-auto w-full text-white rounded-tr-3xl bg-[#FF5D18] transition-all duration-500 ease-in-out 
                hover:bg-[#ee0979]"
            >
                Join with me now
            </button>
        </form>
    );
};

export default SubscribeForm;
