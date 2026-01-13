'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export function Contact() {
	const discordUrl = 'https://discordid.netlify.app/?id=1254023931246153800';
	const email = 'createa.vids@gmail.com';

	return (
		<section id="contact" className="relative py-20 px-4">

			<div className="relative flex flex-col justify-center items-center gap-8">

				{/* Discord Button */}
				<button
					onClick={() => window.open(discordUrl, '_blank', 'noopener,noreferrer')}
					className="btn-primary text-2xl md:text-4xl py-6 sm:py-8 px-10 sm:px-14"
					aria-label="Contact via Discord"
				>
					<span>Hire Me!</span>
					<FontAwesomeIcon icon={faDiscord} className="w-7 h-7 md:w-9 md:h-9" />
				</button>

				{/* Email */}
				<a
					href={`mailto:${email}`}
					className="mt-4 text-xl sm:text-2xl md:text-3xl font-raleway font-light text-white/60 hover:text-white/90 transition-colors underline-offset-4"
				>
					{email}
				</a>

				{/* Footer credits */}
				<footer className="mt-10 pt-8 border-t border-white/10 w-full max-w-xl text-center">
					<p className="text-sm text-white/40 font-raleway">
						© {new Date().getFullYear()} Createa. All rights reserved.
					</p>
				</footer>
			</div>
		</section>
	);
}
