import React from 'react';
import UPSControlChart from '../charts/upscontrolchart';
import { Row, Col, Card } from 'react-bootstrap';
import EnergyCycleChart from '../charts/energycycle';
import VoltVsCurrentChart from '../charts/voltvscurrent';
import LTOBatteryChart from '../charts/ltobattery';
import DailyEnergy from '../charts/dailyenergy';
import VoltageVsCurrentChart from '../charts/voltareachart';
import IoEBattery from '../charts/ioebattery';
import IoEChartCard from '../charts/ioe(dec)';
import VoltLineChart from '../charts/voltlinechart';
const EnergyStorage = () => {
    return (
        <Row>
                <Col md={12}>
                    <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                        <h4 className='text-center'>
                            <b>UPS Controls (48 kWh)</b>
                            </h4>
                        <UPSControlChart />
                    </Card>
                </Col>
                <Col md={12}>
                    <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                        {/* <h4 className='text-center'>
                            <b>UPS Controls (48 kWh)</b>
                            </h4> */}
                        <EnergyCycleChart/>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                        {/* <h4 className='text-center'>
                            <b>UPS Controls (48 kWh)</b>
                            </h4> */}
                        <VoltVsCurrentChart/>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                        {/* <h4 className='text-center'>
                            <b>UPS Controls (48 kWh)</b>
                            </h4> */}
                        <LTOBatteryChart/>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                        {/* <h4 className='text-center'>
                            <b>UPS Controls (48 kWh)</b>
                            </h4> */}
                        <DailyEnergy/>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                        {/* <h4 className='text-center'>
                            <b>UPS Controls (48 kWh)</b>
                            </h4> */}
                        <VoltageVsCurrentChart/>
                    </Card>
                </Col>
                <Col md={12}>
                    
                        {/* <h4 className='text-center'>
                            <b>UPS Controls (48 kWh)</b>
                            </h4> */}
                        <IoEChartCard />
                    
                </Col>
                <Col md={12}>
                <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
                    {/* <h4 className='text-center'>
                        <b>UPS Controls (48 kWh)</b>
                        </h4> */}
                    < VoltLineChart/>
                </Card>    
                
            </Col>
            </Row>
            
    );
};

export default EnergyStorage;
