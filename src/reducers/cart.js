import { ADD_TO_CART } from "../constants";

export default function cartReducer(state = [], action) {
	switch (action.type) {
		case ADD_TO_CART:
			return [...state, action.payload];
		default:
			return state;
	}
}