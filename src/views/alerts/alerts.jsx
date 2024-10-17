import React, { useState } from 'react';

const AlertLogs = () => {
  const alertLogs = [
    { date: '5/14/2024', systemName: 'Building Load', alert: 'Peak Demand Limit - Level 2 Breach', limitValue: '4292(kWh)', time: '2:54:16 PM', severity: 'High', action: 'Mail sent' },
    { date: '5/14/2024', systemName: 'Thermal', alert: 'Temperature Exceeded', limitValue: '85°C', time: '3:54:16 PM', severity: 'Medium', action: 'Alert Sent' },
    { date: '5/14/2024', systemName: 'Chillers', alert: 'Chiller Failure', limitValue: 'Chiller 3', time: '4:12:16 PM', severity: 'High', action: 'Technician Notified' },
    { date: '5/14/2024', systemName: 'Building Load', alert: 'Peak Demand Limit - Level 2 Breach', limitValue: '4317(kWh)', time: '2:53:16 PM', severity: 'High', action: 'Mail sent' },
    // Add more alerts as needed
    { date: '5/14/2024', systemName: 'Building Load', alert: 'Peak Demand Limit - Level 2 Breach', limitValue: '4292(kWh)', time: '2:54:16 PM', severity: 'High', action: 'Mail sent' },
    { date: '5/14/2024', systemName: 'Thermal', alert: 'Temperature Exceeded', limitValue: '85°C', time: '3:54:16 PM', severity: 'Medium', action: 'Alert Sent' },
    { date: '5/14/2024', systemName: 'Chillers', alert: 'Chiller Failure', limitValue: 'Chiller 3', time: '4:12:16 PM', severity: 'High', action: 'Technician Notified' },
    { date: '5/14/2024', systemName: 'Building Load', alert: 'Peak Demand Limit - Level 2 Breach', limitValue: '4317(kWh)', time: '2:53:16 PM', severity: 'High', action: 'Mail sent' },
    // Add more alerts as needed
  ];

  const [filter, setFilter] = useState('All');

  const filteredLogs = filter === 'All' ? alertLogs : alertLogs.filter(log => log.systemName === filter);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'black',
    color: 'white',
  };

  const thStyles = {
    border: '1px solid white',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#333',
    fontWeight: 'bold',
    color: 'white',
  };

  const tdStyles = {
    border: '1px solid white',
    padding: '8px',
    textAlign: 'center',
  };

  const hoverRowStyles = {
    backgroundColor: '#000000',
  };

  const alertLogsContainer = {
    padding: '20px',
  };

  const alertFilter = {
    marginBottom: '15px',
  };

  return (
    <div style={alertLogsContainer}>
      <h3><b><center>Alert Logs</center></b></h3>
      <div style={alertFilter}>
        <label htmlFor="filter" style={{ color: 'black', marginRight: '10px', padding: '5px' }}>Filter Alerts: </label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Building Load">Building Load</option>
          <option value="Thermal">Thermal</option>
          <option value="Chillers">Chillers</option>
        </select>
      </div>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>Date</th>
            <th style={thStyles}>System Name</th>
            <th style={thStyles}>Alert</th>
            <th style={thStyles}>Limit Value</th>
            <th style={thStyles}>Time</th>
            <th style={thStyles}>Severity</th>
            <th style={thStyles}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.map((log, index) => (
            <tr key={index} style={index % 2 === 0 ? {} : hoverRowStyles}>
              <td style={tdStyles}>{log.date}</td>
              <td style={tdStyles}>{log.systemName}</td>
              <td style={tdStyles}>{log.alert}</td>
              <td style={tdStyles}>{log.limitValue}</td>
              <td style={tdStyles}>{log.time}</td>
              <td style={tdStyles}>{log.severity}</td>
              <td style={tdStyles}>{log.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertLogs;
