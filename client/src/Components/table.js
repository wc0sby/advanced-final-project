import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {formatter} from '../Helpers/formatter'
import RenderIcons from '../Helpers/editButtons';

class DataTable extends Component{

  state={
    showEditButtons: false,
    selected:[],
    selectedData:[],

  }

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  toggleButtons = ()=>{
    return this.state.selected.length
      ? false
      : true
  }

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows.length ? selectedRows : [],
      selectedData: this.props.data[selectedRows],
      showEditButtons: this.toggleButtons()
    });
    this.props.getRow(this.props.data[selectedRows])
  };

  render(){
    const TRX = this.props.data
      //remove the version and id from client's view and map the new array
      const columns = TRX ? Object.keys(TRX[0]).filter((trx)=>{
        return trx !== '_id' && trx !=='__v'
      }) : []         


      const transactionHeader = [...columns, ''].map((trx, i)=><TableHeaderColumn key={i}>{trx.toUpperCase()}</TableHeaderColumn>)

      const transactionData =()=> TRX.map((trx,i)=>{
        return (
          <TableRow key={i} selected={this.isSelected(i)} onClick={this.onMouseClick}>
          {[...columns].map((colName, x) => <TableRowColumn key={x}>{formatter[colName](trx[colName])}</TableRowColumn>)}
          <TableRowColumn>
            <RenderIcons
                id={i}
                selected={this.state.selected}
                deleteRow={()=>this.props.deleteRow(this.state.selectedData._id)}
                editRow={()=>this.props.handleFormOpen()}
                rowData={this.props.row}
                visible={this.state.showEditButtons}
              />
          </TableRowColumn>
          </TableRow>
        )
      })
    
    return (
      <div>
        <Table 
          fixedHeader={true}
          height={'300px'}
          onRowSelection={
            this.handleRowSelection
            // (i)=>this.props.getRow(TRX[i])
          }
        >
          <TableHeader 
            displaySelectAll={false} 
            style={{color:'red'}}
          >
            <TableRow>
              {transactionHeader}
            </TableRow>
          </TableHeader>
          <TableBody 
            stripedRows={true}
          >
            {transactionData()}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default DataTable
