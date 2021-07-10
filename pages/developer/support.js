import { Row, Col, Button, Card, Dropdown, Menu } from "antd";
import DashCard from "../../components/dashboard/dashcard";
import withDBLayout from "../../components/dashboard/withDBLayout";
import {
  CardEstateIcon,
  CardInquiryIcon,
  CardServiceIcon,
  CardPropsIcon,
} from "../../components/dashboard/dbIcons";
import { ArrowDownOutlined } from "@ant-design/icons";

const Support = () => {
  return (
    <Row gutter={[16, 16]} style={{ width: "100%" }}>
      <Col span={24}>
        <h1>Support Screen</h1>
        <h5>Welcome to propvat</h5>
      </Col>
    </Row>
  );
};

export default withDBLayout(Support);
