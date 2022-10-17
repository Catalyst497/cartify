import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Components
import highlights from '../utils/highlights';

function Highlights({isDesktop}) {
	return (
		<section className="highlights- pt-[12rem] mt-[16rem] md:mt-16">
			<div className="section-title- text-center font-bold text-[3rem]">
				Best Deals
			</div>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={isDesktop ? 3 : 1}
				navigation
			>
				{highlights &&
					highlights.map((item) => (
						<SwiperSlide className="h-[20rem]" key={item.id}>
							<div className="h-full flex flex-col items-center justify-start">
								<div className="flex-1 overflow-hidden">
									<img src={item.img} className="h-full" alt="" />
								</div>
								<div className="text- text-center">
									<h1 className="name- text-[1rem] font-bold">{item.name}</h1>
									<div className="price- text-green-300">
										{item.currentPrice}
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
		</section>
	);
}

export default Highlights;
