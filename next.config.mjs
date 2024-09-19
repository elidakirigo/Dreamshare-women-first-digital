/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// unoptimized: true,
		// domains: ['image.tmdb.org', 'randomuser.me'],
		remotePatterns: ['image.tmdb.org', 'randomuser.me'],
	},
}

export default nextConfig;
