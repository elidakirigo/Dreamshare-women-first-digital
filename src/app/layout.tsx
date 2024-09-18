import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/SessionProvider";
import StoreProvider from "@/components/StoreProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/authoptions";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ weight: ["100", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dreamshare-women-first-digital",
  description: "Dreamshare-women-first-digital",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={montserrat.className}>
        <SessionProvider session={session}>
          <StoreProvider>{children}</StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
