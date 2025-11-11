'use client';

import { ProjectCard } from '@/components/ProjectCard';
import { ClientLogos } from '@/components/ClientLogos';
import { Contact } from '@/components/Contact';
import { VideoShowcase } from '@/components/VideoShowcase';
import { AnimatedLogo } from '@/components/AnimatedLogo';
import NavigationLinks from '@/components/NavigationLinks';
import { DndContext, useDraggable, DragEndEvent } from '@dnd-kit/core';
import { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';

interface Position {
	top: number;
	left: number;
	rotation: number;
}

const showcaseVideos = [
	{
		id: 1,
		videoUrl: 'https://www.youtube.com/embed/sQOb0ct1p-0',
		channelName: 'VISUAL STORIES',
		viewCount: '1.2M VIEWS',
	},
	{
		id: 2,
		videoUrl: 'https://www.youtube.com/embed/eWmyvwnGWng',
		channelName: 'MOTION ARTS',
		viewCount: '892K VIEWS',
	},
];

const projects = [
	{
		id: 1,
		title: 'Brand Story: Nike Air Max',
		videoUrl: 'https://www.youtube.com/embed/3VEyeIeltu0',
		tags: ['Commercial', 'Brand Story', 'Sports'],
	},
	{
		id: 2,
		title: 'Mountain Adventure Documentary',
		videoUrl: 'https://www.youtube.com/embed/7LaoBlJAXBQ',
		tags: ['Documentary', 'Adventure', 'Sports'],
	},
	{
		id: 3,
		title: 'Brand Story: Nike Air Max',
		videoUrl: 'https://www.youtube.com/embed/3VEyeIeltu0',
		tags: ['Commercial', 'Brand Story', 'Sports'],
	},
	{
		id: 4,
		title: 'Mountain Adventure Documentary',
		videoUrl: 'https://www.youtube.com/embed/7LaoBlJAXBQ',
		tags: ['Documentary', 'Adventure', 'Sports'],
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
									<video className="w-full h-full object-cover" autoPlay loop muted playsInline src="/showreel.mp4" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* Projects Section */}
			<section id="work" className="relative p-8 md:p-16 w-full">
				{/* Extended Gradient Background */}
				<div className="absolute inset-0 bg-gradient-to-b from-[rgba(91,197,215,0.7)] via-[rgba(217,97,159,0.07)] to-transparent pointer-events-none h-[300%]" />

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

			{/* Featured Videos Section */}
			<section>
				<div className="space-y-14 md:space-y-22">
					{showcaseVideos.map((video, index) => (
						<div key={video.id} className="py-8 md:py-12 px-4 md:px-8 xl:px-16">
							<VideoShowcase videoUrl={video.videoUrl} channelName={video.channelName} viewCount={video.viewCount} isReversed={index % 2 === 1} />
						</div>
					))}
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

