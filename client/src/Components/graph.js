import React,{ Component } from 'react';
import { Pie } from 'react-chartjs-2';

export default class AppChart extends Component {

  
  render(){
    const dataSet = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
      }]
    }

    const dataOptions = {
      responsive: true,
      cutoutPercentage: 75,
      legend: {
        position: 'bottom',
        labels:{
          boxWidth: 2
        }
      },
      scales: {
        yAxes: [{
            ticks: {
                display: false,
                beginAtZero: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
            }
        }]
      },
      xAxes: [{
        ticks: {
            display: false,
            beginAtZero: true
        },
        gridLines: {
          display: false,
        }
    }]
    }

    return (<Pie 
            data={dataSet} 
            options={dataOptions}
            width={350}
            height={210}
          />
    )}
}
