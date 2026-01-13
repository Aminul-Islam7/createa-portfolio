'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { VideoPlayer } from './VideoPlayer';

interface VideoShowcaseProps {
	videoUrl: string;
	channelName: string;
	viewCount: string;
	/** Optional note displayed below viewCount in smaller, less prominent text */
	note?: string;
	/** Optional thumbnail URL for videos that can't be embedded. If provided, shows image instead of iframe */
	thumbnailUrl?: string;
	/** Required if thumbnailUrl is set - URL to open when clicking the thumbnail */
	youtubeUrl?: string;
	isReversed?: boolean;
}

/**
 * Formats a number into a human-readable view count (e.g., 1.5M VIEWS)
 */
function formatViewCount(value: number | string | undefined | null): string {
	if (!value) return '0 VIEWS';

	const num = typeof value === 'string' ? Number(value) : value;
	if (isNaN(num)) return '0 VIEWS';

	if (num >= 1_000_000_000) {
		return `${(num / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}B VIEWS`;
	}
	if (num >= 1_000_000) {
		return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')}M VIEWS`;
	}
	if (num >= 1_000) {
		return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')}K VIEWS`;
	}

	return `${num} VIEWS`;
}

/**
 * Extracts YouTube video ID from various URL formats
 */
function extractYouTubeId(url: string): string | null {
	try {
		const parsed = new URL(url);

		if (parsed.pathname.startsWith('/embed/')) {
			return parsed.pathname.split('/embed/')[1];
		}
		if (parsed.hostname === 'youtu.be') {
			return parsed.pathname.slice(1);
		}
		return parsed.searchParams.get('v');
	} catch {
		return null;
	}
}

export function VideoShowcase({ 
	videoUrl, 
	channelName, 
	viewCount, 
	note, 
	thumbnailUrl,
	youtubeUrl,
	isReversed = false 
}: VideoShowcaseProps) {
	const [liveViewCount, setLiveViewCount] = useState<string>(viewCount);
	const hasFetchedRef = useRef(false);

	const fetchViewCount = useCallback(async (videoId: string, signal: AbortSignal) => {
		try {
			const res = await fetch(`/api/youtube/views?id=${videoId}`, { signal });
			if (!res.ok) return;

			const data = await res.json();
			if (data?.viewCount) {
				setLiveViewCount(formatViewCount(Number(data.viewCount)));
			}
		} catch {
			// Silent fail for API errors
		}
	}, []);

	useEffect(() => {
		const videoId = extractYouTubeId(videoUrl);
		if (!videoId) return;

		// Only fetch once on mount, don't set up interval to avoid constant requests
		if (hasFetchedRef.current) return;
		hasFetchedRef.current = true;

		const controller = new AbortController();
		fetchViewCount(videoId, controller.signal);

		return () => {
			controller.abort();
		};
	}, [videoUrl, fetchViewCount]);

	const displayViewCount = liveViewCount || viewCount;

	// If thumbnail is provided, show clickable thumbnail instead of VideoPlayer
	const renderVideoSection = () => {
		if (thumbnailUrl && youtubeUrl) {
			return (
				<a
					href={youtubeUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="group relative block rounded-2xl overflow-hidden shadow-lg bg-black/50"
					style={{ aspectRatio: '16/9' }}
				>
					<Image
						src={thumbnailUrl}
						alt={`${channelName} - Watch on YouTube`}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					{/* Play button overlay */}
					<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
						<Image
							src="/youtube-icon.png"
							alt="Play"
							width={80}
							height={80}
							className="w-16 sm:w-20 h-auto drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
						/>
					</div>
					{/* "Watch on YouTube" label */}
					<div className="absolute bottom-3 right-3 bg-black/70 px-3 py-1.5 rounded-md text-xs text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						Watch on YouTube
					</div>
				</a>
			);
		}
		return <VideoPlayer src={videoUrl} title={channelName} />;
	};

	return (
		<div className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
				{/* Video Section */}
				<div className={`w-full ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
					{renderVideoSection()}
				</div>

				{/* Content Section */}
				<div
					className={`flex flex-col justify-center space-y-3 sm:space-y-5 md:space-y-6 px-4 sm:px-6 md:px-8 lg:px-12 ${
						isReversed ? 'md:order-1' : 'md:order-2'
					}`}
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#f3e8fd] leading-tight drop-shadow-[0_0_30px_rgba(217,97,159,0.4)] text-center md:text-left">
						{channelName}
					</h2>

					<div className="text-center md:text-left">
						<p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text py-1">
							{displayViewCount}
						</p>
						{note && (
							<p className="text-md sm:text-lg text-white/50 mt-1">
								({note})
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
