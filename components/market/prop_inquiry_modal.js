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
import { CustomPrimaryButton } from "../../lib/helpers";

const { Search, TextArea } = Input;
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
            <Col span={24}>
              <Card bordered={false} bodyStyle={{ padding: 0 }}>
                <Card.Meta
                  avatar={
                    <Image src="/profile_pic2.jpeg" width={100} height={100} />
                  }
                  title="Sky high estate"
                  description={
                    <>
                      <small>
                        Nicely finished 4 bedroom bungalow.
                        <br /> Waterfront Luxuriously Fitted Two(2) Beds,
                      </small>
                      <br />
                      <Tag
                        color="#E5FFE7"
                        style={{ borderRadius: 50, color: "#41C84E" }}
                      >
                        571 units
                      </Tag>
                      <Tag
                        color="#FFF3DF"
                        style={{ borderRadius: 50, color: "#FFAC28" }}
                      >
                        250 units available
                      </Tag>
                    </>
                  }
                />
              </Card>
            </Col>
            <Col
              span={24}
              style={{
                height: "100%",
                display: "flex",
                flexFlow: "column",
                alignItems: "start",
                justifyContent: "space-around",
              }}
            >
              <br />
              <small style={{ marginBottom: 10 }}>CLIENT INFO</small>
              <Space direction="horizontal" size="small" align="center">
                <Avatar src="/profile_pic2.jpeg" size="default" />
                <h4>Charles Nweze</h4>
              </Space>
              <br />
              <TextArea
                rows={7}
                placeholder="Your Message"
                style={{
                  borderRadius: 20,
                  width: "100%",
                  backgroundColor: "#F5F5FB",
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 8 }}
          style={{
            height: "100%",
            display: "flex",
            flexFlow: "column",
            alignItems: "start",
            justifyContent: "space-around",
          }}
        >
          <Space direction="vertical" size="small">
            <small>PRICE </small>
            <h1 style={{ margin: 0, padding: 0 }}>₦50,000,000</h1>
          </Space>
          <br />
          <Space direction="horizontal">
            <small>SIZE </small>
            <Tag color="#41085B" style={{ borderRadius: 50 }}>
              108.13 m2
            </Tag>
          </Space>
          <br />
          <Dropdown
            overlay={unitMenu}
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
              Unit
              <DownOutlined />
            </Button>
          </Dropdown>
          <br />
          {/* <br /> */}
          <Dropdown
            overlay={typeMenu}
            trigger={["click"]}
            style={{ width: "100%" }}
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
              Type
              <DownOutlined />
            </Button>
          </Dropdown>
          <br />
          {/* <br /> */}
          <Input
            type="text"
            suffix={"NGN"}
            size="large"
            placeholder="Your Budget"
            style={{
              borderRadius: 18,
              height: 50,
              outline: "none",
              border: "none",
              backgroundColor: "#F5F5FB",
            }}
          />
          {/* <Search
            placeholder="Your Budget"
            enterButton="NGN"
            size="large"
            style={{
              borderRadius: 18,
              height: 50,
              outline: "none",
              border: "none",
              backgroundColor: "#F5F5FB",
            }}
            // suffix={suffix}
            // onSearch={onSearch}
          /> */}
          <br />
          {/* <br /> */}
          <CustomPrimaryButton isBlock={true}>Send Inquiry</CustomPrimaryButton>
        </Col>
      </Row>
    </Modal>
  );
};

export default PropInquiryModal;
