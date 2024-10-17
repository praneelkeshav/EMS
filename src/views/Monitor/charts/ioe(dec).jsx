import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Bar
} from 'recharts';
import { Container, Row, Col, Card, ButtonGroup, Button } from 'react-bootstrap';

const dataSets = {
  string1: [
    { time: '00:00', energy: 0.1, packSoC: 90 },
    { time: '01:00', energy: 0.2, packSoC: 85 },
    { time: '02:00', energy: 0.3, packSoC: 80 },
    { time: '03:00', energy: 0.4, packSoC: 75 },
    { time: '04:00', energy: 0.5, packSoC: 70 },
    { time: '05:00', energy: -0.2, packSoC: 65 },
    { time: '06:00', energy: -0.1, packSoC: 60 },
  ],
  string2: [
    { time: '00:00', energy: 0.1, packSoC: 88 },
    { time: '01:00', energy: 0.15, packSoC: 83 },
    { time: '02:00', energy: 0.25, packSoC: 78 },
    { time: '03:00', energy: 0.35, packSoC: 73 },
    { time: '04:00', energy: 0.4, packSoC: 68 },
    { time: '05:00', energy: 0.2, packSoC: 63 },
    { time: '06:00', energy: -0.15, packSoC: 58 },
  ],
  string3: [
    { time: '00:00', energy: 0.2, packSoC: 95 },
    { time: '01:00', energy: 0.3, packSoC: 90 },
    { time: '02:00', energy: 0.4, packSoC: 85 },
    { time: '03:00', energy: 0.1, packSoC: 80 },
    { time: '04:00', energy: 0.05, packSoC: 75 },
    { time: '05:00', energy: -0.2, packSoC: 70 },
    { time: '06:00', energy: -0.25, packSoC: 65 },
  ],
  string4: [
    { time: '00:00', energy: 0.7, packSoC: 95 },
    { time: '01:00', energy: 0.5, packSoC: 90 },
    { time: '02:00', energy: 0.4, packSoC: 85 },
    { time: '03:00', energy: 0.1, packSoC: 80 },
    { time: '04:00', energy: 0.5, packSoC: 75 },
    { time: '05:00', energy: 0.2, packSoC: 70 },
    { time: '06:00', energy: -0.25, packSoC: 65 },
  ]
};

const IoEChartCard = () => {
  const [selectedString, setSelectedString] = useState('string1');

  const handleStringSelect = (stringKey) => {
    setSelectedString(stringKey);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center mt-3">
        <Col lg={12}>
            <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
            <Card.Body>
              <h5 className="text-center mb-4"><b>Daily Energy Cycle v/s SoC</b></h5>


              {/* String Selection Buttons */}
              <ButtonGroup className="mb-4">
                <Button variant={selectedString === 'string1' ? 'primary' : 'outline-primary'} onClick={() => handleStringSelect('string1')}>
                  String 1
                </Button>
                <Button variant={selectedString === 'string2' ? 'primary' : 'outline-primary'} onClick={() => handleStringSelect('string2')}>
                  String 2
                </Button>
                <Button variant={selectedString === 'string3' ? 'primary' : 'outline-primary'} onClick={() => handleStringSelect('string3')}>
                  String 3
                </Button>
                <Button variant={selectedString === 'string4' ? 'primary' : 'outline-primary'} onClick={() => handleStringSelect('string4')}>
                  String 4
                </Button>
              </ButtonGroup>

              {/* Chart */}
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={dataSets[selectedString]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" domain={[-0.5, 0.5]} tickCount={6} label={{ value: 'Energy (kWh)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" domain={[50, 100]} label={{ value: 'SoC (%)', angle: -90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="energy" fill="#00008B" name="Energy (kWh)" />
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

export default IoEChartCard;
