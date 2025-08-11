import { ProjectCard } from '@/components/ProjectCard';
import { ClientLogos } from '@/components/ClientLogos';
import { Contact } from '@/components/Contact';
import { VideoShowcase } from '@/components/VideoShowcase';
import { AnimatedLogo } from '@/components/AnimatedLogo';

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
		title: 'Travel Series: Hidden Gems',
		videoUrl: 'https://www.youtube.com/embed/eWmyvwnGWng',
		tags: ['Travel', 'Documentary', 'Series'],
	},
	{
		id: 4,
		title: 'Music Video: Electric Dreams',
		videoUrl: 'https://www.youtube.com/embed/F5HIaRJFL34',
		tags: ['Music Video', 'Creative', 'Visual Effects'],
	},
];

export default function Home() {
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
					<div className="flex gap-4 justify-end">
						<a href="#work" className="px-6 py-2.5 text-sm bg-gradient-to-r from-[#d9619f] to-[#5bc5d7] rounded-full text-white font-medium hover:opacity-90 transition-all duration-300 backdrop-blur-sm hover:scale-105 text-center">
							Portfolio
						</a>
						<a href="#testimonials" className="px-6 py-2.5 text-sm bg-[rgba(243,199,80,0.9)] text-white rounded-full font-medium hover:bg-[#f3c750] transition-all duration-300 backdrop-blur-sm hover:scale-105 text-center">
							Testimonials
						</a>
					</div>
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
									<span>Createa</span>
								</h1>
								<a href="#contact" className="px-10 py-8 text-2xl md:text-4xl bg-[rgb(0,122,255)] text-white rounded-full font-black tracking-wide hover:bg-[rgba(44,146,255,1)] transition-all duration-300 shadow-[0_0_40px_rgba(0,122,255,0.6)] backdrop-blur-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(0,122,255,0.9)]">
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
			<section id="work" className="relative p-8 md:p-16">
				{/* Gradient Background */}
				<div className="absolute inset-0 bg-gradient-to-b from-[#5bc5d7] via-[rgba(91,197,215,0.3)] to-transparent pointer-events-none" />

				<div className="container mx-auto max-w-7xl relative">
					<div className="flex flex-col items-center mb-16">
						<h2 className="text-4xl md:text-5xl font-inter font-black text-[#f3e8fd] drop-shadow-[0_0_10px_rgba(243,232,253,0.3)]">Featured Work</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{projects.map((project) => (
							<ProjectCard key={project.id} title={project.title} videoUrl={project.videoUrl} tags={project.tags} />
						))}
					</div>
				</div>
			</section>

			{/* Featured Videos Section */}
			<section>
				<div className="space-y-40 md:space-y-64">
					{showcaseVideos.map((video, index) => (
						<div key={video.id} className="py-20 md:py-32 px-4 md:px-8 xl:px-16">
							<VideoShowcase videoUrl={video.videoUrl} channelName={video.channelName} viewCount={video.viewCount} isReversed={index % 2 === 1} />
						</div>
					))}
				</div>
			</section>

			{/* Client Logos Section */}
			<ClientLogos />

			{/* Contact Section */}
			<Contact />
		</main>
	);
}

