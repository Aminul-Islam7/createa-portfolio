'use client';

import Image from 'next/image';

const clients = [
	{ name: 'Nike', logo: '/client-logos/nike.svg' },
	{ name: 'Adidas', logo: '/client-logos/adidas.svg' },
	{ name: 'National Geographic', logo: '/client-logos/natgeo.svg' },
	{ name: 'Sony Music', logo: '/client-logos/sony.svg' },
	{ name: 'Red Bull', logo: '/client-logos/redbull.svg' },
	{ name: 'Universal', logo: '/client-logos/universal.svg' },
];

export function ClientLogos() {
	return (
		<section className="bg-gradient-to-b from-black via-[rgba(243,232,253,0.05)] to-black py-16">
			<div className="container mx-auto max-w-7xl px-4">
				<h2 className="text-center text-3xl font-inter font-bold text-[#f3e8fd] mb-12 drop-shadow-[0_0_10px_rgba(217,97,159,0.3)]">Trusted by Leading Brands</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
					{clients.map((client) => (
						<div key={client.name} className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 hover:drop-shadow-[0_0_20px_rgba(91,197,215,0.5)]">
							<Image src={client.logo} alt={`${client.name} logo`} fill className="object-contain" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
