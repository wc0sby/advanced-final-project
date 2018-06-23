import { connect } from 'react-redux'
import Delete from '../../Components/Buttons/deleteButton'

const msp = state =>{
  return{
    visible:state.toggleButtons,
  }
}


export default connect(msp)(Delete)

