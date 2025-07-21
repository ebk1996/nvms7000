  import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  // State to manage the active sidebar item
  const [activeItem, setActiveItem] = useState('live_view');
  // State to manage the layout of video feeds (e.g., 1x1, 2x2, 3x3)
  const [layout, setLayout] = useState('2x2'); // Default to 2x2 grid

  // Function to render video placeholders based on the selected layout
  const renderVideoFeeds = () => {
    let numFeeds = 4; // Default for 2x2
    let gridCols = 'grid-cols-2';

    switch (layout) {
      case '1x1':
        numFeeds = 1;
        gridCols = 'grid-cols-1';
        break;
      case '2x2':
        numFeeds = 4;
        gridCols = 'grid-cols-2';
        break;
      case '3x3':
        numFeeds = 9;
        gridCols = 'grid-cols-3';
        break;
      case '4x4':
        numFeeds = 16;
        gridCols = 'grid-cols-4';
        break;
      default:
        numFeeds = 4;
        gridCols = 'grid-cols-2';
    }

    const feeds = [];
    for (let i = 1; i <= numFeeds; i++) {
      feeds.push(
        <div
          key={i}
          className="relative bg-gray-800 flex items-center justify-center text-gray-400 text-xl font-bold border border-gray-700 aspect-video"
        >
          {/* Placeholder for video content */}
          <span className="absolute top-2 left-2 text-sm text-gray-500">Camera {i}</span>
          <svg
            className="w-1/3 h-1/3 text-gray-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 4 4 4-4V5h-2L8 9l-4-4H4v10z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      );
    }

    return (
      <div className={`grid ${gridCols} gap-1 p-1 flex-grow overflow-auto`}>
        {feeds}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Header Bar */}
      <header className="flex items-center justify-between p-4 bg-gray-800 shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-blue-400">NVMS7000 Clone</h1>
          {/* Layout selection buttons */}
          <div className="flex space-x-2">
            {['1x1', '2x2', '3x3', '4x4'].map((l) => (
              <button
                key={l}
                onClick={() => setLayout(l)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200
                  ${layout === l ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">User: Admin</span>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200 shadow-md">
            <svg
              className="w-5 h-5 inline-block mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h5a3 3 0 013 3v1"
              ></path>
            </svg>
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 p-4 border-r border-gray-700 flex flex-col shadow-lg">
          <nav className="space-y-2">
            {/* Sidebar Navigation Items */}
            {[
              { id: 'live_view', label: 'Live View', icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.555-4.555A.5.5 0 0120 6v12a.5.5 0 01-.445.445L15 14m-2 2l-2.555 2.555A.5.5 0 019 18V6a.5.5 0 01.445-.445L13 10m-2 2H3"></path></svg>
              ) },
              { id: 'devices', label: 'Devices', icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              ) },
              { id: 'playback', label: 'Playback', icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197 2.132A1 1 0 0110 13.88v-3.76a1 1 0 011.555-.832l3.197 2.132a1 1 0 010 1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              ) },
              { id: 'settings', label: 'Settings', icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              ) },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`flex items-center w-full px-4 py-2 rounded-md text-left text-base font-medium transition-colors duration-200
                  ${activeItem === item.id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Panel */}
        <main className="flex-grow flex flex-col bg-gray-900 overflow-hidden">
          {/* Content based on active sidebar item */}
          {activeItem === 'live_view' && (
            <div className="flex flex-col flex-grow">
              <h2 className="text-xl font-semibold p-4 border-b border-gray-700">Live View</h2>
              {renderVideoFeeds()}
            </div>
          )}

          {activeItem === 'devices' && (
            <div className="p-4 flex-grow overflow-auto">
              <h2 className="text-xl font-semibold mb-4">Device Management</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300">
                  This section would display a list of connected devices, their status, and options to add or remove devices.
                </p>
                <ul className="mt-4 space-y-2 text-gray-400">
                  <li>- Camera 1 (Online)</li>
                  <li>- NVR 1 (Online)</li>
                  <li>- Doorbell Camera (Offline)</li>
                </ul>
              </div>
            </div>
          )}

          {activeItem === 'playback' && (
            <div className="p-4 flex-grow overflow-auto">
              <h2 className="text-xl font-semibold mb-4">Video Playback</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300">
                  Here, users could select specific camera footage by date and time for playback.
                </p>
                <div className="mt-4 bg-gray-700 h-64 flex items-center justify-center rounded-md text-gray-400">
                  Playback Controls and Timeline Placeholder
                </div>
              </div>
            </div>
          )}

          {activeItem === 'settings' && (
            <div className="p-4 flex-grow overflow-auto">
              <h2 className="text-xl font-semibold mb-4">System Settings</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300">
                  This area would contain various application settings, user management, network configurations, etc.
                </p>
                <ul className="mt-4 space-y-2 text-gray-400">
                  <li>- User Accounts</li>
                  <li>- Network Settings</li>
                  <li>- Storage Configuration</li>
                  <li>- Notifications</li>
                </ul>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
