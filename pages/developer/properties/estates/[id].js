import { useState } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  Dropdown,
  Menu,
  Breadcrumb,
  Space,
  Tag,
} from "antd";
import DashCard from "@components/dashboard/dashcard";
import withDBLayout from "@components/dashboard/withDBLayout";
import {
  CardEstateIcon,
  CardInquiryIcon,
  CardServiceIcon,
  CardPropsIcon,
} from "@components/dashboard/dbIcons";
import { ArrowDownOutlined, RightOutlined } from "@ant-design/icons";
import PropViewCard from "@components/dashboard/prop_view_card";
import { CustomPrimaryButton, CustomGhostButton } from "@lib/helpers";
import UploadCSVModal from "@components/dashboard/upload_file_modal";
import UnitViewCard from "../../../../components/dashboard/unit_view_card";

const SingleEstate = ({ id }) => {
  const [csvModalVisibility, setCSVModalVisibility] = useState(false);

  return (
    <Row gutter={[16, 16]} style={{ width: "100%", height: "100%", margin: 0 }}>
      <Col
        span={18}
        style={{ height: "100%", overflowY: "scroll", overflowX: "clip" }}
      >
        <Row gutter={[32, 16]} style={{ height: "100%" }}>
          <Col span={24}>
            <h1 style={{ fontSize: 32, fontWeight: "normal", margin: 0 }}>
              My property
            </h1>
            <Breadcrumb separator={<RightOutlined />}>
              <Breadcrumb.Item>Property</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="../">Estate</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{id}</Breadcrumb.Item>
            </Breadcrumb>
            <Space direction="horizontal" size="middle">
              <b>Price range:</b>
              <span>#5.5m - #100m</span>
              <b>Size:</b>
              <span>
                108.13m<sup>2</sup>
              </span>
            </Space>
            <br />
            <br />
            <div className="estate-banner">
              <div>
                <h1
                  style={{
                    color: "white",
                    fontSize: 26,
                    fontWeight: "300",
                  }}
                >
                  Sky high estate
                </h1>
                <p
                  style={{
                    padding: "10px 20px",
                    color: "white",
                    fontWeight: "lighter",
                  }}
                >
                  Nicely finished 4 bedroom bungalow. Waterfront Luxuriously
                  <br />
                  Fitted Two(2) Beds, Three(3) Beds
                </p>
                <Space>
                  <Tag
                    style={{
                      color: "#41C84E",
                      backgroundColor: "#E5FFE7",
                      borderRadius: 50,
                      border: 0,
                    }}
                  >
                    571 units
                  </Tag>
                  <Tag
                    style={{
                      color: "#FFAC28",
                      backgroundColor: "#FFF3DF",
                      borderRadius: 50,
                      border: 0,
                    }}
                  >
                    250 units available
                  </Tag>
                </Space>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <UnitViewCard
              name="4 Bed Room Flat"
              desc="Chevron estate, Lekki. Lagos."
              src="/dashboard/estate-img@2x.png"
            />
          </Col>
          <Col span={24}>
            <UnitViewCard
              name="4 Bed Room Flat"
              desc="Chevron estate, Lekki. Lagos."
              src="/dashboard/estate-img@2x.png"
            />
          </Col>
          <Col span={24}>
            <UnitViewCard
              name="4 Bed Room Flat"
              desc="Chevron estate, Lekki. Lagos."
              src="/dashboard/estate-img@2x.png"
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
      <style jsx global>{`
        .estate-banner {
          // height: 100px;
          width: 100%;
          display: inline-block;
          border-radius: 32px;
          overflow: clip;
          text-align: center;
          background-image: url("/dashboard/estate-img@2x.png");
          background-size: cover;
          background-position: center;
          // background-blur: blur-radius(5);
        }
        .estate-banner > div {
          background-color: rgba(0, 0, 0, 0.4);
          padding: 30px 50px;
        }
      `}</style>
    </Row>
  );
};

export default withDBLayout(SingleEstate);

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  console.info(id);
  return {
    props: { id },
  };
}
