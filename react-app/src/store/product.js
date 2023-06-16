const GET_ALL_PRODUCTS = "products/getallproducts"
const GET_CURR_PRODUCTS = "products/getcurrproducts"
const GET_ONE_PRODUCT = "products/getoneproduct"
const EDIT_PRODUCT = "products/editproduct"
const ADD_PRODUCT = "products/addproducts"
const REMOVE_PRODUCT = "products/removeproducts"

const removeProduct = (productId) =>({
    type: REMOVE_PRODUCT,
    productId
})
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
const editProduct = (product, quantity) =>({
    type: EDIT_PRODUCT,
    product, quantity
})
const addProduct = product =>({
    type: ADD_PRODUCT,
    product
})

export const thunkRemoveProduct = (productId)=>async dispatch=>{
    const response = await fetch(`/api/products/delete/${productId}`, {
        method:'DELETE'
    })
    if(response.ok){
        // const data = await response.json()
        dispatch(removeProduct(productId))
    }
}
export const thunkAddProduct = (product)=>async dispatch=>{
    console.log("this is product in thunk", product)
    const response = await fetch(`/api/products/${product.id}/cart`,{

            "method": "POST",
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify(
                {quantity:1}
            )
    })
    if(response.ok){
        const data = await response.json()
        dispatch(addProduct(data))
    }
}
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
        dispatch(editProduct(productId, quantity))
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
const initialState = {allProducts:{}, currProducts:{}}

const productsReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:{

            const newState = {currProducts:{...state.currProducts}, allProducts:{}}
            const products = action.products
            products.map(product=>{
                newState.allProducts[product.id]=product
            })
            return newState
        //     const newState={}
        //     const allProducts = action.products
        //     allProducts.forEach(product=>{
        //         newState[product.id]=product
        //     })
        //     return {...state, allProducts: newState}
        }
        case GET_CURR_PRODUCTS:{
            // return { ...state, allProducts: action.products };
            const newState={currProducts:{}, allProducts:{...state.allProducts}}
            const products = action.products
            products.map(product=>{
                console.log("this is products====>", product)
                newState.currProducts[product.product.id]=product
            })
            return newState
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
            const newState = {...state, currProducts:{...state.currProducts}}
            console.log("this is new stat===>", newState)
            const productId = action.product
            const quantity = action.quantity
            console.log("this is new sta=======t===>", typeof(productId), quantity)

            newState.currProducts[`${productId}`].quantity = quantity

            return newState

        }
        case ADD_PRODUCT:{
            const newState={}
            const newProduct = action.product
            newState[newProduct.id] = newProduct
            return{
                ...state,
                currProducts:newState,

            }
        }
        case REMOVE_PRODUCT:{
            // const newState = {...state.currProducts}
            // const newSingleState = {...state.allProducts}
            // const productId = action.product.productId
            // delete newState[productId]
            // return {
            //     currProducts: newState
            // }
             const newState = {...state, currProducts:{...state.currProducts}}
             delete newState.currProducts[action.productId]
        }
        default: return state
    }
}
export default productsReducer
