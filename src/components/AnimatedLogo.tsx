'use client';

import Image from 'next/image';

export function AnimatedLogo() {
	return (
		<div className="w-48 h-48 md:w-64 md:h-64 mb-8 relative animate-float">
			<style jsx>{`
				@keyframes float {
					0% {
						transform: rotate(-2deg);
					}
					50% {
						transform: rotate(2deg);
					}
					100% {
						transform: rotate(-2deg);
					}
				}
				.animate-float {
					animation: float 6s ease-in-out infinite;
				}
			`}</style>
			<Image src="/logo.svg" alt="Createa Logo" width={256} height={256} priority />
		</div>
	);
}
