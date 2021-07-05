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

const menuItems = (
  <Menu>
    <Menu.Item>Item 1</Menu.Item>
    <Menu.Item>Item 2</Menu.Item>
    <Menu.Item>Item 3</Menu.Item>
    <Menu.Item>Item 4</Menu.Item>
  </Menu>
);

const MortgageFormModal = ({
  visible,
  changeMortgageFormModalVisibility,
  changeMortgageFormStatusModal,
}) => {
  return (
    <Modal
      title="Mortgage application form"
      visible={visible}
      onCancel={() => changeMortgageFormModalVisibility()}
      onOk={() => changeMortgageFormModalVisibility()}
      footer={null}
      style={{
        borderRadius: 50,
        paddingBottom: 20,
        scrollPaddingBottom: 20,
      }}
      bodyStyle={{
        borderRadius: 50,
        overflowY: "scroll",
        height: "60vh",
        scrollPaddingBottom: 20,
      }}
      width="50vw"
    >
      <Row
        gutter={[8, 16]}
        style={{ width: "100%", height: "100%", paddingBottom: 20 }}
      >
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Input
            type="text"
            size="large"
            placeholder="Monthly salary"
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
          <Dropdown
            overlay={menuItems}
            trigger={["click"]}
            style={{ width: "10%" }}
            placement="bottomCenter"
          >
            <Button
              type="primary"
              size="large"
              block
              style={{
                backgroundColor: "#F5F5FB",
                borderRadius: 18,
                border: 0,
                color: "black",
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
              }}
            >
              Employment Status
              <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Dropdown
            overlay={menuItems}
            trigger={["click"]}
            style={{ width: "10%" }}
            placement="bottomCenter"
          >
            <Button
              type="primary"
              size="large"
              block
              style={{
                backgroundColor: "#F5F5FB",
                borderRadius: 18,
                border: 0,
                color: "black",
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
              }}
            >
              Employment State
              <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Dropdown
            overlay={menuItems}
            trigger={["click"]}
            style={{ width: "10%" }}
            placement="bottomCenter"
          >
            <Button
              type="primary"
              size="large"
              block
              style={{
                backgroundColor: "#F5F5FB",
                borderRadius: 18,
                border: 0,
                color: "black",
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
              }}
            >
              Employment Type
              <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Dropdown
            overlay={menuItems}
            trigger={["click"]}
            style={{ width: "10%" }}
            placement="bottomCenter"
          >
            <Button
              type="primary"
              size="large"
              block
              style={{
                backgroundColor: "#F5F5FB",
                borderRadius: 18,
                border: 0,
                color: "black",
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
              }}
            >
              State
              <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Dropdown
            overlay={menuItems}
            trigger={["click"]}
            style={{ width: "10%" }}
            placement="bottomCenter"
          >
            <Button
              type="primary"
              size="large"
              block
              style={{
                backgroundColor: "#F5F5FB",
                borderRadius: 18,
                border: 0,
                color: "black",
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
              }}
            >
              Occupation
              <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 24 }}>
          <Dropdown
            overlay={menuItems}
            trigger={["click"]}
            style={{ width: "10%" }}
            placement="bottomCenter"
          >
            <Button
              type="primary"
              size="large"
              block
              style={{
                backgroundColor: "#F5F5FB",
                borderRadius: 18,
                border: 0,
                color: "black",
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
              }}
            >
              Income period
              <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 24 }}>
          <Dropdown
            overlay={menuItems}
            trigger={["click"]}
            style={{ width: "10%" }}
            placement="bottomCenter"
          >
            <Button
              type="primary"
              size="large"
              block
              style={{
                backgroundColor: "#F5F5FB",
                borderRadius: 18,
                border: 0,
                color: "black",
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
              }}
            >
              Employer/Company Name
              <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 24 }}>
          <Dropdown
            overlay={menuItems}
            trigger={["click"]}
            style={{ width: "10%" }}
            placement="bottomCenter"
          >
            <Button
              type="primary"
              size="large"
              block
              style={{
                backgroundColor: "#F5F5FB",
                borderRadius: 18,
                border: 0,
                color: "black",
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
              }}
            >
              Job Title
              <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Input
            type="text"
            size="large"
            placeholder="Company Email"
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
            placeholder="mm/dd/yy"
            style={{
              borderRadius: 18,
              height: 50,
              outline: "none",
              border: "none",
              backgroundColor: "#F5F5FB",
            }}
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}></Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }} style={{ marginBottom: 20 }}>
          <CustomPrimaryButton
            isBlock={true}
            clickHandler={() => {
              changeMortgageFormModalVisibility();
              changeMortgageFormStatusModal();
            }}
          >
            Submit
          </CustomPrimaryButton>
        </Col>
      </Row>
    </Modal>
  );
};

export default MortgageFormModal;
