'use client';

import { useSearchParams } from 'next/navigation';
import { VideoPlayer } from './VideoPlayer';

interface ShortFormVideo {
	id: string;
	videoUrl: string;
	title: string;
	aspect: string;
}

const shortFormVideos: ShortFormVideo[] = [
	{
		id: 'sf1',
		videoUrl: 'https://www.youtube.com/embed/hhoiH8tbvw0',
		title: 'Short Form Content 1',
		aspect: '9/16',
	},
	{
		id: 'sf2',
		videoUrl: 'https://drive.google.com/file/d/1xyGOhYYcBVvzhc0gMCHhLu2bSvJTbRpZ/view?usp=sharing',
		title: 'Short Form Content 2',
		aspect: '9/16',
	},
];

export function ShortFormSection() {
	const searchParams = useSearchParams();
	const showShorts = searchParams.get('shorts') === 'true';

	if (!showShorts) return null;

	return (
		<section id="short-form" className="relative py-16 sm:py-20 px-4 md:px-8 w-full">
			<h2 className="section-heading mb-10 sm:mb-12">Short Form</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mx-auto max-w-[800px]">
				{shortFormVideos.map((video) => (
					<div key={video.id} className="w-full">
						<VideoPlayer src={video.videoUrl} title={video.title} aspectRatio={video.aspect} />
					</div>
				))}
			</div>
		</section>
	);
}
