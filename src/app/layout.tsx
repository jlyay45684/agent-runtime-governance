import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Runtime Governance",
  description: "Enterprise AI runtime observability and governance dashboard",
  icons: {
    icon: "/yusen-logo.png",
    shortcut: "/yusen-logo.png",
    apple: "/yusen-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#080b10] antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
