import React from 'react';
import {
	ArrowRight,
	Phone,
	Mail,
	Facebook,
	Instagram,
	Youtube,
	Twitter,
  Heart,
} from 'react-feather';
function Footer() {
	return (
		<footer id="footer" className="p-10 md:p-16 text-darkGray">
			<div className="flex flex-wrap footer-top- justify-between gap-16">
				<div className="flex gap-16 flex-wrap">
					<ul>
						<div className="font-bold text-[1.2rem] text-black mb-1">
							Company Info
						</div>
						<li className="my-2">About Us</li>
						<li className="my-2">Affiliate</li>
						<li className="my-2">Fashion BLogger</li>
					</ul>
					<ul>
						<div className="font-bold text-[1.2rem] text-black mb-1">
							Help & Support
						</div>
						<li className="my-2">Shipping Info </li>
						<li className="my-2">Refunds </li>
						<li className="my-2">How to Order </li>
						<li className="my-2">How to Track </li>
						<li className="my-2">Size Guides </li>
					</ul>
					<ul>
						<div className="font-bold text-[1.2rem] text-black mb-1">
							Customer Care
						</div>
						<li className="my-2">Contact Us </li>
						<li className="my-2">Payment Methods </li>
						<li className="my-2">Bonus Point</li>
					</ul>
				</div>
				<div>
					<div className="font-bold text-[1.2rem] text-black mb-1">
						Sign Up for the Latest News
					</div>
					<div className="flex gap-8 bg-white shadow-sm rounded-[0.2rem] mt-2">
						<ArrowRight />
						<input
							type="text"
							className="bg-transparent outline-none"
							placeholder="Enter Email"
						/>
					</div>
					<div className="flex flex-col gap-4 mt-12">
						<div id="phone" className="flex gap-4">
							<Phone /> +23333343342
						</div>
						<div id="email" className="flex gap-4">
							<Mail /> something@gmail.com
						</div>
					</div>
      </div>
			</div>
			<hr className="mt-6" />
			<div
				id="footer-bottom"
				className="flex justify-between mt-6 gap-6 flex-col-reverse md:flex-row items-center"
			>
				<div>Made with <Heart className='inline' /> from Catalyst</div>
				<div className="flex gap-6">
					<Facebook />
					<Instagram />
					<Youtube />
					<Twitter />
				</div>
			</div>
		</footer>
	);
}

export default Footer;