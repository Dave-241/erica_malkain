import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erica Consulation ",
  description: "Erica Consulation description",
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
