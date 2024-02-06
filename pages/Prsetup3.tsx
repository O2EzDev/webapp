import type { NextPage } from "next";
import React, { useState } from "react";
import FrameGroup from "../components/frame-group";
import Link from "next/link";
import ProgressBar from "../components/common/ProgressBar2";

const Setup3a: NextPage = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
  };
  return (
    <div className="w-full min-h-screen bg-saddlebrown overflow-hidden flex items-center justify-center py-[63px] px-[30px] md:px-[50px] md:py-[50px] lg:py-[100px] lg:px-[0px] xl:py-[0px] xl:px-[0px] box-border rounded-xl text-left text-lg text-black1 font-poppins ">
      <section className="w-[951px] rounded-2xl bg-white  shrink-0 flex flex-col items-end justify-start py-5 px-0 box-border max-w-full gap-[10px] md:gap-[20px] lg:gap-[54px] my-10 ">
        <FrameGroup />
        <div className="self-stretch flex flex-col items-end justify-end py-5 px-[30px] md:px-[70px]">
          <Link href="/Prsetup4a" className="no-underline">
            <button
              className={`cursor-pointer [border:none] py-2 px-[18px] w-[103px] rounded-2xl bg-orange shadow-[0px_1px_10px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center box-border  hover:bg-slate-300`}
              onClick={handleClick}
            >
              <b
                className={`flex-1 relative text-lg font-poppins text-white text-bold ${
                  isPressed ? "text-orange" : "text-white"
                } text-center`}
              >
                Next
              </b>
            </button>
          </Link>
        </div>
      </section>
      <ProgressBar
        steps={8}
        currentStep={2}
        navigationRoutes={[
          "Prsetup1a",
          "Prsetup2a",
          "Prsetup3",
          "Prsetup4a",
          "Prsetup5a",
          "Prsetup6a",
          "Prsetup7a",
          "Prsetup8a",
        ]}
        className="bottom-[88%] lg:top-[125%] xl:top-[94%]"
      />
    </div>
  );
};

export default Setup3a;
