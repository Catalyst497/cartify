import React from 'react';

function Hero() {
	return (
		<section className="h-[120vh] relative before:opacity-50 before:-z-10 before:absolute before:inset-0 before:bg-[url(img/gallery/header-bg.png)] pt-[12rem]">
			<div className="content- text-[2rem] mx-auto max-w-[90%] text-center">
				<div>With an outstanding style, only for you</div>
				<h1 className="font-bold text-[4rem] mb-16">
					Exclusively designed for you.
				</h1>
				<div className="images- w-full h-[75vh] flex flex-col md:flex-row text-darkGray text-[1rem]">
					<div className="relative flex-1 before:content-['For_Her'] before:p-4 before:bg-white before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%]">
						<img src='img/gallery/her.png' alt="" className="w-full h-full" />
					</div>
					<div className="relative flex-1 before:content-['For_Him'] before:p-4 before:bg-white before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%]">
						<img src='img/gallery/him.png' alt="" className="w-full h-full" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
