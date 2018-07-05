function summarize(x){
  //take in an array of values and sum using reduce
 return x.reduce((i,o)=>{
    return Number(i) + Number(o)
  },0)
}

export function filterBudgetType(arr, type){
  const values = [] 
   arr.map((i)=>{
    return i.type === type
    ? values.push(Number(i.amount))
    : ''
   })
  return values ? summarize(values) : 0
}

export function filterActuals(arr, type){
  const values = []
  arr.map((i)=>{
    if(type === "Income"){
      return i.budgeted && i.amount < 0
      ? values.push(Number(i.amount))
      : ''
    }else{
    return i.budgeted && i.amount >= 0
      ? values.push(Number(i.amount))
      : ''}
  })
  return values ? summarize(values) : 'Nothing has been marked as bugeted'
}

export function filterBudgeted(arr){
  const values = []
  arr.map((i)=>{
      return !i.budgeted
      ? values.push(Number(i.amount))
      : ''
  })
  return values ? summarize(values) : 'Nothing has been marked as bugeted'
}

export function balance(arr){
  return summarize(arr.map(i=>i.amount))
  // return values ? summarize(values) : 'Nothing has been marked as bugeted'
}