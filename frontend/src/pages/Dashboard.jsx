import React, { useState } from 'react';
import mockData from '../data/mockData.json';
import ClientCard from '../components/ClientCard';

export default function Dashboard() {
  const [activeClientId, setActiveClientId] = useState(mockData[0].client_id);
  const activeClient = mockData.find(c => c.client_id === activeClientId);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside
        className={`h-full bg-brand-grey text-white transition-[width] duration-300 ease-in-out overflow-hidden ${isOpen ? 'w-60' : 'w-16'}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-start h-full px-2 py-4 space-y-4">
          <img
            alt="Logo"
            src="https://cdn-icons-png.flaticon.com/512/10480/10480648.png"
            className="w-10 h-10 mx-auto mb-4"
          />
          <ul className="flex flex-col gap-2 w-full">
            {mockData.map((client) => (
              <li key={client.client_id}>
                <button
                  onClick={() => setActiveClientId(client.client_id)}
                  className={`flex items-center gap-2 px-3 py-2 w-full rounded-lg hover:bg-brand-yellow_light transition ${activeClientId === client.client_id ? 'bg-brand-yellow_light' : ''
                    }`}
                >

                  {isOpen ? <span className="truncate">{client.client_id}</span> : <span className="font-bold uppercase">{client.client_id[0]}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Clinician Dashboard</h1>
        <p className="text-xs text-gray-500 mb-4 italic">
          🔒 This dashboard uses anonymized data for demo purposes only. HIPAA considerations simulated.
        </p>
        {activeClient && <ClientCard data={activeClient} />}
      </main>
    </div>
  );
}
