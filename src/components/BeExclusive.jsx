import React from 'react';

function BeExclusive() {
	return (
		<section
			id="BeExclusive"
			className="flex flex-col md:flex-row items-stretch container max-w-[85vw] m-auto mt-40"
		>
			<div className="text- flex-1 bg-[#eee] flex flex-col justify-center px-6 py-6">
				<div className="text-darkGray text-[1.5rem] font-bold">
					Exclusive 2021 collection
				</div>
				<h1 className="font-bold py-4 ">Be Exclusive</h1>
				<p>
					The best everyday option in super saver range. It's our responsibility
					to keep you 100 percent stylish. Be smart and trendy with us.
				</p>
				<button className="text-center- py-2 bg-black text-white w-full max-w-[12rem] mx-auto md:mx-0 mt-4">
					<a href="#Gallery">Explore Now</a>
				</button>
			</div>
			<div className="image- flex-1 overflow-hidden ">
				<img src="img/gallery/outfit.png" alt="" className="w-full" />
			</div>
		</section>
	);
}

export default BeExclusive;
