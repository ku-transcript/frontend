import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/ku-outstanding-footer-logo-white.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between">
      <div className="flex justify-center items-center space-x-4">
        <Image
          src={Logo}
          alt="ku"
          width={2000}
          height={2000}
          className="w-20 h-20 text-white"
        />
        <div className="text-white text-3xl font-bold">
          <div>KASETSART</div>
          <div className=" font-light">UNIVERSITY</div>
        </div>
      </div>

      {/* Regular menu for larger screens */}
      <div className="hidden lg:block mr-12 mt-2">
        <ul className="flex space-x-8">
          <li>
            <Link href={"curriculum"} className="text-white relative">
              <div className="z-10">หลักสูตร</div>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
            </Link>
          </li>
          <li>
            <Link href={"upload-transcript"} className="text-white  relative">
              <div className="z-10">เช็คโดยใช้ Transcript</div>

              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
            </Link>
          </li>
          <li>
            <Link href={"fill-in"} className="text-white  relative">
              <div className="z-10">เช็คโดยไม่ใช้ Transcript</div>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
