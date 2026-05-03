import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeetingGuard – AI Agenda Enforcer",
  description: "Keep meetings on track with AI agenda enforcement. Real-time off-topic alerts for team leads and project managers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6b3ba144-4d8b-49e2-af37-e21dc8ffbdef"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
