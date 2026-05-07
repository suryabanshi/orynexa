import "./globals.css";

export const metadata = {
  title: "ORYNEXA — Intelligent Systems From the Core",
  description:
    "ORYNEXA builds intelligent systems for AI automation, business operations, learning, creative media, and global connection.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
