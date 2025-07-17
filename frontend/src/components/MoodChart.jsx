import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function MoodChart({ logs }) {
  return (
    <div className="my-4">
      <h3 className="font-semibold mb-2">Mood Trend</h3>
      <LineChart width={300} height={200} data={logs}>
        <Line type="monotone" dataKey="mood" stroke="#4f46e5" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 5]} />
        <Tooltip />
      </LineChart>
    </div>
  );
}
