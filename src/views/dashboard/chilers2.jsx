import React from 'react';
import { ReactSVG } from 'react-svg';
import chillerSVG from './chillers.svg'; 

const ChillersVisualization = () => {
  const chillersData = [
    {
      block: 'Block 1',
      chillerCapacity: '150 TR',
      cop: 2.5,
      tempIn: '12°C',
      tempOut: '6°C',
      flowRateIn: 56,
      flowRateOut: 57,
    },
    {
      block: 'Block 2',
      chillerCapacity: '100 TR',
      cop: 4.8,
      tempIn: '16°C',
      tempOut: '10°C',
      flowRateIn: 58,
      flowRateOut: 59,
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
      {chillersData.map((chiller, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <h3>{chiller.block}</h3>
          <p>Chiller: {chiller.chillerCapacity}</p>
          <ReactSVG
            src={chillerSVG}
            alt={`Chiller ${index + 1}`}
            style={{ width: '500px', margin: '10px auto' }}
          />
          <div>
            <p>COP: {chiller.cop}</p>
            <p>
              Temp In: {chiller.tempIn} | Temp Out: {chiller.tempOut}
            </p>
            <p>
              Flow Rate In: {chiller.flowRateIn} | Flow Rate Out: {chiller.flowRateOut}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChillersVisualization;
