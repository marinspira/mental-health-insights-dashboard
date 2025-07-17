import React from 'react';
import mockData from '../data/mockData.json';
import ClientCard from '../components/ClientCard';

export default function Dashboard() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">LunaView Clinician Dashboard</h1>
      <p className="text-xs text-gray-500 mb-4 italic">
        🔒 This dashboard uses anonymized data for demo purposes only. HIPAA considerations simulated.
      </p>
      {mockData.map(client => (
        <ClientCard key={client.client_id} data={client} />
      ))}
    </div>
  );
}
