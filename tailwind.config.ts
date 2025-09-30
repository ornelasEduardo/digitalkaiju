import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.green.600"),
              textDecoration: "underline",
              textUnderlineOffset: "2px",
              "&:hover": { color: theme("colors.green.700") },
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              padding: "0.125rem 0.375rem",
              borderRadius: "0.25rem",
              fontFamily: theme("fontFamily.mono")?.toString(),
              fontSize: theme("fontSize.sm")?.[0],
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: 0,
              borderRadius: 0,
              fontSize: theme("fontSize.sm")?.[0],
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.300"),
              color: theme("colors.gray.700"),
            },
            hr: {
              borderColor: theme("colors.gray.200"),
            },
            table: { width: "100%" },
            th: {
              textAlign: "left",
              borderBottomColor: theme("colors.gray.300"),
              padding: "0.5rem 0.75rem",
            },
            td: {
              borderBottomColor: theme("colors.gray.200"),
              padding: "0.5rem 0.75rem",
              verticalAlign: "top",
            },
            img: {
              borderRadius: theme("borderRadius.lg"),
              boxShadow: theme("boxShadow.DEFAULT"),
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme("colors.green.400"),
              "&:hover": { color: theme("colors.green.300") },
            },
            code: { backgroundColor: theme("colors.gray.800") },
            blockquote: { borderLeftColor: theme("colors.gray.600") },
            hr: { borderColor: theme("colors.gray.700") },
            thead: { backgroundColor: theme("colors.gray.900") },
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;
