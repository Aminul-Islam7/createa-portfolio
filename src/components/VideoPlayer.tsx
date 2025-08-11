'use client';

interface VideoPlayerProps {
	src: string;
	title: string;
	width?: string;
	height?: string;
	aspectRatio?: string;
	thumbnailUrl?: string;
}

export function VideoPlayer({ src, title, width = '100%', height = 'auto', aspectRatio = '16/9', thumbnailUrl }: VideoPlayerProps) {
	return (
		<div className="relative rounded-2xl overflow-hidden shadow-[0_0_36px_rgba(0,0,0,1)]" style={{ width, height, aspectRatio }}>
			<iframe src={src} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-0 left-0 w-full h-full" />
		</div>
	);
}
