export const getRow=(clicked)=>{
  return{
    type:'ROW_CLICKED',
    value: clicked
  }
}

export const displayButtons=(buttons)=>{
  return{
    type:'GET_BUTTONS',
    value: buttons
  }
}

export const trxVisible=(booleanVal)=>{
  return{
    type:'TOGGLE_TRX_FORM',
    value: booleanVal
  }
}

export const editTrxVisible=(booleanVal)=>{
  return{
    type: 'TOGGLE_EDIT_TRX_FORM',
    value: booleanVal
  }
}

export const catVisible=(booleanVal)=>{
  return{
    type:'TOGGLE_CAT_FORM',
    value: booleanVal
  }
}

export const editCatVisible=(booleanVal)=>{
  return{
    type:'TOGGLE_EDIT_CAT_FORM',
    value: booleanVal
  }
}

export const budVisible=(booleanVal)=>{
  return{
    type:'TOGGLE_BUD_FORM',
    value: booleanVal
  }
}

export const editBudVisible=(booleanVal)=>{
  return{
    type: 'TOGGLE_EDIT_BUD_FORM',
    value: booleanVal
  }
}

export const cashVisible=(booleanVal)=>{
  return{
    type:'TOGGLE_CASH_FORM',
    value: booleanVal
  }
}

export const editCashVisible=(booleanVal)=>{
  return{
    type: 'TOGGLE_EDIT_CASH_FORM',
    value: booleanVal
  }
}

export const authVisible=(booleanVal)=>{
  return{
    type: 'TOGGLE_SIGNIN_FORM',
    value: booleanVal
  }
}

export const selectedMonth= date => {
  return{
    type: 'SET_MONTH',
    value: date
  }
}

export const selectedYear=(date)=>{
  return{
    type: 'SET_YEAR',
    value: date
  }
}

export const getYears=(year)=>{
  return{
    type: 'GET_YEARS',
    value: year,
  }
}