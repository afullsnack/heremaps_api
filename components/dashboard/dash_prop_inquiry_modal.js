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
// import { CustomPrimaryButton } from "../../lib/helpers";

const DashPropInquiryModal = ({
  visible,
  changeDashPropInquiryModalVisibility,
}) => {
  return (
    <Modal
      title="Property Inquiry"
      visible={visible}
      onCancel={() => changeDashPropInquiryModalVisibility()}
      onOk={() => changeDashPropInquiryModalVisibility()}
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
                <Avatar
                  src="/profile_pic2.jpeg"
                  shape="circle"
                  size="default"
                />
                <h4>Charles Nweze</h4>
              </Space>
              <br />
              <span>
                The quick, brown fox jumps over a lazy dog. DJs flock by when
                MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
                flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
                fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs
                vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged
                fop blew my junk TV quiz. How quickly daft jumping zebras vex.
                Two driven jocks help.
              </span>
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
            backgroundColor: "#FAFAFD",
            padding: 20,
            borderRadius: 22,
          }}
        >
          <Space direction="vertical" size="small">
            <small>UNIT </small>
            <h3 style={{ margin: 0, padding: 0 }}>14</h3>
          </Space>
          <br />
          <Space direction="vertical" size="small">
            <small>TYPE </small>
            <h3 style={{ margin: 0, padding: 0 }}>
              3 Bed room detached bungalow
            </h3>
          </Space>
          <br />
          <Space direction="vertical" size="small">
            <small>SIZE </small>
            <Tag color="#41085B" style={{ borderRadius: 50 }}>
              108.13 m<sup>2</sup>
            </Tag>
          </Space>
          <br />
          <Space direction="vertical" size="small">
            <small>PRICE </small>
            <h3 style={{ margin: 0, padding: 0 }}>₦50,000,000</h3>
          </Space>
          <br />
          <Space direction="vertical" size="small">
            <small>CLIENT BUDGET </small>
            <h3 style={{ margin: 0, padding: 0 }}>₦30,000,000</h3>
          </Space>
        </Col>
      </Row>
    </Modal>
  );
};

export default DashPropInquiryModal;
