'use client';

import { VideoPlayer } from './VideoPlayer';

interface ProjectCardProps {
	title: string;
	videoUrl: string;
	thumbnailUrl?: string;
	tags?: string[];
}

export function ProjectCard({ title, videoUrl, thumbnailUrl, tags }: ProjectCardProps) {
	return (
		<div className="group relative rounded-3xl bg-gradient-to-b from-[rgba(243,232,253,0.1)] to-[rgba(91,197,215,0.05)] p-6 shadow-[0_0_30px_rgba(217,97,159,0.1)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(91,197,215,0.2)]">
			<VideoPlayer src={videoUrl} title={title} />
			<div className="mt-6">
				<h3 className="text-3xl font-bakbak text-[#f3e8fd] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{title}</h3>
				{tags && tags.length > 0 && (
					<div className="mt-4 flex flex-wrap gap-2">
						{tags.map((tag) => (
							<span key={tag} className="rounded-full bg-[rgba(217,97,159,0.2)] px-3 py-1 text-sm text-[#5bc5d7] border border-[#5bc5d7] shadow-[0_0_10px_rgba(91,197,215,0.2)]">
								{tag}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
