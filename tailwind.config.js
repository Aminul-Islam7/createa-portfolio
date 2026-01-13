/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
				bakbak: ['var(--font-bakbak)', 'system-ui', 'sans-serif'],
				raleway: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
				playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
			},
			keyframes: {
				shine: {
					'0%': { 'background-position': '100%' },
					'100%': { 'background-position': '-100%' },
				},
				float: {
					'0%, 100%': { transform: 'rotate(-2deg) translateY(0)' },
					'50%': { transform: 'rotate(2deg) translateY(-8px)' },
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				slideUp: {
					from: { opacity: '0', transform: 'translateY(30px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				pulseGlow: {
					'0%, 100%': { boxShadow: '0 0 20px rgba(91, 197, 215, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(91, 197, 215, 0.6)' },
				},
			},
			animation: {
				shine: 'shine 5s linear infinite',
				float: 'float 6s ease-in-out infinite',
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
			},
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				'primary-hover': '#00DD00',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					pink: '#d9619f',
					cyan: '#5bc5d7',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			boxShadow: {
				glow: '0 0 40px rgba(0, 122, 255, 0.6)',
				'glow-hover': '0 0 50px rgba(0, 122, 255, 0.9)',
				'glow-pink': '0 0 30px rgba(217, 97, 159, 0.5)',
				'glow-cyan': '0 0 20px rgba(91, 197, 215, 0.2)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
