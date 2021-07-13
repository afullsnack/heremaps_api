import { Card, Avatar, Button, Space, Dropdown, Menu } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { CustomPrimaryButton } from "../../lib/helpers";
import MortgageFormModal from "./mortgage_form_modal";

const UnitViewCard = ({ src, name, desc, link }) => {
  const router = useRouter();
  const [formModalVisibility, setFormModalVisibility] = useState(false);
  return (
    <Card
      bordered={false}
      style={{ backgroundColor: "#FAFAFD", borderRadius: 40 }}
      bodyStyle={{
        backgroundColor: "#FAFAFD",
        borderRadius: 40,
        padding: 0,
      }}
    >
      <Card.Meta
        avatar={<Image src={src} width={260} height={200} />}
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 10px 0px 10px",
            }}
          >
            {name}
            <Dropdown
              trigger="click"
              overlay={
                <Menu>
                  <Menu.Item>Edit</Menu.Item>
                  <Menu.Item>Property Info</Menu.Item>
                </Menu>
              }
            >
              <MoreOutlined style={{ padding: 20, cursor: "pointer" }} />
            </Dropdown>
          </div>
        }
        description={
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "0px 10px",
              flexFlow: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span>{desc}</span>
              <br />
              <b>SQM: N/A</b>
            </div>
            <br />
            <div
              style={{
                width: "100%",
                paddingRight: 20,
                display: "flex",
                flexFlow: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Space direction="horizontal" size="middle">
                <CustomPrimaryButton bgColor="#3AD29F">
                  Validate
                </CustomPrimaryButton>
                <CustomPrimaryButton
                  clickHandler={() =>
                    setFormModalVisibility(!formModalVisibility)
                  }
                >
                  Allocate
                </CustomPrimaryButton>
              </Space>
            </div>
          </div>
        }
      />
      <MortgageFormModal
        visible={formModalVisibility}
        changeDashMortgageFormModalVisibility={() =>
          setFormModalVisibility(!formModalVisibility)
        }
      />
    </Card>
  );
};

export default UnitViewCard;
