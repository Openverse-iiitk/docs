import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['postimg.cc', 'i.postimg.cc'],
  },
};

export default withMDX(config);
