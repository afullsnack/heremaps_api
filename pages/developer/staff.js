import { useState } from "react";
import { Row, Col, Button, Card, Dropdown, Menu, Breadcrumb } from "antd";
import DashCard from "@components/dashboard/dashcard";
import withDBLayout from "@components/dashboard/withDBLayout";
import {
  CardEstateIcon,
  CardInquiryIcon,
  CardServiceIcon,
  CardPropsIcon,
} from "@components/dashboard/dbIcons";
import { ArrowDownOutlined, RightOutlined } from "@ant-design/icons";
import InquiryTable from "@components/dashboard/inquiry_table";
import DashPropInquiryModal from "@components/dashboard/dash_prop_inquiry_modal";

const menu = (
  <Menu>
    <Menu.Item>Last 14 Days</Menu.Item>
    <Menu.Item>Last 30 Days</Menu.Item>
    <Menu.Item>Last 90 Days</Menu.Item>
  </Menu>
);

const Staff = () => {
  const [isDashPropInquiryModalVisible, setIsDashPropInquiryModalVisible] =
    useState(false);
  return (
    <Row gutter={[16, 16]} style={{ width: "100%", height: "100%", margin: 0 }}>
      <Col span={18} style={{ height: "100%", overflow: "scroll" }}>
        <Row style={{ height: "100%" }} align="top">
          <Col span={24}>
            <h1 style={{ fontSize: 28, fontWeight: "normal", margin: 0 }}>
              Staff | Estate Valuers | Lawyers
            </h1>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Card
              title="New Inquiry"
              extra={
                <Dropdown overlay={menu}>
                  <Button>Last 7 Days</Button>
                </Dropdown>
              }
            >
              <InquiryTable
                popInquiryModal={() =>
                  setIsDashPropInquiryModalVisible(
                    !isDashPropInquiryModalVisible
                  )
                }
              />
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <h4>Filter</h4>
            <span>Property type</span>
          </Col>
          <Col
            span={24}
            style={{ display: "flex", justifyContent: "space-between" }}
          ></Col>
        </Row>
      </Col>
      <DashPropInquiryModal
        visible={isDashPropInquiryModalVisible}
        changeDashPropInquiryModalVisibility={() =>
          setIsDashPropInquiryModalVisible(!isDashPropInquiryModalVisible)
        }
      />
    </Row>
  );
};

export default withDBLayout(Staff);
