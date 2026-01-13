'use client';

import { useState, useMemo, useRef } from 'react';

interface VideoPlayerProps {
	src: string;
	title: string;
	width?: string;
	height?: string;
	aspectRatio?: string;
}

/**
 * Normalizes video URLs to proper embed format for YouTube and Google Drive
 */
function normalizeVideoUrl(input: string): string {
	if (!input) return input;

	try {
		const url = new URL(input);
		const hostname = url.hostname.toLowerCase();

		// YouTube short link: youtu.be/ID
		if (hostname.includes('youtu.be')) {
			const id = url.pathname.slice(1);
			return `https://www.youtube.com/embed/${id}`;
		}

		// YouTube watch link: youtube.com/watch?v=ID
		if (hostname.includes('youtube.com')) {
			if (url.pathname.includes('/embed/')) return input;
			const id = url.searchParams.get('v');
			if (id) return `https://www.youtube.com/embed/${id}`;
		}

		// Google Drive share link: drive.google.com/file/d/ID/view
		if (hostname.includes('drive.google.com')) {
			if (url.pathname.includes('/preview')) return input;

			const fileMatch = input.match(/(?:file\/d\/)([a-zA-Z0-9_-]+)/);
			if (fileMatch?.[1]) {
				return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
			}

			const idParam = url.searchParams.get('id');
			if (idParam) {
				return `https://drive.google.com/file/d/${idParam}/preview`;
			}
		}

		return input;
	} catch {
		// Not a valid URL, return as-is
		return input;
	}
}

/**
 * Check if a URL is a Google Drive embed
 */
function isGoogleDrive(url: string): boolean {
	return url.includes('drive.google.com');
}

export function VideoPlayer({ src, title, width = '100%', height = 'auto', aspectRatio = '16/9' }: VideoPlayerProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);
	const iframeRef = useRef<HTMLIFrameElement>(null);

	const embedSrc = useMemo(() => normalizeVideoUrl(src), [src]);
	const isDrive = useMemo(() => isGoogleDrive(embedSrc), [embedSrc]);

	// Determine appropriate allow policy based on source
	// Google Drive embeds cause issues with picture-in-picture permissions
	const allowPolicy = isDrive
		? 'autoplay; encrypted-media'
		: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';

	return (
		<div
			className="relative rounded-2xl overflow-hidden shadow-lg bg-black/50"
			style={{ width, height, aspectRatio }}
		>
			{/* Loading skeleton */}
			{isLoading && !hasError && (
				<div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] animate-pulse flex items-center justify-center z-10">
					<div className="w-12 h-12 border-4 border-[#5bc5d7]/30 border-t-[#5bc5d7] rounded-full animate-spin" />
				</div>
			)}

			{/* Error state */}
			{hasError && (
				<div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center z-10">
					<div className="text-center p-4">
						<p className="text-white/60 text-sm">Video unavailable</p>
					</div>
				</div>
			)}

			<iframe
				ref={iframeRef}
				src={embedSrc}
				title={title}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				allow={allowPolicy}
				allowFullScreen
				sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
				className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isLoading || hasError ? 'opacity-0' : 'opacity-100'}`}
				onLoad={() => setIsLoading(false)}
				onError={() => {
					setIsLoading(false);
					setHasError(true);
				}}
			/>
		</div>
	);
}
