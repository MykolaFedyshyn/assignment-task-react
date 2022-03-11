import React, { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { calcPersonAverageAttitude } from '../../../helpers/helper';
import { AppContext } from '../../../contexts/AppContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Personal Attitude Line Chart',
    },
  },
};

export function ChartComponent({factorA}) {
  const {chartData} = useContext(AppContext);
  const month = chartData.map((person) => person.month);
  const attitude = chartData.map((person) => person.attitude);
  const data = {
    labels: month,
    datasets: [
      {
        label: 'Factor A',
        data: month.map(() => factorA),
        borderColor: 'brown',
        backgroundColor: 'brown',
      },
      {
        label: 'Grapth of A.B.',
        data: attitude,
        borderColor: 'violet',
        backgroundColor: 'violet',
      },
      {
        label: 'Person A.B. average line',
        data: month.map(() => calcPersonAverageAttitude(chartData)),
        borderColor: 'blue',
        backgroundColor: 'blue',
      },
    ],
  };
  return <div className="chart">
    <Line options={options} data={data}/>
  </div>;
}
  
