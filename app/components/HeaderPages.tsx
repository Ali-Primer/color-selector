"use client";
import { Menu } from "antd";
import { useRouter } from "next/navigation";

const menu: React.CSSProperties = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center'
}

export const HeaderPages = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Menu style={menu} mode="horizontal">
      <Menu.Item key="home" onClick={() => handleNavigation("/")}>
        Home
      </Menu.Item>
      <Menu.Item key="secondPage" onClick={() => handleNavigation("/second-page")}>
        Second Page
      </Menu.Item>
    </Menu>
  );
};
