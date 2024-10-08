import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { FaBatteryFull, FaBolt, FaTemperatureHigh } from 'react-icons/fa';
import GaugeChart from 'react-gauge-chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { FaChargingStation } from 'react-icons/fa';

// Sample Data (Replace with real-time data later)
const mockBatteryData = {
  soc: 37.9,
  voltage: 52.22,
  current: -1.04,
  temperature: 35.5, // New: Added temperature
  status: "discharging", // Added: Charging/Discharging status
  contactorStatus: "off", // Added: Main Contactor Status
  cells: [3.264, 3.261, 3.265, 3.261, 3.266, 3.265, 3.261, 3.265, 3.263, 3.263, 3.264, 3.265, 3.262, 3.265, 3.264, 3.265],
};
const mockChargerData = [
  { id: 1, location: 'Pond area', power: 3.3, energyConsumed: 0, status: 'offline' },
  { id: 2, location: 'Pond area', power: 3.3, energyConsumed: 0, status: 'offline' },
  { id: 3, location: 'Pond area', power: 7, energyConsumed: 0, status: 'offline' },
  { id: 4, location: 'MLCP 3rd floor', power: 7, energyConsumed: 0, status: 'offline' },
  { id: 5, location: 'Pond area', power: 7, energyConsumed: 0, status: 'offline' },
  { id: 6, location: 'Pond area', power: 7, energyConsumed: 0, status: 'offline' },
];

const App = () => {
  const [batteryData, setBatteryData] = useState(mockBatteryData);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data from an API
      // const result = await axios.get('API_ENDPOINT');
      // setBatteryData(result.data);

      // Here, we just update with the mock data
      setBatteryData(mockBatteryData);
    };

    const interval = setInterval(fetchData, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="p-4">
      <Row>
        <Col md={6}>
          <Card className="p-2 mb-4" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h4 className="text-center">State of Charge (SoC)</h4>
            <GaugeChart
              id="soc-gauge"
              nrOfLevels={30}
              percent={batteryData.soc / 100}
              colors={['#FF5F6D', '#FFC371', '#28a745']}
              arcWidth={0.1}
              textColor="#000000"
            />
            <h5 className="text-center mt-3">SoC: {batteryData.soc}%</h5>
          </Card>
        </Col>

        {/* Enhanced Battery Voltage and Current Card */}
        <Col md={6}>
          <Card className="p-5 mb-3" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h4 className="text-center mb-4">Battery Voltage and Current</h4>
            <div className="d-flex justify-content-around align-items-center" style={{ height: '100%' }}>
              {/* Voltage Section */}
              <div className="text-center">
                <FaBatteryFull size={50} color="#28a745" />
                <h5 className="mt-2">Voltage</h5>
                <h4>{batteryData.voltage}V</h4>
                <ProgressBar variant="success" now={(batteryData.voltage / 100) * 100} className="mt-3" style={{ height: '15px' }} />
              </div>

              {/* Current Section */}
              <div className="text-center">
                <FaBolt size={50} color="#ffc107" />
                <h5 className="mt-2">Current</h5>
                <h4>{batteryData.current}A</h4>
                <ProgressBar variant="warning" now={Math.abs((batteryData.current / 100) * 100)} className="mt-3" style={{ height: '15px' }} />
              </div>

              {/* Temperature Section */}
              <div className="text-center">
                <FaTemperatureHigh size={50} color="#dc3545" />
                <h5 className="mt-2">Temperature</h5>
                <h4>{batteryData.temperature}°C</h4>
                <ProgressBar variant="danger" now={(batteryData.temperature / 100) * 100} className="mt-3" style={{ height: '15px' }} />
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-4 text-center mb-4">
              <Row>
                <Col xs={6}>
                  <h6 className="text-muted">Battery Status:</h6>
                  <h6 className={batteryData.status === "charging" ? "text-success" : "text-danger"}>
                    {batteryData.status === "charging" ? "Charging" : "Discharging"}
                  </h6>
                </Col>
                <Col xs={6}>
                  <h6 className="text-muted">Main Contactor Status:</h6>
                  <h6 className={batteryData.contactorStatus === "on" ? "text-success" : "text-danger"}>
                    {batteryData.contactorStatus === "on" ? "ON" : "OFF"}
                  </h6>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Real-Time Cell Voltages */}
      <Row>
        <Col md={12}>
          <Card className="p-4 mb-3" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h4 className="text-center">Real-Time Cell Voltages</h4>
            <Row>
              {batteryData.cells.map((cell, index) => {
                // Calculate battery percentage based on cell voltage
                const minVoltage = 2.5; // Lower bound for cell voltage
                const maxVoltage = 4.2; // Upper bound for cell voltage
                const percentage = ((cell - minVoltage) / (maxVoltage - minVoltage)) * 100;

                return (
                  <Col xs={6} sm={3} md={2} key={index} className="mb-2">
                    <Card className="p-4 mb-3" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                      <h6>Cell {index + 1}</h6>
                      <p>{cell.toFixed(3)} V</p>
                      {/* Progress bar to represent cell voltage as percentage */}
                      <ProgressBar
                        now={percentage}
                        label={`${Math.round(percentage)}%`}
                        variant={percentage > 75 ? 'success' : percentage > 50 ? 'warning' : 'danger'}
                        className="mt-2"
                        style={{ height: '20px' }}
                      />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Voltage/Current Trends */}
      <Row>
        <Col md={12}>
          <Card className="p-4 mb-3" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h4 className="text-center">Voltage/Current Trends</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={[
                  { time: '00:00', voltage: 52.2, current: -1.04 },
                  { time: '01:00', voltage: 52.1, current: -1.02 },
                  { time: '02:00', voltage: 52.0, current: -1.01 },
                  { time: '03:00', voltage: 51.9, current: -1.00 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" dataKey="voltage" orientation="left" />
                <YAxis yAxisId="right" dataKey="current" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="voltage" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="current" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
};

export default App;
