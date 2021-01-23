import { useState } from 'react'
import initialState from '../../initialState'

const useInitialState = () => {
	const [state, setState] = useState(initialState)
	
	const addToCart = payload => {
		const cartProduct = { ...payload }
		const cartProducts = [...state.cart]

		cartProduct.id = 1
		if (state.cart.length > 0) {
			const lastItem = state.cart.pop()
			cartProduct.id = parseInt(lastItem.id, 16) + 1
		}
		cartProducts.push(cartProduct)

		console.log(state.cart)
		setState({
			...state,
			cart: [...cartProducts]
		})
	}

	const removeFromCart = (payload) => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id !== payload.id)
		})
	}

	const addToBuyer = payload => {
		setState({
			...state,
			buyer: [...state.buyer, payload]
		})
	}

	const addNewOrder = payload => {
		setState({
			...state,
			orders:[...state.orders, payload]
		})
	}
	return {
		addToCart,
		removeFromCart,
		addToBuyer,
		addNewOrder,
		state
	}
}

export default useInitialState;
