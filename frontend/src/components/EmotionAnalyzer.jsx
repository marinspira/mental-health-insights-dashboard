import { useState } from "react";

export default function EmotionAnalyzer() {
  const [noteText, setNoteText] = useState("");
  const [sessions, setSessions] = useState([]);
  const [currentSessionSaved, setCurrentSessionSaved] = useState(false);
  const [emotions, setEmotions] = useState([]);

  const analyze = async () => {
    if (!noteText.trim()) return;

    const res = await fetch("http://localhost:8000/analyze-emotions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: noteText }),
    });

    const data = await res.json();
    setEmotions(data.emotions);
  };

  const saveSession = () => {
    const today = new Date().toISOString().split("T")[0];

    setSessions((prev) => [
      ...prev,
      {
        date: today,
        emotions: emotions,
      },
    ]);

    setCurrentSessionSaved(true);
  };

  const startNewSession = () => {
    setNoteText("");
    setEmotions([]);
    setCurrentSessionSaved(false);
  };

  return (
    <div className="p-4 max-w-xl space-y-4">
      <h2 className="text-xl font-bold">Therapist Session</h2>

      {!currentSessionSaved && (
        <>
          <textarea
            className="w-full border rounded p-2"
            rows="4"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Paste today's session note..."
          />

          <div className="flex gap-2">
            <button
              className="bg-brand-grey text-white px-4 py-2 rounded"
              onClick={analyze}
            >
              Submit
            </button>

            {emotions.length > 0 && (
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={saveSession}
              >
                Save Session
              </button>
            )}
          </div>
        </>
      )}

      {emotions.length > 0 && !currentSessionSaved && (
        <div>
          <h3 className="font-semibold">Detected Emotions:</h3>
          <ul>
            {emotions
              .filter((e) => e.score > 0.05)
              .sort((a, b) => b.score - a.score)
              .map((emotion) => (
                <li key={emotion.label}>
                  <strong>{emotion.label}</strong>: {(emotion.score * 100).toFixed(1)}%
                </li>
              ))}
          </ul>
        </div>
      )}

      {currentSessionSaved && (
        <div>
          <p className="text-green-600 font-semibold">Session saved!</p>
          <button
            className="mt-2 px-4 py-2 bg-gray-600 text-white rounded"
            onClick={startNewSession}
          >
            Start Next Session
          </button>
        </div>
      )}

      <div className="mt-8">
        <h3 className="font-semibold">Past Sessions:</h3>
        <ul className="list-disc pl-6">
          {sessions.map((session, idx) => (
            <li key={idx}>
              <span className="font-bold">{session.date}:</span>{" "}
              {session.emotions
                .filter((e) => e.score > 0.1)
                .slice(0, 3)
                .map((e) => `${e.label} (${(e.score * 100).toFixed(0)}%)`)
                .join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
