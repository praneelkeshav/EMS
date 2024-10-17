import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", energy: 0, soc: 81 },
  { time: "01:40", energy: 0.5, soc: 81 },
  { time: "03:20", energy: 1, soc: 81 },
  { time: "05:00", energy: 1.5, soc: 81 },
  { time: "06:40", energy: 2, soc: 81 },
  { time: "08:20", energy: 2.5, soc: 81 },
  { time: "10:00", energy: 3, soc: 81 },
];

const DailyEnergy = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h4 style={{ color: "#000000", fontWeight:"bold" }}>Daily Energy cycle v/s SoC</h4>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
        <div>
          <label htmlFor="date">Date</label>
          <input type="text" id="date" value="26/7/2024" readOnly />
        </div>
        <div>
          <h6>Current status: <span style={{ color: "black" }}>IDLE</span></h6>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" domain={[79, 84]} />
          <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="soc" stroke="#d32f2f" strokeWidth={2} />
          <Line yAxisId="right" type="monotone" dataKey="energy" stroke="#388e3c" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyEnergy;
