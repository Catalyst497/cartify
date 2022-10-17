import React, { useEffect, useState } from 'react';
import { Cart } from 'react-bootstrap-icons';
import { Plus, Minus } from 'react-feather';
import gallery from '../utils/gallery';

const activeCls =
	'bg-[rgba(0,0,0,0.15)] rounded-[0.2rem] p-4 py-3 transition-colors';

function Category({ txt, cls, key, category, setCategory }) {
	const onClick = (txt) => setCategory(txt);

	return (
		<div key={key} className="category-" onClick={() => onClick(txt)}>
			<button className={category === txt && activeCls}>{txt}</button>
		</div>
	);
}

function Gallery({ options }) {
	const [gender, setGender] = useState('Female');
	const [category, setCategory] = useState('T-shirt');
	// const [added, setAdded] = useState(false)
	useEffect(() => {
		options.setDisplayedGallery(
			gallery.filter((item) => {
				if (gender && category != 'All') {
					return item.gender === gender && item.category === category;
				} else {
					return item.gender === gender;
				}
			})
		);
	}, [gender, category]);

	function addToCart(e, item) {
		// Check if new item is already in the list
		const intruders = options.cartItems.filter((itm, i) => {
			return itm.id === item.id;
		});
		if (intruders.length) return;
		// Add new item to list
		const newGallery = options.displayedGallery.map((itm) => {
			if (itm.id == item.id) {
			return { ...itm, added: true };
			}
			return itm;
		});
		options.setDisplayedGallery(newGallery);
		options.setCartItems([...options.cartItems, {...item, quantity: (item.quantity ? item.quantity : 1)}]);
	}
	function addQuantity(item) {
		const newGallery = options.displayedGallery.map((itm) => {
			if (itm.id == item.id) {
				return { ...itm, quantity: itm.quantity >= 0 ? itm.quantity + 1 : 2 };
			}
			return itm;
		});
		options.setDisplayedGallery(newGallery);
	}
	function removeQuantity(item) {
		const newGallery = options.displayedGallery.map((itm) => {
			if (itm.id == item.id) {
				return { ...itm, quantity: itm.quantity ? itm.quantity - 1 : 0 };
			}
			return itm;
		});
		options.setDisplayedGallery(newGallery);
	}
	return (
		<section id="Gallery">
			<div className="section-title- text-center font-bold text-[3rem] mt-[15rem] mb-6">
				Shop By Category
			</div>
			<div className="category-select-">
				<div className="gender flex justify-center items-center gap-4 mb-6">
					<div className="">
						<button
							className={gender === 'Female' && activeCls}
							onClick={() => setGender('Female')}
						>
							For Women
						</button>
					</div>
					<div>
						<button
							className={gender === 'Male' && activeCls}
							onClick={() => setGender('Male')}
						>
							For Men
						</button>
					</div>
				</div>
				<div className="flex justify-center items-center flex-wrap gap-4 px-10">
					<Category
						txt={'T-shirt'}
						category={category}
						setCategory={setCategory}
					/>
					<Category
						txt={'Shirt'}
						category={category}
						setCategory={setCategory}
					/>
					<Category
						txt={'Shoe'}
						category={category}
						setCategory={setCategory}
					/>
					<Category
						txt={'Watch'}
						category={category}
						setCategory={setCategory}
					/>
					<Category
						txt={'Sunglass'}
						category={category}
						setCategory={setCategory}
					/>
					<Category
						txt={'Bagpack'}
						category={category}
						setCategory={setCategory}
					/>
					<Category txt={'All'} category={category} setCategory={setCategory} />
				</div>
			</div>
			<div className="container- flex flex-wrap justify-center gap-4">
				{options.displayedGallery.map((item) => {
					return (
						<div
							key={item.id}
							className="flex flex-col items-center justify-start"
						>
							<div className="relative">
								<img src={item.img} alt="" />
								<div className="absolute flex flex-col items-center bottom-[10rem] right-4 rounded-[1rem] bg-[#00000022] w-8 p-2">
									<div
										id="addquantity"
										className="text-4"
										onClick={() => addQuantity(item)}
									>
										<Plus size={16} />
									</div>
									<hr className="w-[80%] bg-gray-500" />
									<div
										id="removequantity"
										className=""
										onClick={() => removeQuantity(item)}
									>
										<Minus size={16} />
									</div>
									<hr className="w-[80%]" />
									<div
										id="showquantity"
										className="text-green-400"
										onClick={() => removeQuantity(item)}
									>
										{item.quantity ? item.quantity : 1}
									</div>
								</div>

								<div
									id="addtocart"
									title='Add to Cart'
									className="absolute flex items-center justify-center bottom-8 right-4 w-8 h-8 rounded-full bg-[#00000022]"
									onClick={(e) => addToCart(e, item)}
								>
									<Plus
										size={16}
										className={`text-[0.4rem] transition-[transform] ${
											item.added ? 'rotate-[360deg] duration-1000' : ''
										}`}
									/>
								</div>
							</div>
							<div className="text- text-center">
								<h1 className="name- text-[1rem] font-bold">{item.name}</h1>
								<div className="price- text-green-300">{item.currentPrice}</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Gallery;
