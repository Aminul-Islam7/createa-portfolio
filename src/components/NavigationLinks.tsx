'use client';

export default function NavigationLinks() {
	const handleNavigation = (id: string) => {
		document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	const navItems = [
		{ id: '#work', label: 'Portfolio', variant: 'gradient' as const },
		{ id: '#testimonials', label: 'Testimonials', variant: 'gold' as const },
		{ id: '#contact', label: 'Contact', variant: 'outline' as const },
	];

	return (
		<nav className="flex items-center gap-2 sm:gap-3">
			{navItems.map((item) => (
				<button
					key={item.id}
					onClick={() => handleNavigation(item.id)}
					className={`px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${getVariantStyles(item.variant)}`}
				>
					{item.label}
				</button>
			))}
		</nav>
	);
}

function getVariantStyles(variant: 'gradient' | 'gold' | 'outline'): string {
	switch (variant) {
		case 'gradient':
			return 'bg-gradient-to-r from-[#d9619f] to-[#5bc5d7] text-white shadow-md hover:shadow-lg';
		case 'gold':
			return 'bg-[rgba(243,199,80,0.9)] text-white hover:bg-[#f3c750] shadow-md hover:shadow-lg';
		case 'outline':
			return 'border border-white/30 text-white hover:bg-white/10 hover:border-white/50';
		default:
			return '';
	}
}
