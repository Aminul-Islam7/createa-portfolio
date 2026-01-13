'use client';

import { Suspense } from 'react';
import Image from 'next/image';

// Components
import { ProjectCard } from '@/components/ProjectCard';
import { Contact } from '@/components/Contact';
import { VideoShowcase } from '@/components/VideoShowcase';
import { AnimatedLogo } from '@/components/AnimatedLogo';
import NavigationLinks from '@/components/NavigationLinks';
import SplitText from '@/components/SplitText';
import ShinyText from '@/components/ShinyText';
import { ShortFormSection } from '@/components/ShortFormSection';

// =============================================================================
// DATA
// =============================================================================

interface ShowcaseVideo {
	id: number;
	videoUrl: string;
	channelName: string;
	viewCount: string;
	/** Optional note displayed below viewCount in smaller, less prominent text */
	note?: string;
	/** Optional thumbnail URL for videos that can't be embedded. If provided, shows image instead of iframe */
	thumbnailUrl?: string;
	/** Required if thumbnailUrl is set - URL to open when clicking the thumbnail */
	youtubeUrl?: string;
}

const showcaseVideos: ShowcaseVideo[] = [
	{
		id: 1,
		videoUrl: 'https://www.youtube.com/embed/K01NsIhGO4M',
		channelName: 'DEXECUTIONER',
		viewCount: '480K VIEWS',
	},
	{
		id: 2,
		channelName: 'DOCUMENTARY',
		videoUrl: 'https://drive.google.com/file/d/1alVwinl_0cBkQMmgDnIxsZCvb5vxtWGL/view?usp=sharing',
		viewCount: '(Approved Trial)',
	},
	{
		id: 3,
		videoUrl: 'https://www.youtube.com/embed/T7ftlEcZgBQ',
		channelName: 'Alex Griffin',
		viewCount: '60K VIEWS',
		// This video has embed disabled, use thumbnail fallback
		thumbnailUrl: '/thumbnails/alex-griffin.jpg',
		youtubeUrl: 'https://www.youtube.com/watch?v=T7ftlEcZgBQ',
	},
	{
		id: 4,
		channelName: 'THE SPECIAL ONE',
		videoUrl: 'https://drive.google.com/file/d/1w97Kb-RqvxldAc8IZUOqV3RrCIRD_K0_/view?usp=sharing',
		viewCount: 'Highlights only',
		note: 'Full video yet to be uploaded',
	},
	{
		id: 5,
		channelName: 'JPG',
		videoUrl: 'https://drive.google.com/file/d/1jZR03ct79DEruNQCSQDoRhlXqEe_TYJP/view?usp=sharing',
		viewCount: 'Subtitle & Webcam Showcase',
	},
];

interface Project {
	id: number;
	title: string;
	videoUrl: string;
	tags: string[];
}

const projects: Project[] = [
	{
		id: 1,
		title: 'Talking Head Showcase',
		videoUrl: 'https://drive.google.com/file/d/1OfpMwwTKxLLErOhB_s3pCC-IHMTVo1GN/view?usp=sharing',
		tags: ['Self Improvement', 'Minimal Music'],
	},
	{
		id: 2,
		title: 'Talking Head (Heavy Edit)',
		videoUrl: 'https://drive.google.com/file/d/11Ew3fD-Rxx3IqMkG9rq76AbSeRCky3oE/view?usp=sharing',
		tags: ['Finance Niche'],
	},
	{
		id: 3,
		title: 'Easy Sunset Painting in Few Minutes',
		videoUrl: 'https://youtube.com/embed/eANXR73JQ0Y',
		tags: ['Painting', 'Tutorial'],
	},
	{
		id: 4,
		title: 'MountRadhuni Commercial Edit',
		videoUrl: 'https://drive.google.com/file/d/1VPd4GAt-TZIOfYd-ycHvqZI2JqVIH25s/view?usp=sharing',
		tags: ['Motion Design', 'Creative', 'Commercial'],
	},
];

interface Testimonial {
	id: number;
	imageUrl: string;
}

const testimonials: Testimonial[] = [
	{ id: 3, imageUrl: '/testimonials/t3.png' },
	{ id: 6, imageUrl: '/testimonials/t6.png' },
	{ id: 1, imageUrl: '/testimonials/t1.png' },
	{ id: 2, imageUrl: '/testimonials/t2.png' },
	{ id: 4, imageUrl: '/testimonials/t4.png' },
	{ id: 7, imageUrl: '/testimonials/t7.png' },
	{ id: 5, imageUrl: '/testimonials/t5.png' },
];

interface Client {
	id: number;
	name: string;
	imageUrl: string;
	url: string;
}

const clients: Client[] = [
	{ id: 1, name: 'The Special One', imageUrl: '/client-logos/the-special-one.jpg', url: 'https://www.youtube.com/@ThespecialoneYT' },
	{ id: 2, name: 'Dexecutioner', imageUrl: '/client-logos/dexecutioner.jpg', url: 'https://www.youtube.com/@DexecutionerYT' },
	{ id: 3, name: 'Liquid Minds', imageUrl: '/client-logos/liquid-minds.jpg', url: 'https://www.youtube.com/@LiquidMinds_art' },
	{ id: 4, name: 'Alex Griffin', imageUrl: '/client-logos/alex-griffin.jpg', url: 'https://www.youtube.com/@AlexGriffin-YT' },
];




// =============================================================================
// MAIN PAGE
// =============================================================================

export default function Home() {
	return (
		<main className="flex flex-col w-full bg-[#000] relative overflow-hidden">
			{/* Background Pattern */}
			<div
				className="fixed inset-0 w-full h-full opacity-30 pointer-events-none"
				style={{
					backgroundImage: 'url("/background-pattern.svg")',
					backgroundSize: '80px',
					backgroundPosition: 'center center',
				}}
			/>

			{/* Gradient Overlays */}
			<div className="fixed inset-0 w-full h-full pointer-events-none">
				<div className="absolute top-0 left-[10%] w-[600px] h-[600px] bg-[#d9619f] opacity-15 rounded-full blur-[150px]" />
				<div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#5bc5d7] opacity-15 rounded-full blur-[150px]" />
			</div>

			{/* ========================================
			    HERO SECTION
			    ======================================== */}
			<div className="relative">
				{/* Hero Background Gradient */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#5bc5d7]/20 pointer-events-none" />

				{/* Navigation */}
				<nav className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:transform-none z-50 px-4 md:px-8 py-6">
					<NavigationLinks />
				</nav>

				{/* Hero Content */}
				<section className="relative min-h-[700px] max-h-[900px] w-full flex items-center justify-center pt-24 pb-8 md:pt-16 md:pb-12">
					<div className="container max-w-[1600px] mx-auto px-4 md:px-8">
						<div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-center">
							{/* Left Column - Logo & CTA */}
							<div className="flex flex-col items-center md:items-start justify-center gap-8">
								<div className="scale-75 sm:scale-85 md:scale-90 lg:scale-100">
									<AnimatedLogo />
								</div>

								<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-raleway font-bold text-white -mt-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
									Createa
								</h1>

								<a
									href="https://discordid.netlify.app/?id=1254023931246153800"
									target="_blank"
									rel="noopener noreferrer"
									className="btn-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl"
								>
									Work with me!
								</a>
							</div>

							{/* Right Column - Showreel Video */}
							<div className="flex items-center justify-center h-full">
								<div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black/30 ring-1 ring-white/10">
									<video
										className="w-full h-full object-cover"
										autoPlay
										muted
										loop
										playsInline
										controls
										src="/showreel.mp4"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Quote Section */}
				<section className="relative w-full px-4 md:px-8 py-4 sm:py-6 md:py-8 mb-6 sm:mb-10">
					<div className="container mx-auto max-w-[1600px]">
						<div className="mx-auto max-w-[1100px] text-center">
							<SplitText
								text="Anything motion graphics with great storytelling"
								className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#f3e8fd] drop-shadow-[0_0_12px_rgba(243,232,253,0.2)] font-playfair italic leading-tight px-3 py-2 sm:py-3 md:py-4"
								delay={100}
								duration={2}
								ease="power3.out"
								splitType="words"
								from={{ opacity: 0, y: 40 }}
								to={{ opacity: 1, y: 0 }}
								threshold={0.1}
								rootMargin="-100px"
								textAlign="center"
								onLetterAnimationComplete={() => {}}
							/>
						</div>
					</div>
				</section>
			</div>

			{/* ========================================
			    WORKED WITH SECTION
			    ======================================== */}
			<section id="worked-with" className="relative py-16 sm:py-20 px-4 md:px-8 w-full">
				{/* Background gradient - extends to cover project showcase section */}
				<div className="absolute inset-0 h-[800%] bg-gradient-to-b from-[rgba(91,197,215,0.5)] via-[rgba(217,97,159,0.05)] to-transparent pointer-events-none" />

				<div className="relative container mx-auto max-w-[1400px]">
					<h2 className="section-heading mb-12 sm:mb-20">Worked with</h2>

					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 items-start justify-center">
						{clients.map((client) => (
							<div key={client.id} className="flex flex-col items-center gap-5">
								<a
									href={client.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Visit ${client.name} on YouTube`}
									className="group block transition-all duration-300 hover:scale-105"
								>
									<div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden glass flex items-center justify-center shadow-xl group-hover:shadow-[0_0_40px_rgba(91,197,215,0.3)] transition-all duration-300">
										<Image
											src={client.imageUrl}
											alt={client.name}
											width={200}
											height={200}
											className="object-cover w-full h-full"
										/>
									</div>
								</a>
								<p className="text-base sm:text-lg lg:text-3xl font-raleway font-semibold text-[#f3e8fd] text-center">
									{client.name}
								</p>
							</div>
						))}
					</div>

					<div className="mt-14 w-full flex items-center justify-center">
						<ShinyText
							text="and many more.."
							disabled={false}
							speed={2}
							className="text-lg sm:text-xl md:text-3xl font-raleway italic font-semibold"
						/>
					</div>
				</div>
			</section>

			{/* ========================================
			    PROJECTS SHOWCASE SECTION
			    ======================================== */}
			<section className="relative">
				<div className="space-y-4">
					{showcaseVideos.map((video, index) => (
						<div key={video.id} className="py-8 sm:py-10 md:py-14 px-4 md:px-8 xl:px-16">
							<VideoShowcase
								videoUrl={video.videoUrl}
								channelName={video.channelName}
								viewCount={video.viewCount}
								note={video.note}
								thumbnailUrl={video.thumbnailUrl}
								youtubeUrl={video.youtubeUrl}
								isReversed={index % 2 === 1}
							/>
						</div>
					))}
				</div>
			</section>

			{/* ========================================
			    SHORT FORM SECTION (only visible with ?shorts=true)
			    ======================================== */}
			<Suspense fallback={null}>
				<ShortFormSection />
			</Suspense>

			{/* ========================================
			    FEATURED WORK SECTION
			    ======================================== */}
			<section id="work" className="relative py-16 sm:py-20 px-4 md:px-8 w-full">
				<h2 className="section-heading mb-12 sm:mb-14">Featured Work</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-[1200px]">
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							videoUrl={project.videoUrl}
							tags={project.tags}
						/>
					))}
				</div>
			</section>

			{/* ========================================
			    TESTIMONIALS SECTION
			    ======================================== */}
			<section id="testimonials" className="relative py-12 sm:py-16 px-4 md:px-8 w-full">

				<div className="glass rounded-[30px] p-6 sm:p-8 lg:px-16 mx-auto max-w-[1400px]">
					<div
						className="columns-1 sm:columns-2"
						style={{ columnGap: '3rem' }}
					>
						{testimonials.map((testimonial) => (
							<div key={testimonial.id} className="break-inside-avoid mb-5">
								<Image
									src={testimonial.imageUrl}
									alt={`Client testimonial ${testimonial.id}`}
									width={800}
									height={600}
									className="w-full h-auto object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ========================================
			    CONTACT SECTION
			    ======================================== */}
			<Contact />
		</main>
	);
}
