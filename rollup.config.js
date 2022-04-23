import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";


// Minifier
import { terser } from "rollup-plugin-terser";


// Typescript
import typescript from "rollup-plugin-typescript";

const production = !process.env.ROLLUP_WATCH;

export default [

  // CODE.JS
  // The part that communicate with Figma directly
  // Communicate with main.js via event send/binding
  {
    input: "src/code.ts",
    output: {
      file: "public/code.js",
      format: "iife",
      name: "code",
    },
    plugins: [
      typescript(),
      resolve(),
      commonjs({ transformMixedEsModules: true }),
      production && terser(),
    ],
  },
];
