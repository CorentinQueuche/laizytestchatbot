
import React from "react";
import { MessageSquare } from "lucide-react";

interface ChatHistoryItemProps {
  title: string;
  timestamp: string;
  active?: boolean;
}

const ChatHistoryItem = ({ title, timestamp, active = false }: ChatHistoryItemProps) => (
  <div 
    className={`p-3 rounded-md cursor-pointer transition-colors ${
      active 
        ? "bg-jolly-button-hover" 
        : "hover:bg-jolly-chat-bubble"
    }`}
  >
    <div className="flex items-start justify-between">
      <div className="flex-grow">
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-jolly-text-secondary mt-1">{timestamp}</p>
      </div>
      <MessageSquare size={16} className="text-jolly-text-secondary mt-1" />
    </div>
  </div>
);

export default function ChatHistory() {
  return (
    <aside className="bg-jolly-white border-l border-jolly-border w-64 h-screen overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-medium mb-4">Chat History</h2>
        
        {/* Today's chats */}
        <div className="mb-6">
          <h3 className="text-xs font-medium text-jolly-text-secondary uppercase tracking-wider mb-2">
            Today
          </h3>
          <div className="space-y-2">
            <ChatHistoryItem 
              title="Draft email to marketing team" 
              timestamp="10:42 AM"
              active
            />
            <ChatHistoryItem 
              title="Product roadmap discussion" 
              timestamp="9:15 AM"
            />
            <ChatHistoryItem 
              title="Customer feedback summary" 
              timestamp="8:30 AM"
            />
          </div>
        </div>
        
        {/* Yesterday's chats */}
        <div>
          <h3 className="text-xs font-medium text-jolly-text-secondary uppercase tracking-wider mb-2">
            Yesterday
          </h3>
          <div className="space-y-2">
            <ChatHistoryItem 
              title="Q3 planning document" 
              timestamp="4:22 PM"
            />
            <ChatHistoryItem 
              title="Interview questions for position" 
              timestamp="2:45 PM"
            />
            <ChatHistoryItem 
              title="Budget revision for Q2" 
              timestamp="11:20 AM"
            />
            <ChatHistoryItem 
              title="Meeting notes from standup" 
              timestamp="9:05 AM"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
