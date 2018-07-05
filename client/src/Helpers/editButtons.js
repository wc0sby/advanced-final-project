import React from 'react'
import DeleteIcon from '../Components/Buttons/deleteButton'
import EditIcon from '../Components/Buttons/editButton'

export default function RenderIcons (props){
  const stylesheet={
    visible:{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: 'grey'
    },
    hidden:{
      display: 'none'
    }
}
  const toggleDisplay=(selected)=>{
    return selected[0] === props.id ? stylesheet.visible : stylesheet.hidden
  }

  const toggleEdit=()=>props.visible ? '' : <EditIcon editRow={()=>props.editRow()} rowData={props.rowData} />

  return(
    <div style={toggleDisplay(props.selected)}>
    <DeleteIcon deleteRow={(x)=>props.deleteRow(x)} />
    {toggleEdit()}
    </div>
   
    )
}