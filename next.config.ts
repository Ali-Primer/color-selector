import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/", // صفحه اصلی که کاربر به آن وارد می‌شود
        destination: "/login", // مسیری که به آن منتقل می‌شود
        permanent: true, // اگر دائمی است، true. اگر موقت است، false.
      },
    ];
  },
};

export default nextConfig;
