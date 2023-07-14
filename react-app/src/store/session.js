// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const LIKES_PRODUCT="products/likesproducts"

const likesProduct = product=>({
    type: LIKES_PRODUCT,
    product
})
const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const removeUser = () => ({
	type: REMOVE_USER,
});

export const thunkLikesProduct = (product) =>async dispatch=>{
    const response = await fetch(`/api/products/${product.id}/like`,{
        "method": "POST",
        "headers": { 'Content-Type': 'application/json' },
        // "body": product
    }
    )
    if(response.ok){
        const data = await response.json()
        dispatch(likesProduct(data))
        return data
    }
}

const initialState = { user: null};

export const authenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
};

export const login = (email, password) => async (dispatch) => {
	console.log("email.......", email)
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(removeUser());
	}
};

export const signUp = (username, first_name, last_name, email, phone_number, password) => async (dispatch) => {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			email,
			first_name,
			last_name,
		    phone_number,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

//adding initiall state

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return { user: action.payload };
		case REMOVE_USER:
			return { user: null };
		case LIKES_PRODUCT:{
			const newState = { ...state};
			const likedProducts = action.product;

			likedProducts.forEach(likedProduct => {
				console.log("this is liked..................", likedProduct)
				const id = likedProduct.id;
				newState.user.likes[id] = likedProduct;
				console.log("new state........", newState.user.likes[id])
			});

			return newState;
			// const newState = {...state}
			// const likes = action.product
			// likes.map(like=>{
			// 	console.log("new state........", newState.user.likes)

			// 	newState.user.likes[like.id]=like
			// })
			// return newState
		}
		default:
			return state;
	}
}
