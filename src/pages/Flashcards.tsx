import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Volume2, Home, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { vocabulary, categories, getWordsByCategory, speakWord } from "@/data/vocabulary";

const Flashcards = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const words = useMemo(() => {
    return selectedCategory === "all" ? vocabulary : getWordsByCategory(selectedCategory);
  }, [selectedCategory]);

  const current = words[currentIndex];

  const next = () => {
    setFlipped(false);
    setCurrentIndex((i) => (i + 1) % words.length);
  };

  const prev = () => {
    setFlipped(false);
    setCurrentIndex((i) => (i - 1 + words.length) % words.length);
  };

  if (!current) return null;

  return (
    <div className="min-h-screen bg-background px-4 py-6">
      {/* Header */}
      <div className="max-w-lg mx-auto flex items-center justify-between mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
          <Home className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-heading font-bold">Flashcards</h1>
        <span className="text-sm text-muted-foreground font-body">
          {currentIndex + 1}/{words.length}
        </span>
      </div>

      {/* Category Filter */}
      <div className="max-w-lg mx-auto mb-6">
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => { setSelectedCategory(e.target.value); setCurrentIndex(0); setFlipped(false); }}
            className="w-full appearance-none bg-card border border-border rounded-xl px-4 py-3 pr-10 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* Flashcard */}
      <div className="max-w-lg mx-auto">
        <div className="flip-card w-full" style={{ minHeight: 380 }} onClick={() => setFlipped(!flipped)}>
          <AnimatePresence mode="wait">
            {!flipped ? (
              <motion.div
                key={`front-${current.id}`}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl card-shadow p-8 flex flex-col items-center justify-center text-center"
                style={{ minHeight: 380 }}
              >
                <p className="text-sm text-muted-foreground font-body mb-2 uppercase tracking-wide">{current.category}</p>
                <h2 className="text-3xl font-heading font-extrabold text-foreground mb-4">{current.word}</h2>
                <span className="inline-block bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full font-body mb-6">
                  {current.type}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={(e) => { e.stopPropagation(); speakWord(current.word); }}
                >
                  <Volume2 className="h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground mt-6 font-body">Tap to flip</p>
              </motion.div>
            ) : (
              <motion.div
                key={`back-${current.id}`}
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl card-shadow p-6 flex flex-col items-center text-center"
                style={{ minHeight: 380 }}
              >
                <img
                  src={current.image}
                  alt={current.word}
                  className="w-full h-36 object-cover rounded-xl mb-4"
                  loading="lazy"
                />
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">{current.meaningEn}</h3>
                <p className="text-lg font-body text-primary font-semibold mb-3" dir="rtl">{current.meaningAr}</p>
                <p className="text-sm text-muted-foreground font-body italic mb-4">"{current.example}"</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  onClick={(e) => { e.stopPropagation(); speakWord(current.example); }}
                >
                  <Volume2 className="h-4 w-4 mr-1" /> Listen
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <Button variant="outline" size="lg" className="rounded-xl" onClick={prev}>
            <ArrowLeft className="h-5 w-5 mr-1" /> Prev
          </Button>
          <Button size="lg" className="rounded-xl" onClick={next}>
            Next <ArrowRight className="h-5 w-5 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
