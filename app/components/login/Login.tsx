"use client";
import {
  Flex,
  Image,
  Layout,
  Typography,
  Form,
  Input,
  Button,
  message,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";

const { Text } = Typography;

export function Login() {
  const route = useRouter()
  const handleLogin = (values: any) => {
    console.log("Submitted values: ", values);
    route.push('/')
  };

  const handleCancel = () => {
    console.log("Login canceled");
  };

  return (
    <>
      <Layout className="h-screen flex items-center sm:justify-center">
        <Layout
          className="h-2/3 w-full max-h-[450px] rounded-b-lg flex-col items-center relative max-w-lg sm:rounded-b-none"
          style={{
            backgroundImage: "url('/bg/bg4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Flex className="justify-center mt-4 items-center flex-col ">
            <Image className="p-0 border-4 rounded-full" width={50} src="/logo/logo.png" />
            <Text className="bg-white mt-3 p-2 rounded-full text-center text-xs font-bold sm:bg-orange-500">
              ورود به پنل کاربری
            </Text>
          </Flex>
          <Content
            style={{
              boxShadow: "13px 15px 0px 0px rgba(0, 0, 0, 0.2)",
              direction: "rtl",
            }}
            className="bg-white w-5/6 absolute top-40 p-3 md:"
          >
            <Form
              layout="vertical"
              onFinish={handleLogin}
              requiredMark={false}
              className="w-full"
              style={{ direction: "rtl", textAlign: "right" }}
            >
              {/* Notification */}

              {/* Username */}
              <Form.Item
                className="text-right"
                label="نام کاربری"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "لطفاً نام کاربری خود را وارد کنید!",
                  },
                ]}
              >
                <Input className="h-10 rounded-none"/>
              </Form.Item>

              {/* Password */}
              <Form.Item
                label="رمز عبور"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "لطفاً رمز عبور خود را وارد کنید!",
                  },
                ]}
              >
                <Input.Password className="h-10 rounded-none"/>
              </Form.Item>

              {/* SVG Icon */}
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="orange"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <Text className="block mb-4 text-xs text-gray-900">
                  به طور پیشفرض نام کاربری و رمز عبور کد ملی شماست
                </Text>
              </Flex>

              {/* Buttons */}
              <Form.Item className="flex justify-end w-full ">
                <Button
                  onClick={handleCancel}
                  variant="filled"
                  type="text"
                  color="default"
                >
                  انصراف
                </Button>
                <Button
                className="bg-blue-900 text-white rounded-none"
                  type="text"
                  htmlType="submit"
                >
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
