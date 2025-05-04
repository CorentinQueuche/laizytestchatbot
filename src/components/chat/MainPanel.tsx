
import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { 
  X,
  ChevronDown,
  Plus,
  ArrowUp
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

// QuickPrompt Component
const QuickPrompt = ({ text }: { text: string }) => (
  <motion.div 
    className="bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-md px-4 py-3 text-sm cursor-pointer transition-all"
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.98 }}
  >
    {text}
  </motion.div>
);

// Recent Chat Card Component
const RecentChatCard = ({ title, description, timestamp }: { 
  title: string; 
  description: string;
  timestamp: string;
}) => (
  <motion.div
    whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="bg-white border border-gray-200 rounded-md p-4 shadow-sm"
  >
    <div className="flex items-start justify-between mb-2">
      <h3 className="font-medium font-poppins tracking-tighter">{title}</h3>
      <div className="text-xs text-jolly-text-secondary rounded-full bg-gray-100 px-2 py-0.5">{timestamp}</div>
    </div>
    <p className="text-sm text-jolly-text-secondary line-clamp-2 font-poppins tracking-tighter">{description}</p>
  </motion.div>
);

export default function MainPanel() {
  return (
    <main className="flex-1 h-screen flex flex-col max-w-3xl mx-auto">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        {/* Limited Offer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#F4F4FE] border border-[#E5E4FF] rounded-lg p-3 mb-6 relative"
        >
          <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
            <X size={16} />
          </button>
          <div className="flex items-center">
            <div className="bg-[#6C5CE7] text-white rounded-md px-2 py-1 text-xs font-medium mr-3">LIMITÉ</div>
            <p className="text-sm font-medium font-poppins tracking-tighter flex-grow">
              Obtenez 1 mois GRATUIT en payant annuellement.
            </p>
            <motion.a 
              href="#" 
              className="text-[#467FF7] text-sm font-medium hover:underline ml-2 whitespace-nowrap"
              whileHover={{ x: 3 }}
            >
              Voir l'offre →
            </motion.a>
          </div>
        </motion.div>
        
        {/* Chat Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <motion.h1 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="text-4xl font-bold mb-3 font-poppins tracking-tighter flex items-center justify-center"
          >
            <span className="mr-3">Commencez à discuter avec</span> 
            <span className="text-[#6C5CE7]">
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.6, delay: 1.2, repeat: 0 }}
              >
                Jolly
              </motion.span>
            </span>
          </motion.h1>
          <p className="text-jolly-text-secondary max-w-lg mx-auto font-poppins tracking-tighter">
            Votre assistant IA amical ! Besoin de réponses rapides, de suggestions intelligentes, ou juste d'une conversation enjouée ? 
            <br />Jolly est là pour vous aider avec le sourire. Commencez à discuter maintenant ! <span className="text-yellow-500">😊</span>
          </p>
        </motion.div>
        
        {/* Chat Input */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-8"
        >
          <div className="p-4">
            <Input 
              placeholder="Écrivez une question..." 
              className="bg-transparent border-0 shadow-none focus-visible:ring-0 text-base px-0 font-poppins tracking-tighter"
            />
          </div>
          
          <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="flex items-center gap-2">
              <motion.button 
                className="text-gray-500 hover:text-gray-700 p-1 rounded-md hover:bg-gray-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={16} />
              </motion.button>
              <span className="text-xs text-gray-500 font-poppins tracking-tighter">Ajouter du contenu</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1 font-poppins tracking-tighter">
                GPT-4o mini
                <ChevronDown size={16} />
              </Button>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="font-poppins tracking-tighter flex items-center gap-1">
                  <span>Envoyer</span>
                  <ArrowUp size={14} />
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Quick Prompts */}
          <div className="px-4 pt-0 pb-4 flex flex-wrap gap-2">
            <motion.div variants={itemVariants}><QuickPrompt text="Comment préparer un entretien pour un poste de designer web ?" /></motion.div>
            <motion.div variants={itemVariants}><QuickPrompt text="Quels sont les principes clés d'un design web efficace ?" /></motion.div>
            <motion.div variants={itemVariants}><QuickPrompt text="Quelles sont les meilleures tendances design pour les sites web en 2025 ?" /></motion.div>
          </div>
        </motion.div>
        
        {/* Recent Chats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-lg font-medium mb-4 font-poppins tracking-tighter">Conversation récente</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-3"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm">🔄</span>
              </div>
              <div className="flex-grow">
                <RecentChatCard 
                  title="Nouveau chat"
                  description="Démarrer une nouvelle conversation avec Jolly"
                  timestamp="20 sec"
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm">🎨</span>
              </div>
              <div className="flex-grow">
                <RecentChatCard 
                  title="Donnez-moi un nom unique pour le logo de mon tableau de bord CRM"
                  description="J'ai besoin d'un nom créatif pour mon application de gestion de la relation client..."
                  timestamp="45 min"
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm">💼</span>
              </div>
              <div className="flex-grow">
                <RecentChatCard 
                  title="Créer une application web SaaS avec catégories"
                  description="Je veux développer une application SaaS pour aider les entrepreneurs à gérer leurs projets..."
                  timestamp="3 heures"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
