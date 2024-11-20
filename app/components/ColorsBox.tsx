import { Button, Flex, Space } from "antd";

export function ColorsBox() {
  function setToStorage(color: string) {
    localStorage.setItem("color", color);
  }

  return (
    <>
      <Flex className="justify-center my-56">
        <Space className="w-3/5 justify-around bg-slate-600 p-5 rounded-lg">
          <Button
            className="w-56 h-56 text-7xl font-semibold"
            onClick={() => setToStorage("blue")}
          >
            Blue
          </Button>
          <Button
            key="red"
            className="w-56 h-56 text-7xl font-semibold"
            onClick={() => setToStorage("red")}
          >
            Red
          </Button>
          <Button
            key="yellow"
            className="bg-yellow-500 border-solid border-yellow-400 border w-56 h-56 text-white text-7xl font-semibold"
            onClick={() => setToStorage("yellow")}
          >
            Yellow
          </Button>
        </Space>
      </Flex>
    </>
  );
}
