import { Modal, Row, Col, Space, Button, Input, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const unitMenu = (
  <Menu>
    <Menu.Item>units 14</Menu.Item>
    <Menu.Item>units 14</Menu.Item>
    <Menu.Item>units 14</Menu.Item>
    <Menu.Item>units 14</Menu.Item>
    <Menu.Item>units 14</Menu.Item>
  </Menu>
);

const typeMenu = (
  <Menu>
    <Menu.Item>3 Bedroom, Semi Detached Bungalow</Menu.Item>
    <Menu.Item>3 Bedroom, Semi Detached Bungalow</Menu.Item>
    <Menu.Item>3 Bedroom, Semi Detached Bungalow</Menu.Item>
    <Menu.Item>3 Bedroom, Semi Detached Bungalow</Menu.Item>
    <Menu.Item>3 Bedroom, Semi Detached Bungalow</Menu.Item>
  </Menu>
);

const PropInquiryModal = ({ visible, changeInquiryModalVisibility }) => {
  return (
    <Modal
      title="Property Inquiry"
      visible={visible}
      onCancel={() => changeInquiryModalVisibility()}
      onOk={() => changeInquiryModalVisibility()}
      footer={null}
      style={{
        borderRadius: 50,
      }}
      bodyStyle={{
        borderRadius: 50,
      }}
      width="70vw"
    >
      <Row gutter={[8, 32]} style={{ width: "100%", height: "100%" }}>
        <Col xs={{ span: 24 }} lg={{ span: 16 }}>
          <Row gutter={[16, 16]} style={{ margin: 0 }}>
            <Col span={24}></Col>
          </Row>
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 8 }}
          style={{
            height: "100%",
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Space size="middle" direction="vertical" align="center">
            <Dropdown overlay={unitMenu}>
              <span>
                Unit
                <DownOutlined />
              </span>
            </Dropdown>
            <Dropdown overlay={typeMenu}>
              <span>
                Type
                <DownOutlined />
              </span>
            </Dropdown>
            <Input
              type="number"
              suffix={"NGN"}
              size="large"
              placeholder="Your Budget"
              style={{
                borderRadius: 16,
                height: 50,
                outline: "none",
                border: "none",
                backgroundColor: "#F5F5FB",
              }}
            />
            <Button
              type="link"
              size="large"
              style={{
                color: "#FFF",
                backgroundColor: "#41085B",
                borderRadius: 18,
              }}
            >
              Send Inquiry
            </Button>
          </Space>
        </Col>
      </Row>
    </Modal>
  );
};

export default PropInquiryModal;
