import { Layout, Menu } from "antd";
import {
  DashboardIcon,
  MapIcon,
  FaqIcon,
  UserAddIcon,
  UserIcon,
  SupportIcon,
} from "./dbIcons";
import DashHeader from "./header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const { Header, Content, Sider, Footer } = Layout;

export default function withDBLayout(PageComp) {
  function Page(props) {
    const router = useRouter();
    const [page, setPage] = useState("/dashboard");
    const mainPaths = [
      "/dashboard",
      "/properties",
      "/inquiry",
      "/staff",
      "/settings",
      "/support",
    ];

    useEffect(() => {
      for (let i = 0; i < mainPaths.length; i++) {
        if (router.pathname.includes(mainPaths[i], 9)) {
          console.log("This should trigger", mainPaths[i]);
          setPage(mainPaths[i]);
          break;
        } else {
          console.log("This is the else");
          continue;
        }
      }
      return () => setPage("/dashboard");
    }, [page]);

    return (
      <Layout
        style={{
          minHeight: "100vh",
          height: "100vh",
          padding: 10,
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <Sider
          width={100}
          style={{
            // height: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            padding: 0,
            overflow: "hidden",
            backgroundColor: "#41085B",
          }}
        >
          <div className="logo"></div>
          <Menu
            style={{
              // height: "100%",
              width: "100%",
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              backgroundColor: "transparent",
              // textAlign: "right",
              border: 0,
            }}
            defaultSelectedKeys={[page]}
            selectedKeys={[page]}
            onClick={({ item, key, keyPath, event }) => {
              // console.log({ item, key, keyPath, event });

              setPage(router.asPath.substring(10));
              router.push(`/developer${key}`);
            }}
            // selectedKeys={["1"]}
          >
            <Menu.Item key="/dashboard" style={{ textAlign: "center" }}>
              <DashboardIcon />
            </Menu.Item>
            <Menu.Item key="/properties" style={{ textAlign: "center" }}>
              <MapIcon />
            </Menu.Item>
            <Menu.Item key="/inquiry" style={{ textAlign: "center" }}>
              <FaqIcon />
            </Menu.Item>
            <Menu.Item key="/staff" style={{ textAlign: "center" }}>
              <UserAddIcon />
            </Menu.Item>
            {/* <Menu.Item key="/settings" style={{ textAlign: "center" }}>
              <UserIcon />
            </Menu.Item> */}
            <Menu.Item key="/support" style={{ textAlign: "center" }}>
              <SupportIcon />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={{
            height: "100%",
            overflow: "hidden",
            padding: 0,
            backgroundColor: "transparent",
            position: "relative",
          }}
        >
          <Header
            style={{
              backgroundColor: "transparent",
              padding: "0 20px",
            }}
          >
            <DashHeader />
          </Header>
          <Content
            style={{
              padding: 20,
              height: "calc(100% - 64px)",
              overflow: "hidden",
            }}
          >
            <PageComp {...props} />
          </Content>
        </Layout>
        <style jsx global>{`
          .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
            background-color: #fff;
            color: #41085b;
            // width: 100%;
          }
          .ant-menu-item-active {
            color: white;
          }
          .ant-menu-item {
            width: 100%;
          }
          .ant-menu-item,
          .ant-menu-item a,
          .ant-menu-item a:hover {
            color: white;
          }
          .ant-layout-sider-children {
            width: 100%;
          }

          .ant-modal-content {
            border-radius: 32px;
          }
          .ant-modal-header {
            border-radius: 32px;
          }

          .logo {
            background-image: url("/dashboard/new-propvat-logo-white@2x.png");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            width: 75px;
            height: 45px;
            margin: 10px auto 50px auto;
          }
        `}</style>
      </Layout>
    );
  }

  return Page;
}
