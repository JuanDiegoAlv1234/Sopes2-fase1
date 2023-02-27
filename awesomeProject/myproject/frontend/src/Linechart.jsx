import { useContext, useEffect, useState ,useMemo} from 'react'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Porcentaje de Utilizacion de disco',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const valores =[10,20,30,40,50,60,70]

export const data = {
  labels,
  datasets: [
    {
      label: 'Utilizacion del disco 1',
      data: valores,
      borderColor: 'rgb(36, 113, 163)',
      backgroundColor: 'rgba(247, 249, 249 ,0.5)',
    }

  ],
};
export const GraficaDisco = (props) => {
  return   (<Line options={options} data={props.data}></Line>)
  
}
