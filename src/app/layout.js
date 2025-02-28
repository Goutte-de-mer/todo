import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

export const metadata = {
  title: "Todo list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
