"use client";

import React, { useState, useRef } from "react";
import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  ProgressProps,
  Space,
  UploadProps,
  message,
  Progress,
  Upload,
  Table,
} from "antd";
import type { GetRef, TableColumnsType, TableColumnType } from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const twoColors: ProgressProps["strokeColor"] = {
  "0%": "#108ee9",
  "100%": "#87d068",
};

type InputRef = GetRef<typeof Input>;

interface DataType {
  course_id: string;
  course_name: string;
  course_credit: number;
  course_category: string;
  course_faculty: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    course_id: "01418442",
    course_name: "hell web tech",
    course_credit: 3,
    course_category: "อยู่ดีมีสุข",
    course_faculty: "คณะศึกษาศาสตร์",
  },
  {
    course_id: "01361102",
    course_name: "Course name 2",
    course_credit: 2,
    course_category: "ศาสตร์แห่งผู้ประกอบการ",
    course_faculty: "คณะศึกษาศาสตร์",
  },
  {
    course_id: "01361103",
    course_name: "Course name 3",
    course_credit: 4,
    course_category: "อยู่ดีมีสุข",
    course_faculty: "คณะศึกษาศาสตร์",
  },
  {
    course_id: "01361104",
    course_name: "Course name 4",
    course_credit: 3,
    course_category: "ภาษากับการสื่อสาร",
    course_faculty: "วิทยาลัยบูรณาการศาสตร์",
  },
];

const UploadTranscriptPage = () => {
  // upload transcript
  const [isUploaded, setIsUploaded] = React.useState(false);

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "http://localhost:3000/upload-transcript",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);

        if (info.file.originFileObj) {
          handleUpload(info.file.originFileObj);
        }
        setIsUploaded(true);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleUpload = (file: File) => {
    console.log(file);
  };

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
      sorter: (a, b) => a.course_id.length - b.course_id.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "ชื่อวิชา",
      dataIndex: "course_name",
      key: "course_name",
      width: "30%",
      ...getColumnSearchProps("course_name"),
    },
    {
      title: "หน่วยกิต",
      dataIndex: "course_credit",
      key: "course_credit",
      width: "5%",
    },
    {
      title: "กลุ่มสาระ",
      dataIndex: "course_category",
      key: "course_category",
      width: "25%",
      ...getColumnSearchProps("course_category"),
      sorter: (a, b) => a.course_category.length - b.course_category.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "คณะ",
      dataIndex: "course_faculty",
      key: "course_faculty",
      width: "30%",
      ...getColumnSearchProps("course_faculty"),
      sorter: (a, b) => a.course_faculty.length - b.course_faculty.length,
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
      width: "35%",
      ...getColumnSearchProps("course_name"),
    },
    {
      title: "กลุ่มสาระ",
      dataIndex: "course_category",
      key: "course_category",
      width: "25%",
      ...getColumnSearchProps("course_category"),
    },
    {
      title: "คณะ",
      dataIndex: "course_faculty",
      key: "course_faculty",
      width: "30%",
      ...getColumnSearchProps("course_faculty"),
    },
  ];

  return (
    <>
      <div className="relative">
        <h1 className="text-2xl">อัพโหลดทรานสคริปของคุณ</h1>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B2BB1E]"></span>
      </div>

      {isUploaded === false ? (
        <div className="mt-8 px-0 lg:px-28">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              คลิกหรือลากวางไฟล์ที่นี้เพื่ออัพโหลด
            </p>
            <p className="ant-upload-hint">
              รองรับเฉพาะไฟล์ STD_GRADE_REPORT ที่มาจาก my.ku.th เท่านั้น
            </p>
          </Dragger>
        </div>
      ) : (
        <div className="mt-8">
          <div className="flex flex-col w-full justify-center items-center">
            <Progress
              type="dashboard"
              status="active"
              size={200}
              percent={90}
              strokeColor={twoColors}
            />
            <p className=" max-w-[500px] text-center text-gray-500">
              ตรวจสอบสถานะการจบการศึกษาของคุณ
              หากพบวิชาที่ไม่ผ่านหรือไม่ได้ลงทะเบียน
              กรุณาวางแผนหรือติดต่ออาจารย์ที่ปรึกษา
            </p>
          </div>
          <hr className="border border-gray-200 my-4"></hr>

          <div className="grid md:grid-cols-12 gap-8">
            <div className=" col-span-6">
              <div className="flex flex-col">
                <h3 className="my-2 text-xl text-center">
                  หมวดหมู่วิชาศึกษาทั่วไป (30 หน่วยกิต)
                </h3>
                <p>กลุ่มสาระอยู่ดีมีสุข (3 หน่วยกิต)</p>
                <Progress percent={30} status="active" />
                <p>กลุ่มสาระศาสตร์แห่งผู้ประกอบการ (3 หน่วยกิต)</p>
                <Progress percent={50} status="active" />
                <p>กลุ่มสาระภาษากับการสื่อสาร (13 หน่วยกิต)</p>
                <Progress percent={70} status="active" />
                <p>กลุ่มสาระพลเมืองไทยและพลเมืองโลก (3 หน่วยกิต)</p>
                <Progress percent={100} status="active" />
                <p>กลุ่มสาระสุนทรียศาสตร์ (3 หน่วยกิต)</p>
                <Progress percent={50} status="active" />
                <p>กลุ่มสาระคณะวิทยาศาสตร์ (5 หน่วยกิต)</p>
                <Progress percent={50} status="active" />
              </div>
            </div>
            <div className=" col-span-6">
              <div className="flex flex-col">
                <h3 className="my-2 text-xl text-center">
                  หมวดหมู่วิชาเฉพาะ (92 หน่วยกิต)
                </h3>
                <p>วิชาแกน (16 หน่วยกิต)</p>
                <Progress percent={30} status="active" />
                <p>วิชาเฉพาะบังคับ (55 หน่วยกิต)</p>
                <Progress percent={50} status="active" />
                <p>วิชาเฉพาะเลือก (21 หน่วยกิต)</p>
                <Progress percent={70} status="active" />
              </div>
              <div className="flex flex-col mt-4">
                <h3 className="my-2 text-xl text-center">
                  หมวดวิชาเลือกเสรี (6 หน่วยกิต)
                </h3>
                <p>วิชาเลือกเสรี (6 หน่วยกิต)</p>
                <Progress percent={30} status="active" />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="my-2 text-xl">วิชาที่ยังไม่สมบูรณ์</h3>
            <div className=" hidden md:block">
              <Table columns={columns} dataSource={data} />
            </div>
            <div className="block md:hidden">
              <Table columns={mobileColumns} dataSource={data} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadTranscriptPage;
