const GET_ALL_PRODUCTS = "products/getallproducts"
const GET_CURR_PRODUCTS = "products/getcurrproducts"
const GET_ONE_PRODUCT = "products/getoneproduct"
const EDIT_PRODUCT = "products/editproduct"

const getAllProductsAction= (products)=>({
    type: GET_ALL_PRODUCTS,
    products
})
const getCurrProductsAction = (products) =>({
    type: GET_CURR_PRODUCTS,
    products
})

const getProductAction = product =>({
    type: GET_ONE_PRODUCT,
    product
})
const editProduct = product =>({
    type: EDIT_PRODUCT,
    product
})

export const thunkEditProduct = (productId, quantity)=>async dispatch=>{
    console.log("insde product edit thunk", productId)
    const response = await fetch(`/api/products/${productId}/cart`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(productId)
        body: JSON.stringify({quantity:quantity})

    })
    if(response.ok){
        const data = await response.json()
        dispatch(editProduct(data))
    }
}
export const thunkOneProduct =(productId) => async dispatch =>{
    const response = await fetch(`/api/products/${productId}`)
    // const response = await fetch(`/api/products/${productId}/cart`)
    if (response.ok){
        const data = await response.json()
        dispatch(getProductAction(data))
    }
}
export const thunkCurrProducts = () => async(dispatch)=>{
    const response = await fetch('/api/products/curr')
    if(response.ok){
        const data = await response.json()
        dispatch(getCurrProductsAction(data))
    }
}
export const thunkAllProducts = () => async (dispatch) =>{
    const response = await fetch('/api/products/all')
    if(response.ok){
        const data = await response.json()
        dispatch(getAllProductsAction(data))
    }
}
const initialState = {allProducts:{}}

const productsReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:{
            const newState={}
            const allProducts = action.products
            allProducts.forEach(product=>{
                newState[product.id]=product
            })
            return {...state, allProducts: newState}
        }
        case GET_CURR_PRODUCTS:{
            return { ...state, allProducts: action.products };
        }
        case GET_ONE_PRODUCT:{
            const newState={}
            const newProduct = action.product
            newState[newProduct.id]=newProduct
            return {
                ...state, allProducts:newState
            }
        }
        case EDIT_PRODUCT:{
            const newState = {}
            const newProduct = action.product
            newState[newProduct.id] = newProduct
            return {
                ...state, allProducts: newState
            }
        }
        default: return state
    }
}
export default productsReducer
