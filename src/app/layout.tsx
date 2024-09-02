import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erica J. Boothby - Psychologist, Researcher, and Educator",
  description:
    "Erica J. Boothby, Ph.D., is a psychologist specializing in social connection and the barriers that inhibit it. Through her research, teaching, and workshops, she helps individuals and organizations foster inclusion, collaboration, and belonging. Explore her insights on relationships, workplace diversity, and prosocial behavior.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={``} style={{ backgroundColor: "#DFE4DF" }}>
        {children}
      </body>
    </html>
  );
}
