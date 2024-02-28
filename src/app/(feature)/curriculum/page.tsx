import { allCampus } from "@/data/allCampusData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const CurriculumPage = (props: Props) => {
  return (
    <>
      <div className="relative">
        <h1 className="text-2xl">วิทยาเขตทั้งหมด</h1>
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
