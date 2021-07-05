import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    unit: "14",
    type: "3 Bedroom Semi Detached bungalow",
    size: "108.13",
    price: "50m",
  },
  {
    key: "2",
    unit: "14",
    type: "3 Bedroom Semi Detached bungalow",
    size: "108.13",
    price: "50m",
  },
  {
    key: "3",
    unit: "14",
    type: "3 Bedroom Semi Detached bungalow",
    size: "108.13",
    price: "50m",
  },
  {
    key: "4",
    unit: "14",
    type: "3 Bedroom Semi Detached bungalow",
    size: "108.13",
    price: "50m",
  },
  {
    key: "5",
    unit: "14",
    type: "3 Bedroom Semi Detached bungalow",
    size: "108.13",
    price: "50m",
  },
  {
    key: "6",
    unit: "14",
    type: "3 Bedroom Semi Detached bungalow",
    size: "108.13",
    price: "50m",
  },
  {
    key: "7",
    unit: "14",
    type: "3 Bedroom Semi Detached bungalow",
    size: "108.13",
    price: "50m",
  },
  {
    key: "8",
    unit: "14",
    type: "3 Bedroom Semi Detached bungalow",
    size: "108.13",
    price: "50m",
  },
  {
    key: "9",
    unit: "14",
    type: "3 Bedroom Semi Detached bungalow",
    size: "108.13",
    price: "50m",
  },
  {
    key: "10",
    unit: "14",
    type: "3 Bedroom Semi Detached bungalow",
    size: "108.13",
    price: "50m",
  },
  {
    key: "11",
    unit: "14",
    type: "3 Bedroom Semi Detached bungalow",
    size: "108.13",
    price: "50m",
  },
];

const columns = [
  {
    title: "Unit",
    dataIndex: "unit",
    key: "unit",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Size (m2)",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "Price (N)",
    dataIndex: "price",
    key: "price",
  },
];

const PropTable = ({ changePropModalVisibility }) => (
  <Table
    dataSource={dataSource}
    columns={columns}
    size="small"
    sticky={true}
    onRow={(record, rowIndex) => {
      return {
        onClick: (event) => {
          changePropModalVisibility();
          console.log(record, rowIndex);
        }, // click row
        // onDoubleClick: event => {}, // double click row
        // onContextMenu: event => {}, // right button click row
        // onMouseEnter: event => {}, // mouse enter row
        // onMouseLeave: event => {}, // mouse leave row
      };
    }}
  />
);

export default PropTable;
