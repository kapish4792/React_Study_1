import React from 'react';
import BarChart from './BarChart';
import './Chart.css';

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <BarChart
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
