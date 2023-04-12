import React from "react";

import { userExpImage2, userExpImage1 } from "../assets";

const Footer = () => {
  return (
    <section className="w-full relative h-[439px]" style={{ background: "linear-gradient(180deg, rgba(197, 213, 255, 0.28) 0%, #F7F7F7 74.7%)" }}>
      <div className="w-full md:absolute flex flex-col sm:flex-row  items-center justify-center sm:top-[-145px]">
        <img src={userExpImage1} alt={"userExpImage2"} />
        <img src={userExpImage2} alt={"userExpImage2"} />
      </div>
    </section>
  );
};

export default Footer;
