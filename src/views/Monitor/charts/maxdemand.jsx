import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card, Form, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MaxDemandChart = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [graphType, setGraphType] = useState('Year/Month wise');

  const handleGraphSelect = (e) => {
    setGraphType(e.target.value);
  };

  const chartOptionsMaxDemand = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Maximum Demand (kVA)',
    },
    xAxis: {
      categories: [
        'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024',
        'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024',
      ],
    },
    yAxis: {
      title: {
        text: 'Apparent Power (kVA)',
      },
    },
    series: [
      {
        name: 'Apparent Power (kVA)',
        data: [4500, 4200, 4000, 3800, 4000, 4200, 4400, 4500, 4400, 4300, 4200],
        color: '#0000FF',
        step: 'center',
        lineWidth: 2,
      },
    ],
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <h4 className="text-center">Maximum Demand (kVA)</h4>

        {/* Form for Graph Type and Date Pickers */}
        <Form className="mb-4">
          <Row className="align-items-center">
            <Col md={6} sm={12} className="mb-3 mb-md-0">
              <Form.Group controlId="formGraphType">
                <Form.Label><strong>Select Graph:</strong></Form.Label>
                <Form.Control as="select" value={graphType} onChange={handleGraphSelect}>
                  <option>Year/Month wise</option>
                  <option>Daily wise</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* Date Pickers Row */}
          <Row className="align-items-center mt-3">
            <Col md={6} sm={12} className="mb-3 mb-md-0">
              <Form.Group controlId="formStartDate">
                <Form.Label><strong>Start Date:</strong></Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="MMM yyyy"
                  showMonthYearPicker
                  placeholderText="Select Start Date"
                  className="form-control"
                />
              </Form.Group>
            </Col>

            <Col md={6} sm={12}>
              <Form.Group controlId="formEndDate">
                <Form.Label><strong>End Date:</strong></Form.Label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="MMM yyyy"
                  showMonthYearPicker
                  placeholderText="Select End Date"
                  className="form-control"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>

        {/* Chart Component */}
        <HighchartsReact highcharts={Highcharts} options={chartOptionsMaxDemand} />
      </Card.Body>
    </Card>
  );
};

export default MaxDemandChart;
