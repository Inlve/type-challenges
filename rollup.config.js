import * as path from "node:path";
import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";

import pkg from "package.json";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  input: path.resolve(__dirname, "./src/index.ts"),
  output: [
    {
      dir: path.resolve(__dirname, "dist"),
      format: "esm",
      entryFileNames: "[name].[format].js",
    },
    {
      dir: path.resolve(__dirname, "dist"),
      format: "umd",
      name: "types",
      sourcemap: isDev,
      entryFileNames: "[name].[format].js",
    },
  ],
  plugins: [
    typescript(),
    replace({
      preventAssignment: true,
      "__@@version__": pkg.version,
    }),
  ].concat(isDev ? [serve()] : []),
});
