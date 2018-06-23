import { connect } from 'react-redux'
import Tabs from '../../Components/tabs'

const msp = state =>{
  return{
    main:state.mainTrx,
    cash:state.cashTrx,
    budget:state.budgetTrx
  }
}


export default connect(msp)(Tabs)

