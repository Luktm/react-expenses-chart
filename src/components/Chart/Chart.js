import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoints => dataPoints.value); // in the end just return dataPoint value into array [0,0,0,0,0]
    const totalMaximum = Math.max(...dataPointValues); // this return the biggest number, use the spread operation to pull out array into stand alone argument eg [0,1,2] => 012
    
    return (
        <div className="chart">
            { props.dataPoints.map(dataPoint => (
                <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;