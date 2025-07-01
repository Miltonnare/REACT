import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 py-10">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-4">About</h2>
        <p className="text-gray-700">This is a MERN blog project demonstrating frontend-backend integration.</p>
      </div>
    </div>
  );
}

export default About; 