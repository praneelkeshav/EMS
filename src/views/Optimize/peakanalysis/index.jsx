import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import ApparentPowerChart from './ChartComponent'; // Ensure the path is correct


const BootstrapTable = () => {
  return (
    <React.Fragment>
        <Row>
        <Col>
          <Row>
            <Col lg={4}>
              <Card className="custom-card">
                <Card.Header className="custom-card-header">
                  <Card.Title as="h5">Maximum Demand of the Day (kVA)</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table responsive hover className="custom-table">
                    <thead>
                      <tr>
                        <th>Max of Demand (kVA)</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>4345</td>
                        <td>09:34:34</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="custom-card">
                <Card.Header className="custom-card-header">
                  <Card.Title as="h5">Maximum Jump of the Day (kVA)</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table responsive hover className="custom-table">
                    <thead>
                      <tr>
                        <th>Maximum Jump</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>215</td>
                        <td>9:57:04 AM</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="custom-card">
                <Card.Header className="custom-card-header">
                  <Card.Title as="h5">Count of Apparent Power for Top 5 Slots</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table responsive hover className="custom-table">
                    <thead>
                      <tr>
                        <th>3000-3100</th>
                        <th>3100-3200</th>
                        <th>3200-3300</th>
                        <th>3300-3400</th>
                        <th>3400-3500</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2</td><td>1</td><td>1</td><td>1</td><td>1</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <ApparentPowerChart /> {/* Render the chart at the top */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
          {/* Second row */}
          <Row>
            <Col lg={4}>
              <Card className="custom-card">
                <Card.Header className="custom-card-header">
                  <Card.Title as="h5">Sum of Energy kWh {'>'} 4108 kVA</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table responsive hover className="custom-table">
                    <thead>
                      <tr>
                        <th>Sum of Energy kWh {'>'} 4108</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2166.4</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="custom-card">
                <Card.Header className="custom-card-header">
                  <Card.Title as="h5">Count of Demand Below and Above 4108 kVA</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table responsive hover className="custom-table">
                    <thead>
                      <tr>
                        <th>Count of Demand {'<'} 4108 kVA</th>
                        <th>Count of Demand {'>'} 4108 kVA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>4238</td><td>131</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="custom-card">
                <Card.Header className="custom-card-header">
                  <Card.Title as="h5">Percentage of Peak Demand Variation</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table responsive hover className="custom-table">
                    <thead>
                      <tr>
                        <th>Demand Below 4108</th>
                        <th>Demand Above 4108</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>97%</td><td>3%</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Third row */}
          <Row>
            <Col lg={6}>
              <Card className="custom-card">
                <Card.Header className="custom-card-header">
                  <Card.Title as="h5">Count of Minute Wise Demand Variation</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table responsive hover className="custom-table">
                    <thead>
                      <tr>
                        <th>0-50 kVA</th>
                        <th>50-100 kVA</th>
                        <th>100-150 kVA</th>
                        <th>150-200 kVA</th>
                        <th>200-250 kVA</th>
                        <th>{'>'}250 kVA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2111</td><td>132</td><td>2</td><td>0</td><td>1</td><td>0</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="custom-card">
                <Card.Header className="custom-card-header">
                  <Card.Title as="h5">Percentage of Minute Wise Demand Variation</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table responsive hover className="custom-table">
                    <thead>
                      <tr>
                        <th>% 0-50 kVA</th>
                        <th>% 50-100 kVA</th>
                        <th>% 100-150 kVA</th>
                        <th>% 150-200 kVA</th>
                        <th>% 200-250 kVA</th>
                        <th>% {'>'}250 kVA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>93.98%</td><td>5.88%</td><td>0.08%</td><td>0%</td><td>0.04%</td><td>0%</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BootstrapTable;
