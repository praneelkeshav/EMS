import React, { useState } from 'react';
import StackedBar from '../charts/stackedchart';
import { Row, Col, Card } from 'react-bootstrap';
import AreaChart from '../charts/area chart.jsx';
import LoadingVsCop from '../charts/loadingvscop';
import EvaporatorLayout from '../charts/evaporate';
import CondenserLayout from '../charts/condensor';
import ElectricalEnergyLayout from '../charts/radialchart';

// Utility to generate random numbers within a range
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const CoolingComponent = () => {
  const [selectedDate, setSelectedDate] = useState('2024-07-26'); // Default date
  const [totalElectricalEnergy, setTotalElectricalEnergy] = useState(6991); // Initial random value
  const [totalCoolingEnergy, setTotalCoolingEnergy] = useState(10792); // Initial random value

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);

    // Generate random data based on date change
    setTotalElectricalEnergy(getRandomNumber(5000, 10000)); // Random between 5000 and 10000 kWh
    setTotalCoolingEnergy(getRandomNumber(9000, 12000)); // Random between 9000 and 12000 TRh
  };

  return (
    <>
      {/* Header Section: Date and Energy Stats */}
      <Row className="mb-4 w-100">
        <Col md={12}>
          <div className="energy-stats" style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <div className="date-section" style={{ gap: '20px', marginTop: '15px' }}>
              <label>Date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                style={{ marginLeft: '10px', padding: '5px' }}
              />
            </div>
            <div
              className="total-electrical"
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '10px',
                marginLeft: '100px',
                backgroundColor: '#28a745',
                padding: '10px',
                color: 'white',
                borderRadius: '5px',
              }}
            >
              Total Electrical Energy of the day: <strong>{totalElectricalEnergy} kWh</strong>
            </div>
            <div
              className="total-cooling"
              style={{
                backgroundColor: '#007bff',
                padding: '10px',
                color: 'white',
                borderRadius: '5px',
                display: 'flex',
                gap: '20px',
                marginTop: '10px',
              }}
            >
              Total Cooling Energy of the day: <strong>{totalCoolingEnergy} TRh</strong>
            </div>
          </div>
        </Col>
      </Row>

      {/* Chart Section */}
      <Row>
        <Col md={12}>
          <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
            <div className="mt-4">
              <StackedBar />
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <div className="temperature-cards" style={{ display: 'flex', gap: '140px', marginTop: '10px' }}>
          <div
            className="minimum-temperature"
            style={{ backgroundColor: '#1de9b6', padding: '20px', color: 'black', borderRadius: '25px', flex: 0.4 }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '18px', textAlign:'center'}}>Minimum</div>
            <h2 style={{ fontWeight: 'bold', fontSize: '28px', textAlign:'center' }}>15(°C)</h2>
          </div>

          <div
            className="average-temperature"
            style={{
              backgroundColor: '#ffc107',
              padding: '20px',
              color: 'black',
              borderRadius: '25px',
              flex: 0.4,
              textAlign: 'center',
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>Average</div>
            <h2 style={{ fontWeight: 'bold', fontSize: '28px' }}>30.4(°C)</h2>
          </div>

          <div
            className="maximum-temperature"
            style={{
              backgroundColor: '#ff6f00',
              padding: '20px',
              color: 'white',
              borderRadius: '25px',
              flex: 0.4,
              textAlign: 'center',
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '18px', color: 'black' }}>Maximum</div>
            <h2 style={{ fontWeight: 'bold', fontSize: '28px' }}>35.4(°C)</h2>
          </div>
        </div>
      </Row>
      <h3 className="text-center text-dark pb-4 "style={{ marginTop: '50px' }}><b>Loading(%) vs COP</b></h3>
      <Row className="mt-4" >
        
        {/* LoadingVsCop Chart */}
        <Col md={6}>
          <Card className="card-social h-100 mt-4" style={{ borderRadius: '35px' }}>
            <Card.Body>
              
              <LoadingVsCop />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="card-social h-100 mt-4" style={{ borderRadius: '35px' }}>
            <Card.Body>
              
              <LoadingVsCop />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="card-social h-100 mt-4" style={{ borderRadius: '35px' }}>
            <Card.Body>
              <Card.Title></Card.Title>
              <EvaporatorLayout />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="card-social h-100 mt-4" style={{ borderRadius: '35px' }}>
            <Card.Body>
              <Card.Title></Card.Title>
              <EvaporatorLayout />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="card-social h-100 mt-4" style={{ borderRadius: '35px' }}>
            <Card.Body>
              <Card.Title></Card.Title>
              <CondenserLayout />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="card-social h-100 mt-4" style={{ borderRadius: '35px' }}>
            <Card.Body>
              <Card.Title></Card.Title>
              <CondenserLayout />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
            <div className="mt-4">
              <ElectricalEnergyLayout />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CoolingComponent;
