import React from 'react';
import { Link } from 'react-router-dom';
import { MinusCircle, Plus, Minus } from 'react-feather';
import { useState, useEffect } from 'react';

function Item({ item, removeFromCart, addQuantity, removeQuantity }) {
	function Hr({ className }) {
		return (
			<hr
				className={`inline-block h-[1rem] w-[1px] border-none bg-darkGray ${className}`}
			/>
		);
	}
	return (
		<div className="flex py-8">
			<div className="flex flex-1 gap-8 items-center">
				<img src={item.img} alt="" className="h-12 w-12 rounded-md" />
				<div>
					<div className="font-bold mb-4">
						{item.name}{' '}
						<MinusCircle
							onClick={(e) => removeFromCart(e, item)}
							className="text-red-700 inline-block ml-4"
						/>
					</div>
					<div className="text-[0.7rem] mb-2">Gender: {item.gender}</div>
					<div className="text-[0.7rem]">Category: {item.category}</div>
				</div>
			</div>
			<div className="flex items-center flex-1">
				<div className="flex-1 text-green-300">{item.currentPrice}</div>
				<div className="flex items-center flex-1 gap-3">
					{item.quantity} <Hr className="opacity-20" />{' '}
					<div className="flex gap-1">
						<Minus
							size={16}
							className="inline-block"
							onClick={() => removeQuantity(item)}
						/>
						<Hr />
						<Plus
							size={16}
							className="inline-block"
							onClick={() => addQuantity(item)}
						/>
					</div>
				</div>
				<div className="flex-1 ">
					${item.quantity * +item.currentPrice.substring(1)}
				</div>
			</div>
		</div>
	);
}
export default function Cart({ options }) {
	const [salesSummary, setSalesSummary] = useState();

	function addQuantity(item) {
		const newGallery = options.cartItems.map((itm) => {
			if (itm.id == item.id) {
				return { ...item, quantity: item.quantity + 1 };
			}
			return itm;
		});
		options.setCartItems(newGallery);
	}
	function removeQuantity(item) {
		const newGallery = options.cartItems.map((itm) => {
			if (itm.id == item.id) {
				return {
					...item,
					quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
				};
			}
			return itm;
		});
		options.setCartItems(newGallery);
	}
	function removeFromCart(e, item) {
		const newGallery = options.cartItems.filter((itm) => {
			return itm.id !== item.id;
		})
		options.setCartItems(newGallery);
	}
	useEffect(() => {
		let summary = 0;
		options.cartItems.forEach((item) => {
			summary += item.quantity * +item.currentPrice.substring(1);
		});
		setSalesSummary(summary);
	}, [options.cartItems]);

	function Hr() {
		return <hr className="w-[95%] mx-auto my-2" />;
	}
	return (
		<section className="pt-[5rem]">
			<div className="px-16 py-6 bg-fairGray font-bold text-[1.5rem]">
				<h2>Cart</h2>
			</div>
			<div className="flex flex-col md:flex-row px-16 mt-24">
				<div id="cart" className="py-8 flex-[4] overflow-x-auto">
					<div
						id="table-heading"
						className="flex items-center font-bold justify-between md:w-auto w-[200vw]"
					>
						<div className="flex-1">Product</div>
						<div className="flex flex-1">
							<div className="flex-1">Price</div>
							<div className="flex-1">Quantity</div>
							<div className="flex-1">Total</div>
						</div>
					</div>
					<div id="items" className="md:w-auto w-[200vw]">
						<Hr />
						{options.cartItems.length ? options.cartItems.map((item) => (
							<Item
								item={item}
								removeFromCart={removeFromCart}
								addQuantity={addQuantity}
								removeQuantity={removeQuantity}
							/>
						)) : ''}
					</div>
				</div>
				<div className="flex-[2]">
					<div className="text-[2rem] py-2 font-bold">Order Summary</div>
					<Hr />
					<ul className="my-4">
						<li className="flex justify-between">
							<div>Subtotal</div>
							<div>$ {salesSummary}</div>
						</li>
						<Hr />
						<li className="flex justify-between">
							<div>Shipping</div>
							<div>$ 10</div>
						</li>
						<Hr />
						<li className="flex justify-between">
							<div>Grand Total</div>
							<div>$ {salesSummary - 10}</div>
						</li>
					</ul>
					<button type="button" className="py-2 px-4 bg-black text-white">
						<a href="http://localhost:5000/checkout">Proceed to Checkout</a>
					</button>
				</div>
			</div>
			<Link to={'/#Gallery'} className="text-[0.8rem] px-16 hover:underline">
				Go back to gallery
			</Link>
		</section>
	);
}
