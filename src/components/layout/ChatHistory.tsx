
import React from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

interface ChatHistoryItemProps {
  title: string;
  timestamp: string;
  active?: boolean;
}

const listItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const ChatHistoryItem = ({ title, timestamp, active = false }: ChatHistoryItemProps) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className={`p-3 rounded-md cursor-pointer transition-colors ${
      active 
        ? "bg-jolly-button-hover" 
        : "hover:bg-jolly-chat-bubble"
    }`}
    variants={listItemVariants}
  >
    <div className="flex items-start justify-between">
      <div className="flex-grow">
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-jolly-text-secondary mt-1">{timestamp}</p>
      </div>
      <MessageSquare size={16} className="text-jolly-text-secondary mt-1" />
    </div>
  </motion.div>
);

export default function ChatHistory() {
  return (
    <aside className="bg-jolly-white border-l border-jolly-border w-64 h-screen overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6"
      >
        <motion.h2 
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-medium mb-4"
        >
          Historique des conversations
        </motion.h2>
        
        {/* Today's chats */}
        <div className="mb-6">
          <h3 className="text-xs font-medium text-jolly-text-secondary uppercase tracking-wider mb-2">
            Aujourd'hui
          </h3>
          <motion.div 
            className="space-y-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ChatHistoryItem 
              title="Brouillon d'email pour l'équipe marketing" 
              timestamp="10:42"
              active
            />
            <ChatHistoryItem 
              title="Discussion sur la feuille de route du produit" 
              timestamp="9:15"
            />
            <ChatHistoryItem 
              title="Résumé des retours clients" 
              timestamp="8:30"
            />
          </motion.div>
        </div>
        
        {/* Yesterday's chats */}
        <div>
          <h3 className="text-xs font-medium text-jolly-text-secondary uppercase tracking-wider mb-2">
            Hier
          </h3>
          <motion.div 
            className="space-y-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ChatHistoryItem 
              title="Document de planification T3" 
              timestamp="16:22"
            />
            <ChatHistoryItem 
              title="Questions d'entretien pour le poste" 
              timestamp="14:45"
            />
            <ChatHistoryItem 
              title="Révision du budget pour T2" 
              timestamp="11:20"
            />
            <ChatHistoryItem 
              title="Notes de réunion quotidienne" 
              timestamp="9:05"
            />
          </motion.div>
        </div>
      </motion.div>
    </aside>
  );
}
