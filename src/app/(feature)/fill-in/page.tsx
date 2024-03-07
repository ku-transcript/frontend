"use client";

import {
  subJectLiveHappily,
  subJectScienceOfEntrepreneurship,
  subJectThaiCitizensAndWorldCitizens,
  subJectLanguageAndCommunication,
  subJectAesthetics,
  subJectFacultyOfScience,
  allSubject,
  subJectCS60Elective,
} from "@/data/all-subject";
import { Button, Select } from "antd";
import React, { useState } from "react";
import CourseInput from "./components/CourseInput";

const grade = [
  { value: "A", label: "A" },
  { value: "B+", label: "B+" },
  { value: "B", label: "B" },
  { value: "C+", label: "C+" },
  { value: "C", label: "C" },
  { value: "D+", label: "D+" },
  { value: "D", label: "D" },
  { value: "F", label: "F" },
];

type Props = {};

const FillInPage = (props: Props) => {
  const [countLiveHappily, setCountLiveHappily] = useState([1]);
  const [countScienceOfEntrepreneurship, setCountScienceOfEntrepreneurship] =
    useState([1]);
  const [countLanguageAndCommunication, setCountLanguageAndCommunication] =
    useState([1]);
  const [
    countThaiCitizensAndWorldCitizens,
    setCountThaiCitizensAndWorldCitizens,
  ] = useState([1]);
  const [countAesthetics, setCountAesthetics] = useState([1]);
  const [countFacultyOfScience, setCountFacultyOfScience] = useState([1]);
  const [countElectiveCourse, setCountElectiveCourse] = useState([1]);
  const [countFreeElectiveCourse, setCountFreeElectiveCourse] = useState([1]);

  const handleAddLiveHappily = () => {
    setCountLiveHappily((prev) => {
      return [...prev, prev.length + 1];
    });
  };

  const handleDeleteLiveHappily = () => {
    setCountLiveHappily((prev) => {
      if (prev.length === 1) {
        return prev;
      } else {
        return prev.slice(0, prev.length - 1);
      }
    });
  };

  const handleAddScienceOfEntrepreneurship = () => {
    setCountScienceOfEntrepreneurship((prev) => {
      return [...prev, prev.length + 1];
    });
  };

  const handleDeleteScienceOfEntrepreneurship = () => {
    setCountScienceOfEntrepreneurship((prev) => {
      if (prev.length === 1) {
        return prev;
      } else {
        return prev.slice(0, prev.length - 1);
      }
    });
  };

  const handleAddLanguageAndCommunication = () => {
    setCountLanguageAndCommunication((prev) => {
      return [...prev, prev.length + 1];
    });
  };

  const handleDeleteLanguageAndCommunication = () => {
    setCountLanguageAndCommunication((prev) => {
      if (prev.length === 1) {
        return prev;
      } else {
        return prev.slice(0, prev.length - 1);
      }
    });
  };

  const handleAddThaiCitizensAndWorldCitizens = () => {
    setCountThaiCitizensAndWorldCitizens((prev) => {
      return [...prev, prev.length + 1];
    });
  };

  const handleDeleteThaiCitizensAndWorldCitizens = () => {
    setCountThaiCitizensAndWorldCitizens((prev) => {
      if (prev.length === 1) {
        return prev;
      } else {
        return prev.slice(0, prev.length - 1);
      }
    });
  };

  const handleAddAesthetics = () => {
    setCountAesthetics((prev) => {
      return [...prev, prev.length + 1];
    });
  };

  const handleDeleteAesthetics = () => {
    setCountAesthetics((prev) => {
      if (prev.length === 1) {
        return prev;
      } else {
        return prev.slice(0, prev.length - 1);
      }
    });
  };

  const handleAddFacultyOfScience = () => {
    setCountFacultyOfScience((prev) => {
      return [...prev, prev.length + 1];
    });
  };

  const handleDeleteFacultyOfScience = () => {
    setCountFacultyOfScience((prev) => {
      if (prev.length === 1) {
        return prev;
      } else {
        return prev.slice(0, prev.length - 1);
      }
    });
  };

  const handleAddElectiveCourse = () => {
    setCountElectiveCourse((prev) => {
      return [...prev, prev.length + 1];
    });
  };

  const handleDeleteElectiveCourse = () => {
    setCountElectiveCourse((prev) => {
      if (prev.length === 1) {
        return prev;
      } else {
        return prev.slice(0, prev.length - 1);
      }
    });
  };

  const handleAddFreeElectiveCourse = () => {
    setCountFreeElectiveCourse((prev) => {
      return [...prev, prev.length + 1];
    });
  };

  const handleDeleteFreeElectiveCourse = () => {
    setCountFreeElectiveCourse((prev) => {
      if (prev.length === 1) {
        return prev;
      } else {
        return prev.slice(0, prev.length - 1);
      }
    });
  };

  return (
    <>
      <div className="relative">
        <h1 className="text-2xl">กรอกข้อมูลรายวิชาและเกรดของคุณ</h1>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
      </div>

      <div className="mt-4">
        <h2 className="py-1 px-4 text-lg bg-gradient-to-r from-green-700 to-green-900 text-white rounded-xl">
          วิทยาเขตบางเขน หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์ พ.ศ.
          2560
        </h2>
        <div>
          <h3 className=" font-bold text-lg mt-2">หมวดวิชาศึกษาทั่วไป</h3>
          {/* กลุ่มสาระอยู่ดีมีสุข */}
          <CourseInput
            subjectOptions={{
              title: "กลุ่มสาระอยู่ดีมีสุข",
              options: subJectLiveHappily,
            }}
            grade={grade}
            handleAdd={handleAddLiveHappily}
            handleDelete={handleDeleteLiveHappily}
            count={countLiveHappily}
          />

          {/* กลุ่มสาระศาสตร์แห่งผู้ประกอบการ */}
          <CourseInput
            subjectOptions={{
              title: "กลุ่มสาระศาสตร์แห่งผู้ประกอบการ",
              options: subJectScienceOfEntrepreneurship,
            }}
            grade={grade}
            handleAdd={handleAddScienceOfEntrepreneurship}
            handleDelete={handleDeleteScienceOfEntrepreneurship}
            count={countScienceOfEntrepreneurship}
          />

          {/* กลุ่มสาระภาษาและการสื่อสาร */}
          <CourseInput
            subjectOptions={{
              title: "กลุ่มสาระภาษาและการสื่อสาร",
              options: subJectLanguageAndCommunication,
            }}
            grade={grade}
            handleAdd={handleAddLanguageAndCommunication}
            handleDelete={handleDeleteLanguageAndCommunication}
            count={countLanguageAndCommunication}
          />

          {/* กลุ่มสาระพลเมืองไทยและพลเมืองโลก */}
          <CourseInput
            subjectOptions={{
              title: "กลุ่มสาระพลเมืองไทยและพลเมืองโลก",
              options: subJectThaiCitizensAndWorldCitizens,
            }}
            grade={grade}
            handleAdd={handleAddThaiCitizensAndWorldCitizens}
            handleDelete={handleDeleteThaiCitizensAndWorldCitizens}
            count={countThaiCitizensAndWorldCitizens}
          />

          {/* กลุ่มสาระสุนทรียศาสตร์ */}
          <CourseInput
            subjectOptions={{
              title: "กลุ่มสาระสุนทรียศาสตร์",
              options: subJectAesthetics,
            }}
            grade={grade}
            handleAdd={handleAddAesthetics}
            handleDelete={handleDeleteAesthetics}
            count={countAesthetics}
          />

          {/* กลุ่มสาระของหมวดวิชาศึกษาทั่วไปเฉพาะที่เป็นรายวิชาของคณะต้นสังกัดของหลักสูตร */}
          <CourseInput
            subjectOptions={{
              title:
                "กลุ่มสาระของหมวดวิชาศึกษาทั่วไปเฉพาะที่เป็นรายวิชาของคณะต้นสังกัดของหลักสูตร",
              options: subJectFacultyOfScience,
            }}
            grade={grade}
            handleAdd={handleAddFacultyOfScience}
            handleDelete={handleDeleteFacultyOfScience}
            count={countFacultyOfScience}
          />
        </div>

        <div>
          <h3 className=" font-bold text-lg mt-2">หมวดวิชาเฉพาะ</h3>
          <h4 className=" font-semibold mt-2">วิชาแกน</h4>
          <div className="flex space-x-3 my-2">
            <p className="flex items-center w-full">
              01417111 แคลคูลัส I (Calculus I)
            </p>
            <Select
              style={{ width: "10%" }}
              allowClear
              placeholder="เกรด"
              options={grade}
            />
          </div>
          <div className="flex space-x-3 my-2">
            <p className="flex items-center w-full">
              01417112 แคลคูลัส II (Calculus II)
            </p>
            <Select
              style={{ width: "10%" }}
              allowClear
              placeholder="เกรด"
              options={grade}
            />
          </div>
          <div className="flex space-x-3 my-2">
            <p className="flex items-center w-full">
              01417322 พีชคณิตเชิงเส้นเบื้องต้น (Introductory Linear Algebra)
            </p>
            <Select
              style={{ width: "10%" }}
              allowClear
              placeholder="เกรด"
              options={grade}
            />
          </div>
          <div className="flex space-x-3 my-2">
            <p className="flex items-center w-full">
              01418132 หลักมูลการคณนา (Fundamentals of Computing)
            </p>
            <Select
              style={{ width: "10%" }}
              allowClear
              placeholder="เกรด"
              options={grade}
            />
          </div>
          <div className="flex space-x-3 my-2">
            <p className="flex items-center w-full">
              01422111 หลักสถิติ (Principles of Statistics)
            </p>
            <Select
              style={{ width: "10%" }}
              allowClear
              placeholder="เกรด"
              options={grade}
            />
          </div>
        </div>

        <h4 className="font-semibold  mt-2">วิชาเฉพาะบังคับ</h4>
        <p className="my-2">กลุ่มประเด็นด้านองค์การและระบบสารสนเทศ</p>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418341 ทรัพย์สินทางปัญญาและจรรยาบรรณวิชาชีพ (Intellectual
            Properties and Professional Ethics)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <p className="my-2">กลุ่มประเด็นด้านองค์การและระบบสารสนเทศ</p>

        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418221 ระบบฐานข้อมูลเบื้องต้น (Fundamentals of Database Systems)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418321 การวิเคราะห์และการออกแบบระบบ (System Analysis and Design)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418390 การเตรียมความพร้อมสหกิจศึกษา (Co-operative Education
            Preparation)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418490 สหกิจศึกษา (Co-operative Education)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">01418497 สัมมนา (Seminar)</p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418499 โครงงานวิทยาการคอมพิวเตอร์ (Computer Science Project)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>

        <p className="my-2">กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์</p>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418112 แนวคิดการโปรแกรมเบื้องต้น (Fundamental Programming
            Concepts)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418113 การโปรแกรมคอมพิวเตอร์ (Computer Programming)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418211 การสร้างซอฟต์แวร์ (Software Construction)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418231 โครงสร้างข้อมูล (Data Structures)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418232 การออกแบบและการวิเคราะห์ขั้นตอนวิธี (Algorithm Design and
            Analysis)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>

        <p className="my-2">กลุ่มโครงสร้างพื้นฐานของระบบ</p>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418114 วิทยาการคอมพิวเตอร์เบื้องต้น (Introduction to Computer
            Science)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418331 ระบบปฏิบัติการ (Operating Systems)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418332 ความมั่นคงในระบบสารสนเทศ (Information Systems Security)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418333 ทฤษฎีออโตมาตา (Automata Theory)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418334 เทคนิคตัวแปลโปรแกรม (Compiler Techniques)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418351 หลักการการสื่อสารคอมพิวเตอร์และการประมวลผลบนคลาวด์
            (Computer Communications and Cloud Computing Principles)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
        <p className="my-2">กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์</p>
        <div className="flex space-x-3 my-2">
          <p className="flex items-center w-full">
            01418233 ภาษาแอสเซมบลีและสถาปัตยกรรมคอมพิวเตอร์ (Assembly Language
            and Computer Architecture)
          </p>
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>

        {/* วิชาเฉพาะเลือก */}
        <div className="flex justify-between">
          <h4 className="flex justify-center items-center">วิชาเฉพาะเลือก</h4>
          <div className="flex space-x-3">
            <Button type="primary" onClick={handleAddElectiveCourse}>
              + เพิ่ม
            </Button>
            <Button type="primary" onClick={handleDeleteElectiveCourse}>
              - ลบ
            </Button>
          </div>
        </div>
        {countElectiveCourse.map((index) => (
          <div className="flex space-x-3 my-2" key={index}>
            <Select
              placeholder="ค้นหาด้วยรหัสวิชาหรือชื่อวิชา"
              style={{ width: "90%" }}
              allowClear
              options={subJectCS60Elective}
            />
            <Select
              style={{ width: "10%" }}
              allowClear
              placeholder="เกรด"
              options={grade}
            />
          </div>
        ))}

        <div className="flex justify-between">
          <h4 className="flex justify-center items-center">
            หมวดวิชาเลือกเสรี
          </h4>
          <div className="flex space-x-3">
            <Button type="primary" onClick={handleAddFreeElectiveCourse}>
              + เพิ่ม
            </Button>
            <Button type="primary" onClick={handleDeleteFreeElectiveCourse}>
              - ลบ
            </Button>
          </div>
        </div>
        {countFreeElectiveCourse.map((index) => (
          <div className="flex space-x-3 my-2" key={index}>
            <Select
              placeholder="ค้นหาด้วยรหัสวิชาหรือชื่อวิชา"
              style={{ width: "90%" }}
              allowClear
              options={allSubject}
            />
            <Select
              style={{ width: "10%" }}
              allowClear
              placeholder="เกรด"
              options={grade}
            />
          </div>
        ))}
      </div>

      <Button type="primary" className="w-full my-3">
        ยืนยัน
      </Button>
    </>
  );
};

export default FillInPage;
