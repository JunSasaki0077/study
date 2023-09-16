import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "react",
  theme: {
    extend: {},
  },
  patterns: {
    extend: {
      container: {
        properties: {
          maxWidth: { type: "property", value: "maxWidth" },
        },
        transform(props) {
          const { maxWidth, marginX, ...rest } = props;
          return {
            marginX: marginX ?? "auto",
            maxWidth: maxWidth ?? "4xl",
            ...rest,
          };
        },
      },
    },
  },
});
