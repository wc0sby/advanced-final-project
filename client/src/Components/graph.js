import React,{ Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { generateLabelColors, 
        generateLabelBorderColors} from '../Helpers/chartReducer'

export default class AppChart extends Component {

  
  render(){
    const data = this.props.chartData.filter(i=>i !== 0)
    const labels = this.props.labels
    const labelColors = generateLabelColors(labels)
    const labelBorderColors = generateLabelBorderColors(labelColors)
   
    const dataSet = {
      labels: labels,
      datasets: [{
      data: data,
      backgroundColor: labelColors,
      borderColor: labelBorderColors,
      borderWidth: 2
      }]
    }

    const dataOptions = {
      responsive: true,
      cutoutPercentage: 75,
      legend: {
        position: 'right',
        labels:{
          boxWidth: 1
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
