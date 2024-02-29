"use client";

import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { UploadProps, Upload } from "antd";

import Result from "@/components/Result";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import {
  transcriptSelector,
  uploadTranscript,
} from "@/store/slices/transcriptSlice";
import { showNotification } from "@/store/slices/notificationSlice";
import { NotificationType } from "@/types/notificationType";

const { Dragger } = Upload;

const UploadTranscriptPage = () => {
  // Redux
  const dispatch = useAppDispatch();
  const transcriptReducer = useAppSelector(transcriptSelector);

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
        setIsUploaded(true);
      }
      if (status === "done") {
        console.log(`${info.file.name} file uploaded successfully.`);
        if (info.file.originFileObj) {
          handleUpload(info.file.originFileObj);
        }
      } else if (status === "error") {
        console.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleUpload = async (file: File) => {
    console.log(file);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const actionResult = await dispatch(uploadTranscript(formData));
      if (uploadTranscript.fulfilled.match(actionResult)) {
        console.log("transcriptReducer", transcriptReducer);

        dispatch(
          showNotification({
            message: "อัพโหลดทรานสคริปสำเร็จ",
            type: NotificationType.Success,
          })
        );
      } else {
        dispatch(
          showNotification({
            message: "อัพโหลดทรานสคริปไม่สำเร็จ",
            type: NotificationType.Error,
          })
        );
      }
    } catch (error) {
      console.error("Failed to upload transcript", error);
    }
    console.log("transcriptReducer", transcriptReducer);
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
      ) : transcriptReducer.status === "loading" ? (
        <div className="mt-12 px-0 lg:px-28 flex justify-center items-center">
          <div className="animate-spin rounded-full h-40 w-40 border-t-2 border-b-2 border-[#B2BB1E]"></div>
        </div>
      ) : (
        transcriptReducer.transcriptData && (
          <Result transcriptDataProps={transcriptReducer.transcriptData} />
        )
      )}
    </>
  );
};

export default UploadTranscriptPage;
