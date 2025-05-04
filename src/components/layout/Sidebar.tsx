
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
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

const navItemVariants = {
  hover: {
    backgroundColor: "#EEF2FF",
    x: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    }
  }
};

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
      <motion.a
        href="#"
        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
          isActive 
            ? "bg-jolly-button-hover text-jolly-purple font-medium" 
            : "text-jolly-text-secondary hover:bg-jolly-button-hover hover:text-jolly-text-primary"
        }`}
        whileHover="hover"
        variants={navItemVariants}
      >
        <Icon size={18} />
        <span className="flex-grow">{label}</span>
        {isNew && (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Badge className="bg-jolly-purple text-white">NOUVEAU</Badge>
          </motion.div>
        )}
        {hasNotification && (
          <motion.div 
            className="w-2 h-2 rounded-full bg-jolly-purple"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        )}
      </motion.a>
    </li>
  );
};

export default function Sidebar() {
  const creditsLeft = 65; // Percentage of credits remaining
  
  return (
    <aside className="bg-jolly-white border-r border-jolly-border w-64 h-screen flex flex-col">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center px-6 py-4 border-b border-jolly-border"
      >
        <motion.div 
          whileHover={{ rotate: 10 }}
          className="bg-jolly-purple text-white rounded-md w-8 h-8 flex items-center justify-center text-xl font-bold mr-3"
        >
          J
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-xl"
        >
          Jolly
        </motion.h1>
      </motion.div>
      
      {/* User Profile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="px-6 py-4 border-b border-jolly-border"
      >
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200" alt="Utilisateur" />
            <AvatarFallback>EA</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">Emma Anderson</p>
            <p className="text-xs text-jolly-text-secondary">Offre Gratuite</p>
          </div>
        </div>
      </motion.div>
      
      {/* Navigation */}
      <nav className="flex-grow px-3 py-4">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
          className="space-y-1"
        >
          <NavItem icon={Home} label="Accueil" />
          <NavItem icon={Calendar} label="Mes Réunions" hasNotification />
          <NavItem icon={MessageSquare} label="Chat Jolly IA" isActive isNew />
          <NavItem icon={Share} label="Partagé avec moi" />
          <NavItem icon={FileText} label="Notes" />
          <NavItem icon={Link} label="Intégrations" />
        </motion.ul>
        
        {/* Workspace section */}
        <div className="mt-8">
          <h3 className="px-3 text-xs font-medium text-jolly-text-secondary uppercase tracking-wider mb-2">
            Espaces de travail
          </h3>
          <ul className="space-y-1">
            <NavItem icon={Users} label="Équipe Marketing" />
          </ul>
        </div>
      </nav>
      
      {/* Bottom links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="px-6 py-4 border-t border-jolly-border space-y-4"
      >
        {/* Settings & Help */}
        <ul className="space-y-1">
          <NavItem icon={Settings} label="Paramètres" />
          <NavItem icon={HelpCircle} label="Aide et Support" />
        </ul>
        
        {/* Credits/Upgrade section */}
        <motion.div 
          whileHover={{ y: -3 }}
          className="bg-jolly-chat-bubble rounded-lg p-4 mt-4"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-jolly-text-secondary">Crédits restants</span>
            <span className="text-xs font-medium">{creditsLeft}%</span>
          </div>
          <Progress value={creditsLeft} className="h-1.5 mb-3" />
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }}
            className="w-full bg-jolly-purple hover:bg-opacity-90 text-white text-sm font-medium py-1.5 rounded-md transition-colors"
          >
            Mettre à niveau
          </motion.button>
        </motion.div>
      </motion.div>
    </aside>
  );
}
