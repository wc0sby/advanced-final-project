export const loadCategories=()=>{
  console.log('loading')
  return(dispatch)=>{
    fetch(`/category`)
    .then(res=>res.json())
    .then(
      category=>{
        dispatch(categoryLoaded(category))
      }
    )
  }
}

const categoryLoaded=(category)=>{
  return{
    type: 'CATEGORY_LOADED',
    value: category
  }
}

//Post new transaction
export const postNewCategory=(category)=>{
  return (dispatch)=>{
    fetch(`/category`,{
      method: 'post',
      body: JSON.stringify(category),
      headers:{
        'content-type': 'application/json'
      } 
    })
    .then(res=>res.json())
    .then((cat)=>{
      dispatch(loadCategories(cat))
    })
  }
}