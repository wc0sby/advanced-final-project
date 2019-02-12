import { connect } from 'react-redux'
import Nav from '../../Components/nav'
import { selectedMonth, selectedYear } from '../../Redux/Actions/displayActions'

const monthsArr = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
]

const buildYearsList = date =>{
  let startYear = date.getFullYear() - 4
  //Once December comes, a new month is added to the list
  const iterator = date.getMonth() >= 11 ? 6 : 5
  const yearArr = []
  for (let i = 0; i<iterator; i++) {
    yearArr.push(startYear)
    startYear ++
  }
  return yearArr
}

const msp = state=>{
  return{
    month: state.selectedMonth,
    year: state.selectedYear,
    monthsArr: monthsArr,
    yearArr: buildYearsList(new Date())
  }
}

const mdp = (dispatch)=>{
  return{
    setMonth: (date)=>dispatch(selectedMonth(monthsArr.indexOf(date))),
    setYear: (year)=>dispatch(selectedYear(year)),
  }
}

export default connect(msp, mdp)(Nav)