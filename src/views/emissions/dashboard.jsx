// Dashboard.js
import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import EmissionsPieChart from './PieChart';
import EmissionsBarChart from './BarChart';
import HeatMapBarChart from './SupplierBreakdown';
import MethodologyCard from './Methodology';

const Dashboard = () => {
    const totalEmissions = 5.80;
    const dieselEquivalent = 2871;

    // States for filter cards
    const [years, setYears] = useState(["2017", "2018", "2019", "2020"]);
    const [selectedYears, setSelectedYears] = useState(["2017", "2018", "2019", "2020"]);
    const [scopes, setScopes] = useState(["Scope 1", "Scope 2", "Scope 3"]);
    const [selectedScopes, setSelectedScopes] = useState(["Scope 1", "Scope 2", "Scope 3"]);
    const [entities, setEntities] = useState(["Admin", "Construction", "Development", "Distribution"]);
    const [selectedEntities, setSelectedEntities] = useState(["Admin", "Construction", "Development", "Distribution"]);

    // Functions to handle select/deselect actions
    const handleDeselectAll = (setSelected) => {
        setSelected([]);
    };

    const handleToggle = (item, selected, setSelected) => {
        setSelected(selected.includes(item) ? selected.filter(i => i !== item) : [...selected, item]);
    };

    // Function to render checkboxes
    const renderCheckboxes = (items, selectedItems, setSelectedItems) => {
        return items.map(item => (
            <Form.Check
                key={item}
                type="checkbox"
                label={item}
                checked={selectedItems.includes(item)}
                onChange={() => handleToggle(item, selectedItems, setSelectedItems)}
            />
        ));
    };

    return (
        <>
            {/* Total Emissions and Diesel Equivalent Cards */}
            <Row className="mb-4">
                <Col md={6}>
                    <Card className="p-3 card-social h-100 w-100" style={{ borderRadius: '25px' }}>
                        <h4 className="text-center"style={{ fontSize: '2em' }}><b>Total Emissions</b></h4>
                        <p className="text-center mt-5" style={{ fontSize: '3.5em' }}>{totalEmissions}M kg CO2-eq</p>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="p-3 card-social h-100 w-100 " style={{ borderRadius: '25px' }}>
                        <h4 className="text-center"style={{ fontSize: '2em' }}><b>Equivalent to emissions</b></h4>
                        <p className="text-center mt-5" style={{ fontSize: '3.5em' }}>{dieselEquivalent} diesel cars</p>
                    </Card>
                </Col>
                </Row>
            

            {/* Filter Cards */}
            
                {/* Year Filter Card */}
                <Row className="mb-4">
                <Col md={4}>
                    <Card className="p-3 card-social h-100 w-100" style={{ borderRadius: '15px' }}>
                        <Card.Header className="d-flex justify-content-between align-items-center">
                            <h4><b>Year</b></h4>
                            <Button variant="link" size="sm" onClick={() => handleDeselectAll(setSelectedYears)}>Deselect All</Button>
                        </Card.Header>
                        <Card.Body style={{ maxHeight: '150px', overflowY: 'auto' }}>
                            {renderCheckboxes(years, selectedYears, setSelectedYears)}
                        </Card.Body>
                    </Card>
                </Col>

                {/* Scope Filter Card */}
                <Col md={4}>
                    <Card className="p-3 card-social h-100 w-100" style={{ borderRadius: '15px' }}>
                        <Card.Header className="d-flex justify-content-between align-items-center">
                            <h4><b>Scope</b></h4>
                            <Button variant="link" size="sm" onClick={() => handleDeselectAll(setSelectedScopes)}>Deselect All</Button>
                        </Card.Header>
                        <Card.Body style={{ maxHeight: '150px', overflowY: 'auto' }}>
                            {renderCheckboxes(scopes, selectedScopes, setSelectedScopes)}
                        </Card.Body>
                    </Card>
                </Col>

                {/* Entity Filter Card */}
                <Col md={4}>
                    <Card className="p-3 card-social h-100 w-100  " style={{ borderRadius: '15px' }}>
                        <Card.Header className="d-flex justify-content-between align-items-center">
                        <h4><b>Entity</b></h4>
                            <Button variant="link" size="sm" onClick={() => handleDeselectAll(setSelectedEntities)}>Deselect All</Button>
                        </Card.Header>
                        <Card.Body style={{ maxHeight: '150px', overflowY: 'auto' }}>
                            {renderCheckboxes(entities, selectedEntities, setSelectedEntities)}
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            

            {/* Example Chart */}
            <Row className="mb-5">
                <Col md={6}>
                    <Card className="p-3 card-social h-100 w-100 mt-5" style={{ borderRadius: '25px' }}>
                        <EmissionsPieChart />
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="p-3 card-social h-100 w-100 mt-5" style={{ borderRadius: '25px' }}>
                        <EmissionsBarChart />
                    </Card>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col md={6}> 
                <Card className="p-3 card-social h-100 w-100 mt-5" style={{ borderRadius: '25px' }}>
                  <HeatMapBarChart />
                  </Card>
                </Col>
                  <Col md={6}> 
                  <Card className="p-3 card-social h-100 w-100 mt-5" style={{ borderRadius: '25px' }}>
                    <MethodologyCard />
                    </Card>
                  </Col>
            </Row>
        </>
    );
};

export default Dashboard;
