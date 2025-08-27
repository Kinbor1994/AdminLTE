import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Placeholder cards */}
        <div className="bg-white p-4 rounded-lg shadow">Card 1</div>
        <div className="bg-white p-4 rounded-lg shadow">Card 2</div>
        <div className="bg-white p-4 rounded-lg shadow">Card 3</div>
        <div className="bg-white p-4 rounded-lg shadow">Card 4</div>
      </div>
    </div>
  );
};

export default Dashboard;
