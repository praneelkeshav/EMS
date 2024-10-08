import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import ChartComponent from './ChartComponent';

const DashboardPage = () => {
  return (
    <div className="container mt-4">
      {/* Chart Row */}
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <ChartComponent /> {/* Render the chart at the top */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tables Section */}
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Header>Maximum demand of the day (kVA)</Card.Header>
            <Card.Body>
              <table className="table">
                <thead>
                  <tr>
                    <th>Max of Demand (kVA)</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4132</td>
                    <td>09:29:04</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header>Maximum Jump of the Day (kVA)</Card.Header>
            <Card.Body>
              <table className="table">
                <thead>
                  <tr>
                    <th>Maximum Jump</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>162</td>
                    <td>1:18:19 AM</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add more rows and tables as necessary */}
    </div>
  );
};

export default DashboardPage;
