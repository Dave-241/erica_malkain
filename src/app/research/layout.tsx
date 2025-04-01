import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research - Erica J. Boothby, Ph.D. ",
  description:
    "Explore the data-driven research of Erica J. Boothby, Ph.D., focusing on the power of metaperceptions—our beliefs about how others see us—and their impact on workplace belonging, psychological safety, and overall well-being. Delve into her studies to uncover how these perceptions shape social connections, influence job satisfaction, and affect performance in the workplace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={``} style={{ backgroundColor: "#DFE4DF" }}>
      {children}
    </main>
  );
}
