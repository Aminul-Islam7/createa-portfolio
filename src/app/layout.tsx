import type { Metadata } from 'next';
import { Inter, Bakbak_One, Raleway } from 'next/font/google';
import '@fontsource/montserrat';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const bakbak = Bakbak_One({
	variable: '--font-bakbak',
	subsets: ['latin'],
	weight: ['400'],
});

const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Createa - Video Editor',
	description: 'A showcase of my professional work and experience',
	icons: {
		icon: '/logo.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` ${bakbak.variable} ${raleway.variable} ${inter.className} bg-[#141414] min-h-screen text-white antialiased relative overflow-x-hidden`}>{children}</body>
		</html>
	);
}

