import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import AppChart from './graph'
import { getChartData, reduceLabels } from '../Helpers/chartReducer'

export default class InfoCard extends Component {
  render() {
    const getData = (
     this.props.categories || this.props.data 
      ? getChartData(this.props.categories, this.props.data)
      : '')
    const getLabels = (reduceLabels(this.props.categories, this.props.data))
    const stylesheet = {
      height: 350,
      width: 450,
      borderRadius: 15,
      marginBottom: 20
    }
    return (
      <Card style={stylesheet}>
        <AppChart
          chartData={getData}
          labels={getLabels}
        />
        <CardTitle title={this.props.title}/>
      </Card>
    );
  }
}

