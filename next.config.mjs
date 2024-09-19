/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// unoptimized: true,
		// domains: ['image.tmdb.org', 'randomuser.me'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'randomuser.me',
				pathname: '**',
			},
		],
	},
}

export default nextConfig
