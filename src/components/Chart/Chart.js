import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((dataPoint) => (dataPoint.value));
  const totalMaxValue = Math.max.apply(Math,valueArray);
  console.log(valueArray);
  console.log(totalMaxValue);

  return (
    <div className = "chart">
      {props.dataPoints.map((dataPoint) => (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMaxValue}
              label={dataPoint.label}
            />
      ))}
    </div>
  );
};

export default Chart;
