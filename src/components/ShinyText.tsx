'use client';

interface ShinyTextProps {
	text: string;
	disabled?: boolean;
	speed?: number;
	className?: string;
}

export default function ShinyText({ text, disabled = false, speed = 5, className = '' }: ShinyTextProps) {
	const animationDuration = `${speed}s`;

	const baseClass = `inline-block ${className} text-[#b5b5b5a4]`.trim();
	const overlayClass = `absolute inset-0 inline-block ${className} text-transparent bg-clip-text animate-shine pointer-events-none`.trim();

	return (
		<span className="relative inline-block">
			{/* Base text - solid greyish */}
			<span className={baseClass} aria-hidden={!disabled}>
				{text}
			</span>

			{/* Animated overlay - shows shimmering sweep. Hidden when disabled. */}
			{!disabled && (
				<span
					className={overlayClass}
					style={{
						backgroundImage:
							'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 60%)',
						backgroundSize: '200% 100%',
						WebkitBackgroundClip: 'text',
						backgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						animationDuration: animationDuration,
						willChange: 'background-position',
					}}
				>
					{text}
				</span>
			)}
		</span>
	);
}
