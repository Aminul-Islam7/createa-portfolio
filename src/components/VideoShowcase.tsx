'use client';

import { VideoPlayer } from './VideoPlayer';
import { useState, useEffect } from 'react';

interface VideoShowcaseProps {
	videoUrl: string;
	channelName: string;
	viewCount: string;
	isReversed?: boolean;
}

function formatViewCount(n: number | string | undefined | null) {
	if (!n) return '0 VIEWS';
	const num = typeof n === 'string' ? Number(n) : n;
	if (isNaN(num)) return '0 VIEWS';
	if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}B VIEWS`;
	if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')}M VIEWS`;
	if (num >= 1_000) return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')}K VIEWS`;
	return `${num} VIEWS`;
}

export function VideoShowcase({ videoUrl, channelName, viewCount, isReversed = false }: VideoShowcaseProps) {
	const [liveViewCount, setLiveViewCount] = useState<string>(viewCount);

	useEffect(() => {
		// Call the server-side proxy API which uses the server env var YOUTUBE_API_KEY

		// Extract video id from common embed URLs
		const getVideoId = (url: string) => {
			try {
				const u = new URL(url);
				// Typical embed url: https://www.youtube.com/embed/VIDEOID
				if (u.pathname.startsWith('/embed/')) return u.pathname.split('/embed/')[1];
				// Short url youtu.be
				if (u.hostname === 'youtu.be') return u.pathname.slice(1);
				// watch?v=VIDEOID
				const vid = u.searchParams.get('v');
				if (vid) return vid;
				return null;
			} catch {
				return null;
			}
		};

		const id = getVideoId(videoUrl);
		if (!id) return;

		const controller = new AbortController();
		const fetchView = async () => {
			try {
				const res = await fetch(`/api/youtube/views?id=${id}`, { signal: controller.signal });
				if (!res.ok) return;
				const data = await res.json();
				const count = data?.viewCount;
				if (count) {
					const formatted = formatViewCount(Number(count));
					setLiveViewCount(formatted);
				}
			} catch {
				// silent fail (no API key, rate limit, or CORS)
			}
		};

		fetchView();
		const interval = setInterval(fetchView, 60 * 1000); // refresh every minute
		return () => {
			controller.abort();
			clearInterval(interval);
		};
	}, [videoUrl, viewCount]);

	const displayViewCount = liveViewCount || viewCount;
	const contentSection = (
		<div className="flex flex-col justify-center space-y-8 px-8 md:px-16">
			<h2 className="text-4xl md:text-6xl xl:text-7xl font-bold text-[#f3e8fd] leading-tight drop-shadow-[0_0_30px_rgba(217,97,159,0.5)]">{channelName}</h2>
			<p className="text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#d9619f] to-[#5bc5d7] text-transparent bg-clip-text drop-shadow-[0_4px_8px_rgba(91,197,215,0.3)] py-1">{displayViewCount}</p>
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
