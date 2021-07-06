import { Layout, Menu } from "antd";
import {
  DashboardIcon,
  MapIcon,
  FaqIcon,
  UserAddIcon,
  UserIcon,
  SupportIcon,
} from "./dbIcons";

const { Header, Content, Sider, Footer } = Layout;

export default function withDBLayout(PageComp) {
  function Page() {
    return (
      <Layout style={{ minHeight: "100vh", padding: 10, overflow: "hidden" }}>
        <Sider
          width={100}
          style={{
            borderRadius: 21,
            overflow: "clip",
            backgroundColor: "#41085B",
          }}
        >
          <div className="logo"></div>
          <Menu
            style={{
              height: "100%",
              backgroundColor: "transparent",
              textAlign: "right",
            }}
          >
            <Menu.Item key="1" style={{ textAlign: "center" }}>
              <DashboardIcon />
            </Menu.Item>
            <Menu.Item key="2" style={{ textAlign: "center" }}>
              <MapIcon />
            </Menu.Item>
            <Menu.Item key="3" style={{ textAlign: "center" }}>
              <FaqIcon />
            </Menu.Item>
            <Menu.Item key="4" style={{ textAlign: "center" }}>
              <UserAddIcon />
            </Menu.Item>
            <Menu.Item key="5" style={{ textAlign: "center" }}>
              <UserIcon />
            </Menu.Item>
            <Menu.Item key="6" style={{ textAlign: "center" }}>
              <SupportIcon />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ height: "100%", overflow: "hidden", padding: 0 }}>
          <Header></Header>
          <Content style={{ padding: 20, height: "calc(100% - 64px)" }}>
            <PageComp />
          </Content>
        </Layout>
        <style jsx global>{`
          .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
            background-color: #fff;
            color: #41085b;
          }
          .ant-menu-item-active {
            color: white;
          }
          .ant-menu-item,
          .ant-menu-item a,
          .ant-menu-item a:hover {
            color: white;
          }

          .logo {
            background-image: url("/new-propvat-logo-white.svg");
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 40px;
          }
        `}</style>
      </Layout>
    );
  }

  return Page;
}
