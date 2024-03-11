"use client";

import { allCampus } from "@/data/allCampusData";
import { allComSciSyllabus } from "@/data/allComSciSyllabusData";
import { allFaculty } from "@/data/allFacultyData";
import { allSciencMajor } from "@/data/allSciMajor";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Collapse } from "antd";
import { CollapseProps } from "antd/es/collapse/Collapse";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    campus_id: string;
    faculty_id: string;
    major_id: string;
    syllabus_id: string;
  };
};

const SyllabusPage = (props: Props) => {
  const {
    campus_id: campusId,
    faculty_id: facultyId,
    major_id: majorId,
    syllabus_id: syllabusId,
  } = props.params;

  const initMenuItem = (allCampus: any) => {
    return allCampus.map((campus: any) => {
      return {
        key: campus.id,
        label: <Link href={`/curriculum/${campus.id}`}>{campus.name}</Link>,
      };
    });
  };

  const menuItems = initMenuItem(allCampus);

  const initFacultyMenuItem = (allFaculty: any) => {
    return allFaculty.map((faculty: any) => {
      return {
        key: faculty.id,
        label: (
          <Link href={`/curriculum/${campusId}/${faculty.id}`}>
            {faculty.name}
          </Link>
        ),
      };
    });
  };

  const facultyMenuItems = initFacultyMenuItem(allFaculty);

  const initMajorMenuItem = (allSciencMajor: any) => {
    return allSciencMajor.map((major: any) => {
      return {
        key: major.id,
        label: (
          <Link href={`/curriculum/${campusId}/${facultyId}/${major.id}`}>
            {major.name}
          </Link>
        ),
      };
    });
  };

  const majorMenuItems = initMajorMenuItem(allSciencMajor);

  const initSyllabusMenuItem = (allComSciSyllabus: any) => {
    return allComSciSyllabus.map((syllabus: any) => {
      return {
        key: syllabus.id,
        label: (
          <Link
            href={`/curriculum/${campusId}/${facultyId}/${majorId}/${syllabus.id}`}
          >
            {syllabus.year}
          </Link>
        ),
      };
    });
  };

  const syllabusMenuItems = initSyllabusMenuItem(allComSciSyllabus);

  const itemsCoreSubjects: CollapseProps["items"] = [
    {
      key: "1",
      label: "วิชาแกน	16 หน่วยกิต",
      children: (
        <table className="w-full">
          <tbody>
            <tr className="flex justify-between">
              <td>01417111 แคลคูลัส I (Calculus I)</td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01417112 แคลคูลัส II (Calculus II)</td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01417322 พีชคณิตเชิงเส้นเบื้องต้น (Introductory Linear Algebra)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01418132 หลักมูลการคณนา (Fundamentals of Computing)</td>
              <td>4(4-0-8)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01422111 หลักสถิติ (Principles of Statistics)</td>
              <td>3(3-0-6)</td>
            </tr>
          </tbody>
        </table>
      ),
    },
  ];

  const itemsRequiredSpecificSubjects: CollapseProps["items"] = [
    {
      key: "1",
      label: "วิชาเฉพาะบังคับ	55 หน่วยกิต",
      children: (
        <table className="w-full">
          <tbody>
            <p className="p-1 font-bold">
              กลุ่มประเด็นด้านองค์การและระบบสารสนเทศ
            </p>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418341** ทรัพย์สินทางปัญญาและจรรยาบรรณวิชาชีพ (Intellectual
                Properties and Professional Ethics)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <p className="p-1 font-bold">กลุ่มเทคโนโลยีเพื่องานประยุกต์</p>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418221** ระบบฐานข้อมูลเบื้องต้น (Fundamentals of Database
                Systems)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418321** การวิเคราะห์และการออกแบบระบบ (System Analysis and
                Design)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01418132 หลักมูลการคณนา (Fundamentals of Computing)</td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418390** การเตรียมความพร้อมสหกิจศึกษา (Co-operative Education
                Preparation)
              </td>
              <td>1(1-0-2)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01418490 สหกิจศึกษา (Co-operative Education)</td>
              <td>6</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01418497** สัมมนา (Seminar)</td>
              <td>1</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418499** โครงงานวิทยาการคอมพิวเตอร์ (Computer Science Project)
              </td>
              <td>3(0-9-5)</td>
            </tr>
            <hr />
            <p className="p-1 font-bold">
              กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์
            </p>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418112* แนวคิดการโปรแกรมเบื้องต้น (Fundamental Programming
                Concepts){" "}
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01418113** การโปรแกรมคอมพิวเตอร์ (Computer Programming)</td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01418211** การสร้างซอฟต์แวร์ (Software Construction)</td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01418231** โครงสร้างข้อมูล (Data Structures)</td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418232 การออกแบบและการวิเคราะห์ขั้นตอนวิธี (Algorithm Design
                and Analysis)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <p className="p-1 font-bold">กลุ่มโครงสร้างพื้นฐานของระบบ</p>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418114** วิทยาการคอมพิวเตอร์เบื้องต้น (Introduction to
                Computer Science)
              </td>
              <td>2(2-0-4)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01418331** ระบบปฏิบัติการ (Operating Systems)</td>
              <td>4(4-0-8)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418332* ความมั่นคงในระบบสารสนเทศ (Information Systems
                Security)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01418333** ทฤษฎีออโตมาตา (Automata Theory)</td>
              <td>2(2-0-4)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01418334** เทคนิคตัวแปลโปรแกรม (Compiler Techniques)</td>
              <td>2(2-0-4)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418351** หลักการการสื่อสารคอมพิวเตอร์และการประมวลผลบนคลาวด์
                (Computer Communications and Cloud Computing Principles)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <p className="p-1 font-bold">
              กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์
            </p>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418233** ภาษาแอสเซมบลีและสถาปัตยกรรมคอมพิวเตอร์ (Assembly
                Language and Computer Architecture)
              </td>
              <td>4(4-0-8)</td>
            </tr>
          </tbody>
        </table>
      ),
    },
  ];

  const itemsSelectedSubjects: CollapseProps["items"] = [
    {
      key: "1",
      label: "วิชาเฉพาะเลือก ไม่น้อยกว่า 21 หน่วยกิต",
      children: (
        <table className="w-full">
          <tbody>
            <p className="p-1 font-bold">
              ก. เลือก 3 หน่วยกิต จากรายวิชาต่อไปนี้
            </p>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418131 ตรรกศาสตร์ของดิจิทัลคอมพิวเตอร์ (Digital Computer
                Logic)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01420245 อิเล็กทรอนิกส์เชิงเลขเบื้องต้น (Introduction to
                Digital Electronics)
              </td>
              <td>2(2-0-4)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01420246 อิเล็กทรอนิกส์เชิงเลขเบื้องต้นภาคปฏิบัติการ
                (Laboratory in Introduction to Digital Electronics)
              </td>
              <td>1(0-3-2)</td>
            </tr>
            <hr />
            <p className="p-1 font-bold">
              ข. เลือกวิชาในสาขาวิชาวิทยาการคอมพิวเตอร์ ไม่น้อยกว่า 18
              หน่วยกิต
            </p>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418212** การโปรแกรมภาษาซี (C Programming)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418213** การโปรแกรมภาษาโคบอล (COBOL Programming)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418214** การโปรแกรมภาษาภาพ (Visual Programming)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418215** การโปรแกรมภาษาจาวา (Java Programming)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418216** หลักภาษาโปรแกรม (Principles of Programming
                Languages)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418217** การโปรแกรมภาษาลิสป์ (LISP Programming)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418218** การโปรแกรมภาษาโพรล็อก (Prolog Programming)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418219* การฝึกปฏิบัติการพัฒนาซอฟต์แวร์ (Practicum in
                Software Development)
              </td>
              <td>1(0-3-2)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418222** การประยุกต์อินเทอร์เน็ตเพื่อการพาณิชย์ (Internet
                Application for Commerce)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418234** การโปรแกรมอินเทอร์เน็ตของสรรพสิ่ง (Programming
                Internet of Things)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418235** ระบบปฏิบัติการยูนิกซ์และการโปรแกรมเปลือกระบบ
                (Unix Operating System and Shell Programming)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418311 การโปรแกรมเชิงค านวณแบบท้าทาย (Challenging
                Computational Programming)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418322** หลักระบบสารสนเทศ (Principles of Information System)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418323** วิทยาการข้อมูลเบื้องต้น (Introduction to Data
                Science)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418324 การจัดการคุณภาพสารสนเทศ (Information Quality
                Management)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418325 สถาปัตยกรรมระบบจัดการฐานข้อมูล (Database
                Management System Architecture)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418326 ฐานข้อมูลสื่อประสม (Multimedia Database)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418327 ระบบสนับสนุนการตัดสินใจและอัจฉริยะทางธุรกิจ
                (Decision Support and Business Intelligent Systems)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418328* ระบบบริหารจัดการสารสนเทศด้านทรัพยากรบุคคล
                (Human Resources Information System)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418335 การบีบอัดข้อมูล (Data Compression)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418342 การออกแบบและการพัฒนาระบบการวางแผนทรัพยากรองค์กร
                (Enterprise Resource Planning System Design and Development)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418343** การโปรแกรมคอมพิวเตอร์ทางธุรกิจ (Computer
                Programming in Business)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418344** การออกแบบและพัฒนาโปรแกรมประยุกต์สำหรับอุปกรณ์เคลื่อนที่
                (Mobile Application Design and Development)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418352 การสื่อสารข้อมูลและเครือข่าย (Data Communications
                and Networks)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418353* ระบบแบบกระจายและระบบกลุ่มเมฆ (Distributed and
                Cloud Systems
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418381** หลักการสร้างภาพเคลื่อนไหวด้วยคอมพิวเตอร์ (Principles
                of Computer Animation)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418382** คอมพิวเตอร์กราฟิกส์เชิงโต้ตอบเบื้องต้น
                (Introduction to Interactive Computer Graphics)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>01418383** การโปรแกรมเกม (Game Programming)</td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418384** การวิเคราะห์ภาพและคอมพิวเตอร์วิทัศน์ (Image
                Analysis and Computer Vision)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418385** การประมวลผลภาพดิจิทัล (Digital Image Processing)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418421** อันตรกิริยาระหว่างมนุษย์และคอมพิวเตอร์ (Human
                Computer Interaction)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418441** การจัดการมิติข้อมูลและรายงานทางธุรกิจ (Business
                Data Dimension and Report Management)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418442** เว็บเทคโนโลยีและเว็บบริการ (Web Technology and
                Web Services)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418451 การออกแบบและการบริหารเครือข่าย (Network Design and
                Administration)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418461 ระบบค้นคืนสารสนเทศ (Information Retrieval System)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418462** ปัญญาประดิษฐ์ (Artificial Intelligence)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418471** วิศวกรรมซอฟต์แวร์เบื้องต้น (Introduction to
                Software Engineering)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418472 การบริหารและการควบคุมโครงการ (Project Management
                and Control)
              </td>
              <td>3(2-2-5)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418473 การควบคุมและการตรวจสอบงานคอมพิวเตอร์ (Computer
                Control and Audit)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418474 การจัดการคุณภาพซอฟต์แวร์ (Software Quality
                Management)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418475** การทดสอบและทวนสอบซอฟต์แวร์ (Software Testing and
                Verification)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418476 การวัดซอฟต์แวร์ (Software Measurement)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418481** ภาพเคลื่อนไหวหลายตัวละคร (Multi-Character
                Animation)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418482** คอมพิวเตอร์กราฟิกส์ (Computer Graphics)
              </td>
              <td>3(3-0-6)</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                01418496 เรื่องเฉพาะทางวิทยาการคอมพิวเตอร์ (Selected Topic
                in Computer Science)
              </td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      ),
    },
  ];

  // --- Collapse ---
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "หมวดวิชาศึกษาทั่วไป (ไม่น้อยกว่า 30 หน่วยกิต)",
      children: (
        <table className="w-full">
          <tbody>
            <tr className="flex justify-between">
              <td>กลุ่มสาระอยู่ดีมีสุข</td>
              <td>ไม่น้อยกว่า 3 หน่วยกิต</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>กลุ่มสาระศาสตร์แห่งผู้ประกอบการ</td>
              <td>ไม่น้อยกว่า 3 หน่วยกิต</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>กลุ่มสาระภาษากับการสื่อสาร</td>
              <td>ไม่น้อยกว่า 3 หน่วยกิต</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>กลุ่มสาระพลเมืองไทยและพลเมืองโลก</td>
              <td>13 หน่วยกิต</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>กลุ่มสาระสุนทรียศาสตร์</td>
              <td>ไม่น้อยกว่า 3 หน่วยกิต</td>
            </tr>
            <hr />
            <tr className="flex justify-between">
              <td>
                และเลือกเรียนรายวิชาใน 5
                กลุ่มสาระของหมวดวิชาศึกษาทั่วไปเฉพาะที่เป็นรายวิชาของคณะต้นสังกัด
                ของหลักสูตรอีกไม่น้อยกว่า 5 หน่วยกิต
                ยกเว้นกลุ่มสาระภาษาและการสื่อสาร
              </td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      key: "2",
      label: "หมวดวิชาเฉพาะ (ไม่น้อยกว่า 92 หน่วยกิต)",
      children: (
        <div className="flex flex-col space-y-2">
          <Collapse items={itemsCoreSubjects} />
          <Collapse items={itemsRequiredSpecificSubjects} />
          <Collapse items={itemsSelectedSubjects} />
        </div>
      ),
    },
    {
      key: "3",
      label: "หมวดวิชาเลือกเสรี (ไม่น้อยกว่า 6  หน่วยกิต)",
      children: (
        <div className="flex justify-between">
          <p>หมวดวิชาเลือกเสรี</p>
          <p>ไม่น้อยกว่า 6 หน่วยกิต</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="relative pb-2">
        <h1 className="text-2xl">ปีของหลักสูตรทั้งหมด</h1>
        <Breadcrumb
          separator=">"
          items={[
            {
              href: "/curriculum",
              title: <HomeOutlined />,
            },
            {
              title: (
                <Link href={`/curriculum/${campusId}`}>
                  {allCampus[parseInt(campusId) - 1].name}
                </Link>
              ),
              menu: { items: menuItems },
            },
            {
              title: (
                <Link href={`/curriculum/${campusId}/${facultyId}`}>
                  {allFaculty[parseInt(facultyId) - 1].name}
                </Link>
              ),
              menu: { items: facultyMenuItems },
            },
            {
              title: (
                <Link href={`/curriculum/${campusId}/${facultyId}/${majorId}`}>
                  {allSciencMajor[parseInt(majorId) - 1].name}
                </Link>
              ),
              menu: { items: majorMenuItems },
            },
            {
              title: (
                <Link
                  href={`/curriculum/${campusId}/${facultyId}/${majorId}/${syllabusId}`}
                >
                  {allComSciSyllabus[parseInt(syllabusId) - 1].year}
                </Link>
              ),
              menu: { items: syllabusMenuItems },
            },
          ]}
        />
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
      </div>

      <main className="mt-4">
        <div className="flex w-full justify-between bg-[#B2BB1E] p-2 text-white rounded-xl mb-4">
          <div>
            <h3>โครงสร้างหลักสูตร</h3>
          </div>
          <div>
            <h3>จำนวนหน่วยกิต : ไม่น้อยกว่า 128 หน่วยกิต</h3>
          </div>
        </div>

        <Collapse items={items} />
      </main>
    </>
  );
};

export default SyllabusPage;
