import React from 'react';
import Doughnut from 'react-chartjs-2';

export const SplashDoughnut = ({ setData, error, options }) => (
  <Doughnut data={setData(error)} options={options} />
);

export default SplashDoughnut;
