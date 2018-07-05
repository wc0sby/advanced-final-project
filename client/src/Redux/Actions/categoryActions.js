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

export const deleteCategory=(id)=>{
  return (dispatch)=>{
    fetch(`/category/${id}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then((trx)=>{
      dispatch(loadCategories(trx))
    })
  }
}

export const postUpdateCategory=(main, id)=>{
  return (dispatch)=>{
    fetch(`/category/${id}`,{
      method: 'put',
      body: JSON.stringify(main),
      headers:{
        'content-type': 'application/json'
      } 
    })
    .then(res=>res.json())
    .then((category)=>{
      dispatch(loadCategories(category))
    })
  }
}