import React from "react";

const QuestionCard = ({ data, onAnswer, showFeedback, selected }) => {
  const { question, options, answer } = data;

  const colorButton = (option) => {
    if (!showFeedback) {
      return "bg-slate-500 hover:bg-slate-400 hover:scale-[1.01]";
    }

    if (option === answer) {
      return "bg-emerald-700";
    }

    if (option === selected) {
      return "bg-rose-600";
    }

    return "bg-slate-500 opacity-50";
  };

  return (
    <div className="bg-gray-700 grid px-4 py-6 rounded-2xl">
      <p className="text-white font-bold mb-3"># {question}</p>
      {options.map((option, index) => (
        <button
          onClick={() => onAnswer(option)}
          className={`${colorButton(option)} rounded-lg py-2 px-3 my-2 cursor-pointer text-amber-50 text-left`}
          key={index}
          disabled={showFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
