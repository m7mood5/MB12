import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairsTransition from "@/components/StairsTransition";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--jetbrains-mono",

});

export const metadata = {
  title: "MB12.",
  description: "Front-end developer Web , Mobile Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrains.variable}>
        <Header />
        <StairsTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
