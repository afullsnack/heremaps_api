import {
  EnvironmentFilled,
  MessageOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { Card, Button, Collapse } from "antd";
import { useState } from "react";
import {
  iconColor,
  iconColor2,
  iconColor3,
  secondaryColor,
} from "../../lib/helpers";
import PropTable from "./properties_table";
const { Panel } = Collapse;

const EstateItemList = ({
  changePropModalVisibility,
  changeInquiryModalVisibility,
}) => {
  const [activeKey, setActiveKey] = useState(["0"]);
  return (
    <Collapse
      style={{ marginBottom: 10, backgroundColor: "transparent" }}
      bordered={false}
      collapsible="header"
      defaultActiveKey={activeKey}
      accordion
      onChange={(key) => setActiveKey(key)}
    >
      {Array.from(Array(7), (_, i) => (
        <Panel
          key={i.toString()}
          showArrow={false}
          style={{ backgroundColor: "transparent" }}
          header={
            <div
              style={{
                borderRadius: 36,
                backgroundColor: secondaryColor,
                padding: 20,
              }}
            >
              <span style={{ font: "normal normal normal 20px/25px Poppins" }}>
                Sky high estate
              </span>
              <br />
              <EnvironmentFilled style={{ color: iconColor2 }} />{" "}
              <span style={{ font: "normal normal normal 14px/25px Poppins" }}>
                {" "}
                Opposite first marine gate oshogbo Lagos, Nigeria
              </span>{" "}
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
                  style={{
                    color: iconColor3,
                    font: "normal normal normal 14px/25px Poppins",
                  }}
                  onClick={(e) => changeInquiryModalVisibility()}
                >
                  Inquire
                </Button>
                <Button
                  type="link"
                  icon={<CompassOutlined style={{ color: iconColor3 }} />}
                  style={{
                    color: iconColor3,
                    font: "normal normal normal 14px/25px Poppins",
                  }}
                  onClick={(e) => window.alert("Explore Button clicked")}
                >
                  Explore
                </Button>
              </div>
            </div>
          }
        >
          <PropTable changePropModalVisibility={changePropModalVisibility} />
        </Panel>
      ))}
    </Collapse>
  );
};

export default EstateItemList;
