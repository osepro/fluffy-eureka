import { ADD_TO_CART, QUANTITY_INCREASE, QUANTITY_DECREASE, DELETE_ITEM, CHECKOUT } from "../constants";

export function addToCart(product) {
	return {
		type: ADD_TO_CART,
		payload: product,
	};
}

export function increaseQty(sku) {
	return {
		type: QUANTITY_INCREASE,
		payload: sku
	}
}

export function decreaseQty(sku) {
	return {
		type: QUANTITY_DECREASE,
		payload: sku
	}
}

export function deleteItem(sku) {
	return {
		type: DELETE_ITEM,
		payload: sku
	}
} 

export function checkout() {
	return {
		type: CHECKOUT,
	}
}