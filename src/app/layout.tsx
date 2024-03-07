import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./provider";
import NotificationBar from "@/components/NotificationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ku transcript",
  description: "ku transcript is a web application for students to view their academic transcript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <NotificationBar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
