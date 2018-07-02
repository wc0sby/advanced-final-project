import { connect } from 'react-redux'
import Chart from '../../Components/infoCard'

const msp=(state)=>{
  return{
    categories: state.categories,
    data: state.mainTrx
  }
}


export default connect(msp)(Chart)