import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import BeExclusive from './components/BeExclusive';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import CartPreview from './components/CartPreview';
import Cart from './components/Cart';
import gallery from './utils/gallery';


function App() {
	const [data, setData] = useState(null);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
	const [displayedGallery, setDisplayedGallery] = useState([]);
	const [cartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartQuantity, setCartQuantity] = useState(0);
	const [previewOpen, setPreviewOpen] = useState(false);

	useEffect(() => {
		fetch('http://localhost:5000/api')
			.then((res) => res.json())
			.then((data) => {
				setData(data.message);
				console.log(data);
			});
	}, []);
	useEffect(()=> {
		if (cartItems.length) {
			setPreviewOpen(true);
		}
	}, [cartItems])
	function windowResize() {
		window.addEventListener('resize', () => {
			window.innerWidth > 768 ? setIsDesktop(true) : setIsDesktop(false);
		});
	}
	useEffect(() => {
		windowResize();
		return window.removeEventListener('resize', () => {
			window.innerWidth > 768 ? setIsDesktop(true) : setIsDesktop(false);
		});
	}, []);
	const options = {
		isDesktop: isDesktop,
		displayedGallery: displayedGallery,
		setDisplayedGallery: setDisplayedGallery,
		gallery: gallery,
		cartOpen: cartOpen,
		setCartOpen: setCartOpen,
		cartItems: cartItems,
		setCartItems: setCartItems,
		cartQuantity: cartQuantity,
		setCartQuantity: setCartQuantity,
		previewOpen: previewOpen,
		setPreviewOpen: setPreviewOpen,
};
	return (
		<div className="App">
			<Navbar options={options} />

			<Routes>
				<Route
					path="/"
					element={
						<>
							<CartPreview options={options} />
							<Hero options={options} />
							<Highlights isDesktop={isDesktop} />
							<BeExclusive />
							<Gallery options={options} />
						</>
				}
				/>
				<Route path="/cart" element={
					<Cart options={options} />
				} />
			</Routes>
			<Footer />

			{/* <header className="App-header">
				<p>{!data ? 'Loading...' : data}</p>
			</header> */}
		</div>
	);
}

export default App;
