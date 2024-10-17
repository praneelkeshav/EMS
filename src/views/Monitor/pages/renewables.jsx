import React from 'react';
import SolarChart from '../charts/solarchart';
import ExpectedVsActualChart from '../charts/solarbarchart';
import SolarChartComponent from '../charts/rooftopsolarchart';
import RooftopLineChart from '../charts/rooftoplinechart';
import IoEChartCard from '../charts/ioe(dec)';
import { Col, Row, Card } from 'react-bootstrap';

const Renewables = () => { 
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>
                <b>Wheeled In Solar PHASE I</b>
            </h3>

            {/* SolarChart Section */}
            <Row>
                <Col md={12}>
                    <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                        <SolarChart />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                        <ExpectedVsActualChart />
                    </Card>
                </Col>
            </Row>

            <h3 style={{ textAlign: 'center' }}>
                <b>RoofTop Solar</b>
            </h3>

            {/* Rooftop SolarChart Section */}
            <Row>
                <Col md={12}>
                    <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                        <SolarChartComponent />
                    </Card>
                </Col>

                <Col md={12}>
                    <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                        <RooftopLineChart />
                    </Card>
                </Col>
                <Row>
                <Col md={12}>
                    <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                        <IoEChartCard />
                    </Card>
                </Col>
                </Row>
            </Row>
        </div>
    );
}

export default Renewables;
