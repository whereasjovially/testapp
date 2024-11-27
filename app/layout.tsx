import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import type { Metadata, Viewport } from "next";
import { type ReactNode } from "react";
import "../styles/globals.css";
import { Navbar } from "./components/Navbar";
import { AppProviders } from "./providers";

export const metadata: Metadata = {
  title: "Test app",
  description: "Test app on Ethereum",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">
          <div className="-z-10 background--custom absolute inset-0 w-full h-full" />
          <AppProviders>
            <header className="px-8 z-40">
              <div className="flex h-20 items-center justify-between py-6">
                <Navbar />
                <nav>
                  <ConnectButton />
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </AppProviders>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
