import GetCurrLikes from "../components/Products/Likes"

const GET_ALL_PRODUCTS = "products/getallproducts"
const GET_CURR_PRODUCTS = "products/getcurrproducts"
const GET_ONE_PRODUCT = "products/getoneproduct"
const EDIT_PRODUCT = "products/editproduct"
const ADD_PRODUCT = "products/addproducts"
const REMOVE_PRODUCT = "products/removeproducts"
// const LIKES_PRODUCT="products/likesproducts"
const CURR_LIKES="products/currlikes"
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
// const likesProduct = product=>({
//     type: LIKES_PRODUCT,
//     product
// })
const currLikesProducts = (products)=>({
    type: CURR_LIKES,
    products
})
export const thunkLikedProducts = () => async(dispatch)=>{
    const response = await fetch('/api/products/likes')
    if(response.ok){
        const data = await response.json()
        dispatch(currLikesProducts(data))
    }
}
export const thunkAllProducts = () => async (dispatch) =>{
    const response = await fetch('/api/products/all')
    if(response.ok){
        const data = await response.json()
        dispatch(getAllProductsAction(data))
    }
}
// export const thunkLikesProduct = (product) =>async dispatch=>{
//     const response = await fetch(`/api/products/${product.id}/like`,{
//         "method": "POST",
//         "headers": { 'Content-Type': 'application/json' },
//         // "body": product
//     }
//     )
//     if(response.ok){
//         const data = await response.json()
//         dispatch(likesProduct(data))
//         return data
//     }
// }
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
    // console.log("this is product in thunk", product)
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
        return data
    }
}
export const thunkEditProduct = (productId, quantity)=>async dispatch=>{
    // console.log("insde product edit thunk", productId)
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

export const thunkSunScreen =()=> async (dispatch)=>{
    const response = await fetch('/api/products/sunscreen')
    if(response.ok){
        const data = await response.json()
        dispatch(getAllProductsAction(data))
    }
}

export const thunkMakeUp =()=> async (dispatch)=>{
    const response = await fetch('/api/products/makeup')
    if(response.ok){
        const data = await response.json()
        dispatch(getAllProductsAction(data))
    }
}
export const thunkHair =()=> async (dispatch)=>{
    const response = await fetch('/api/products/hair')
    if(response.ok){
        const data = await response.json()
        dispatch(getAllProductsAction(data))
    }
}
export const thunkFragrance =()=> async (dispatch)=>{
    const response = await fetch('/api/products/fragrance')
    if(response.ok){
        const data = await response.json()
        dispatch(getAllProductsAction(data))
    }
}
export const thunkSkincare =()=> async (dispatch)=>{
    const response = await fetch('/api/products/skincare')
    if(response.ok){
        const data = await response.json()
        dispatch(getAllProductsAction(data))
    }
}
export const thunkBody =()=> async (dispatch)=>{
    const response = await fetch('/api/products/body')
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
            // console.log("products in all products reducer`````````", products)
            products.map(product=>{
                newState.allProducts[product.id]=product
            })
            return newState
        }
        case GET_CURR_PRODUCTS:{
            const newState={currProducts:{}, allProducts:{...state.allProducts}}
            const products = action.products
            products.map(product=>{
                // console.log("this is products====>", product)
                newState.currProducts[product.product.id]=product
            })
            return newState
        }
        case CURR_LIKES:{
            const newState = {currProducts:{...state.currProducts}, allProducts:{}}
            const products = action.products
            products.map(product=>{
                newState.allProducts[product.id]=product
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
            const productId = action.product
            const quantity = action.quantity
            // console.log("this is new sta=======t===>", typeof(productId), quantity)

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
             const newState = {...state, currProducts:{...state.currProducts}}
             delete newState.currProducts[action.productId]
             return newState
        }
        // case LIKES_PRODUCT:{
        //     const newState = {...state, allProducts:{}}
        //     const likedProduct = action.product
        //     console.log("this is action .product~~~~~~~~~~~~~", action.product)
        //     console.log("thi sis state", newState)
        //         newState.allProducts.undefined=likedProduct

        //     return newState
        // }
        default: return state
    }
}
export default productsReducer
