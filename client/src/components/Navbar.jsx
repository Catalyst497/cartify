import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Phone,
	ShoppingCart,
	Search,
	User,
	Heart,
	Menu,
	X,
} from 'react-feather';

const Navbar = ({ options }) => {
	const [navOpen, setNavOpen] = useState(false);
	const [scrolled, setScrolled] = useState(window.scrollY > 180);
	const [searchOpen, setSearchOpen] = useState(false);
	const [searchedResult, setSearchedResult] = useState([]);
	const searchRef = useRef(null);
	function onPageScroll() {
		setScrolled(window.scrollY > 180);
	}
	window.addEventListener('scroll', onPageScroll);
	function searchActions(target) {
		console.log(target.value.toLowerCase());
		const searchContent = target.value.toLowerCase();
		if (!searchContent.length) {
			return setSearchedResult([]);
		}
		let searchedGallery = options.gallery.filter((item) => {
			return item.name.toLowerCase().includes(searchContent);
		});
		setSearchedResult(searchedGallery);
	}
	useEffect(() => {
		if(!searchOpen) setSearchedResult([]);
	}, [searchOpen])
	return (
		<nav
			className={`fixed ${
				navOpen ? 'bg-white max-h-[100rem]' : 'bg-transparent max-h-20'
			} ${
				scrolled ? 'bg-[#ffffffbb] backdrop-blur-sm' : ''
			} md:overflow-visible overflow-hidden left-[50%] translate-x-[-50%] w-full flex flex-col justify-start md:justify-center items-start md:flex-row md:items-center gap-8 text-bold z-20 transition-[max-height] p-6 md:px-16`}
		>
			<div className="logo- flex items-center gap-4">
				<h1 className="text-[2rem] font-brush font-bold">
					<Link to={'/'}>Cartify</Link>
				</h1>
			</div>
			<ul className={`options- flex flex-col md:flex-row flex-1 gap-6`}>
				<li className="option-">Women</li>
				<li className="option-">Men</li>
				<li className="option-">Collection</li>
				<li className="option-">Outlet</li>
			</ul>
			<ul className="icons- flex gap-6">
				<li className="icon-">
					<a href="/">
						<Phone />
					</a>
				</li>
				<li className="icon-">
					<a href="/">
						<ShoppingCart />
					</a>
				</li>
				{options.isDesktop && (
					<li className="icon- flex items-center relative">
						<div
							className={`searchbar- overflow-hidden w-0 transition-[width] ${
								searchOpen ? 'w-[7rem]' : ''
							}`}
						>
							<input
								onChange={(e) => searchActions(e.target)}
								type="text"
								name=""
								id=""
								placeholder="Input Search..."
								className="bg-transparent placeholder:text-black outline-none text-black"
							/>
						</div>

						<button
							ref={searchRef}
							href=""
							id="searchicon"
							className=""
							onClick={() => setSearchOpen(!searchOpen)}
						>
							<Search />
						</button>
						{searchedResult.length !== 0 ? (
							<ul className="absolute bg-white text-black top-[140%] rounded-lg w-[max-content] overflow-y-auto max-h-[50vh] px-2">
								{searchedResult.map((item, i) => (
									<a
										key={i}
										className="flex h-[6rem] items-center gap-6 w-[max-content]"
										href="#Gallery"
										onClick={() => setSearchedResult([])}
									>
										<img src={item.img} className="h-[60%]" alt="" />
										<div>
											<div>{item.name}</div>
											<div className="flex gap-2 text-[0.6rem]">
												<div>{item.gender}</div>
												<div>{item.category}</div>
											</div>
										</div>
									</a>
								))}
							</ul>
						) : (
							''
						)}
					</li>
				)}

				<li className="icon-">
					<a href="/">
						<User />
					</a>
				</li>
				<li className="icon-">
					<a href="/">
						<Heart />
					</a>
				</li>
			</ul>
			<div
				className={`top-8 right-6 absolute toggler- block md:hidden`}
				onClick={() => setNavOpen(!navOpen)}
			>
				{navOpen ? <X /> : <Menu />}
			</div>
		</nav>
	);
};

export default Navbar;
