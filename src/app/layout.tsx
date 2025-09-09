import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DigitalKaiju - Building Dope Software",
  description:
    "A California-based software company that builds innovative and cutting-edge digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 digitalkaiju. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              className="hover:underline hover:underline-offset-4"
              href="#email"
            >
              Contact
            </a>
            <a
              className="hover:underline hover:underline-offset-4"
              href="#privacy"
            >
              Privacy
            </a>
            <a
              className="hover:underline hover:underline-offset-4"
              href="#terms"
            >
              Terms
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
