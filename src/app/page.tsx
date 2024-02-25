"use client";

import { Button, Tour, TourProps } from "antd";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Logo from "@/assets/ku-outstanding-footer-logo-white.png";
import FeaturesOverview from "../../public/undraw_features_overview_re_2w78.svg";
import FillForm from "../../public/undraw_fill_form_re_cwyf.svg";
import GoingUp from "../../public/undraw_going_up_re_86kg.svg";
import Data from "../../public/undraw_data_processing_yrrv.svg";
import Light from "../../public/undraw_lightbulb_moment_re_ulyo.svg";
import Unlock from "../../public/undraw_unlock_re_a558.svg";
import Welcome from "../../public/undraw_welcome_cats_thqn.svg";
import WholeYear from "../../public/undraw_a_whole_year_vnfm.svg";
import Link from "next/link";

const LandingPage = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps["steps"] = [
    {
      title: "ยินดีต้อนรับครับ",
      description: "ขออนุญาตแนะนำเว็บไซต์ของเราคร่าว ๆ นะครับ",
      cover: <Image alt="tour.png" src={Welcome} width={400} height={300} />,
      target: () => ref1.current,
    },
    {
      title: "ดูหลักสูตรทั้งหมด",
      description:
        "ในส่วนนี้คุณสามารถดูหลักสูตรทั้งหมดของมหาวิทยาลัยเกษตรศาสตร์ได้",
      target: () => ref2.current,
    },
    {
      title: "อัพโหลดไฟล์ Transcript",
      description: "เพื่อตรวจสอบสถานะการจบการศึกษาของคุณ",
      target: () => ref3.current,
    },
    {
      title: "เช็คโดยไม่ใช้ Transcript",
      description:
        "คุณสามารถเช็คโดยไม่ใช้ Transcript ได้ด้วยการกรอกรายวิชาที่ลงทะเบียนไว้และเกรดที่ได้",
      target: () => ref4.current,
    },
    {
      title: "รู้จักเรามากขึ้น",
      description:
        "หากคุณสนใจเรามากขึ้น สามารถติดต่อเราได้ที่ Facebook, Twitter, Instagram",
      cover: <Image alt="tour.png" src={WholeYear} width={400} height={300} />,
      target: () => ref5.current,
    },
  ];
  return (
    <>
      {/*  Hero section */}
      <div className="min-h-screen bg-[#006664]">
        <div className="relative overflow-hidden min-h-screen pb-56">
          {/* show clip when lg */}
          <div className="hidden lg:block absolute inset-y-0 h-full w-full">
            <svg
              className="absolute bottom-0 h-full w-full text-slate-100"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="50,100 100,-50 100,100" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto my-4 px-4 sm:px-6 lg:px-8 container">
            {/* center navbar */}
            <nav className="flex justify-between">
              <div className="flex justify-center items-center space-x-4">
                <Image
                  src={Logo}
                  alt="ku"
                  width={100}
                  height={100}
                  className="w-20 h-20 text-white"
                />
                <a href="#" className="text-white text-3xl font-bold">
                  <div>KASETSART</div>
                  <div className=" font-light">UNIVERSITY</div>
                </a>
              </div>

              {/* Regular menu for larger screens */}
              <div className="hidden lg:block mr-12 mt-2">
                <ul className="flex space-x-8">
                  <li>
                    <a href="#" className="text-white relative">
                      <p className="z-10">
                        <Link href={"curriculum"}>หลักสูตร</Link>
                      </p>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white  relative">
                      <p className="z-10">
                        <Link href={"upload-transcript"}>
                          เช็คโดยใช้ Transcript
                        </Link>
                      </p>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white  relative">
                      <p className="z-10">
                        <Link href={"fill-in"}>เช็คโดยไม่ใช้ Transcript</Link>
                      </p>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div></div>
            </nav>

            {/* center height content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-screen -mt-20">
              {/* left side */}
              <div className="lg:col-span-6 flex flex-col items-center lg:items-start justify-center px-4">
                <h1 className="text-4xl font-bold text-white mb-4">
                  KU Transcript
                </h1>
                <p className="text-xl text-white mb-8 max-w-96">
                  เว็บไซต์นี้เป็นเว็บไซต์ที่จัดทำโดยนิสิตและเป็นเว็บไซต์ที่ออกแบบมา
                  เพื่อความสะดวกสบายในการเช็คสถานะการจบการศึกษาของนิสิต
                  มหาวิทยาลัยเกษตรศาสตร์
                </p>
                <div className="space-x-4">
                  <Button
                    type="primary"
                    href="#"
                    onClick={() => setOpen(true)}
                    className="inline-block bg-white text-indigo-500 py-3 px-8 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out"
                  >
                    ฟีเจอร์ของเรา
                  </Button>
                </div>
              </div>

              {/* right side with image */}
              <div className="lg:col-span-6  justify-center items-center hidden lg:flex ">
                <Image
                  src="https://i0.wp.com/kuic.ku.ac.th/wp-content/uploads/2020/11/slide-kuic-03.jpg?w=1440&ssl=1"
                  alt="ku"
                  width={1200}
                  height={500}
                  className=" w-[1200px] z-10 absolute -mr-[600px] h-[500px] rounded-full border-8 border-white object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card section */}
      <div className="bg-slate-100 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* card 1 */}
            <div
              ref={ref2}
              className="col-span-4 mt-4 lg:mt-0 border-2 bg-white shadow-lg rounded-lg p-8 justify-center items-center flex h-[500px] flex-col  -translate-y-36 lg:-translate-y-36"
            >
              {/* image */}
              <Image
                src={FeaturesOverview}
                className="h-40 w-40 bg-gray-200 rounded-full mb-8 "
                alt="ku"
                width={200}
                height={200}
              />
              {/* title */}
              <h2 className="text-2xl font-bold mb-4">ค้นหาหลักสูตร</h2>
              {/* description */}
              <p className="text-gray-500">
                คุณสามารถค้นหาหลักสูตรและตรวจสอบเงื่อนไขในการจบการศึกษาว่ามีรายวิชาใดบ้างที่จำเป็นในการจบการศึกษา
              </p>
              {/* button */}
              <Button type="primary" href="#" className="mt-8">
                <Link href={"curriculum"}>ดูเพิ่มเติม</Link>
              </Button>
            </div>

            {/* card 2 */}
            <div
              ref={ref3}
              className="col-span-4 border-2 bg-white shadow-lg rounded-lg p-8 justify-center items-center flex flex-col -translate-y-36 lg:-translate-y-16"
            >
              {/* image */}
              <Image
                src={FillForm}
                className="h-40 w-40 bg-gray-200 rounded-full mb-8"
                alt="ku"
                width={100}
                height={100}
              />
              {/* title */}
              <h2 className="text-2xl font-bold mb-4">เช็คโดยใช้ Transcript</h2>
              {/* description */}
              <p className="text-gray-500">
                หากคุณมีไฟล์ Transcript ที่เป็น
                ของมหาวิทยาลัยเกษตรศาสตรที่เป็นไฟล์ pdf
                คุณสามารถใช้ไฟล์นั้นตรวจสอบได้เลยว่าคุณสามารถ
                จบการศึกษาได้หรือไม่
              </p>
              {/* button */}
              <Button type="primary" href="#" className="mt-8">
                <Link href={"upload-transcript"}>อัพโหลด</Link>
              </Button>
            </div>
            {/* card 3 */}
            <div
              ref={ref4}
              className="col-span-4 mb-4 lg:mt-0 border-2 bg-white shadow-lg rounded-lg p-8 justify-center items-center flex flex-col -translate-y-36 lg:-translate-y-36"
            >
              {/* image */}
              <Image
                src={GoingUp}
                className="h-40 w-40 bg-gray-200 rounded-full mb-8 "
                alt="ku"
                width={100}
                height={100}
              />
              {/* title */}
              <h2 className="text-2xl font-bold mb-4">
                เช็คโดยไม่ใช้ Transcript
              </h2>
              {/* description */}
              <p className="text-gray-500">
                คุณสามารถตรวจสอบสถานะการจบการศึกษาแบบไม่ใช้ Transcript
                โดยการเลือกหลักสูตรของคุณและใส่รายวิชา
                กับเกรดที่ได้ลงทะเบียนแล้ว
              </p>
              {/* button */}
              <Button type="primary" href="#" className="mt-8">
                <Link href={"fill-in"}>กรอกข้อมูล</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-[#006664]">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto container">
          <h1 className="text-white text-4xl font-bold py-8 pb-48">
            เกี่ยวกับเรา
          </h1>
        </div>
      </div>

      {/* card */}
      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* card 1 */}
            <div className="col-span-4 bg-white shadow-lg rounded-lg flex h-[550px] flex-col -translate-y-36">
              {/* image */}
              <Image
                src={Light}
                alt="ku"
                width={200}
                height={200}
                className="w-full h-64 rounded-t-lg"
              />
              {/* title */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-[#294283]">
                  ที่มาของ KU Transcript
                </h2>
                {/* description */}
                <p className="text-gray-500">
                  KU Transcript เกิดมาจากความกังวลใจของนิสิตว่าตนนั้น
                  ได้ลงทะเบียนเรียนครบตามหลักสูตรแล้วหรือยัง ซึ่งอาจขาด
                  บางรายวิชา ทำให้ไม่จบตามเวลาที่ตั้งไว้
                  ด้วยเหตุนี้ทางทีมงานจึงได้พัฒนา KU Transcript
                  เพื่อให้สามารถเป็นอีกทางเลือกในการช่วย
                  ตรวจสอบสถานะการจบการศึกษา
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="col-span-4  bg-white shadow-lg rounded-lg flex h-[550px] flex-col -translate-y-36">
              {/* image */}
              <Image
                src={Data}
                alt="ku"
                width={200}
                height={200}
                className="w-full h-64 rounded-t-lg"
              />
              {/* title */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-[#294283]">
                  KU Transcript เอาข้อมูลมาจากไหน ?
                </h2>
                {/* description */}
                <p className="text-gray-500">
                  ข้อมูลหลักสูตร: นำมาจาก https://registrar.ku.ac.th/cur/all
                  ซึ่งเป็นฐานข้อมูลของมหาวิทยาลัยเกษตร์ศาตร์ ข้อมูลรายวิชา:
                  นำมาจาก
                </p>
              </div>
            </div>
            {/* card 3 */}
            <div className="col-span-4  bg-white shadow-lg rounded-lg flex h-[550px] flex-col -translate-y-36">
              {/* image */}
              <Image
                src={Unlock}
                alt="ku"
                width={200}
                height={200}
                className="w-full h-64 rounded-t-lg"
              />
              {/* title */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-[#294283]">
                  รองรับทุก Platform
                </h2>
                {/* description */}
                <p className="text-gray-500">
                  KU Transcript สามารถใช้งานได้ทุกแพลตฟอร์ม ไม่ว่าจะเป็น
                  คอมพิวเตอร์ แท็บเล็ต หรือสมาร์ทโฟน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#006664] text-white py-12">
        <div
          ref={ref5}
          className="max-w-7xl mx-auto flex flex-col items-center justify-center"
        >
          <p className="text-xl mb-4">ติดต่อเรา</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Instagram
            </a>
          </div>
          <p className="mt-4">
            &copy; 2024 KU Transcript. All rights reserved.
          </p>
        </div>
      </footer>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};

export default LandingPage;
