import React from "react";

import { styles } from "../styles";
import { starPattern } from "../assets";
import companies from "../constants";

const MainSection = () => {
  return (
    <section className={`relative w-full h-[800px] md:h-[110vh] mx-auto sm:mb-16`}>
      <img src={starPattern} alt="" className="hidden lg:flex absolute bottom-0 right-0 -z-10" />
      <div
        className={`absolute inset-0 top[100px] sm:top-[70px] sm:pt-20 pt-40  w-full ${styles.paddingX} flex flex-col items-center justify-start text-center`}
      >
        <h1 className={" text-[43px] sm:text-[86px]  font-thin text-center"}>
          This is a <span className="text-[#d73032] font-medium">sample</span>
        </h1>
        <p className="text-md font-normal text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="relative w-[200px] h-[300px] sm:w-[555px] sm:h-[51px] sm:bg-black mt-10">
          <div className="flex flex-col sm:flex-row items-center absolute top-2 sm:right-2 gap-3 sm:gap-0">
            <label class="relative md:block">
              <input
                className="placeholder:text-sm placeholder:text-[#616161] w-[200px] sm:w-[371px] h-[51px] block bg-white border border-black  py-2 pl-3 pr-3 shadow-sm focus:outline-none sm:text-sm "
                placeholder="Enter your Email Id"
                type="email"
                name="email"
              />
            </label>
            <button className="w-[200px] h-[51px] text-center text-[15px] bg-[#d73032] border border-black text-white">Register Now</button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:pt-10 pt-6 pb-10">
          {companies.map((company) => {
            return <img src={company.image} id={company.name} alt={company.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
