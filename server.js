// Import necessary modules
const express = require('express');
const cors = require('cors'); // Required for cross-origin requests from React app
const path = require('path'); // For serving static files if needed

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3001; // Server will run on port 3001 or environment variable

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable parsing of JSON request bodies
app.use(express.urlencoded({ extended: true })); // Enable parsing of URL-encoded request bodies

// Basic API Route: Get Server Status
// This endpoint can be used by the React app to check if the server is running
app.get('/api/status', (req, res) => {
  console.log('GET /api/status endpoint hit');
  res.json({
    status: 'Server is running',
    timestamp: new Date().toISOString(),
    message: 'Welcome to the NVMS7000 Clone Backend API!'
  });
});

// Example: A placeholder API route for fetching device data
// In a real application, this would fetch data from a database
app.get('/api/devices', (req, res) => {
  console.log('GET /api/devices endpoint hit');
  const devices = [
    { id: 'cam1', name: 'Front Gate Camera', status: 'Online', ip: '192.168.1.101' },
    { id: 'cam2', name: 'Living Room Camera', status: 'Online', ip: '192.168.1.102' },
    { id: 'nvr1', name: 'Main NVR', status: 'Online', ip: '192.168.1.50' },
    { id: 'doorbell', name: 'Smart Doorbell', status: 'Offline', ip: '192.168.1.103' },
  ];
  res.json(devices);
});

// Serve static files (optional, if you want to serve your React build from Express)
// If you build your React app, the static files will be in the 'build' folder.
// You would then place this Express server in the root of your project
// and run 'npm run build' in your React app, then 'node server.js' (or similar)
// in your Express server directory.
// app.use(express.static(path.join(__dirname, '..', 'build')));

// Catch-all handler for any requests that don't match our API routes
// This should come after all other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });


// Start the server
app.listen(PORT, () => {
  console.log(`NVMS7000 Clone Backend Server listening on port ${PORT}`);
  console.log(`Access status at: http://localhost:${PORT}/api/status`);
  console.log(`Access devices at: http://localhost:${PORT}/api/devices`);
});
