import { useState } from "react";
import { Row, Col, Button, Card, Dropdown, Menu, Breadcrumb } from "antd";
import DashCard from "../../../components/dashboard/dashcard";
import withDBLayout from "../../../components/dashboard/withDBLayout";
import {
  CardEstateIcon,
  CardInquiryIcon,
  CardServiceIcon,
  CardPropsIcon,
} from "../../../components/dashboard/dbIcons";
import { ArrowDownOutlined, RightOutlined } from "@ant-design/icons";
import PropViewCard from "../../../components/dashboard/prop_view_card";
import { CustomPrimaryButton, CustomGhostButton } from "../../../lib/helpers";
import UploadCSVModal from "../../../components/dashboard/upload_file_modal";

const Properties = () => {
  const [csvModalVisibility, setCSVModalVisibility] = useState(false);

  return (
    <Row gutter={[16, 16]} style={{ width: "100%", height: "100%", margin: 0 }}>
      <Col span={18} style={{ height: "100%", overflow: "scroll" }}>
        <Row gutter={[32, 16]} style={{ height: "100%" }}>
          <Col span={24}>
            <h1 style={{ fontSize: 32, fontWeight: "normal", margin: 0 }}>
              My property
            </h1>
            <Breadcrumb separator={<RightOutlined />}>
              <Breadcrumb.Item>Property</Breadcrumb.Item>
              <Breadcrumb.Item>Estate</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={8}>
            <PropViewCard
              src="/dashboard/estate-img@2x.png"
              name="Sky high estate"
              address="Opp first marine gate, Oshogbo Lagos, Nigeria"
            />
          </Col>
          <Col span={8}>
            <PropViewCard
              src="/dashboard/estate-img@2x.png"
              name="Sky high estate"
              address="Opp first marine gate, Oshogbo Lagos, Nigeria"
            />
          </Col>
          <Col span={8}>
            <PropViewCard
              src="/dashboard/estate-img@2x.png"
              name="Sky high estate"
              address="Opp first marine gate, Oshogbo Lagos, Nigeria"
            />
          </Col>
          <Col span={8}>
            <PropViewCard
              src="/dashboard/estate-img@2x.png"
              name="Sky high estate"
              address="Opp first marine gate, Oshogbo Lagos, Nigeria"
            />
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <h2>Property Management</h2>
            <span>
              Add new estates and upload properties to estates using the buttons
              below.
            </span>
          </Col>
          <Col
            span={24}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              size="small"
              onClick={() => window.alert("Add a new estate")}
              style={{
                color: "#FFF",
                backgroundColor: "#41085B",
                border: "1px solid #41085B",
                borderRadius: 18,
                height: 40,
                paddingLeft: 20,
                paddingRight: 20,
                fontSize: 12,
              }}
            >
              Add new estate
            </Button>
            <Button
              size="small"
              onClick={() => setCSVModalVisibility(!csvModalVisibility)}
              style={{
                color: "#41085B",
                backgroundColor: "#FFF",
                border: "1px solid #41085B",
                borderRadius: 18,
                height: 40,
                paddingLeft: 20,
                paddingRight: 20,
                fontSize: 12,
              }}
            >
              Upload units
            </Button>
          </Col>
        </Row>
      </Col>
      <UploadCSVModal
        visible={csvModalVisibility}
        changeUploadCSVModalVisibility={() =>
          setCSVModalVisibility(!csvModalVisibility)
        }
      />
    </Row>
  );
};

export default withDBLayout(Properties);
