/** @type {import('next').NextConfig} */

import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default withPlaiceholder(nextConfig);
