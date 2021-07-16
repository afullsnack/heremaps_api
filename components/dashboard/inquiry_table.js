import { Table, Button, Avatar, Space } from "antd";

const dataSource = [];

for (let i = 0; i < 12; i++) {
  dataSource.push({
    key: i.toString(),
    id: "35612" + i.toString(),
    client_name: "Charles Nweze",
    date: "19-Aug-2020",
    action: "View",
  });
}

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Client Name",
    dataIndex: "client_name",
    key: "client_name",
    render: (text) => (
      <Space direction="horizontal" size="small">
        <Avatar src="/profile_pic2.jpeg" shape="circle" size="small" />
        <span>{text}</span>
      </Space>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text) => (
      <Button type="ghost" size="middle" style={{ borderRadius: 30 }}>
        {text}
      </Button>
    ),
  },
];

const InquiryTable = ({ popInquiryModal }) => (
  <Table
    dataSource={dataSource}
    columns={columns}
    size="small"
    sticky={true}
    onRow={(record, rowIndex) => {
      return {
        onClick: (event) => {
          // changePropModalVisibility();
          // console.log(record, rowIndex);
          popInquiryModal();
          console.log(record);
        }, // click row
        // onDoubleClick: event => {}, // double click row
        // onContextMenu: event => {}, // right button click row
        // onMouseEnter: event => {}, // mouse enter row
        // onMouseLeave: event => {}, // mouse leave row
      };
    }}
  />
);

export default InquiryTable;
