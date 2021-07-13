import { useState } from "react";
import {
  Modal,
  Row,
  Col,
  Tag,
  Space,
  Button,
  Dropdown,
  Menu,
  Input,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CustomPrimaryButton } from "../../lib/helpers";

const DashMortgageFormModal = ({
  visible,
  changeDashMortgageFormModalVisibility,
}) => {
  return (
    <Modal
      title="Mortgage application form"
      visible={visible}
      onCancel={() => changeDashMortgageFormModalVisibility()}
      onOk={() => changeDashMortgageFormModalVisibility()}
      footer={null}
      style={{
        borderRadius: 50,
        paddingBottom: 20,
        // scrollPaddingBottom: 20,
      }}
      bodyStyle={{
        borderRadius: 50,
        overflowY: "scroll",
        // height: "60vh",
        scrollPaddingBottom: 20,
      }}
      width="50vw"
    >
      <Row
        gutter={[8, 16]}
        style={{ width: "100%", height: "100%", paddingBottom: 10 }}
      >
        <Col xs={{ span: 24 }} lg={{ span: 24 }}>
          <Input
            type="text"
            size="large"
            placeholder="Name"
            style={{
              borderRadius: 18,
              height: 50,
              outline: "none",
              border: "none",
              backgroundColor: "#F5F5FB",
            }}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Input
            type="text"
            size="large"
            placeholder="Email"
            style={{
              borderRadius: 18,
              height: 50,
              outline: "none",
              border: "none",
              backgroundColor: "#F5F5FB",
            }}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Input
            type="text"
            size="large"
            placeholder="Phone number"
            style={{
              borderRadius: 18,
              height: 50,
              outline: "none",
              border: "none",
              backgroundColor: "#F5F5FB",
            }}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 24 }}>
          <Input
            type="text"
            size="large"
            placeholder="Address"
            style={{
              borderRadius: 18,
              height: 50,
              outline: "none",
              border: "none",
              backgroundColor: "#F5F5FB",
            }}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Input
            type="text"
            size="large"
            placeholder=""
            style={{
              borderRadius: 18,
              height: 50,
              outline: "none",
              border: "none",
              backgroundColor: "#F5F5FB",
            }}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Input
            type="text"
            size="large"
            placeholder="Owner agreement"
            style={{
              borderRadius: 18,
              height: 50,
              outline: "none",
              border: "none",
              backgroundColor: "#F5F5FB",
            }}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Input
            type="text"
            size="large"
            placeholder="Deed of assignment"
            style={{
              borderRadius: 18,
              height: 50,
              outline: "none",
              border: "none",
              backgroundColor: "#F5F5FB",
            }}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Input
            type="text"
            size="large"
            placeholder="Land survey Document"
            style={{
              borderRadius: 18,
              height: 50,
              outline: "none",
              border: "none",
              backgroundColor: "#F5F5FB",
            }}
          />
        </Col>
        {/* <Col xs={{ span: 24 }} lg={{ span: 12 }}></Col> */}
        <Col xs={{ span: 24 }} lg={{ span: 24 }} style={{}}>
          <CustomPrimaryButton
            isBlock={true}
            clickHandler={() => {
              changeDashMortgageFormModalVisibility();
            }}
          >
            Submit
          </CustomPrimaryButton>
        </Col>
      </Row>
    </Modal>
  );
};

export default DashMortgageFormModal;
