import { Card, Avatar, Button } from "antd";
import { EnvironmentFilled, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const PropViewCard = ({ src, name, address, link }) => {
  const router = useRouter();
  return (
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
            <Link href={router.pathname + "/estates/sky-high"} passHref>
              <Button type="link" size="small">
                View <ArrowRightOutlined />
              </Button>
            </Link>
          </div>
        }
      />
    </Card>
  );
};

export default PropViewCard;
