import { allCampus } from "@/data/allCampusData";
import { allComSciSyllabus } from "@/data/allComSciSyllabusData";
import { allFaculty } from "@/data/allFacultyData";
import { allSciencMajor } from "@/data/allSciMajor";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    campus_id: string;
    faculty_id: string;
    major_id: string;
  };
};

const MajorSyllabusPage = (props: Props) => {
  const {
    campus_id: campusId,
    faculty_id: facultyId,
    major_id: majorId,
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
          ]}
        />
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
      </div>

      <div className="mt-4">
        {allComSciSyllabus.map((syllabus) => {
          return (
            <Link
              href={`/curriculum/${campusId}/${facultyId}/${majorId}/${syllabus.id}`}
              key={syllabus.id}
            >
              <div className=" border bg-white p-2 m-2 rounded-md">
                {syllabus.year}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MajorSyllabusPage;
