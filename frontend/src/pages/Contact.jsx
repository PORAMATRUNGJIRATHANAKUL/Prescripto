import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold  text-lg text-gray-600"> Our Office</p>
          <p className="text-gray-500"> 1234 Main Street, Anytown, USA</p>
          <p className="text-gray-500"> Phone: 123-456-7890</p>
          <p className="text-gray-500"> Email: info@example.com</p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at PRESCRIPTO
          </p>
          <p className="text-gray-500">
            We are always looking for talented individuals to join our team. If
            you are passionate about healthcare and technology, we would love to
            hear from you.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
