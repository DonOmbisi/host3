"use client";
import { PrivyProvider } from "@privy-io/react-auth";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";
import { GeistSans } from "geist/font/sans";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PrivyProvider
          appId="cm2z2e5oi04b9zgmi6tbatqw1"
          config={{
            appearance: {
              theme: "dark",
              accentColor: "#676FFF",
              logo: "https://your-logo-url",
            },
            // Create embedded wallets for users who don't have a wallet
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
          }}
        >
          <Navbar />
          {children}
        </PrivyProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
