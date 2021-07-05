import { Row, Col, Button } from "antd";
import withDBLayout from "../../components/dashboard/withDBLayout";

const DashBoard = () => {
  return (
    <Row>
      <Col span={24}>
        <h1>DashBoard</h1>
      </Col>
    </Row>
  );
};

export default withDBLayout(DashBoard);
