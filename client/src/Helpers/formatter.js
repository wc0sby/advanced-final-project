export const formatter = {
    date: (date)=>{
      const trxDate = new Date(date)
      return `${trxDate.getMonth()+1}/${trxDate.getDate()}/${trxDate.getFullYear()}`
    },
    name: (name)=>capFirstLetter(name),
    amount: (amt)=>`$${decimalCorrection(amt)}`,
    category: (cat)=>cat,
    type: (type)=>type,
    isIncome: (isIncome)=>isIncome ? 'True' : 'False',
    budgeted: (b)=>b ? 'True' : 'False',
    cleared: (c)=>c ? 'True' : 'False'
  }

export const decimalCorrection = (number)=>{
  const temp = number.toString().split('.')
  const left = loopLeftDecimal(temp[0])
  return temp[1] 
         ? (temp[1].length === 2 ? `${left}.${temp[1]}` : `${left}.${loopRightDecimal(temp[1])}`)
         : `${left}.00`
}
//function that forces two decimal places without rounding
const loopRightDecimal = (arr) => {
  const rightDecimal = []
  for (let i = 0; i < 2; i++) {
    arr[i] ? rightDecimal.push(arr[i]) : rightDecimal.push("0")
  }
  return rightDecimal.join('')
}
//function to check if a comma is needed
const loopLeftDecimal = (arr) =>{
  return arr.length <= 3 ? arr : numberWithCommas(arr)
}
//function that runs when a comma is needed
const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
//function for capitalizing the first letter
const capFirstLetter = (str) =>{
  const name = str.split('')
  name[0] = name[0].toUpperCase()
  return name
}

