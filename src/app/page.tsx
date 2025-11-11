'use client';

import { ProjectCard } from '@/components/ProjectCard';
import { Contact } from '@/components/Contact';
import { VideoShowcase } from '@/components/VideoShowcase';
import { AnimatedLogo } from '@/components/AnimatedLogo';
import NavigationLinks from '@/components/NavigationLinks';
import { DndContext, useDraggable, DragEndEvent } from '@dnd-kit/core';
import { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';
import SplitText from '@/components/SplitText';

interface Position {
	top: number;
	left: number;
	rotation: number;
}

const showcaseVideos = [
	{
		id: 1,
		videoUrl: 'https://www.youtube.com/embed/K01NsIhGO4M',
		channelName: 'DEXECUTIONER',
		viewCount: '450K VIEWS',
	},
	{
		id: 2,
		channelName: 'THE SPECIAL ONE',
		videoUrl: 'https://drive.google.com/file/d/1w97Kb-RqvxldAc8IZUOqV3RrCIRD_K0_/view?usp=sharing',
		viewCount: 'Highlights only (Full video yet to be uploaded)',
	},
	{
		id: 3,
		channelName: 'DOCUMENTARY',
		videoUrl: 'https://drive.google.com/file/d/1alVwinl_0cBkQMmgDnIxsZCvb5vxtWGL/view?usp=sharing',
		viewCount: '(Approved Trial)',
	},
	{
		id: 4,
		channelName: 'JPG',
		videoUrl: 'https://drive.google.com/file/d/1jZR03ct79DEruNQCSQDoRhlXqEe_TYJP/view?usp=sharing',
		viewCount: 'Subtitle & webcam handling showcase',
	},
];

const projects = [
	{
		id: 1,
		title: 'Tam Kaur Long Form',
		videoUrl: 'https://drive.google.com/file/d/1OfpMwwTKxLLErOhB_s3pCC-IHMTVo1GN/view?usp=sharing',
		tags: ['Talking Head', 'Self Improvement'],
	},
	{
		id: 2,
		title: 'RR trial, talking head 1',
		videoUrl: 'https://drive.google.com/file/d/11Ew3fD-Rxx3IqMkG9rq76AbSeRCky3oE/view?usp=sharing',
		tags: ['Talking Head', 'Finance Niche'],
	},
	{
		id: 3,
		title: 'Easy Sunset Painting in FEW Minutes',
		videoUrl: 'https://youtube.com/embed/eANXR73JQ0Y',
		tags: ['Painting', 'Tutorial Video'],
	},
	{
		id: 4,
		title: 'MountRadhuni Commercial Edit',
		videoUrl: 'https://drive.google.com/file/d/1VPd4GAt-TZIOfYd-ycHvqZI2JqVIH25s/view?usp=sharing',
		tags: ['Motion Design', 'Creative', 'Ad'],
	},
];

const testimonials = [
	{
		id: 1,
		imageUrl: '/testimonials/image01.jpg',
	},
	{
		id: 2,
		imageUrl: '/testimonials/image03.jpg',
	},
	{
		id: 3,
		imageUrl: '/testimonials/image01.jpg',
	},
	{
		id: 4,
		imageUrl: '/testimonials/image03.jpg',
	},
];

const clients = [
	{ id: 1, name: 'The Special One', imageUrl: '/client-logos/the-special-one.jpg', url: 'https://www.youtube.com/@ThespecialoneYT' },
	{ id: 2, name: 'Dexecutioner', imageUrl: '/client-logos/dexecutioner.jpg', url: 'https://www.youtube.com/@DexecutionerYT' },
	{ id: 3, name: 'Liquid Minds', imageUrl: '/client-logos/liquid-minds.jpg', url: 'https://www.youtube.com/@LiquidMinds_art' },
];

interface DraggableImageProps {
	testimonial: { id: number; imageUrl: string };
	position: { top: number; left: number; rotation: number };
}

function DraggableImage({ testimonial, position }: DraggableImageProps) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: testimonial.id });

	const style: CSSProperties = {
		top: `${position.top}%`,
		left: `${position.left}%`,
		transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
		position: 'absolute',
	};

	return (
		<div ref={setNodeRef} {...listeners} {...attributes} style={style} className="w-[150px] h-auto object-contain rounded-[20px] cursor-move">
			<Image src={testimonial.imageUrl} alt={`Testimonial ${testimonial.id}`} width={150} height={150} className="rounded-[20px]" />
		</div>
	);
}

export default function Home() {
	const [positions, setPositions] = useState<Position[]>([]);

	useEffect(() => {
		const computedPositions: Position[] = testimonials.map(() => ({
			top: Math.random() * 80,
			left: Math.random() * 80,
			rotation: Math.random() * 30 - 15,
		}));
		setPositions(computedPositions);
	}, []);

	const handleDragEnd = (event: DragEndEvent) => {
		const { id } = event.active;
		const { delta } = event;

		setPositions((prevPositions) =>
			prevPositions.map((pos, index) =>
				testimonials[index].id === id
					? {
							...pos,
							top: pos.top + (delta.y / 600) * 100, // Adjust based on container height
							left: pos.left + (delta.x / 600) * 100, // Adjust based on container width
					  }
					: pos
			)
		);
	};

	return (
		<main className="flex flex-col w-full bg-[#000] relative overflow-hidden">
			{/* Background Pattern */}
			<div
				className="absolute inset-0 w-full h-full opacity-50"
				style={{
					backgroundImage: 'url("/background-pattern.svg")',
					backgroundSize: '100px',
					backgroundPosition: 'center center',
				}}
			/>
			{/* Gradient Overlay */}
			<div className="absolute inset-0 w-full h-full">
				<div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-[#d9619f] opacity-20 rounded-full blur-[128px]" />
				<div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#5bc5d7] opacity-20 rounded-full blur-[128px]" />
			</div>
			{/* Hero Section */}
			<div className="relative">
				{/* Hero Background Gradient */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5bc5d7]/30 pointer-events-none" />
				{/* Navigation Menu */}
				<nav className="absolute top-0 right-0 z-50 px-4 md:px-8 py-6">
					<NavigationLinks />
				</nav>

				{/* Hero Section */}
				<section className="relative min-h-[700px] max-h-[900px] w-full flex items-center justify-center py-16">
					{/* Content Container */}
					<div className="container max-w-[1600px] mx-auto px-4 md:px-8">
						<div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-8 items-center">
							{/* Left Column - Logo, Title, and Work with me button */}
							<div className="flex flex-col items-center md:items-start justify-center gap-10">
								<div className="scale-90">
									<AnimatedLogo />
								</div>
								<h1 className="text-6xl md:text-[5rem] font-raleway font-bold text-white -mt-14">
									<span className="font-raleway">Createa</span>
								</h1>
								<a href="https://discordid.netlify.app/?id=1254023931246153800" target="_blank" rel="noopener noreferrer" className="px-10 py-8 text-2xl md:text-4xl bg-[rgb(0,122,255)] text-white rounded-full font-black tracking-wide hover:bg-[rgba(44,146,255,1)] transition-all duration-300 shadow-[0_0_40px_rgba(0,122,255,0.6)] backdrop-blur-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(0,122,255,0.9)]">
									Work with me!
								</a>
							</div>

							{/* Right Column - Featured Video */}
							<div className="flex items-center justify-center h-full">
								<div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black/20">
									<video className="w-full h-full object-cover" autoPlay muted loop playsInline controls src="/showreel.mp4" />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Quote Section */}
				<section className="relative w-full px-4 md:px-8 py-2 md:py-4 mb-10">
					<div className="container mx-auto max-w-[1600px]">
						<div className="mx-auto max-w-[1100px] text-center">
							<SplitText text="Anything motion graphics with great storytelling" className="text-2xl md:text-4xl lg:text-5xl text-[#f3e8fd] drop-shadow-[0_0_12px_rgba(243,232,253,0.2)] font-playfair italic leading-tight px-3 py-4" delay={100} duration={2} ease="power3.out" splitType="words" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" onLetterAnimationComplete={() => {}} />
						</div>
					</div>
				</section>
			</div>

			{/* Worked With Section */}
			<section id="worked-with" className="relative p-8 md:p-16 w-full">
				{/* Extended Gradient Background */}
				<div className="absolute inset-0 bg-gradient-to-b from-[rgba(91,197,215,0.6)] via-[rgba(217,97,159,0.07)] to-transparent pointer-events-none h-[600%]" />

				<div className="relative w-full">
					<div className="flex flex-col items-center mb-16">
						<h2 className="text-4xl md:text-5xl font-inter font-black text-[#f3e8fd] drop-shadow-[0_0_10px_rgba(243,232,253,0.3)]">Worked with</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 md:px-8 items-center justify-center">
						{clients.map((client) => (
							<div key={client.id} className="flex flex-col items-center justify-center gap-4">
								<a href={client.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${client.name} YouTube`} className="block transition-transform duration-300 hover:scale-105 cursor-pointer">
									<div className="w-[160px] h-[160px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden bg-[#ffffff10] border border-[white]/10 flex items-center justify-center shadow-2xl">
										<Image src={client.imageUrl} alt={client.name} width={220} height={220} className="object-contain" />
									</div>
								</a>
								<p className="text-xl md:text-3xl font-inter font-semibold text-[#f3e8fd] mt-2">{client.name}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section>
				<div className="space-y-14 md:space-y-22">
					{showcaseVideos.map((video, index) => (
						<div key={video.id} className="py-8 md:py-12 px-4 md:px-8 xl:px-16">
							<VideoShowcase videoUrl={video.videoUrl} channelName={video.channelName} viewCount={video.viewCount} isReversed={index % 2 === 1} />
						</div>
					))}
				</div>
			</section>

			{/* Featured Videos Section */}

			<section id="work" className="relative p-8 md:p-16 w-full">
				<div className="relative w-full">
					<div className="flex flex-col items-center mb-16">
						<h2 className="text-4xl md:text-5xl font-inter font-black text-[#f3e8fd] drop-shadow-[0_0_10px_rgba(243,232,253,0.3)]">Featured Work</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 md:px-8">
						{projects.map((project) => (
							<ProjectCard key={project.id} title={project.title} videoUrl={project.videoUrl} tags={project.tags} />
						))}
					</div>
				</div>
			</section>

			<div className="my-4 md:my-10"></div>

			{/* Testimonials Section */}
			<section id="testimonials" className="relative py-16 bg-[#000]/10 w-full rounded-[30px] backdrop-blur-md mx-auto px-4 md:px-8 max-w-[1750px] border border-[white]/20">
				<DndContext onDragEnd={handleDragEnd}>
					<div className="relative w-full h-[600px]">
						{/* Dynamically render images directly */}
						{positions.length > 0 && testimonials.map((testimonial, index) => <DraggableImage key={testimonial.id} testimonial={testimonial} position={positions[index]} />)}
					</div>
				</DndContext>
			</section>

			{/* Contact Section */}
			<Contact />
		</main>
	);
}

