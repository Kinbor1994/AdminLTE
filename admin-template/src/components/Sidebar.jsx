import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="block p-2 rounded hover:bg-gray-700">Dashboard</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block p-2 rounded hover:bg-gray-700">Widgets</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block p-2 rounded hover:bg-gray-700">Charts</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
