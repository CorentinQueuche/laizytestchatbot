
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { 
  X,
  ChevronDown,
  Plus,
  Share,
  Trash2
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
    className="bg-jolly-white hover:bg-jolly-button-hover border border-jolly-border rounded-full px-4 py-2 text-sm cursor-pointer transition-all"
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.95 }}
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
    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Card className="p-4 transition-shadow cursor-pointer">
      <h3 className="font-medium mb-1 font-poppins tracking-tighter">{title}</h3>
      <p className="text-sm text-jolly-text-secondary mb-3 line-clamp-2 font-poppins tracking-tighter">{description}</p>
      <div className="text-xs text-jolly-text-secondary">{timestamp}</div>
    </Card>
  </motion.div>
);

export default function MainPanel() {
  return (
    <main className="flex-1 h-screen flex flex-col max-w-4xl mx-auto">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Top Actions */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-end mb-4 gap-2"
        >
          <Button variant="ghost" size="sm" className="text-sm gap-1">
            <Share size={16} />
            Partager
          </Button>
          <Button variant="ghost" size="sm" className="text-sm gap-1 text-red-500 hover:text-red-600 hover:bg-red-50">
            <Trash2 size={16} />
            Supprimer
          </Button>
        </motion.div>
        
        {/* Free Trial Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-jolly-white border border-jolly-border rounded-lg p-4 mb-6 relative"
        >
          <button className="absolute top-3 right-3 text-jolly-text-secondary hover:text-jolly-text-primary">
            <X size={16} />
          </button>
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="bg-jolly-purple text-white rounded-full p-2"
            >
              <span className="text-lg">✨</span>
            </motion.div>
            <div>
              <h3 className="font-medium font-poppins tracking-tighter">Essai gratuit activé !</h3>
              <p className="text-sm text-jolly-text-secondary font-poppins tracking-tighter">
                Vous disposez de 25 messages gratuits. Effectuez une mise à niveau à tout moment pour poursuivre la conversation.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Chat Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <motion.h1 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
            className="text-3xl font-semibold mb-2 font-poppins tracking-tighter"
          >
            Commencez à discuter avec Jolly
            <motion.span 
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 1, delay: 1, repeat: 0 }}
              className="ml-2 inline-block"
            >
              👋
            </motion.span>
          </motion.h1>
          <p className="text-jolly-text-secondary max-w-lg mx-auto font-poppins tracking-tighter">
            Jolly est votre assistant IA qui vous aide à rédiger des emails, résumer des documents, 
            réfléchir à des idées et bien plus encore.
          </p>
        </motion.div>
        
        {/* Chat Input */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-jolly-white border border-jolly-border rounded-lg p-4 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-grow">
              <Input 
                placeholder="Écrivez une question..." 
                className="bg-transparent border-0 shadow-none focus-visible:ring-0 text-base px-0 font-poppins tracking-tighter"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1 font-poppins tracking-tighter">
                GPT-4o mini
                <ChevronDown size={16} />
              </Button>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="bg-jolly-purple hover:bg-opacity-90 font-poppins tracking-tighter">Envoyer</Button>
              </motion.div>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          {/* Quick Prompts */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Plus size={16} className="text-jolly-text-secondary" />
              <span className="text-sm text-jolly-text-secondary font-poppins tracking-tighter">Ajouter du contenu</span>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2"
            >
              <motion.div variants={itemVariants}><QuickPrompt text="Rédiger un email" /></motion.div>
              <motion.div variants={itemVariants}><QuickPrompt text="Résumer un texte" /></motion.div>
              <motion.div variants={itemVariants}><QuickPrompt text="Notes de réunion" /></motion.div>
              <motion.div variants={itemVariants}><QuickPrompt text="Idées créatives" /></motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Recent Chats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-xl font-semibold mb-4 font-poppins tracking-tighter">Conversations Récentes</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4"
          >
            <motion.div variants={itemVariants}>
              <RecentChatCard 
                title="Brouillon d'email pour l'équipe marketing"
                description="J'ai besoin de rédiger un email à l'équipe marketing concernant notre prochaine lancement de produit. L'email doit être professionnel mais..."
                timestamp="10:42"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <RecentChatCard 
                title="Discussion sur la feuille de route du produit"
                description="Discutons de la feuille de route du produit pour le T3. Je dois prioriser les fonctionnalités et allouer efficacement les ressources..."
                timestamp="9:15"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <RecentChatCard 
                title="Résumé des retours clients"
                description="Pouvez-vous m'aider à résumer les points clés de notre enquête de satisfaction client ? Nous avons reçu plus de 500 réponses..."
                timestamp="8:30"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <RecentChatCard 
                title="Document de planification T3"
                description="J'ai besoin de créer un document de planification pour le T3 qui présente nos objectifs, métriques et initiatives clés..."
                timestamp="Hier"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
