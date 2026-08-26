import { useState } from "react";
import { data } from "./data/data";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option) => {
    if (showFeedback) return;

    setSelectedAnswer(option);
    setShowFeedback(true);

    if (option === data[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion + 1 < data.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-slate-900 flex-col">
      <div className="flex items-center flex-col mb-5">
        <h1 className="text-4xl font-bold text-emerald-400">Trivia app</h1>
        <p className="text-lg text-slate-400">
          Text your knowledge stupid thing you are.
        </p>
        <p className="text-white">Score: {score}</p>
      </div>
      <QuestionCard
        data={data[currentQuestion]}
        onAnswer={handleAnswer}
        showFeedback={showFeedback}
        selected={selectedAnswer}
      />
      {showFeedback && (
        <button
          className="my-4 py-1 px-3 bg-gray-500 text-white rounded-lg cursor-pointer"
          onClick={goToNext}
        >
          {currentQuestion + 1 < data.length ? "Next" : "Show Feedback"}
        </button>
      )}
    </div>
  );
}

export default App;
