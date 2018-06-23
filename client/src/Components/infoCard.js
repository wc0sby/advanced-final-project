import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import AppChart from './graph'

export default class InfoCard extends Component {
  render() {
    const stylesheet = {
      height: 300,
      width: 350,
      borderRadius: 15,
      marginBottom: 20
    }
    return (
      <Card style={stylesheet}>
        <AppChart/>
        <CardTitle title="Chart"/>
      </Card>
    );
  }
}

