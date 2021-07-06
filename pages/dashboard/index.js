import { Row, Col, Button } from "antd";
import DashCard from "../../components/dashboard/dashcard";
import withDBLayout from "../../components/dashboard/withDBLayout";
import {
  CardEstateIcon,
  CardInquiryIcon,
  CardServiceIcon,
  CardPropsIcon,
} from "../../components/dashboard/dbIcons";

const DashBoard = () => {
  return (
    <Row gutter={[16, 16]} style={{ width: "100%", margin: 0 }}>
      <Col span={24}>
        <h1>Hello, Lucy Palmers!</h1>
        <h5>Welcome to propvat</h5>
      </Col>
      <Col span={6}>
        <DashCard
          icon={<CardPropsIcon style={{ fontSize: 26 }} />}
          title="Total Properties"
          value="34"
          bgColor="rgba(71, 145, 255, .17)"
        />
      </Col>
      <Col span={6}>
        <DashCard
          icon={<CardEstateIcon style={{ fontSize: 26 }} />}
          title="Total Estates"
          value="14"
          bgColor="rgba(255, 172, 40, .17)"
          extraColor="rgba(2, 188, 119, 1)"
        />
      </Col>
      <Col span={6}>
        <DashCard
          icon={<CardInquiryIcon style={{ fontSize: 26 }} />}
          title="Total Enquiries"
          value="5"
          bgColor="rgba(255, 35, 102, .17)"
        />
      </Col>
      <Col span={6}>
        <DashCard
          icon={<CardServiceIcon style={{ fontSize: 26 }} />}
          title="Total Service Providers"
          value="7"
          bgColor="rgba(2, 188, 119, .17)"
          extraColor="rgba(2, 188, 119, 1)"
        />
      </Col>
    </Row>
  );
};

export default withDBLayout(DashBoard);
