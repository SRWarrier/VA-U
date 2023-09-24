import { useState } from "react";
import { Row, Col, Form, Input, Button, message, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginForm.css";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { update } from "../../../reducers/userReducer";
import { RootState } from "../../../store/store";

const { Title } = Typography;

interface childprops {
  status: (a: boolean) => void;
}

const Loginform = ({ status }: childprops) => {
  const count = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login/",
        values
      );
      var username = response.data["first_name"];
      message.success("Welcome " + username);
      dispatch(update(response.data));
      localStorage.setItem("user", response.data);
      status(true);
    } catch (error: any) {
      message.error(error.response.data.message);
    }

    setLoading(false);
  };
  return (
    <Row>
      <Col
        span={24}
        style={{
          width: "300px",
          borderColor: "#fff",
          margin: "20px",
          padding: "20px",
          height: "300px",
          border: "2px solid white",
        }}
      >
        <Form name="login" onFinish={onFinish}>
          <Title
            style={{
              color: "#fff",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Tripplr
          </Title>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Loginform;

// <div className="loginpage__container">
//     <div className="loginpage__form">
//       <Title level={4} className="loginpage__title">
//         Tripplr
//       </Title>
//       <h2 className="loginpage__title">Login</h2>
//       <Form title="Tripplr" name="login" onFinish={onFinish}>
//         <Form.Item
//           name="username"
//           rules={[{ required: true, message: "Please enter your username!" }]}
//         >
//           <Input prefix={<UserOutlined />} placeholder="Username" />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           rules={[{ required: true, message: "Please enter your password!" }]}
//         >
//           <Input.Password prefix={<LockOutlined />} placeholder="Password" />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit" block>
//             Log in
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   </div>
