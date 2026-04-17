import { useState, useMemo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Volume2, Delete } from "lucide-react";
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

// Pick which letter positions to reveal as hints (about 1/3 of letters)
function pickHintPositions(length: number): Set<number> {
  const hintCount = Math.max(1, Math.floor(length / 3));
  const positions = new Set<number>();
  // Always reveal the first letter as a starter hint
  positions.add(0);
  // Then add random additional hints
  while (positions.size < hintCount + 1 && positions.size < length - 1) {
    positions.add(Math.floor(Math.random() * length));
  }
  return positions;
}

const SpellingGame = () => {
  const navigate = useNavigate();
  const [wordList] = useState(() => shuffle(spellingWords));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState<(string | null)[]>([]);
  const [hintPositions, setHintPositions] = useState<Set<number>>(new Set());
  const [availableLetters, setAvailableLetters] = useState<{ letter: string; used: boolean; idx: number }[]>([]);
  const [status, setStatus] = useState<"playing" | "correct" | "wrong">("playing");
  const [score, setScore] = useState(0);

  const current = wordList[currentIndex];
  const targetWord = current?.word.toLowerCase() || "";

  // Setup the puzzle whenever the target word changes
  useEffect(() => {
    if (!targetWord) return;
    const hints = pickHintPositions(targetWord.length);
    setHintPositions(hints);

    // Pre-fill the hint positions in user input, leave the rest as null
    const initialInput: (string | null)[] = targetWord.split("").map((l, i) =>
      hints.has(i) ? l : null
    );
    setUserInput(initialInput);

    // Build the letters to choose from = remaining letters + a few extras
    const remainingLetters: string[] = [];
    targetWord.split("").forEach((l, i) => {
      if (!hints.has(i)) remainingLetters.push(l);
    });
    const extras = "abcdefghijklmnopqrstuvwxyz";
    const extraCount = Math.min(3, Math.max(2, 6 - remainingLetters.length));
    for (let i = 0; i < extraCount; i++) {
      remainingLetters.push(extras[Math.floor(Math.random() * extras.length)]);
    }
    const letters = remainingLetters.map((letter, idx) => ({ letter, used: false, idx }));
    setAvailableLetters(shuffle(letters));
    setStatus("playing");
  }, [targetWord]);

  // Find the next empty (non-hint) slot index
  const nextEmptyIndex = useMemo(() => {
    for (let i = 0; i < userInput.length; i++) {
      if (!hintPositions.has(i) && userInput[i] === null) return i;
    }
    return -1;
  }, [userInput, hintPositions]);

  // Check completion
  useEffect(() => {
    if (userInput.length === 0 || status !== "playing") return;
    if (userInput.every(c => c !== null)) {
      const isCorrect = userInput.join("") === targetWord;
      setStatus(isCorrect ? "correct" : "wrong");
      if (isCorrect) setScore(s => s + 1);
    }
  }, [userInput, targetWord, status]);

  const handleLetterClick = useCallback((idx: number) => {
    if (status !== "playing") return;
    if (nextEmptyIndex === -1) return;
    const letter = availableLetters.find(l => l.idx === idx)?.letter;
    if (!letter) return;
    setAvailableLetters(prev => prev.map(l => l.idx === idx ? { ...l, used: true } : l));
    setUserInput(prev => {
      const copy = [...prev];
      copy[nextEmptyIndex] = letter;
      return copy;
    });
  }, [status, availableLetters, nextEmptyIndex]);

  const handleDelete = () => {
    if (status !== "playing") return;
    // Find the last filled non-hint slot
    let lastFilled = -1;
    for (let i = userInput.length - 1; i >= 0; i--) {
      if (!hintPositions.has(i) && userInput[i] !== null) {
        lastFilled = i;
        break;
      }
    }
    if (lastFilled === -1) return;
    const letter = userInput[lastFilled];
    setUserInput(prev => {
      const copy = [...prev];
      copy[lastFilled] = null;
      return copy;
    });
    // Free up one used letter that matches
    setAvailableLetters(prev => {
      let found = false;
      return prev.map(l => {
        if (!found && l.used && l.letter === letter) {
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

  const hasUserInput = userInput.some((c, i) => !hintPositions.has(i) && c !== null);

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
          <div className="w-full h-40 rounded-xl mb-4 bg-muted flex items-center justify-center overflow-hidden">
            <img
              src={current.image}
              alt="Spell this word"
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
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
          {targetWord.split("").map((_, i) => {
            const isHint = hintPositions.has(i);
            const filled = userInput[i];
            return (
              <div
                key={i}
                className={`w-10 h-12 rounded-lg border-2 flex items-center justify-center text-xl font-heading font-bold transition-all ${
                  isHint
                    ? "border-secondary bg-secondary/20 text-foreground"
                    : filled
                    ? status === "correct"
                      ? "border-success bg-success/10 text-success"
                      : status === "wrong"
                      ? "border-destructive bg-destructive/10 text-destructive"
                      : "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-card border-dashed"
                }`}
              >
                {filled || ""}
              </div>
            );
          })}
          {status === "playing" && hasUserInput && (
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
