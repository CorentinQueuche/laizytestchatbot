
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  X,
  ChevronDown,
  Plus,
  Share,
  Trash2
} from "lucide-react";

// QuickPrompt Component
const QuickPrompt = ({ text }: { text: string }) => (
  <div className="bg-jolly-white hover:bg-jolly-button-hover border border-jolly-border rounded-full px-4 py-2 text-sm cursor-pointer transition-all">
    {text}
  </div>
);

// Recent Chat Card Component
const RecentChatCard = ({ title, description, timestamp }: { 
  title: string; 
  description: string;
  timestamp: string;
}) => (
  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
    <h3 className="font-medium mb-1">{title}</h3>
    <p className="text-sm text-jolly-text-secondary mb-3 line-clamp-2">{description}</p>
    <div className="text-xs text-jolly-text-secondary">{timestamp}</div>
  </Card>
);

export default function MainPanel() {
  return (
    <main className="flex-1 h-screen flex flex-col max-w-4xl mx-auto">
      {/* Top Header */}
      <header className="flex justify-between items-center p-4 border-b border-jolly-border">
        <div className="flex items-center">
          <span className="text-xs text-jolly-text-secondary">
            Try our Chrome extension for quick chats from any web page
          </span>
        </div>
        <Button variant="ghost" size="sm" className="text-sm">Install Extension</Button>
      </header>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Top Actions */}
        <div className="flex justify-end mb-4 gap-2">
          <Button variant="ghost" size="sm" className="text-sm gap-1">
            <Share size={16} />
            Share
          </Button>
          <Button variant="ghost" size="sm" className="text-sm gap-1 text-red-500 hover:text-red-600 hover:bg-red-50">
            <Trash2 size={16} />
            Delete
          </Button>
        </div>
        
        {/* Free Trial Banner */}
        <div className="bg-jolly-white border border-jolly-border rounded-lg p-4 mb-6 relative">
          <button className="absolute top-3 right-3 text-jolly-text-secondary hover:text-jolly-text-primary">
            <X size={16} />
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-jolly-purple text-white rounded-full p-2">
              <span className="text-lg">✨</span>
            </div>
            <div>
              <h3 className="font-medium">Free trial activated!</h3>
              <p className="text-sm text-jolly-text-secondary">
                You have 25 free messages. Upgrade anytime to continue the conversation.
              </p>
            </div>
          </div>
        </div>
        
        {/* Chat Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-2">
            Start talking to Jolly
            <span className="ml-2">👋</span>
          </h1>
          <p className="text-jolly-text-secondary max-w-lg mx-auto">
            Jolly is your AI assistant that helps you draft emails, summarize documents, 
            brainstorm ideas, and more.
          </p>
        </div>
        
        {/* Chat Input */}
        <div className="bg-jolly-white border border-jolly-border rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-grow">
              <Input 
                placeholder="Write a question..." 
                className="bg-transparent border-0 shadow-none focus-visible:ring-0 text-base px-0"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                GPT-4o mini
                <ChevronDown size={16} />
              </Button>
              <Button size="sm" className="bg-jolly-purple hover:bg-opacity-90">Send</Button>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          {/* Quick Prompts */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Plus size={16} className="text-jolly-text-secondary" />
              <span className="text-sm text-jolly-text-secondary">Add content</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <QuickPrompt text="Draft an email" />
              <QuickPrompt text="Summarize text" />
              <QuickPrompt text="Meeting notes" />
              <QuickPrompt text="Creative ideas" />
            </div>
          </div>
        </div>
        
        {/* Recent Chats */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Recent Chats</h2>
          <div className="grid grid-cols-2 gap-4">
            <RecentChatCard 
              title="Draft email to marketing team"
              description="I need to draft an email to the marketing team about our upcoming product launch. The email should be professional yet..."
              timestamp="10:42 AM"
            />
            <RecentChatCard 
              title="Product roadmap discussion"
              description="Let's discuss the product roadmap for Q3. I need to prioritize features and allocate resources efficiently..."
              timestamp="9:15 AM"
            />
            <RecentChatCard 
              title="Customer feedback summary"
              description="Can you help me summarize the key points from our customer feedback survey? We received over 500 responses..."
              timestamp="8:30 AM"
            />
            <RecentChatCard 
              title="Q3 planning document"
              description="I need to create a planning document for Q3 that outlines our goals, metrics, and key initiatives..."
              timestamp="Yesterday"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
