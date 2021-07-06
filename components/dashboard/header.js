import {
  Row,
  Col,
  Input,
  Badge,
  Avatar,
  Dropdown,
  Space,
  Button,
  Menu,
} from "antd";
import { BellFilled, DownOutlined, SearchOutlined } from "@ant-design/icons";

const dashMenu = (
  <Menu defaultValue={["a"]}>
    <Menu.Item key="a">Menu Item 1</Menu.Item>
    <Menu.Item key="b">Menu Item 2</Menu.Item>
    <Menu.Item key="c">Menu Item 3</Menu.Item>
    <Menu.Item key="d">Menu Item 4</Menu.Item>
  </Menu>
);

const DashHeader = () => {
  return (
    <Row style={{ margin: 0, padding: 0, width: "100%" }}>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <Input
          type="text"
          placeholder="Search for property"
          prefix={<SearchOutlined />}
          style={{
            width: "100%",
            backgroundColor: "#F5F5FB",
            height: 50,
            borderRadius: 23,
          }}
          inputMode="search"
        />
      </Col>
      <Col
        xs={{ span: 24 }}
        lg={{ span: 12 }}
        style={{
          padding: "auto 10px",
          width: "100%",
          display: "flex",
          flexFlow: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Badge dot>
          <BellFilled style={{ color: "#000000" }} />
        </Badge>
        <Avatar
          src="/profile_pic2.jpeg"
          size="large"
          shape="square"
          style={{ margin: "auto 20px", borderRadius: 12 }}
        />
        <Dropdown overlay={dashMenu}>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            type="link"
          >
            Lucy Palmers
            <DownOutlined />
          </Button>
        </Dropdown>
      </Col>
      <style jsx global>{`
        .ant-input {
          background: transparent;
        }
        .ant-input-affix-wrapper > input.ant-input {
          background: transparent;
        }
      `}</style>
    </Row>
  );
};

export default DashHeader;
