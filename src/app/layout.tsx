import type { Metadata } from 'next';
import { Inter, Bakbak_One, Raleway, Playfair_Display } from 'next/font/google';

// Font configurations
const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
});

const bakbak = Bakbak_One({
	variable: '--font-bakbak',
	subsets: ['latin'],
	weight: ['400'],
	display: 'swap',
});

const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
});

const playfair = Playfair_Display({
	variable: '--font-playfair',
	subsets: ['latin'],
	weight: ['400'],
	style: ['italic'],
	display: 'swap',
});

// FontAwesome configuration
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Global styles
import './globals.css';

// Metadata
export const metadata: Metadata = {
	title: 'Createa - Video Editor',
	description:
		'Video Editor Portfolio - A showcase of my professional work and experience',
	keywords: ['video editor', 'motion graphics', 'video production', 'content creator', 'YouTube editor', 'storytelling', 'portfolio', 'sound design', 'vfx', 'artist', 'after effects', 'premiere pro'],
	authors: [{ name: 'Createa' }],
	creator: 'Createa',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		title: 'Createa - Professional Video Editor',
		description: 'A showcase of my professional work and experience',
		siteName: 'Createa',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Createa - Professional Video Editor',
		description: 'A showcase of my professional work and experience',
	},
	icons: {
		icon: '/logo.svg',
		apple: '/logo.svg',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const fontClasses = `${inter.variable} ${bakbak.variable} ${raleway.variable} ${playfair.variable} ${inter.className}`;

	return (
		<html lang="en" className="dark">
			<head>
				<meta name="theme-color" content="#000000" />
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
			</head>
			<body
				className={`${fontClasses} bg-[#000] min-h-screen text-white antialiased relative overflow-x-hidden`}
			>
				{children}
			</body>
		</html>
	);
}
