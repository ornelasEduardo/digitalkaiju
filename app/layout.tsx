import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "DigitalKaiju - Building Dope Software",
    template: "%s | DigitalKaiju",
  },
  description:
    "A California-based software company that builds innovative and cutting-edge digital solutions.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
