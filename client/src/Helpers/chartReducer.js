//Function to condense data into a working format
const parseData = (arr, key) =>{
  return arr.map((item, k)=>{
    return key ? item[key] : item
   })
 }
//function passed to the infoCard container
//takes in categories and trx type (cash/main)
//parses down data
//maps data to get categories and amounts
//reduces each array
export function getChartData(categories, trx){
  const catArr = parseData(categories, 'category')
  const trxArr = parseData(trx)

  const values = catArr.map((item, k)=>{
    return trxArr.map((trx,i)=>{
      return trx.category === item ? trx : 0
    }).filter(i=>i!==0)
  }).filter(x=>x.length > 0)
  
  const groupedData = values.map((arr,k)=>{
    const temp = arr.map(x=>x.amount)
    return temp.reduce((prev, acc)=>{
      return Number(prev) + Number(acc)
    },0)
  })

return groupedData
}

export function reduceLabels(categories, trx){
  const catArr = parseData(categories, 'category')
  const trxArr = parseData(trx)

  const values = catArr.map((item, k)=>{
    return trxArr.map((trx,i)=>{
      return trx.category === item ? trx : 0
    }).filter(i=>i!==0)
  }).filter(x=>x.length > 0)

  
  const groupedLabelData = values.map((arr,k)=>{
    const temp = arr.map(x=>x.category)
    return temp.filter((i,x)=>x===0)
  })

return groupedLabelData
}

//generates a new color for each category...randomly
export function generateLabelColors(arr, type){
  // console.log(arr)
  return arr.map((i)=>{
  const num = Math.round(0xffffff * Math.random());
    const r = num >> 16;
    const g = num >> 8 & 255;
    const b = num & 255;
    const a = type === 'border' ? 1 : 0.2
    return `rgba(${r},${g},${b},${a})`;
  })
}
//generates a darker border with the random color
export function generateLabelBorderColors(arr){
  return arr.map((i)=>{
    return(i.replace('0.2','1.0'))
  })
}
