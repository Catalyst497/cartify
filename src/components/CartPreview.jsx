import React from 'react';
import { XCircle } from 'react-feather';
import { Link } from 'react-router-dom';

const CartPreview = ({ options }) => {
	if (options.previewOpen) {
		return (
			<div
				id="CartPreview"
				className="fixed top-[5rem] right-[2rem] bg-white z-10 p-4 rounded-md shadow-md"
			>
				<div
					className="absolute top-4 right-4"
					onClick={() => options.setPreviewOpen(false)}
				>
					<XCircle size={16} />
				</div>
				<div id="section-title" className="">
					<h1 className="text-black font-bold text-[2rem]">Cart Preview</h1>
				</div>
				<ul id="cartitems" className="">
					{options.cartItems.map((item) => (
						<li className="flex items-center justify-between rounded-md hover:shadow-md transition-[box-shadow] p-2">
							<div>{item.name}</div>
							<div className="text-green-300">{item.currentPrice}</div>
							<div>{item.quantity}</div>
						</li>
					))}
				</ul>
				<button type='button' className='block text-center text-white py-2 bg-black w-full my-2'>
					<Link to={'/cart'}>Go to Cart</Link>
				</button>
			</div>
		);
	} else {
		return;
	}
};

export default CartPreview;
