import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subset: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "Final Destination for Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-blue-50 py-12">
            <div className="contaniner mx-auto px-4 text-center">
              <p>Made by Shubham Kumar Agarwal</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
