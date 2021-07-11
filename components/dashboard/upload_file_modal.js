import { useState } from "react";
import { Modal, Row, Col, Space, Button, Upload, message } from "antd";
import { FileAddFilled } from "@ant-design/icons";
import Image from "next/image";
import { CustomPrimaryButton } from "../../lib/helpers";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const UploadCSVModal = ({ visible, changeUploadCSVModalVisibility }) => {
  return (
    <Modal
      title=""
      visible={visible}
      onCancel={() => changeUploadCSVModalVisibility()}
      onOk={() => changeUploadCSVModalVisibility()}
      footer={null}
      style={{
        borderRadius: 50,
      }}
      bodyStyle={{
        borderRadius: 50,
      }}
      width="50vw"
    >
      <Row gutter={[8, 32]} style={{ width: "100%", height: "100%" }}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 24 }}
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              // opacity: 0.6,
              textAlign: "center",
              fontFamily: "Poppins-Medium",
              margin: 0,
            }}
          >
            Upload your files
          </h2>
          <span
            style={{
              opacity: 0.6,
              textAlign: "center",
              fontFamily: "Poppins-Light",
              marginBottom: 15,
            }}
          >
            File should be CSV only.
          </span>
          <Dragger
            {...props}
            style={{ width: 400, borderRadius: 30, backgroundColor: "#F3F8FF" }}
          >
            <br />
            <p className="ant-upload-drag-icon">
              <FileAddFilled />
            </p>
            <p className="ant-upload-hint">
              Drag & drop your files here or <br />
              click import to upload
            </p>
            <br />
          </Dragger>

          {/* bgColor: #F3F8FF, border: #4791FF */}
        </Col>
      </Row>
    </Modal>
  );
};

export default UploadCSVModal;
