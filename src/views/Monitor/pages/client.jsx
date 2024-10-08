import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import DynamicLineChart from "../charts/topelectricalclients.jsx";
import CoolingClientsChart from '../charts/topcoolingclients.jsx';

const Client = () => {
  return (
    <React.Fragment>
      {/* First Row with Electrical Clients */}
      <Row className="mb-5"> {/* Added margin-bottom class to create gap */}
        <Col lg={12}>
          <Card className="p-4 card-social h-100 w-100" style={{ borderRadius: '35px' }}>
            <div>
              <DynamicLineChart
                animationDuration={500}
                progress={0.89} 
                direction="vertical"
              />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Second Row with Cooling Clients */}
      <Row>
        <Col className='coolingclient'>
          <Card className="p-4 card-social h-100 w-100" style={{ borderRadius: '35px', marginTop: '50px' }}> {/* Added margin-top style here */}
            <div>
              <CoolingClientsChart
                animationDuration={500}
                progress={0.71} 
                direction="vertical"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Client;
