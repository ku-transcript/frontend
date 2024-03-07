import { allCampus } from "@/data/allCampusData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CurriculumPage = () => {
  return (
    <>
      <div className="relative">
        <h1 className="text-2xl mb-4">วิทยาเขตทั้งหมด</h1>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
      </div>

      <div className="grid grid-cols-2 gap-4 mx-4 mt-4">
        {allCampus.map((campus) => (
          <Link href={`/curriculum/${campus.id}`} key={campus.id}>
            <div className="relative overflow-hidden rounded-md shadow-md hover:shadow-lg">
              <div className="bg-[#B2BB1E] text-white p-2 text-center font-semibold">
                {campus.name}
              </div>
              <div className="w-full h-40 overflow-hidden">
                <Image
                  src={campus.image}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full transform scale-100 hover:scale-105 transition-transform duration-300"
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CurriculumPage;
