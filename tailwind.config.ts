import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0b",
          soft: "#111114",
          elevated: "#18181d",
        },
        border: {
          DEFAULT: "#26262c",
          strong: "#3a3a42",
        },
        text: {
          DEFAULT: "#f4f4f5",
          muted: "#a1a1aa",
          subtle: "#71717a",
        },
        accent: {
          DEFAULT: "#c6f432",
          soft: "rgba(198, 244, 50, 0.08)",
          glow: "rgba(198, 244, 50, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
