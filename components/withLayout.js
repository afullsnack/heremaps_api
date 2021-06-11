import { Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

export default function withLayout(PageComp) {
  function Page() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <h1 style={{ color: "white" }}>The Header is here</h1>
        </Header>
        <Layout style={{ height: "100%" }}>
          <Content style={{}}>
            <PageComp />
          </Content>
          <Sider width={350}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ height: "100%" }}
            >
              <Menu.Item key="1">List Item</Menu.Item>
              <Menu.Item key="2">List Item</Menu.Item>
              <Menu.Item key="3">List Item</Menu.Item>
            </Menu>
          </Sider>
        </Layout>
      </Layout>
    );
  }

  return Page;
}
