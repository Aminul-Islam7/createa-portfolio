'use client';

import { useState, useEffect, useRef } from 'react';

interface VideoPlayerProps {
	src: string;
	title: string;
	width?: string;
	height?: string;
	aspectRatio?: string;
}

export function VideoPlayer({ src, title, width = '100%', height = 'auto', aspectRatio = '16/9' }: VideoPlayerProps) {
	// Normalize common video URL forms so embedding works for YouTube and Google Drive
	const normalizeSrc = (input: string) => {
		if (!input) return input;
		try {
			const u = new URL(input);
			const hostname = u.hostname;
			// YouTube short link: youtu.be/ID
			if (hostname.includes('youtu.be')) {
				const id = u.pathname.slice(1);
				return `https://www.youtube.com/embed/${id}`;
			}
			// YouTube watch link: youtube.com/watch?v=ID
			if (hostname.includes('youtube.com')) {
				// If it already includes /embed/, return as-is
				if (u.pathname.includes('/embed/')) return input;
				const id = u.searchParams.get('v');
				if (id) return `https://www.youtube.com/embed/${id}`;
			}
			// Google Drive share link: drive.google.com/file/d/ID/view?usp=sharing
			if (hostname.includes('drive.google.com')) {
				// If already preview, return as-is
				if (u.pathname.includes('/preview') || (u.pathname.includes('/file/d/') && u.pathname.includes('/preview'))) return input;
				// Formats commonly used:
				// - https://drive.google.com/file/d/<ID>/view?usp=sharing
				// - https://drive.google.com/open?id=<ID>
				// - https://drive.google.com/uc?id=<ID>&export=download
				const match = input.match(/(?:file\/d\/)([a-zA-Z0-9_-]+)/);
				if (match && match[1]) {
					return `https://drive.google.com/file/d/${match[1]}/preview`;
				}
				const openId = u.searchParams.get('id');
				if (openId) return `https://drive.google.com/file/d/${openId}/preview`;
				const ucId = u.searchParams.get('id');
				if (ucId) return `https://drive.google.com/file/d/${ucId}/preview`;
			}
			return input;
		} catch {
			// not a URL (maybe already a path), return as-is
			return input;
		}
	};

	const [embedSrc, setEmbedSrc] = useState<string>(() => normalizeSrc(src));
	useEffect(() => {
		setEmbedSrc(normalizeSrc(src));
	}, [src]);

	const iframeRef = useRef<HTMLIFrameElement | null>(null);

	return (
		<div className="relative rounded-2xl overflow-hidden shadow-[0_0_36px_rgba(0,0,0,0.1)]" style={{ width, height, aspectRatio }}>
			<iframe ref={iframeRef} src={embedSrc} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-0 left-0 w-full h-full" />
		</div>
	);
}

// Handlers are inline within the component to access local state
