'use client';

import { VideoPlayer } from './VideoPlayer';

interface ProjectCardProps {
	title: string;
	videoUrl: string;
	tags?: string[];
}

export function ProjectCard({ title, videoUrl, tags }: ProjectCardProps) {
	return (
		<article className="group relative rounded-3xl glass p-4 sm:p-5 card-hover">
			{/* Glow effect on hover */}
			<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5bc5d7]/10 to-[#d9619f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

			{/* Video container */}
			<div className="relative overflow-hidden rounded-2xl">
				<VideoPlayer src={videoUrl} title={title} />
			</div>

			{/* Content */}
			<div className="mt-4 p-2">
				<h3 className="text-xl sm:text-2xl lg:text-3xl font-bakbak text-[#f3e8fd] leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
					{title}
				</h3>

				{tags && tags.length > 0 && (
					<div className="mt-4 flex flex-wrap gap-2">
						{tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full bg-[rgba(91,197,215,0.15)] px-3 py-1.5 text-sm text-[#5bc5d7] border border-[rgba(91,197,215,0.4)] shadow-[0_0_10px_rgba(91,197,215,0.1)] transition-all duration-300 hover:bg-[rgba(91,197,215,0.25)] hover:border-[rgba(91,197,215,0.6)]"
							>
								{tag}
							</span>
						))}
					</div>
				)}
			</div>
		</article>
	);
}
