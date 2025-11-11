'use client';

import { VideoPlayer } from './VideoPlayer';

interface VideoShowcaseProps {
	videoUrl: string;
	channelName: string;
	viewCount: string;
	isReversed?: boolean;
}

export function VideoShowcase({ videoUrl, channelName, viewCount, isReversed = false }: VideoShowcaseProps) {
	const contentSection = (
		<div className="flex flex-col justify-center space-y-8 px-8 md:px-16">
			<h2 className="text-4xl md:text-6xl xl:text-7xl font-bold text-[#f3e8fd] leading-tight drop-shadow-[0_0_30px_rgba(217,97,159,0.5)]">{channelName}</h2>
			<p className="text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#d9619f] to-[#5bc5d7] text-transparent bg-clip-text drop-shadow-[0_4px_8px_rgba(91,197,215,0.3)]">{viewCount}</p>
		</div>
	);

	const videoSection = (
		<div className="w-full">
			<VideoPlayer src={videoUrl} title={channelName} />
		</div>
	);

	return (
		<div className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
				{isReversed ? (
					<>
						{contentSection}
						{videoSection}
					</>
				) : (
					<>
						{videoSection}
						{contentSection}
					</>
				)}
			</div>
		</div>
	);
}
