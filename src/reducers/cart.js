import { ADD_TO_CART, QUANTITY_INCREASE, QUANTITY_DECREASE, DELETE_ITEM } from "../constants";

export default function cartReducer(state = {}, action) {
	switch (action.type) {
		case ADD_TO_CART:
			let currentProduct = Object.keys(state)
			let currentState = currentProduct.filter((sku) => sku == action.payload.sku)
			if(currentState.length > 0) {
				let newState = {...state[action.payload.sku], qty: state[action.payload.sku].qty + 1 }
				return  { ...state, [action.payload.sku]: newState }
			} else {
				state[action.payload.sku] = {...action.payload, qty: 1 }
				return {...state, [action.payload.sku]: {...action.payload, qty: 1 } }
			}

		case QUANTITY_INCREASE:
			let newIncState = {...state[action.payload], qty: state[action.payload].qty + 1 }
			return  { ...state, [action.payload]: newIncState }

		case QUANTITY_DECREASE:
			if(state[action.payload].qty === 0) {
				return  { ...state }
			} else {
				let newDecState = {...state[action.payload], qty: state[action.payload].qty - 1 }
				return  { ...state, [action.payload]: newDecState }
			}

		case DELETE_ITEM:
			delete state[action.payload]
			return {...state}
		default:
			return state;
	}
}  