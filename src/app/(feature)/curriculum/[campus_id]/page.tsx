import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { allCampus } from "@/data/allCampusData";
import { allFaculty } from "@/data/allFacultyData";

const initMenuItem = (allCampus: any) => {
  return allCampus.map((campus: any) => {
    return {
      key: campus.id,
      label: <Link href={`/curriculum/${campus.id}`}>{campus.name}</Link>,
    };
  });
};

const menuItems = initMenuItem(allCampus);

type Props = {
  params: {
    campus_id: string;
  };
};

const CampusFacultyPage = (props: Props) => {
  const { campus_id: campusId } = props.params;

  return (
    <>
      <div className="relative pb-2">
        <h1 className="text-2xl">คณะทั้งหมด</h1>
        <Breadcrumb
          separator=">"
          items={[
            {
              href: "/curriculum",
              title: <HomeOutlined />,
            },
            {
              title: (
                <Link href="/curriculum">
                  {allCampus[parseInt(campusId) - 1].name}
                </Link>
              ),
              menu: { items: menuItems },
            },
          ]}
        />
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
      </div>

      <div className="mt-4">
        {allFaculty.map((faculty) => {
          return (
            <Link
              href={`/curriculum/${campusId}/${faculty.id}`}
              key={faculty.id}
            >
              <div className=" border bg-white p-2 m-2 rounded-md">
                {faculty.name}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CampusFacultyPage;
