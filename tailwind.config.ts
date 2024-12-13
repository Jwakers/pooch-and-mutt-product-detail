import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: "var(--font-poppins)",
    },
    colors: {
      black: "rgb(0, 0, 0)",
      neutral: {
        "0": "var(--neutral-0)",
        "50": "var(--neutral-50)",
        "100": "var(--neutral-100)",
        "150": "var(--neutral-150)",
        "200": "var(--neutral-200)",
        "300": "var(--neutral-300)",
        "400": "var(--neutral-400)",
        "500": "var(--neutral-500)",
        "600": "var(--neutral-600)",
        "700": "var(--neutral-700)",
        "800": "var(--neutral-800)",
        "900": "var(--neutral-900)",
        "1000": "var(--neutral-1000)",
      },
      cream: {
        "50": "var( --cream-50)",
        "100": "var(--cream-100)",
        "200": "var(--cream-200)",
        "300": "var(--cream-300)",
        "400": "var(--cream-400)",
        "500": "var(--cream-500)",
        "600": "var(--cream-600)",
        "700": "var(--cream-700)",
        "800": "var(--cream-800)",
        "900": "var(--cream-900)",
      },
      purple: {
        "50": "var( --purple-50)",
        "100": "var(--purple-100)",
        "200": "var(--purple-200)",
        "300": "var(--purple-300)",
        "400": "var(--purple-400)",
        "500": "var(--purple-500)",
        "600": "var(--purple-600)",
        "700": "var(--purple-700)",
        "800": "var(--purple-800)",
        "900": "var(--purple-900)",
      },
      primary: "var(--neutral-1000)",
      secondary: "var(--neutral-700)",
      minimal: "var(--neutral-400)",
      disabled: "var(--neutral-150)",
      invert: "var(--neutral-0)",
      brand: "var(--purple-500)",
    },
    backgroundColor: {
      primary: "var(--neutral-0)",
      secondary: "var(--cream-200)",
      invert: "var(--neutral-1000)",
      brand: "var(--brand-50)",
    },
    border: {
      primary: "var(--neutral-1000)",
      secondary: "rgba(0, 0, 0, .3)",
      minimal: "rgba(0, 0, 0, .15)",
      invert: "var(--neutral-0)",
    },
    borderRadius: {
      small: "4px",
      medium: "8px",
      large: "20px",
      full: "9999px",
    },
    spacing: {
      "1": "0.125rem", // 2px
      "2": "0.25rem", // 4px
      "3": "0.375rem", // 6px
      "4": "0.5rem", // 8px
      "5": "0.75rem", // 12px
      "6": "1rem", // 16px
      "7": "1.25rem", // 20px
      "8": "1.5rem", // 24px
      "9": "2rem", // 32px
      "10": "2.5rem", // 40px
      "11": "3.75rem", // 60px
      "12": "5rem", // 80px
      "13": "7.5rem", // 120px
      "14": "10rem", // 160px
    },
    fontSize: {
      display: [
        "2.375rem", // 38px
        {
          lineHeight: "3rem", // 48px
          fontWeight: 700,
        },
      ],
      h1: [
        "2rem", // 32px
        {
          lineHeight: "2.375rem", // 38px
          fontWeight: 700,
        },
      ],
      h2: [
        "1.625rem", // 26px
        {
          lineHeight: "2rem", // 32px
          fontWeight: 700,
        },
      ],
      h3: [
        "1.375rem", // 22px
        {
          lineHeight: "1.75rem", // 28px
          fontWeight: 700,
        },
      ],
      s1: [
        "1.125rem", // 18px
        {
          lineHeight: "1.625rem", // 26px
          fontWeight: 500,
        },
      ],
      s2: [
        "1rem", // 16px
        {
          lineHeight: "1.5rem", // 24px
          fontWeight: 500,
        },
      ],
      p1: [
        "1.125rem", // 18px
        {
          lineHeight: "1.625rem", // 26px
          fontWeight: 400,
        },
      ],
      p2: [
        "1rem", // 16px
        {
          lineHeight: "1.5rem", // 24px
          fontWeight: 400,
        },
      ],
      c1: [
        "0.625rem", // 10px
        {
          lineHeight: "0.875rem", // 14px
          fontWeight: 400,
        },
      ],
    },
  },
  plugins: [],
} satisfies Config;
