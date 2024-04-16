import React from "react";
import HeadImage from "../Assests/Head6.jpg";

const Header = () => {
  return (
    <div>
      <section className="bg-slate-100 max-w-screen-xl mx-auto flex justify-between py-6 px-2 items-center">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="text-sky-600 text-5xl mt-4">
                Looking For STEM Education For Your Child?
              </h4>
              <h1 className="text-blue-400 text-3xl ">
                You are at right destination
              </h1>
              <p className="text-black mt-6 ">
                Welcome to The STEM School, a hub of STEM education excellence!
                Our institution is dedicated to fostering curiosity and
                innovation in Science, Technology, Engineering, and Mathematics.
                Led by experienced faculty and equipped with cutting-edge
                resources, we empower students to explore, question, and
                innovate in the world of STEM. Through hands-on experiences and
                collaborative projects, students develop critical thinking
                skills and real-world problem-solving abilities. At The STEM
                School, STEM education isn't just a curriculum—it's a journey
                towards limitless possibilities. Join us and discover the
                exciting opportunities that await in the dynamic world of STEM!
              </p>
              {/* <button className="rounded-full text-white bg-blue-400 px-8 py-4 mt-6 hover:bg-blue-800 ">
                Learn More
              </button> */}
              <button className="rounded-full text-white bg-blue-400 px-8 py-4 mt-6 hover:scale-y-110 hover:bg-blue-800 animate-bounce">
                Learn More
              </button>
            </div>
            <div className="flex">
              <img src={HeadImage} width={500} alt="Head6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
