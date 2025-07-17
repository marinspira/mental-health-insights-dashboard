import React from 'react';
import MoodChart from './MoodChart';
import ScoreChart from './ScoreChart';
import RiskAlerts from './RiskAlerts';

export default function ClientCard({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
      <h2 className="font-semibold text-lg mb-2">Client ID: {data.client_id}</h2>
      <p className="text-sm text-gray-700">
        Age Range: {data.age_range} | Gender: {data.gender}
      </p>
      <p className="text-sm text-gray-700 mb-2">
        Conditions: {data.conditions.join(', ')}
      </p>
      <RiskAlerts data={data} />
      <MoodChart logs={data.mood_logs} />
      <ScoreChart phq9={data.phq9_scores} gad7={data.gad7_scores} />
    </div>
  );
}
