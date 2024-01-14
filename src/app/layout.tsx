import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import { Sidebar } from "./components/sidebar/sidebar";
import { usePathname } from "next/navigation";
import { Provider } from "@/utils/Provider";
import { SkeletonTheme } from "react-loading-skeleton";
import { ProviderSession } from "./components/provider/Provider";
import { LayoutProps } from "./@types/types";
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BookWise",
  description: "Generated by create next app",
};

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <ProviderSession   >
          <Sidebar />
          <SkeletonTheme baseColor="#252D4A" highlightColor="#181C2A">
            <Provider>{props.children}</Provider>
          </SkeletonTheme>
        </ProviderSession>
      </body>
    </html>
  );
}
