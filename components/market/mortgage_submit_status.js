import { useState } from "react";
import { Modal, Row, Col, Tag, Space, Button } from "antd";
import { PlayCircleFilled, EnvironmentFilled } from "@ant-design/icons";
import Image from "next/image";
import { CheckIcon } from "./icons";
import { CustomPrimaryButton } from "../../lib/helpers";

const MortgageFormStatusModal = ({
  visible,
  changeMortgageFormStatusModal,
}) => {
  return (
    <Modal
      title=""
      visible={visible}
      onCancel={() => changeMortgageFormStatusModal()}
      onOk={() => changeMortgageFormStatusModal()}
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
          <CheckIcon />
          <br />
          <h2
            style={{
              opacity: 0.6,
              textAlign: "center",
              fontFamily: "Poppins-Light",
            }}
          >
            Your mortgage application was
            <br /> successfully sent
          </h2>
          <br />
          <CustomPrimaryButton
            bgColor="#FFAC28"
            clickHandler={() => changeMortgageFormStatusModal()}
          >
            Go Back
          </CustomPrimaryButton>
        </Col>
      </Row>
    </Modal>
  );
};

export default MortgageFormStatusModal;
