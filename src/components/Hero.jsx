import React from 'react';

function Hero({options}) {
	const {isDesktop} = options;
	return (
		<section className="hero h-[120vh] relative pt-[6rem] md:pt-[12rem]">
			<div className="content- text-[2rem] mx-auto max-w-[90%] text-center">
				{isDesktop ? (
					<>
						<div>With an outstanding style, only for you</div>
						<h1 className="font-bold text-[4rem] mb-16">
							Exclusively designed for you.
						</h1>
					</>
				) : (
					<>
						<h1 className="font-bold text-[3rem] mb-8">
							Exclusively designed for you.
						</h1>
						<div className='mb-12 text-[1.5rem]'>With an outstanding style, only for you</div>
					</>
				)}
				<div className="images- w-full h-[75vh] flex flex-col md:flex-row text-darkGray text-[1rem]">
					<div className="relative flex-1 before:content-['For_Her'] before:p-4 before:bg-white before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%]">
						<img src="img/gallery/her.png" alt="" className="w-full h-full" />
					</div>
					<div className="relative flex-1 before:content-['For_Him'] before:p-4 before:bg-white before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%]">
						<img src="img/gallery/him.png" alt="" className="w-full h-full" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
