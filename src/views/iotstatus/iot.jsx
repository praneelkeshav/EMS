import React, { useState } from 'react';
import './iot.css';

const MultiLineDiagram = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  // Devices data array
  const devices = [
    {
      id: 1,
      name: 'Main Switch',
      status: 'inactive',
      voltage: 'N/A',
      current: 'N/A',
      logs: ['Switched off at 12:30PM', 'Last maintenance: 1 month ago'],
      performance: { uptime: '95%', issues: 0 },
      config: { manufacturer: 'SwitchTech', model: 'STX-100' }
    },
    {
      id: 2,
      name: 'Main Busbar',
      status: 'active',
      voltage: '415V',
      current: '200A',
      logs: ['Running smoothly', 'No incidents in 30 days'],
      performance: { uptime: '100%', issues: 0 },
      config: { manufacturer: 'PowerLine', model: 'PL-200' }
    },
    {
      id: 3,
      name: 'Transformer 1',
      status: 'active',
      voltage: '400V',
      current: '150A',
      logs: ['Peak load reached yesterday', 'No incidents in 7 days'],
      performance: { uptime: '99%', issues: 1 },
      config: { manufacturer: 'VoltCorp', model: 'VC-500' }
    },
    {
      id: 4,
      name: 'Transformer 2',
      status: 'inactive',
      voltage: 'N/A',
      current: 'N/A',
      logs: ['Switched off', 'Scheduled maintenance in 2 days'],
      performance: { uptime: '80%', issues: 5 },
      config: { manufacturer: 'VoltCorp', model: 'VC-500' }
    },
    {
      id: 5,
      name: 'Load 1',
      status: 'active',
      voltage: '230V',
      current: '80A',
      logs: ['Stable', 'Peak load recorded 2 hours ago'],
      performance: { uptime: '98%', issues: 2 },
      config: { manufacturer: 'LoadMaster', model: 'LM-300' }
    },
    {
      id: 6,
      name: 'Load 2',
      status: 'active',
      voltage: '230V',
      current: '70A',
      logs: ['Normal operation', 'No incidents in 5 days'],
      performance: { uptime: '99%', issues: 0 },
      config: { manufacturer: 'LoadMaster', model: 'LM-300' }
    }
  ];

  // Function to set the selected device and show details
  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
  };

  // Function to close the modal or detailed view
  const closeDetails = () => {
    setSelectedDevice(null);
  };

  // Render the multi-line diagram with devices and color-coded statuses
  return (
    <div className="multi-line-diagram">
      <h2>Multi Line Diagram</h2>
      <div className="device-list">
        {devices.map((device) => (
          <div
            key={device.id}
            className={`device-box ${device.status}`}
            onClick={() => handleDeviceClick(device)}
          >
            <div className={`status-dot ${device.status}`}></div>
            <div className="device-details">
              <p className="device-name">{device.name}</p>
              <p className="device-status">Status: {device.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Display detailed view if a device is selected */}
      {selectedDevice && (
        <div className="device-details-modal">
          <div className="modal-content">
            <h3>{selectedDevice.name} Details</h3>
            <p><strong>Status:</strong> {selectedDevice.status}</p>
            <p><strong>Voltage:</strong> {selectedDevice.voltage}</p>
            <p><strong>Current:</strong> {selectedDevice.current}</p>
            <h4>Logs</h4>
            <ul>
              {selectedDevice.logs.map((log, index) => (
                <li key={index}>{log}</li>
              ))}
            </ul>
            <h4>Performance</h4>
            <p>Uptime: {selectedDevice.performance.uptime}</p>
            <p>Issues: {selectedDevice.performance.issues}</p>
            <h4>Configuration</h4>
            <p>Manufacturer: {selectedDevice.config.manufacturer}</p>
            <p>Model: {selectedDevice.config.model}</p>
            <button onClick={closeDetails} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiLineDiagram;
