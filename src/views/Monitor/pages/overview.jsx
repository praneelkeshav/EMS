import React from 'react';
import GridConsumption from '../charts/gridconsumption';
import GridEnergy from '../charts/GridEnergy';
import AreaChart from '../charts/area chart.jsx'; 
import DieselAnalysis from '../charts/diseal';
import MaxDemandChart from '../charts/maxdemand';
import { Row, Col, Card } from 'react-bootstrap';  // Import necessary Bootstrap components

const Overview = () => {
  return (
    <div className="container">
      <Row className="mt-4">
        {/* Grid Consumption Chart */}
        <Col md={12}>
          <Card className="card-social h-100 mt-4" style={{ borderRadius: '35px' }}>
            <Card.Body>
              <Card.Title>Grid Consumption</Card.Title>
              <GridConsumption />
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row className='mt-4'>
        {/* Grid Energy Chart */}
        <Col md={6}>
          <Card className="card-social h-100 mt-4 " style={{ borderRadius: '35px' }}>
            <Card.Body>
              <Card.Title>Grid Energy</Card.Title>
              <GridEnergy 
                animationDuration={1500}
                progress={0.76} // 76% progress
                direction="vertical"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="card-social h-100 mt-4 " style={{ borderRadius: '35px' }}>
            <Card.Body>
              <Card.Title>Grid Energy</Card.Title>
              <MaxDemandChart 
                animationDuration={1500}
                progress={0.76} // 76% progress
                direction="vertical"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Area Chart */}
        <Col md={12}>
          <Card className="card-social h-100 mt-4" style={{ borderRadius: '35px' }}>
            <Card.Body>
              <Card.Title>Area Chart</Card.Title>
              <AreaChart />
            </Card.Body>
          </Card>
        </Col>
        </Row>

        {/* Diesel Analysis Chart */}
        <Row className='mt-4'>
        <Col md={12}>
          <Card className="card-social h-100 mt-4" style={{ borderRadius: '35px' }}>
            <Card.Body>
              <Card.Title>Diesel Analysis</Card.Title>
              <DieselAnalysis />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
