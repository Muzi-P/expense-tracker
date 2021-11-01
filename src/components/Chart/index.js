import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ data }) => {
  const dataPointValues = data.map((item) => item.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {data.map((item, key) => (
        <ChartBar
          value={item.value}
          key={key}
          maxValue={totalMaximum}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
