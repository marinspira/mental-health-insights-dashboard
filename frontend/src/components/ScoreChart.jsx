import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function ScoreChart({ phq9, gad7 }) {
  return (
   <div className="flex items-start gap-6">
      <div>
        <h3 className="font-semibold mb-2">PHQ-9 Scores</h3>
        <LineChart width={300} height={200} data={phq9}>
          <Line type="monotone" dataKey="score" stroke="#10b981" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 27]} />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
        </LineChart>
      </div>

      <div>
        <h3 className="font-semibold mb-2">GAD-7 Scores</h3>
        {gad7.length > 0 && (
          <BarChart width={300} height={200} data={gad7}>
            <Bar dataKey="score" fill="#f59e0b" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 21]} />
            <Tooltip />
          </BarChart>
        )}
      </div>
    </div>
  );
}
