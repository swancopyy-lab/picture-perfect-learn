import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, RotateCcw, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { vocabulary, speakWord } from "@/data/vocabulary";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Only use words that have meaningful distinct images (nouns primarily)
const quizWords = vocabulary.filter(w => w.type === "noun");

const ImageQuiz = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [shuffledWords, setShuffledWords] = useState(() => shuffle(quizWords));

  const current = shuffledWords[currentIndex];

  const options = useMemo(() => {
    if (!current) return [];
    const others = shuffle(quizWords.filter(w => w.id !== current.id)).slice(0, 3);
    return shuffle([current, ...others]);
  }, [current]);

  const handleSelect = useCallback((id: string) => {
    if (selected) return;
    setSelected(id);
    if (id === current.id) setScore(s => s + 1);
  }, [selected, current]);

  const nextQuestion = () => {
    setSelected(null);
    if (currentIndex + 1 >= shuffledWords.length) {
      setCurrentIndex(0);
      setShuffledWords(shuffle(quizWords));
    } else {
      setCurrentIndex(i => i + 1);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setShuffledWords(shuffle(quizWords));
  };

  if (!current) return null;

  return (
    <div className="min-h-screen bg-background px-4 py-6">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <Home className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-heading font-bold">Image Quiz</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm font-body text-muted-foreground">
              Score: <span className="font-bold text-primary">{score}</span>
            </span>
            <Button variant="ghost" size="icon" onClick={restart}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground font-body mb-1">
            Question {currentIndex + 1}
          </p>
          <h2 className="text-2xl font-heading font-extrabold text-foreground mb-2">
            {current.word}
          </h2>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={() => speakWord(current.word)}
          >
            🔊 Listen
          </Button>
        </div>

        {/* Image Options */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {options.map((opt) => {
            const isCorrect = opt.id === current.id;
            const isSelected = selected === opt.id;
            let borderClass = "border-border";
            if (selected) {
              if (isCorrect) borderClass = "border-success ring-2 ring-success";
              else if (isSelected) borderClass = "border-destructive ring-2 ring-destructive";
            }

            return (
              <motion.button
                key={opt.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(opt.id)}
                className={`relative rounded-xl overflow-hidden border-2 ${borderClass} transition-all bg-card`}
              >
                <img
                  src={opt.image}
                  alt="option"
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
                {selected && isCorrect && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle2 className="h-6 w-6 text-success drop-shadow" />
                  </div>
                )}
                {selected && isSelected && !isCorrect && (
                  <div className="absolute top-2 right-2">
                    <XCircle className="h-6 w-6 text-destructive drop-shadow" />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Feedback & Next */}
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className={`text-lg font-heading font-bold mb-3 ${selected === current.id ? "text-success" : "text-destructive"}`}>
              {selected === current.id ? "🎉 Correct!" : `❌ The answer was "${current.word}"`}
            </p>
            <Button size="lg" className="rounded-xl" onClick={nextQuestion}>
              Next Question →
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ImageQuiz;
