import React from 'react';

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-gray-100 p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Clinic Login</h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          This is a simulated login for demo purposes.
        </p>
        <form>
          <label className="block mb-2 text-sm font-medium">Therapist ID</label>
          <input
            className="w-full p-2 border rounded-lg mb-4"
            placeholder="e.g. TH-2091"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
