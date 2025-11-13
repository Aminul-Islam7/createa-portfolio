const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
	const animationDuration = `${speed}s`;

	// When enabled we want to show the gradient via background-clip and make the text transparent
	const typographyClass = `${className}`.trim();
	const baseClass = `inline-block ${typographyClass} text-[#b5b5b5a4]`.trim();
	const overlayClass = `absolute inset-0 inline-block ${typographyClass} text-transparent bg-clip-text animate-shine pointer-events-none`.trim();

	return (
		<span className="relative inline-block">
			{/* Base text - solid greyish */}
			<span className={baseClass} aria-hidden={disabled ? undefined : true}>
				{text}
			</span>

			{/* Animated overlay - shows shimmering sweep. Hidden when disabled. */}
			{!disabled && (
				<span
					className={overlayClass}
					style={{
						backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0) 60%)',
						backgroundSize: '200% 100%',
						WebkitBackgroundClip: 'text',
						backgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						animationDuration: animationDuration,
						willChange: 'backgroundPosition',
					}}
				>
					{text}
				</span>
			)}
		</span>
	);
};

export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };

