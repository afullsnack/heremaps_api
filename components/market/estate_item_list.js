import {
  EnvironmentFilled,
  MessageOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { Card, Button } from "antd";
import {
  iconColor,
  iconColor2,
  iconColor3,
  secondaryColor,
} from "../../lib/helpers";

const EstateItemList = () => (
  <Card
    hoverable
    style={{
      borderRadius: 30,
      width: "100%",
      backgroundColor: secondaryColor,
      marginBottom: 10,
    }}
  >
    <Card.Meta
      title="Sky high estate"
      description={
        <>
          <EnvironmentFilled style={{ color: iconColor2 }} />{" "}
          <span>Opposite first marine gate oshogbo Lagos, Nigeria</span>{" "}
        </>
      }
    />
    <div
      style={{
        width: "100%",
        display: "flex",
        flexFlow: "row",
        alignItems: "end",
        justifyContent: "flex-end",
      }}
    >
      <Button
        type="link"
        icon={<MessageOutlined style={{ color: iconColor3 }} />}
      >
        Inquire
      </Button>
      <Button
        type="link"
        icon={<CompassOutlined style={{ color: iconColor3 }} />}
      >
        Explore
      </Button>
    </div>
  </Card>
);

export default EstateItemList;
