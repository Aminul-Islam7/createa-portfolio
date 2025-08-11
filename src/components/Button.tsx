'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary';
	children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
	const baseStyles = 'inline-block px-8 py-4 text-4xl font-inter font-black rounded-[1.125rem] transition-colors';
	const variants = {
		primary: 'bg-[#00FF00] text-white shadow-[0_0_16px_rgba(0,255,0,1)] hover:bg-[#00DD00]',
		secondary: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
	};

	return (
		<button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
			{children}
		</button>
	);
}
