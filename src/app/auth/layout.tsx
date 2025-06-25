import React from "react";
import { Metadata } from "next/types";

// Alternatively, you can use generateMetadata for dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Authentication | Admin",
    description: "Login to access the Admin Dashboard",
  };
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
    </main>
  );
}
