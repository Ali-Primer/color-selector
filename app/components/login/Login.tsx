"use client";
import { Flex, Image, Layout, Typography, Form, Input, Button } from "antd";
import { Content } from "antd/es/layout/layout";

const { Text } = Typography;

export function Login() {
  const handleLogin = (values: any) => {
    console.log("Submitted values: ", values);
  };

  const handleCancel = () => {
    console.log("Login canceled");
  };

  return (
    <>
      <Layout className="h-screen">
        <Layout
          className="h-2/3 w-full max-h-[66%] rounded-b-lg flex-col items-center relative"
          style={{
            backgroundImage: "url('/bg/bg4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Flex className="justify-center mt-4 items-center flex-col">
            <Image className="p-1 border-4 rounded-full" src="/logo/logo.png" />
            <Text className="bg-white mt-3 p-2 rounded-full text-center text-xs">
              ورود به پنل کاربری
            </Text>
          </Flex>
          <Content
            style={{ boxShadow: "10px 10px 0px 8px rgba(0, 0, 0, 0.4)" }}
            className="bg-white w-5/6 mt-8 h-[360px] absolute top-40 p-8 flex flex-col justify-center"
          >
            <Form
              layout="vertical"
              onFinish={handleLogin}
              className="w-full max-w-md mx-auto"
            >
              {/* Username */}
              <Form.Item
                label="نام کاربری"
                name="username"
                rules={[
                  { required: true, message: "لطفاً نام کاربری خود را وارد کنید!" },
                ]}
              >
                <Input placeholder="نام کاربری" />
              </Form.Item>

              {/* Password */}
              <Form.Item
                label="رمز عبور"
                name="password"
                rules={[
                  { required: true, message: "لطفاً رمز عبور خود را وارد کنید!" },
                ]}
              >
                <Input.Password placeholder="رمز عبور" />
              </Form.Item>

              {/* Buttons */}
              <Form.Item className="flex justify-between">
                <Button onClick={handleCancel} danger>
                  انصراف
                </Button>
                <Button type="primary" htmlType="submit">
                  ورود
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
