'use client';

import { Button } from './Button';

export function Contact() {
	const handleContact = () => {
		window.location.href = 'mailto:contact@example.com';
	};

	return (
		<section id="contact" className="bg-gradient-to-b from-black via-[rgba(91,197,215,0.1)] to-black py-24">
			<div className="container mx-auto max-w-7xl px-4">
				<div className="flex flex-col items-center text-center max-w-3xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-inter font-black text-[#f3e8fd] mb-6 drop-shadow-[0_0_15px_rgba(217,97,159,0.4)]">Ready to Create Something Amazing?</h2>
					<p className="text-xl text-[#5bc5d7] mb-12">Whether you have a creative project in mind or need help bringing your vision to life, I&apos;m here to help. Let&apos;s discuss how we can work together to create compelling visual content.</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<a onClick={handleContact} className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#d9619f] to-[#5bc5d7] rounded-full text-white font-bold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(91,197,215,0.3)]">
							Start a Project
						</a>
						<a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#f3e8fd] text-[#d9619f] rounded-full font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(243,232,253,0.2)]">
							Schedule a Call
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
