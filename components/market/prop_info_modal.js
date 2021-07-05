import { useState } from "react";
import { Modal, Row, Col, Tag, Space, Button } from "antd";
import { PlayCircleFilled, EnvironmentFilled } from "@ant-design/icons";
import Image from "next/image";

const PropInfoModal = ({ visible, changePropModalVisibility }) => {
  return (
    <Modal
      title="Property info"
      visible={visible}
      onCancel={() => changePropModalVisibility()}
      onOk={() => changePropModalVisibility()}
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
              <Tag
                color="#E5FFE7"
                style={{ color: "#41C84E", borderRadius: 17 }}
              >
                Available
              </Tag>
              <Tag
                color="#FFF3DF"
                style={{ color: "#FFAC28", borderRadius: 17 }}
              >
                50,000,000
              </Tag>
            </Col>
            <Col span={24}>
              <h2>PLOT # 014: 3 Bedroom Semi Detached Bungalow</h2>
            </Col>
            <Col span={24}>
              <p>
                Nicely finished 4 bedroom bungalow. Waterfront Luxuriously
                Fitted Two(2) Beds, Three(3) Beds & Four(4) Bed Penthouses with
                Bq, All Rooms En-Suite, Swimming pool, Gym, Squash, Clubhouse
                and Bar, Playground and Garden, CCTV, Electric Fence, Smoke
                Detectors, Water Treatment Installed with 100% Pressure, Bullet
                Proof Doors, Elevators, Uniform Guards/Armed Mobile Men, 24hrs
                Electricity Available in Victoria Island Lagos.
              </p>
            </Col>
            <Col span={24}>
              <Space direction="horizontal" align="center" size="large">
                <div>
                  <PlayCircleFilled style={{ marginRight: 5 }} />
                  <span>8 Bedrooms</span>
                </div>
                <div>
                  <PlayCircleFilled style={{ marginRight: 5 }} />
                  <span>2 Baths</span>
                </div>
                <div>
                  <PlayCircleFilled style={{ marginRight: 5 }} />
                  <span>9 Car Park</span>
                </div>
              </Space>
            </Col>
            <Col span={24}>
              <Space direction="horizontal" align="center" size="middle">
                <small>
                  <b>Unit Type:</b>
                </small>
                <small style={{ lineHeight: "0.2rem" }}>
                  3 Bedroom Semi Detached Bungalow
                </small>
                <small>
                  <EnvironmentFilled
                    style={{ marginRight: 5, color: "#4791FF" }}
                  />
                  Opp first marine gate, <br />
                  Oshogbo Lagos, Nigeria
                </small>
              </Space>
              <br />
              <br />
              <Space direction="horizontal" align="center" size={45}>
                <small>
                  <b>Size:</b>
                </small>
                <small style={{ lineHeight: "0.2px" }}>108.13m2</small>
              </Space>
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
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 6,
              marginBottom: "4rem",
            }}
          >
            <Image src="/profile_pic2.jpeg" width={200} height={200} />
            <Image src="/profile_pic2.jpeg" width={200} height={200} />
            <Image src="/profile_pic2.jpeg" width={200} height={200} />
            <Image src="/profile_pic2.jpeg" width={200} height={200} />
          </div>
          <Space size="large" direction="horizontal" align="center">
            <Button
              type="link"
              size="middle"
              style={{
                color: "#FFF",
                backgroundColor: "#41085B",
                borderRadius: 18,
              }}
            >
              Validate
            </Button>
            <Button
              type="link"
              size="middle"
              style={{
                color: "#41085B",
                backgroundColor: "#FFF",
                border: "1px solid #41085B",
                borderRadius: 18,
              }}
            >
              Apply For Mortgage
            </Button>
          </Space>
        </Col>
      </Row>
    </Modal>
  );
};

export default PropInfoModal;
