export const getProducts = () => dispatch => {
    fetch('https://everest-backend.herokuapp.com/products')
    .then(response => response.json())
    .then(json => dispatch({type: 'GET_PRODUCTS_SUCCESS' , payload: json}))
    .catch(error => dispatch({type: 'GET_PRODUCTS_ERROR' , payload: error}))
}

export const getCategories = () => dispatch => {
    fetch('https://everest-backend.herokuapp.com/categories')
    .then(response => response.json())
    .then(json => dispatch({type: 'GET_CATEGORIES_SUCCESS' , payload: json}))
    .catch(error => dispatch({type: 'GET_CATEGORIES_ERROR' , payload: error}))
}

export const getComponents = () => dispatch => {
    fetch('https://everest-backend.herokuapp.com/components')
    .then(response => response.json())
    .then(json => dispatch({type: 'GET_COMPONENTS_SUCCESS' , payload: json}))
    .catch(error => dispatch({type: 'GET_COMPONENTS_ERROR' , payload: error}))
}