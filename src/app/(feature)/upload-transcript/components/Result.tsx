"use client";

import { TranscriptData } from "@/types/resultUploaded";
import {
  calTotalCredit,
  calAesthetics,
  calCoreCourse,
  calElectiveCourse,
  calFacultyOfScience,
  calFreeElective,
  calMandatoryCourse,
  calPercentLanguageAndCommunication,
  calPercentLiveHappily,
  calPercentScienceOfEntrepreneurship,
  calThaiCitizensAndWorldCitizens,
  numberFreeElective,
} from "@/utils/calResult";
import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  Progress,
  ProgressProps,
  Space,
  Table,
  TableColumnType,
  TableColumnsType,
} from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";

type Props = {
  transcriptDataProps: TranscriptData;
};

const twoColors: ProgressProps["strokeColor"] = {
  "0%": "#108ee9",
  "100%": "#87d068",
};

interface DataType {
  course_id: string;
  course_name: string;
  course_credit: number;
  student_grade: string;
}

type DataIndex = keyof DataType;

const Result = (props: Props) => {
  const [animationPercentage, setAnimationPercentage] = useState(0);

  // Props
  const { transcriptDataProps } = props;
  console.log("transcriptDataProps", transcriptDataProps);
  const totalCreditPerCategory = transcriptDataProps.total_credit_per_category;
  const totalCredit =
    totalCreditPerCategory.อยู่ดีมีสุข +
    totalCreditPerCategory.ศาสตร์แห่งผู้ประกอบการ +
    totalCreditPerCategory.ภาษากับการสื่อสาร +
    totalCreditPerCategory.พลเมืองไทยและพลเมืองโลก +
    totalCreditPerCategory.สุนทรียศาสตร์ +
    totalCreditPerCategory.วิชาแกน +
    totalCreditPerCategory.วิชาเฉพาะบังคับ +
    totalCreditPerCategory.วิชาเฉพาะเลือก;

  console.log("totalCredit", totalCredit);

  useEffect(() => {
    setAnimationPercentage(0);
    const interval = setInterval(() => {
      setAnimationPercentage((prevPercentage) => {
        const nextPercentage = prevPercentage + 1;
        return nextPercentage <= calTotalCredit(totalCredit)
          ? nextPercentage
          : prevPercentage;
      });
    }, 30); // Adjust the interval based on your preference

    return () => clearInterval(interval);
  }, [totalCredit]);

  // search table
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<any>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: "รหัสวิชา",
      dataIndex: "course_id",
      key: "course_id",
      width: "10%",
      ...getColumnSearchProps("course_id"),
      sorter: (a, b) =>
        a.course_id.toString().localeCompare(b.course_id.toString()),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "ชื่อวิชา",
      dataIndex: "course_name",
      key: "course_name",
      width: "80%",
      ...getColumnSearchProps("course_name"),
    },
    {
      title: "หน่วยกิต",
      dataIndex: "course_credit",
      key: "course_credit",
      width: "5%",
      sorter: (a, b) => a.course_credit - b.course_credit,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "เกรด",
      dataIndex: "student_grade",
      key: "student_grade",
      width: "5%",
      sorter: (a, b) => a.student_grade.length - b.student_grade.length,
      sortDirections: ["descend", "ascend"],
    },
  ];
  const mobileColumns: TableColumnsType<DataType> = [
    {
      title: "รหัสวิชา",
      dataIndex: "course_id",
      key: "course_id",
      width: "10%",
      ...getColumnSearchProps("course_id"),
    },
    {
      title: "ชื่อวิชา",
      dataIndex: "course_name",
      key: "course_name",
      width: "80%",
      ...getColumnSearchProps("course_name"),
    },
    {
      title: "หน่วยกิต",
      dataIndex: "course_credit",
      key: "course_credit",
      width: "5%",
    },
    {
      title: "เกรด",
      dataIndex: "student_grade",
      key: "student_grade",
      width: "5%",
    },
  ];

  return (
    <div className="mt-4">
      <div className="grid md:grid-cols-12 gap-4">
        <div className=" col-span-12 md:col-span-5 border-2 p-4 rounded-xl bg-white">
          <h3 className="my-2 text-xl">
            {transcriptDataProps.student_en_title}{" "}
            {transcriptDataProps.student_en_name}
          </h3>
          <hr className="mb-2" />
          <p>
            {transcriptDataProps.student_th_title}{" "}
            {transcriptDataProps.student_th_name}
          </p>
          <p>รหัสนิสิต {transcriptDataProps.student_id}</p>
          <p>เกรดเฉลี่ย {transcriptDataProps.student_cum_gpa}</p>
          <p>หลักสูตร {transcriptDataProps.student_major}</p>
          <p>คณะ {transcriptDataProps.student_faculty}</p>
          <p>หน่วยกิตที่สอบผ่านทั้งหมด {totalCredit} หน่วยกิต</p>
          <div className="flex gap-1">
            สถานะ{" "}
            {transcriptDataProps.is_graduate ? (
              <p className=" text-success">ผ่าน</p>
            ) : (
              <p className="text-danger">ไม่ผ่าน</p>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center col-span-12 md:col-span-7">
          <Progress
            type="dashboard"
            status="active"
            size={200}
            percent={animationPercentage}
            strokeColor={twoColors}
          />

          <p className=" max-w-[500px] text-center text-gray-500">
            ตรวจสอบสถานะการจบการศึกษาของคุณ
            หากพบวิชาที่ไม่ผ่านหรือไม่ได้ลงทะเบียน
            กรุณาวางแผนหรือติดต่ออาจารย์ที่ปรึกษา
          </p>
        </div>
      </div>
      <hr className="border border-gray-200 my-4"></hr>

      <div className="grid md:grid-cols-12 gap-8">
        <div className=" col-span-6">
          <div className="flex flex-col">
            <h3 className="my-2 text-xl text-center">
              หมวดหมู่วิชาศึกษาทั่วไป (30 หน่วยกิต)
            </h3>
            <p>
              กลุ่มสาระอยู่ดีมีสุข (
              {transcriptDataProps.total_credit_per_category.อยู่ดีมีสุข}/3
              หน่วยกิต)
            </p>
            <Progress
              percent={calPercentLiveHappily(
                transcriptDataProps.total_credit_per_category.อยู่ดีมีสุข
              )}
              status="active"
            />
            <p>
              กลุ่มสาระศาสตร์แห่งผู้ประกอบการ (
              {
                transcriptDataProps.total_credit_per_category
                  .ศาสตร์แห่งผู้ประกอบการ
              }
              /3 หน่วยกิต)
            </p>
            <Progress
              percent={calPercentScienceOfEntrepreneurship(
                transcriptDataProps.total_credit_per_category
                  .ศาสตร์แห่งผู้ประกอบการ
              )}
              status="active"
            />
            <p>
              กลุ่มสาระภาษากับการสื่อสาร (
              {transcriptDataProps.total_credit_per_category.ภาษากับการสื่อสาร}
              /13 หน่วยกิต)
            </p>
            <Progress
              percent={calPercentLanguageAndCommunication(
                transcriptDataProps.total_credit_per_category.ภาษากับการสื่อสาร
              )}
              status="active"
            />
            <p>
              กลุ่มสาระพลเมืองไทยและพลเมืองโลก (
              {
                transcriptDataProps.total_credit_per_category
                  .พลเมืองไทยและพลเมืองโลก
              }
              /3 หน่วยกิต)
            </p>
            <Progress
              percent={calThaiCitizensAndWorldCitizens(
                transcriptDataProps.total_credit_per_category
                  .พลเมืองไทยและพลเมืองโลก
              )}
              status="active"
            />
            <p>
              กลุ่มสาระสุนทรียศาสตร์ (
              {transcriptDataProps.total_credit_per_category.สุนทรียศาสตร์}/3
              หน่วยกิต)
            </p>
            <Progress
              percent={calAesthetics(
                transcriptDataProps.total_credit_per_category.สุนทรียศาสตร์
              )}
              status="active"
            />
            <p>
              กลุ่มสาระคณะวิทยาศาสตร์ (
              {transcriptDataProps.total_credit_per_category.คณะวิทยาศาสตร์}/5
              หน่วยกิต)
            </p>
            <Progress
              percent={calFacultyOfScience(
                transcriptDataProps.total_credit_per_category.คณะวิทยาศาสตร์
              )}
              status="active"
            />
          </div>
        </div>
        <div className=" col-span-6">
          <div className="flex flex-col">
            <h3 className="my-2 text-xl text-center">
              หมวดหมู่วิชาเฉพาะ (92 หน่วยกิต)
            </h3>
            <p>
              วิชาแกน ({transcriptDataProps.total_credit_per_category.วิชาแกน}
              /16 หน่วยกิต)
            </p>
            <Progress
              percent={calCoreCourse(
                transcriptDataProps.total_credit_per_category.วิชาแกน
              )}
              status="active"
            />
            <p>
              วิชาเฉพาะบังคับ (
              {transcriptDataProps.total_credit_per_category.วิชาเฉพาะบังคับ}/55
              หน่วยกิต)
            </p>
            <Progress
              percent={calMandatoryCourse(
                transcriptDataProps.total_credit_per_category.วิชาเฉพาะบังคับ
              )}
              status="active"
            />
            <p>
              วิชาเฉพาะเลือก (
              {transcriptDataProps.total_credit_per_category.วิชาเฉพาะเลือก}/21
              หน่วยกิต)
            </p>
            <Progress
              percent={calElectiveCourse(
                transcriptDataProps.total_credit_per_category.วิชาเฉพาะเลือก
              )}
              status="active"
            />
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="my-2 text-xl text-center">
              หมวดวิชาเลือกเสรี (6 หน่วยกิต)
            </h3>
            <p>
              วิชาเลือกเสรี (
              {numberFreeElective(
                transcriptDataProps.total_credit_per_category.อยู่ดีมีสุข,
                transcriptDataProps.total_credit_per_category
                  .ศาสตร์แห่งผู้ประกอบการ,
                transcriptDataProps.total_credit_per_category.ภาษากับการสื่อสาร,
                transcriptDataProps.total_credit_per_category
                  .พลเมืองไทยและพลเมืองโลก,
                transcriptDataProps.total_credit_per_category.สุนทรียศาสตร์,
                transcriptDataProps.total_credit_per_category.คณะวิทยาศาสตร์
              )}
              /6 หน่วยกิต)
            </p>
            <Progress
              percent={calFreeElective(
                transcriptDataProps.total_credit_per_category.อยู่ดีมีสุข,
                transcriptDataProps.total_credit_per_category
                  .ศาสตร์แห่งผู้ประกอบการ,
                transcriptDataProps.total_credit_per_category.ภาษากับการสื่อสาร,
                transcriptDataProps.total_credit_per_category
                  .พลเมืองไทยและพลเมืองโลก,
                transcriptDataProps.total_credit_per_category.สุนทรียศาสตร์,
                transcriptDataProps.total_credit_per_category.คณะวิทยาศาสตร์
              )}
              status="active"
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="my-2 text-xl">วิชาที่ลงทะเบียนแล้ว</h3>
        <div className=" hidden md:block">
          <Table
            columns={columns}
            dataSource={transcriptDataProps.enrolled_courses}
          />
        </div>
        <div className="block md:hidden">
          <Table
            columns={mobileColumns}
            dataSource={transcriptDataProps.enrolled_courses}
          />
        </div>
      </div>
    </div>
  );
};

export default Result;
