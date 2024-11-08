import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

const chillerData = [
  { name: 'Chiller 1', status: 'Operational', description: 'Cooling capacity: 200kW' },
  { name: 'Chiller 2', status: 'Maintenance', description: 'Cooling capacity: 150kW' },
  { name: 'Chiller 3', status: 'Faulty', description: 'Cooling capacity: 100kW' },
  { name: 'Chiller 4', status: 'Operational', description: 'Cooling capacity: 250kW' },
  { name: 'Chiller 5', status: 'Operational', description: 'Cooling capacity: 300kW' },
  { name: 'Chiller 6', status: 'Maintenance', description: 'Cooling capacity: 175kW' },
];

const ChillerSVG = () => (
  <svg
    width="120"
    height="160"
    viewBox="0 0 150 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Chiller body */}
    <rect x="20" y="40" width="110" height="140" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="3" />

    {/* Chiller top */}
    <rect x="25" y="35" width="100" height="10" fill="#a3c1e1" />
    
    {/* Pipes */}
    <rect x="10" y="190" width="130" height="10" fill="#1e3a8a" />
    <rect x="30" y="140" width="5" height="25" fill="#1e3a8a" />
    <rect x="115" y="140" width="5" height="25" fill="#1e3a8a" />
    
    {/* Enhanced details */}
    <circle cx="40" cy="190" r="5" fill="#fbbf24" />
    <circle cx="110" cy="190" r="5" fill="#fbbf24" />
    
    {/* Centered industrial fins for heat exchange */}
    <g fill="#d1fae5">
      <rect x="44" y="60" width="5" height="50" />
      <rect x="54" y="60" width="5" height="50" />
      <rect x="64" y="60" width="5" height="50" />
      <rect x="74" y="60" width="5" height="50" />
      <rect x="84" y="60" width="5" height="50" />
      <rect x="94" y="60" width="5" height="50" />
    </g>
    
    {/* Add a base */}
    <rect x="20" y="180" width="110" height="10" fill="#1e3a8a" />
  </svg>
);

const ChillerOverview = () => {
  const navigate = useNavigate();

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Operational':
        return 'text-success';
      case 'Maintenance':
        return 'text-warning';
      case 'Faulty':
        return 'text-danger';
      default:
        return '';
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Chillers</h3>
      <Row>
        {chillerData.map((chiller, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body className="text-center">
                <ChillerSVG />
                <Card.Title className="mt-2">{chiller.name}</Card.Title>
                <Card.Text>
                  Status: <span className={getStatusStyle(chiller.status)}>{chiller.status}</span>
                </Card.Text>
                <Card.Text className="text-muted">{chiller.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/chiller/${index + 1}`)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ChillerOverview;
