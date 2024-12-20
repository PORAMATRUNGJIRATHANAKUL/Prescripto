import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:2/4 text-sm text-gray-600 ">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            voluptas facilis blanditiis voluptatibus impedit nulla quidem, hic
            eum expedita nemo minus a maiores perspiciatis temporibus rerum
            autem possimus perferendis asperiores alias voluptatum vel dolorum,
            nostrum dolores minima! Tempora, esse deleniti!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            ducimus rem, illum nihil illo soluta ad accusamus tempore similique,
            quidem dolorum rerum laborum porro laboriosam. Dolores impedit
            repellendus ullam perspiciatis eaque omnis tempore perferendis
            nihil, dignissimos consectetur quis maiores assumenda consequatur,
            placeat delectus blanditiis harum, et dolor adipisci deleniti.
            Officiis?
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta
            pariatur placeat doloremque delectus illum doloribus consequuntur,
            vero possimus consequatur natus alias totam dolorum mollitia!
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
