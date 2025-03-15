// import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

// export default withPayload(nextConfig);
export default nextConfig;
