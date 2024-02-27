import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const allCampus = [
  {
    id: 1,
    name: "วิทยาเขตบางเขน",
    image:
      "https://static.trueplookpanya.com/tppy/member/m_525000_527500/525016/cms/images/%E0%B8%A1.%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%95%E0%B8%A3%20%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%82%E0%B8%99%20(27).png",
  },
  {
    id: 2,
    name: "วิทยาเขตกำแพงแสน",
    image:
      "https://static.trueplookpanya.com/tppy/member/m_525000_527500/525016/cms/images/cp-0007.jpg",
  },
  {
    id: 3,
    name: "วิทยาเขตศรีราชา",
    image: "https://www.src.ku.ac.th/th/tp/img/kusrc.jpg",
  },
  {
    id: 4,
    name: "วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร",
    image: "https://f.ptcdn.info/273/056/000/p4hn2yieoyHAph9VVr1-o.jpg",
  },
  {
    id: 5,
    name: "โครงการจัดตั้งวิทยาเขตสุพรรณบุรี",
    image:
      "https://image.dek-d.com/contentimg/2017/paeng/Direct/NEWS-V-054.jpg",
  },
  {
    id: 6,
    name: "สถาบันสมทบ",
    image: "https://fbi.dek-d.com/27/0368/3011/115351981?v=7.02",
  },
];

const CurriculumPage = (props: Props) => {
  return (
    <>
      <div className="relative">
        <h1 className="text-2xl">หลักสูตรทั้งหมด</h1>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
      </div>

      <div className="grid grid-cols-2 gap-4 mx-4 mt-4">
        {/* card */}
        {allCampus.map((campus) => {
          return (
            <Link
              href={`/curriculum/${campus.id}`}
              key={campus.id}
              className="relative overflow-hidden rounded-md"
            >
              <div className=" duration-300  static ">
                <div className="bg-[#B2BB1E] text-white p-2">{campus.name}</div>
              </div>
              <Image
                src={campus.image}
                width={200}
                height={200}
                className="object-cover h-40 w-full hover:scale-105 duration-300"
                alt={""}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CurriculumPage;
