
import React from "react";
import Sidebar from "./Sidebar";
import ChatHistory from "./ChatHistory";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
      <ChatHistory />
    </div>
  );
}
