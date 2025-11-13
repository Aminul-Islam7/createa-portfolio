'use client';

export default function NavigationLinks() {
	const handleScroll = (id: string) => {
		document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="flex gap-4 justify-center md:justify-end">
			<button onClick={() => handleScroll('#work')} className="px-6 py-2.5 text-sm bg-gradient-to-r from-[#d9619f] to-[#5bc5d7] rounded-full text-white font-medium hover:opacity-90 transition-all duration-300 backdrop-blur-sm hover:scale-105 text-center">
				Portfolio
			</button>
			<button onClick={() => handleScroll('#testimonials')} className="px-6 py-2.5 text-sm bg-[rgba(243,199,80,0.9)] text-white rounded-full font-medium hover:bg-[#f3c750] transition-all duration-300 backdrop-blur-sm hover:scale-105 text-center">
				Testimonials
			</button>
		</div>
	);
}
