import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erica Home ",
  description: "Erica Home description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#DFE4DF" }}>{children}</body>
    </html>
  );
}
