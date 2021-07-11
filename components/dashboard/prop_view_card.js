import { Card, Avatar, Button } from "antd";
import { EnvironmentFilled, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";

const PropViewCard = ({ src, name, address, link }) => (
  <Card
    cover={<Image src={src} width={"100%"} height={150} />}
    bordered={false}
    style={{ backgroundColor: "#FAFAFD", borderRadius: 40 }}
    bodyStyle={{
      backgroundColor: "#FAFAFD",
      borderRadius: 40,
      padding: "8px 20px 20px 20px",
    }}
  >
    <Card.Meta
      title={name}
      description={
        <div
          style={{
            width: "100%",
            display: "flex",
            flexFlow: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 12 }}>
            <EnvironmentFilled style={{ color: "#4791FF", marginRight: 5 }} />
            {address}
          </span>
          <Button type="link" size="small">
            View <ArrowRightOutlined />
          </Button>
        </div>
      }
    />
  </Card>
);

export default PropViewCard;
