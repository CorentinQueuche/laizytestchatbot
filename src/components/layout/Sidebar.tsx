
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Home, 
  Calendar, 
  MessageSquare, 
  FileText,
  Share,
  Link,
  Settings,
  HelpCircle,
  Users
} from "lucide-react";

const NavItem = ({ 
  icon: Icon, 
  label, 
  isActive = false, 
  hasNotification = false,
  isNew = false 
}: {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  hasNotification?: boolean;
  isNew?: boolean;
}) => {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
          isActive 
            ? "bg-jolly-button-hover text-jolly-purple font-medium" 
            : "text-jolly-text-secondary hover:bg-jolly-button-hover hover:text-jolly-text-primary"
        }`}
      >
        <Icon size={18} />
        <span className="flex-grow">{label}</span>
        {isNew && (
          <Badge className="bg-jolly-purple text-white">NEW</Badge>
        )}
        {hasNotification && (
          <div className="w-2 h-2 rounded-full bg-jolly-purple"></div>
        )}
      </a>
    </li>
  );
};

export default function Sidebar() {
  const creditsLeft = 65; // Percentage of credits remaining
  
  return (
    <aside className="bg-jolly-white border-r border-jolly-border w-64 h-screen flex flex-col">
      {/* Logo */}
      <div className="flex items-center px-6 py-4 border-b border-jolly-border">
        <div className="bg-jolly-purple text-white rounded-md w-8 h-8 flex items-center justify-center text-xl font-bold mr-3">
          J
        </div>
        <h1 className="font-bold text-xl">Jolly</h1>
      </div>
      
      {/* User Profile */}
      <div className="px-6 py-4 border-b border-jolly-border">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200" alt="User" />
            <AvatarFallback>EA</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">Emma Anderson</p>
            <p className="text-xs text-jolly-text-secondary">Free Plan</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-grow px-3 py-4">
        <ul className="space-y-1">
          <NavItem icon={Home} label="Home" />
          <NavItem icon={Calendar} label="My Meetings" hasNotification />
          <NavItem icon={MessageSquare} label="Jolly AI Chat" isActive isNew />
          <NavItem icon={Share} label="Shared with Me" />
          <NavItem icon={FileText} label="Notes" />
          <NavItem icon={Link} label="Integrations" />
        </ul>
        
        {/* Workspace section */}
        <div className="mt-8">
          <h3 className="px-3 text-xs font-medium text-jolly-text-secondary uppercase tracking-wider mb-2">
            Workspaces
          </h3>
          <ul className="space-y-1">
            <NavItem icon={Users} label="Marketing Team" />
          </ul>
        </div>
      </nav>
      
      {/* Bottom links */}
      <div className="px-6 py-4 border-t border-jolly-border space-y-4">
        {/* Settings & Help */}
        <ul className="space-y-1">
          <NavItem icon={Settings} label="Settings" />
          <NavItem icon={HelpCircle} label="Help & Support" />
        </ul>
        
        {/* Credits/Upgrade section */}
        <div className="bg-jolly-chat-bubble rounded-lg p-4 mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-jolly-text-secondary">Credits left</span>
            <span className="text-xs font-medium">{creditsLeft}%</span>
          </div>
          <Progress value={creditsLeft} className="h-1.5 mb-3" />
          <button className="w-full bg-jolly-purple hover:bg-opacity-90 text-white text-sm font-medium py-1.5 rounded-md transition-colors">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
}
