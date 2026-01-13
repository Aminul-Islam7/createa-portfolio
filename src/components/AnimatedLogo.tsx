'use client';

import Image from 'next/image';

export function AnimatedLogo() {
	return (
		<div className="w-48 h-48 md:w-64 md:h-64 mb-8 relative animate-float">
			<div className="absolute inset-0 bg-gradient-to-br from-[#d9619f]/20 to-[#5bc5d7]/20 rounded-full blur-3xl" />
			<Image
				src="/logo.svg"
				alt="Createa Logo"
				width={256}
				height={256}
				priority
				className="relative z-10 drop-shadow-[0_0_30px_rgba(91,197,215,0.3)]"
			/>
		</div>
	);
}
