import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Gamepad2, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { vocabulary } from "@/data/vocabulary";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-3">
            📚 Vocab Explorer
          </h1>
          <p className="text-lg text-muted-foreground font-body mb-2">
            Learn new words in a fun and interactive way!
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            {vocabulary.length} words to discover
          </p>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=360&fit=crop"
          alt="Kids learning together"
          className="w-full max-w-md rounded-2xl card-shadow mb-10 object-cover h-56 md:h-64"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        <motion.div
          className="flex flex-col gap-4 w-full max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="w-full text-lg py-6 rounded-xl font-heading font-bold"
            onClick={() => navigate("/flashcards")}
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Start Learning
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-full text-lg py-6 rounded-xl font-heading font-bold"
            onClick={() => navigate("/image-quiz")}
          >
            <Gamepad2 className="mr-2 h-5 w-5" />
            Image Quiz
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full text-lg py-6 rounded-xl font-heading font-bold"
            onClick={() => navigate("/spelling")}
          >
            <Puzzle className="mr-2 h-5 w-5" />
            Spelling Game
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
