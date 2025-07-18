import { useState } from "react";

export const PHQ_QUESTIONS = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself — or that you are a failure",
  "Trouble concentrating on things",
  "Moving or speaking slowly or being fidgety/restless",
  "Thoughts that you'd be better off dead or hurting yourself",
];

export const GAD_QUESTIONS = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it is hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid as if something awful might happen",
];

const OPTIONS = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "Several days" },
  { value: 2, label: "More than half the days" },
  { value: 3, label: "Nearly every day" },
];

export default function QuestionnaireForm({ title, questions, onSubmit, onClose }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (i, val) => {
    if (submitted) return;
    const next = [...answers];
    next[i] = val;
    setAnswers(next);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = answers.reduce((a, b) => a + (b ?? 0), 0);
    const data = {
      score,
      date: new Date().toISOString(),
    };
    onSubmit(data);
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {questions.map((q, i) => (
          <div key={i}>
            <p>{i + 1}. {q}</p>
            <div className="flex gap-4 flex-wrap">
              {OPTIONS.map((opt) => (
                <label key={opt.value} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name={`q-${i}`}
                    checked={answers[i] === opt.value}
                    onChange={() => handleChange(i, opt.value)}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>
        ))}

        {!submitted && (
          <button
            type="submit"
            className="mt-4 bg-brand-grey text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        )}
      </form>

      {submitted && (
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Score:</strong> {answers.reduce((a, b) => a + (b ?? 0), 0)}</p>
          <p className="text-sm text-gray-600">
            Submitted on: {new Date().toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}
