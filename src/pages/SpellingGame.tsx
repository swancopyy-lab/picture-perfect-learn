import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, RotateCcw, Volume2, Delete } from "lucide-react";
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

// Use words with simpler spelling (single words, not phrases)
const spellingWords = vocabulary.filter(w => !w.word.includes(" ") && !w.word.includes("…") && !w.word.includes("?") && !w.word.includes("!") && !w.word.includes("'") && w.word.length <= 12);

const SpellingGame = () => {
  const navigate = useNavigate();
  const [wordList] = useState(() => shuffle(spellingWords));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [availableLetters, setAvailableLetters] = useState<{ letter: string; used: boolean; idx: number }[]>([]);
  const [status, setStatus] = useState<"playing" | "correct" | "wrong">("playing");
  const [score, setScore] = useState(0);

  const current = wordList[currentIndex];
  const targetWord = current?.word.toLowerCase() || "";

  useMemo(() => {
    const letters = targetWord.split("").map((l, i) => ({ letter: l, used: false, idx: i }));
    // Add some random extra letters
    const extras = "abcdefghijklmnopqrstuvwxyz";
    const extraCount = Math.min(4, Math.max(2, 8 - targetWord.length));
    for (let i = 0; i < extraCount; i++) {
      letters.push({ letter: extras[Math.floor(Math.random() * extras.length)], used: false, idx: targetWord.length + i });
    }
    setAvailableLetters(shuffle(letters));
    setUserInput([]);
    setStatus("playing");
  }, [targetWord]);

  const handleLetterClick = useCallback((idx: number) => {
    if (status !== "playing") return;
    setAvailableLetters(prev => prev.map(l => l.idx === idx ? { ...l, used: true } : l));
    const letter = availableLetters.find(l => l.idx === idx)?.letter || "";
    const newInput = [...userInput, letter];
    setUserInput(newInput);

    if (newInput.length === targetWord.length) {
      const isCorrect = newInput.join("") === targetWord;
      setStatus(isCorrect ? "correct" : "wrong");
      if (isCorrect) setScore(s => s + 1);
    }
  }, [status, availableLetters, userInput, targetWord]);

  const handleDelete = () => {
    if (userInput.length === 0 || status !== "playing") return;
    const lastLetter = userInput[userInput.length - 1];
    setUserInput(prev => prev.slice(0, -1));
    // Unmark one matching used letter
    setAvailableLetters(prev => {
      let found = false;
      return prev.map(l => {
        if (!found && l.used && l.letter === lastLetter) {
          found = true;
          return { ...l, used: false };
        }
        return l;
      });
    });
  };

  const nextWord = () => {
    setCurrentIndex(i => (i + 1) % wordList.length);
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
          <h1 className="text-xl font-heading font-bold">Spelling Game</h1>
          <span className="text-sm font-body text-muted-foreground">
            Score: <span className="font-bold text-primary">{score}</span>
          </span>
        </div>

        {/* Image & Audio */}
        <div className="bg-card rounded-2xl card-shadow p-4 mb-6 text-center">
          <img
            src={current.image}
            alt="Spell this word"
            className="w-full h-40 object-cover rounded-xl mb-4"
            loading="lazy"
          />
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={() => speakWord(current.word)}
          >
            <Volume2 className="h-4 w-4 mr-1" /> Listen
          </Button>
        </div>

        {/* Letter Boxes */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          {targetWord.split("").map((_, i) => (
            <div
              key={i}
              className={`w-10 h-12 rounded-lg border-2 flex items-center justify-center text-xl font-heading font-bold transition-all ${
                userInput[i]
                  ? status === "correct"
                    ? "border-success bg-success/10 text-success"
                    : status === "wrong"
                    ? "border-destructive bg-destructive/10 text-destructive"
                    : "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-card"
              }`}
            >
              {userInput[i] || ""}
            </div>
          ))}
          {status === "playing" && userInput.length > 0 && (
            <Button variant="ghost" size="icon" onClick={handleDelete} className="ml-1">
              <Delete className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Scrambled Letters */}
        {status === "playing" && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {availableLetters.map((l) => (
              <motion.button
                key={l.idx}
                whileTap={{ scale: 0.9 }}
                onClick={() => !l.used && handleLetterClick(l.idx)}
                disabled={l.used}
                className={`w-11 h-11 rounded-xl font-heading font-bold text-lg transition-all ${
                  l.used
                    ? "bg-muted text-muted-foreground opacity-40"
                    : "bg-card border border-border text-foreground card-shadow hover:border-primary"
                }`}
              >
                {l.letter}
              </motion.button>
            ))}
          </div>
        )}

        {/* Feedback */}
        <AnimatePresence>
          {status !== "playing" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <p className={`text-lg font-heading font-bold mb-1 ${status === "correct" ? "text-success" : "text-destructive"}`}>
                {status === "correct" ? "🎉 Perfect!" : "❌ Not quite!"}
              </p>
              {status === "wrong" && (
                <p className="text-muted-foreground font-body mb-3">
                  The correct spelling is: <span className="font-bold text-foreground">{current.word}</span>
                </p>
              )}
              <Button size="lg" className="rounded-xl mt-2" onClick={nextWord}>
                Next Word →
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpellingGame;
