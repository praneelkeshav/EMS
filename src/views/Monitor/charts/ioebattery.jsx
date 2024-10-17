import React from 'react';
import {
  LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart,
} from 'recharts';
import { Container, Row, Col, Card } from 'react-bootstrap';

const data = [
  { time: '00:00', chargingEnergy: 0, dischargingEnergy: 0, idle: 0, packSoC: 80 },
  { time: '01:00', chargingEnergy: 0, dischargingEnergy: 0, idle: 0, packSoC: 80 },
  { time: '02:00', chargingEnergy: 0, dischargingEnergy: 0, idle: 0, packSoC: 80 },
  { time: '03:00', chargingEnergy: 0, dischargingEnergy: 0, idle: 0, packSoC: 80 },
  { time: '04:00', chargingEnergy: 0, dischargingEnergy: 0, idle: 0, packSoC: 80 },
  { time: '05:00', chargingEnergy: 0, dischargingEnergy: 0, idle: 0, packSoC: 80 },
  { time: '06:00', chargingEnergy: 0, dischargingEnergy: 0, idle: 0, packSoC: 80 },
  { time: '07:00', chargingEnergy: 0, dischargingEnergy: 0, idle: 0, packSoC: 80 },
  { time: '08:00', chargingEnergy: 0, dischargingEnergy: 0, idle: 0, packSoC: 80 },
  { time: '09:00', chargingEnergy: 0, dischargingEnergy: 0, idle: 0, packSoC: 80 },
  { time: '10:00', chargingEnergy: 0, dischargingEnergy: 0, idle: 0, packSoC: 80 },
  { time: '11:00', chargingEnergy: 0, dischargingEnergy: -40, idle: 0, packSoC: 80 },
];

const IoEBattery = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center mt-3">
        <Col lg={12}>
        <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
            <Card.Body>
              <h5 className="text-center mb-4"><b>IoE Battery Status</b></h5>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" domain={[-40, 10]} tickCount={6} label={{ value: 'Energy (kWh)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 100]} label={{ value: 'SoC (%)', angle: -90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="dischargingEnergy" fill="#00008B" name="Discharging Energy" />
                  <Line yAxisId="right" type="monotone" dataKey="packSoC" stroke="#FF6347" name="Pack SoC (%)" dot={{ fill: '#FF6347' }} />
                </ComposedChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default IoEBattery;
