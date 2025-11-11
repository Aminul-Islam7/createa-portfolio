'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export function Contact() {
	const handleContact = () => {
		window.location.href = 'mailto:contact@example.com';
	};

	return (
		<section id="contact" className="flex flex-col justify-center items-center py-24">
			<button onClick={() => window.open('https://discordid.netlify.app/?id=1254023931246153800', '_blank', 'noopener,noreferrer')} className="flex items-center gap-4 px-10 py-8 text-2xl md:text-4xl bg-[rgb(0,122,255)] text-white rounded-full font-black tracking-wide hover:bg-[rgba(44,146,255,1)] transition-all duration-300 shadow-[0_0_40px_rgba(0,122,255,0.6)] backdrop-blur-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(0,122,255,0.9)]">
				<span>Hire Me!</span>
				<FontAwesomeIcon icon={faDiscord} className="w-6 h-6 md:w-8 md:h-8" />
			</button>
			<p className="mt-10 text-white text-2xl md:text-3xl font-raleway">createa.vids@gmail.com</p>
		</section>
	);
}
