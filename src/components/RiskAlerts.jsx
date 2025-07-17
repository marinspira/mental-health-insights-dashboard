export default function RiskAlerts({ data }) {
  const moods = data.mood_logs;
  const drop =
    moods.length >= 2 &&
    moods[moods.length - 2].mood - moods[moods.length - 1].mood >= 2;
  const phq9 = data.phq9_scores[data.phq9_scores.length - 1]?.score;
  const missed = data.missed_sessions;

  return (
    <div className="mb-2 text-sm">
      {drop && <p className="text-red-600">⚠️ Sudden mood drop detected</p>}
      {phq9 >= 15 && <p className="text-red-600">⚠️ PHQ-9 indicates severe depression</p>}
      {missed >= 2 && <p className="text-orange-600">⚠️ Multiple missed sessions</p>}
    </div>
  );
}
