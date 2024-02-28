import { allCampus } from "@/data/allCampusData";
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
  };
};

const FacultyMajorPage = (props: Props) => {
  const { campus_id: campusId, faculty_id: facultyId } = props.params;

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

  return (
    <>
      <div className="relative pb-2">
        <h1 className="text-2xl">สาขาทั้งหมด</h1>
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
          ]}
        />
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
      </div>

      <div className="mt-4">
        {allSciencMajor.map((major) => {
          return (
            <Link
              href={`/curriculum/${campusId}/${facultyId}/${major.id}`}
              key={major.id}
            >
              <div className=" border bg-white p-2 m-2 rounded-md">
                {major.name}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default FacultyMajorPage;
