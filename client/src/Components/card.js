import React, { Component } from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import {decimalCorrection} from '../Helpers/formatter'


export default class CardHold extends Component {
  render() {
    const stylesheet = {
      marginBottom: '10px'
    }
    const data = typeof(this.props.data)==='object'
      ? '$' + decimalCorrection (this.props.data.map(item=>item.amount)
        .reduce((acc,val)=>{
         return Number(acc) + Number(val)
        },0))
      : this.props.data

    return (
      <Card style={stylesheet}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.title}
          </Typography>
          <Typography component="p">
            {data}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}