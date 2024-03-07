import { Button, Select } from "antd";
import React from "react";

type Props = {
  subjectOptions: {
    title: string;
    options: { label: string; value: string }[];
  };
  grade: { label: string; value: string }[];
  handleAdd: () => void;
  handleDelete: () => void;
  count: number[];
};

const CourseInput = (props: Props) => {
  const { subjectOptions, grade, handleAdd, handleDelete, count } = props;

  return (
    <>
      <div className="flex justify-between">
        <h4 className="flex justify-center items-center">
          {subjectOptions.title}
        </h4>
        <div className="flex space-x-3">
          <Button type="primary" onClick={handleAdd}>
            + เพิ่ม
          </Button>
          <Button type="primary" onClick={handleDelete}>
            - ลบ
          </Button>
        </div>
      </div>
      {count.map((index) => (
        <div className="flex space-x-3 my-2" key={index}>
          <Select
            placeholder="ค้นหาด้วยรหัสวิชาหรือชื่อวิชา"
            style={{ width: "90%" }}
            allowClear
            options={subjectOptions.options}
          />
          <Select
            style={{ width: "10%" }}
            allowClear
            placeholder="เกรด"
            options={grade}
          />
        </div>
      ))}
    </>
  );
};

export default CourseInput;
