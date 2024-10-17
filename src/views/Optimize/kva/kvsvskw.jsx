import React from 'react';
import KvaVsKwChart from './kvavskwchart'; // Adjust the path if needed
import { Card } from '@mui/material';

const Kvavskw = () => {
    return (
        <React.Fragment>
            <Card className="p-3 card-social h-40 w-100 mt-5" style={{ borderRadius: '35px' }}>
            {/* Render the chart component */}
            <KvaVsKwChart />
            </Card>
            </React.Fragment>
    );
};

export default Kvavskw;