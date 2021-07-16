import {
  Modal,
  Row,
  Col,
  Space,
  Button,
  Input,
  Dropdown,
  Menu,
  Tag,
  Card,
  Avatar,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import Image from "next/image";
import { CustomPrimaryButton } from "@lib/helpers";

const StaffAddModal = ({ visible, changeStaffAddModalVisibility }) => {
  return (
    <Modal
      title="Add new users"
      visible={visible}
      onCancel={() => changeStaffAddModalVisibility()}
      onOk={() => changeStaffAddModalVisibility()}
      footer={null}
      style={{
        borderRadius: 50,
      }}
      bodyStyle={{
        borderRadius: 50,
      }}
      width="50vw"
    >
      <Row gutter={[32, 32]} style={{ width: "100%", height: "100%" }}>
        <Col xs={{ span: 24 }} lg={{ span: 24 }} style={{ width: "100%" }}>
          <Input
            style={{
              backgroundColor: "#FAFAFD",
              height: 52,
              width: "inherit",
              borderRadius: 20,
            }}
            placeholder="Add by email"
            size="large"
            onChange={(e) =>
              console.info("Input value changed", e.target.value)
            }
          />
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 24 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <CustomPrimaryButton>Add</CustomPrimaryButton>
        </Col>
      </Row>
    </Modal>
  );
};

export default StaffAddModal;
