import { useState } from "react";
import { Layout, Menu, Upload, message, Button } from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

function getBase64(file, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(file);
}

function beforeUpload(file) {
  const isCSV = file.type === "text/csv";

  if (!isCSV) {
    message.error("You can only upload CSV file! " + file.type);
  }
  // const isLt2M = file.size / 1024 / 1024 < 2;
  // if (!isLt2M) {
  //   message.error('Image must smaller than 2MB!');
  // }
  return isCSV;
}

export default function withLayout(PageComp) {
  function Page() {
    const [loading, setLoading] = useState(false);
    const [fileUrl, setFileUrl] = useState();
    const handleChange = (info) => {
      if (info.file.status === "uploading") {
        setLoading(true);
        message.info("Upload started");
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (fileUrl) => {
          // console.log(fileUrl);
          setLoading(false);
          setFileUrl(fileUrl);
        });

        message.success("Upload finished: " + info.file.name);
      }
    };
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload Estate CSV</div>
      </div>
    );
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <span style={{ color: "white" }}>The Header is here</span>
        </Header>
        <Layout
          style={{
            height: "calc(100vh - 64px)",
            // overflow: "hidden",
            padding: 0,
          }}
        >
          <Content style={{ padding: 20, height: "70%" }}>
            <PageComp />
          </Content>
          <Sider width={350}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              // style={{ height: "100%" }}
            >
              <Menu.Item key="1">List Item</Menu.Item>
              <Menu.Item key="2">List Item</Menu.Item>
              <Menu.Item key="3">List Item</Menu.Item>
            </Menu>
            <Upload
              name="geodata"
              accept={"csv"}
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="/api/hello"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {uploadButton}
            </Upload>
          </Sider>
        </Layout>
      </Layout>
    );
  }

  return Page;
}
