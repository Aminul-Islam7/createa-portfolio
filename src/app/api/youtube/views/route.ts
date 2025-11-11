import { NextResponse } from 'next/server';

// Simple in-memory cache to reduce external API calls while server runs
const cache = new Map<string, { viewCount: number; updatedAt: number }>();
const CACHE_TTL = 60 * 1000; // 1 minute

export async function GET(req: Request) {
	const url = new URL(req.url);
	const id = url.searchParams.get('id');

	if (!id) return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });

	const cached = cache.get(id);
	const now = Date.now();
	if (cached && now - cached.updatedAt < CACHE_TTL) {
		return NextResponse.json({ viewCount: cached.viewCount, source: 'cache' });
	}

	const key = process.env.YOUTUBE_API_KEY;
	if (!key) return NextResponse.json({ error: 'Missing server API key' }, { status: 500 });

	try {
		const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${key}`);
		if (!res.ok) {
			return NextResponse.json({ error: 'Failed to fetch from YouTube', status: res.status }, { status: 502 });
		}
		const data = await res.json();
		const count = Number(data?.items?.[0]?.statistics?.viewCount ?? 0);
		cache.set(id, { viewCount: count, updatedAt: now });
		return NextResponse.json({ viewCount: count, source: 'api' });
	} catch (e) {
		return NextResponse.json({ error: 'Exception while fetching YouTube', detail: e?.toString() }, { status: 500 });
	}
}
