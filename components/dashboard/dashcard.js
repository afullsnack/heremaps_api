import { Card, Avatar, Space } from "antd";

const DashCard = ({ icon, title, value, bgColor, extraColor }) => (
  <Card
    bodyStyle={{ padding: 10 }}
    style={{ borderRadius: 21, backgroundColor: "#FAFAFD" }}
    hoverable
    bordered={false}
  >
    {/* <Card.Meta
      avatar={}
      title={}
      description={}
    /> */}
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <Avatar
        src={icon}
        shape="square"
        size={45}
        style={{
          backgroundColor: bgColor,
          padding: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      />
      <div style={{ width: "100%", paddingLeft: 20 }}>
        <small style={{}}>{title}</small>
        <span
          style={{
            width: "100%",
            display: "flex",
            flexFlow: "row",
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ margin: 0, padding: 0 }}>{value}</h3>
          <small style={{ color: extraColor ?? "#FF2366" }}>- 25%</small>
        </span>
      </div>
    </div>
  </Card>
);

export default DashCard;
