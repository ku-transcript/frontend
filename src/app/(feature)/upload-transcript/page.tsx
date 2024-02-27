"use client";

import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import {
  UploadProps,
  message,
  Upload,
} from "antd";

import Result from "@/components/Result";

const { Dragger } = Upload;

const UploadTranscriptPage = () => {
  // upload transcript
  const [isUploaded, setIsUploaded] = React.useState(false);

  const props: UploadProps = {
    name: "file",
    multiple: true,
    // action: "http://localhost:3000/upload-transcript", // for local development
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188", // for production
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
        <Result />
      )}
    </>
  );
};

export default UploadTranscriptPage;
