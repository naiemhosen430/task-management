import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./Components/Shared/Menu";
import AuthProvider from "@/component/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TMA",
  description: "This is a task management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
