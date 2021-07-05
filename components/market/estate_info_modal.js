import { useState } from "react";
import { Modal, Row, Col, Tag, Space, Button } from "antd";
import { EnvironmentFilled } from "@ant-design/icons";
import Image from "next/image";
import { CustomGhostButton, CustomPrimaryButton } from "../../lib/helpers";

const EstateInfoModal = ({
  visible,
  changeEstateInfoModalVisibility,
  changeInquiryModalVisibility,
}) => {
  return (
    <Modal
      title="Estate info"
      visible={visible}
      onCancel={() => changeEstateInfoModalVisibility()}
      onOk={() => changeEstateInfoModalVisibility()}
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
                571 units
              </Tag>
              <Tag
                color="#FFF3DF"
                style={{ color: "#FFAC28", borderRadius: 17 }}
              >
                250 units available
              </Tag>
            </Col>
            <Col span={24}>
              <h2>4 Bedroom Bungalow</h2>
            </Col>
            <Col span={24}>
              <p>
                The quick, brown fox jumps over a lazy dog. DJs flock by when
                MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
                flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
                fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs
                vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged
                fop blew my junk TV quiz. How quickly daft jumping zebras vex.
                Two driven jocks help.
              </p>
            </Col>
            <Col span={24}>
              <Space direction="horizontal" align="top" size="middle">
                <small>
                  <b>Price range:</b>
                </small>
                <small style={{ lineHeight: "0.2rem" }}>₦ 5.5m - ₦ 100m</small>
                <small>
                  <EnvironmentFilled
                    style={{ marginRight: 5, color: "#4791FF" }}
                  />
                  Opp first marine gate,
                  <br /> Oshogbo Lagos, Nigeria
                </small>
              </Space>
              <br />
              <br />
              <Space direction="horizontal" align="center" size={45}>
                <small>
                  <b>Size:</b>
                </small>
                <small style={{ lineHeight: "0.2px" }}>
                  108.13m<sup>2</sup>
                </small>
              </Space>
            </Col>
            <Col span={24}>
              <Space size="large" direction="horizontal" align="center">
                <CustomPrimaryButton>View properties</CustomPrimaryButton>
                <CustomGhostButton
                  clickHandler={() => {
                    changeEstateInfoModalVisibility();
                    changeInquiryModalVisibility();
                  }}
                >
                  Inquire
                </CustomGhostButton>
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
            <Image src="/profile_pic2.jpeg" width={200} height={200} />
            <Image src="/profile_pic2.jpeg" width={200} height={200} />
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default EstateInfoModal;
