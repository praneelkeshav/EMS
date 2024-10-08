import React, { useState } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';

const batterycontrols = () => {
  const [selectedDays, setSelectedDays] = useState({
    M: false,
    T: false,
    W: false,
    Th: false,
    F: false,
    S: false,
    Su: false,
  });

  const handleDayToggle = (day) => {
    setSelectedDays({
      ...selectedDays,
      [day]: !selectedDays[day],
    });
  };
  

  return (
    <React.Fragment>
      {/* Row 1: Overview and Instantaneous Control */}
      <Row className="mb-5">
      <h3 className="text-center text-dark pb-4"><b>UPS Battery Controls</b></h3>
        {/* Overview Section */}
        <Col lg={6}>
        <Card className="p-4 h-100 w-100" style={{ borderRadius: '35px' }}>
        <h3 className="text-center text-danger"><b>OVERVIEW</b></h3>
        <ul className="list-unstyled">
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0',color:'black' }}>
            <h5><strong>SoC(%):</strong></h5>
            <div className="progress" style={{  height: '15px',width:'70px', marginLeft: '10px', backgroundColor: '#e9ecef' }}>
              <div
                className="progress-bar"
                style={{ width: '37%', backgroundColor: '#28a745' }}
              >
                <span style={{ marginLeft: '5px', fontSize: '12px', color: 'black' }}>37%</span>
              </div>
            </div>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0',color:'red' }}>
            <h5><strong>Current Status:</strong></h5>
            <span style={{ float: 'right' }}>IDLE</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0',color:'red' }}>
            <h5><strong>Current (A):</strong></h5>
            <span style={{ float: 'right' }}>0</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0',color:'red' }}>
            <h5><strong>Voltage (V):</strong></h5>
            <span style={{ float: 'right' }}>364</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0',color:'red' }}>
            <h5><strong>Main Contactor Status:</strong></h5>
            <span style={{ float: 'right' }}>OFF</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0',color:'red' }}>
            <h5><strong>Precharge Contactor Status:</strong></h5>
            <span style={{ float: 'right' }}>ON</span>
          </li>
        </ul>
      </Card>
        </Col>

        {/* Instantaneous Control Section */}
        <Col lg={6}>
          <Card className="p-4 h-100 w-100" style={{ borderRadius: '35px' }}>
            <h3 className="text-center text-danger"><b>Instantaneous Control</b></h3>
            <Form>
              <Form.Group controlId="statusSelect">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select">
                  <option>CHARGE/DISCHARGE</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="functionSelect">
                <Form.Label>Function</Form.Label>
                <Form.Control as="select">
                  <option>ON/OFF</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="pinInput">
                <Form.Label>PIN</Form.Label>
                <Form.Control type="password" placeholder="*****" />
              </Form.Group>
              <div className='mt-4 text-center'>
              <Button variant="primary" type="submit" >Submit</Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Row 2: Scheduled Control Section */}
      <Row>
        <Col lg={12}>
          <Card className="p-4 h-100 w-100" style={{ borderRadius: '35px' }}>
            <h4 className="text-center text-black">Scheduled Control</h4>

            {/* Scheduled Days */}
            <div className="text-center mb-3">
              {['M', 'T', 'W', 'Th', 'F', 'S', 'Su'].map((day, idx) => (
                <Button
                  key={idx}
                  variant={selectedDays[day] ? 'success' : 'secondary'}
                  className="mx-2"
                  onClick={() => handleDayToggle(day)}
                >
                  {day}
                </Button>
              ))}
            </div>

            <Row>
              {/* Charge Section */}
              <Col lg={6}>
                <h5 className="text-center">Charge</h5>
                <Card className="p-3">
                  <Form.Group controlId="chargeSlot1Start">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                  <Form.Group controlId="chargeSlot1End">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                </Card>
              </Col>

              {/* Discharge Section */}
              <Col lg={6}>
                <h5 className="text-center">Discharge</h5>
                <Card className="p-3">
                  <Form.Group controlId="dischargeSlot1Start">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                  <Form.Group controlId="dischargeSlot1End">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                </Card>
              </Col>
            </Row>

            <div className="text-center mt-3">
              <Button variant="primary" type="submit">Submit</Button>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
      <h3 className="text-center text-dark pb-4 pt-4">
          <b>LTO Battery Control</b>
        </h3>
        {/* Overview Section */}
        <Col lg={6}>
          <Card className="p-4 h-100 w-100" style={{ borderRadius: '35px' }}>
            <h3 className="text-center text-danger">
              <b>OVERVIEW</b>
            </h3>
            <ul className="list-unstyled">
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '5px 0',
                  color: 'black',
                }}
              >
                <h5>
                  <strong>SoC(%):</strong>
                </h5>
                <div
                  className="progress"
                  style={{
                    height: '15px',
                    width: '70px',
                    marginLeft: '10px',
                    backgroundColor: '#e9ecef',
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: '37%', backgroundColor: '#28a745' }}
                  >
                    <span
                      style={{ marginLeft: '5px', fontSize: '12px', color: 'black' }}
                    >
                      37%
                    </span>
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '5px 0',
                  color: 'red',
                }}
              >
                <h5>
                  <strong>Current Status:</strong>
                </h5>
                <span style={{ float: 'right' }}>IDLE</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '5px 0',
                  color: 'red',
                }}
              >
                <h5>
                  <strong>Current (A):</strong>
                </h5>
                <span style={{ float: 'right' }}>0</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '5px 0',
                  color: 'red',
                }}
              >
                <h5>
                  <strong>Voltage (V):</strong>
                </h5>
                <span style={{ float: 'right' }}>364</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '5px 0',
                  color: 'red',
                }}
              >
                <h5>
                  <strong>Main Contactor Status:</strong>
                </h5>
                <span style={{ float: 'right' }}>OFF</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '5px 0',
                  color: 'red',
                }}
              >
                <h5>
                  <strong>Precharge Contactor Status:</strong>
                </h5>
                <span style={{ float: 'right' }}>ON</span>
              </li>
            </ul>
          </Card>
        </Col>

        {/* Instantaneous Control Section */}
        <Col lg={6}>
          <Card className="p-4 h-100 w-100" style={{ borderRadius: '35px' }}>
            <h3 className="text-center text-danger">
              <b>Instantaneous Control</b>
            </h3>
            <Form>
              <Form.Group controlId="statusSelect">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select">
                  <option>CHARGE/DISCHARGE</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="functionSelect">
                <Form.Label>Function</Form.Label>
                <Form.Control as="select">
                  <option>ON/OFF</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="pinInput">
                <Form.Label>PIN</Form.Label>
                <Form.Control type="password" placeholder="*****" />
              </Form.Group>
              <div className="mt-4 text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <h3 className="text-center text-dark pb-4 pt-4">
          <b>IOE Battery Control</b>
        </h3>

        {/* Overview Section */}
        <Col lg={6}>
        <Card className="p-4 h-100 w-100" style={{ borderRadius: '35px' }}>
          <h3 className="text-center text-danger"><b>Overview</b></h3>
          
          <ul className="list-unstyled">
            {/* SoC Progress Bar */}
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'black' }}>
              <h5><strong>SoC (%):</strong></h5>
              <div className="progress" style={{ height: '15px', width: '70px', marginLeft: '10px', backgroundColor: '#e9ecef' }}>
                <div
                  className="progress-bar"
                  style={{ width: '57%', backgroundColor: '#28a745' }}
                >
                  <span style={{ marginLeft: '5px', fontSize: '12px', color: 'black' }}>57%</span>
                </div>
              </div>
            </li>

            {/* Current Status */}
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'red' }}>
              <h5><strong>Current Status:</strong></h5>
              <span style={{ float: 'right' }}>IDLE</span>
            </li>

            {/* String 1 Details */}
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'green' }}>
              <h5><strong>String 1 SoC (%):</strong></h5>
              <span style={{ float: 'right' }}>56%</span>
            </li>

            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'red' }}>
              <h5><strong>String 1 Status:</strong></h5>
              <span style={{ float: 'right' }}>IDLE</span>
            </li>

            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'black' }}>
              <h5><strong>Battery Current (A):</strong></h5>
              <span style={{ float: 'right' }}>0.25</span>
            </li>

            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'black' }}>
              <h5><strong>Battery Voltage (V):</strong></h5>
              <span style={{ float: 'right' }}>715</span>
            </li>

            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'black' }}>
              <h5><strong>Main Contactor Status:</strong></h5>
              <span style={{ float: 'right' }}>OFF</span>
            </li>

            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 0', color: 'black' }}>
              <h5><strong>Precharge Contactor Status:</strong></h5>
              <span style={{ float: 'right' }}>OFF</span>
            </li>
          </ul>
        </Card>

        </Col>

        {/* Instantaneous Control Section */}
        <Col lg={6}>
          <Card className="p-4 h-100 w-100" style={{ borderRadius: '35px' }}>
            <h3 className="text-center text-danger">
              <b>Instantaneous Control</b>
            </h3>
            <Form>
              <Form.Group controlId="statusSelect">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select">
                  <option>CHARGE</option>
                  <option>DISCHARGE</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="functionSelect">
                <Form.Label>Function</Form.Label>
                <Form.Control as="select">
                  <option>ON</option>
                  <option>OFF</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="cRateSelect">
                <Form.Label>C-Rate</Form.Label>
                <Form.Control as="select">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="pinInput">
                <Form.Label>PIN</Form.Label>
                <Form.Control type="password" placeholder="*****" />
              </Form.Group>
              <div className="mt-4 text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
      
      
    </React.Fragment>
  );
};

export default batterycontrols;
