import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from 'victory';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { style } from '@mui/system';
import "./sty.css"
const Dashboard = () => {
  const monthlyTrafficData = [
    { month: 'January', visitors: 2000 },
    { month: 'February', visitors: 1800 },
    { month: 'March', visitors: 2200 },
    { month: 'April', visitors: 2400 },
    { month: 'May', visitors: 2300 },
    { month: 'J', visitors: 2500 },
    { month: 'Jujewfne', visitors: 2500 },
    { month: 'Jbjrwfune', visitors: 2500 },
    { month: 'Jubewfbne', visitors: 2500 },
    { month: 'Jubwfne', visitors: 2500 },
  ];

  const workersData = [
    { role: 'Developer', workers: 12 },
    { role: 'Designer', workers: 8 },
    { role: 'Marketer', workers: 6 },
    { role: 'Analyst', workers: 10 },
    { role: 'Analyst', workers: 10 },
  ];

  return (
    <div className="dashboard-container">
      <div className="graph-container">
        <h2>Monthly Traffic</h2>
        <VictoryChart domainPadding={20} height={250}>
          <VictoryAxis
            tickValues={monthlyTrafficData.map((d) => d.month)}
            style={{ tickLabels: { fontSize: 10, padding: 5 } }}
          />
          <VictoryAxis dependentAxis />
          <VictoryBar
            data={monthlyTrafficData}
            x="month"
            y="visitors"
            style={{ data: { fill: '#8884d8' } }}
            labels={({ datum }) => datum.visitors}
            labelComponent={<VictoryTooltip />}
          />
        </VictoryChart>
      </div>
      <div className="graph-container">
        <h2>Workers</h2>
        <BarChart width={350} height={250} data={workersData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="role" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="workers" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
