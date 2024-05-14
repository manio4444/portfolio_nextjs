/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

import withSVG from 'next-plugin-svgr';

/** @type {import("next").NextConfig} */
const config = {};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default withSVG(config);
