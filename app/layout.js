import { Raleway } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montserrat = Raleway({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Vishnu's Portfolio",
  description: "NextJS",
  icons: {
    icon: ["/icon.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
