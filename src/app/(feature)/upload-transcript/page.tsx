"use client";

import React from "react";
import { CloseCircleOutlined, InboxOutlined } from "@ant-design/icons";
import GoingUp from "../../../../public/undraw_going_up_re_86kg.svg";
import { UploadProps, Upload, Result, Button, Typography } from "antd";

import ResultTranscript from "@/app/(feature)/upload-transcript/components/ResultTranscript";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import {
  transcriptSelector,
  uploadTranscript,
} from "@/store/slices/transcriptSlice";
import { showNotification } from "@/store/slices/notificationSlice";
import { NotificationType } from "@/types/notificationType";
import Image from "next/image";

const { Dragger } = Upload;

const { Paragraph, Text } = Typography;

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
    action: "https://ku-transcript.vercel.app", // for production
    onChange(info) {
      const { status } = info.file;
      try {
        if (info.file.name.includes("STD_GRADE_REPORT_") === false) {
          throw new Error("ชื่อไฟล์ไม่ถูกต้อง");
        }
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
      } catch (error: any) {
        console.error("Failed to upload transcript", error);
        dispatch(
          showNotification({
            message: "มีข้อผิดพลาดในการอัพโหลด: " + error.message,
            type: NotificationType.Error,
          })
        );
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleUpload = async (file: File) => {
    console.log(file.name);
    const formData = new FormData();
    formData.append("file", file);
    const actionResult = await dispatch(uploadTranscript(formData));
    if (uploadTranscript.fulfilled.match(actionResult)) {
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
            <Image
              src={GoingUp}
              width={1000}
              height={1000}
              alt="upload"
              className="mx-auto w-40 h-40 text-white"
            />
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
      ) : transcriptReducer.transcriptData &&
        transcriptReducer.status !== "failed" ? (
        <ResultTranscript
          transcriptDataProps={transcriptReducer.transcriptData}
        />
      ) : (
        <Result
          status="error"
          title="เอ๊ะ! มีบางอย่างผิดพลาด"
          subTitle="ขออภัย ไม่สามารถอัพโหลดทรานสคริปของคุณได้"
          extra={[
            <Button danger key="console" onClick={() => setIsUploaded(false)}>
              ลองอีกครั้ง
            </Button>,
          ]}
        >
          <div className="desc">
            <Paragraph>
              <Text
                strong
                style={{
                  fontSize: 16,
                }}
              >
                กรุณาตรวจสอบข้อผิดพลาดด้านล่าง
              </Text>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined className="site-result-demo-error-icon" />{" "}
              ชื่อไฟล์ไม่ถูกต้อง
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined className="site-result-demo-error-icon" />{" "}
              ไฟล์ที่อัพโหลดไม่ใช่ไฟล์ STD_GRADE_REPORT
            </Paragraph>
          </div>
        </Result>
      )}
    </>
  );
};

export default UploadTranscriptPage;
