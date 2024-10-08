import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const ThermalControl = () => {
  // Example state for form control
  const [status, setStatus] = useState('IDLE');
  const [storedTemp, setStoredTemp] = useState(6.92);
  const [inletTemp, setInletTemp] = useState(15.51);
  const [outletTemp, setOutletTemp] = useState(12.17);
  const [pressure, setPressure] = useState(6.6);
  const [flowRate, setFlowRate] = useState(0);

  return (
    <Container fluid className="p-4">
        <Row>
        {/* Title Section */}
        <Col className="text-center mt-4 mb-4">
          <h2 className="main-title">Thermal Control</h2>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
          <Card className="p-4 h-100 w-100" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <h4 className="text-center">Thermal Control Overview</h4>
              <div className="text-start mb-4">
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                {/* Status */}
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'black' }}>
                <h5><strong>Status:</strong></h5>
                <span style={{ float: 'right' }}>{status}</span>
                </li>

                {/* Stored Water Temperature */}
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'blue' }}>
                <h5><strong>Stored Water Temperature (°C):</strong></h5>
                <span style={{ float: 'right' }}>{storedTemp}</span>
                </li>

                {/* Inlet Temperature */}
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'blue' }}>
                <h5><strong>Inlet Temperature (°C):</strong></h5>
                <span style={{ float: 'right' }}>{inletTemp}</span>
                </li>

                {/* Outlet Temperature */}
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'blue' }}>
                <h5><strong>Outlet Temperature (°C):</strong></h5>
                <span style={{ float: 'right' }}>{outletTemp}</span>
                </li>

                {/* Line Pressure */}
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'green' }}>
                <h5><strong>Line Pressure (Bar):</strong></h5>
                <span style={{ float: 'right' }}>{pressure}</span>
                </li>

                {/* Flow Rate */}
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'green' }}>
                <h5><strong>Flow Rate (m3/h) to Building:</strong></h5>
                <span style={{ float: 'right' }}>{flowRate}</span>
                </li>
            </ul>
            </div>

            </Card.Body>
          </Card>
        </Col>
        {/* Left section: Instantaneous Control */}
        <Col md={6}>
        <Card className="p-4 h-100 w-100"    style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <h4 className="text-center">Instantaneous Control</h4>
              <Form>
                <Form.Group controlId="statusControl">
                  <Form.Label>Status</Form.Label>
                  <Form.Control as="select">
                    <option>CHARGE/DISCHARGE</option>
                    <option>IDLE</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="functionControl">
                  <Form.Label>Function</Form.Label>
                  <Form.Control as="select">
                    <option>ON</option>
                    <option>OFF</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="pinControl">
                  <Form.Label>PIN</Form.Label>
                  <Form.Control type="password" placeholder="*****" />
                </Form.Group>

                <div className="mt-4 text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
              </Form>
            </Card.Body>
          </Card>
        </Col> 
      </Row>
      <Row>
        {/* Title Section */}
        <Col className="text-center mt-4">
          <h2 className="main-title">HOT Water Control</h2>
        </Col>
      </Row>

      <Row className="mt-5">
        {/* Instantaneous Control Section */}
        <Col md={6}>
        <Card className="p-4 h-100 w-100"    style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>   
            <h4 className="text-center control-title">Instantaneous Control</h4>
            <Form>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" defaultValue="CHARGE/DISCHARGE">
                  <option>CHARGE</option>
                  <option>DISCHARGE</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="function">
                <Form.Label>Function</Form.Label>
                <Form.Control as="select" defaultValue="ON/OFF">
                  <option>ON</option>
                  <option>OFF</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="pin">
                <Form.Label>PIN</Form.Label>
                <Form.Control type="password" placeholder="*****" />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </Col>

        {/* Overview Section */}
        <Col md={6}>
        <Card className="p-4 h-100 w-100"    style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h4 className="text-center overview-title">Overview</h4>
            <ul className="overview-list">
            {/* Status */}
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'black' }}>
                <h4><strong>Status:</strong></h4>
                <span style={{ float: 'right' }}>
                <span className="status-dot red"></span>
                </span>
            </li>

            {/* Mass of stored water */}
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'black' }}>
                <h4><strong>Mass of stored water:</strong></h4>
                <span style={{ float: 'right' }}>1200 kg</span>
            </li>

            {/* Chiller 1 Status */}
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'black' }}>
                <h4><strong>Chiller 1 Status:</strong></h4>
                <span style={{ float: 'right' }}>
                <span className="status-dot green"></span>
                </span>
            </li>

            {/* Stored Water Temperature */}
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'black' }}>
                <h4><strong>Stored Water Temperature:</strong></h4>
                <span style={{ float: 'right' }}>75°C</span>
            </li>
            </ul>

          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ThermalControl;
