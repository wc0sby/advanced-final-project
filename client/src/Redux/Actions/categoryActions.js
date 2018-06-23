export const loadCategories=()=>{
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