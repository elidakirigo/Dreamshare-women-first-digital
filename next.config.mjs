/** @type {import('next').NextConfig} */

import withBundleAnalyzer from '@next/bundle-analyzer'

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

const NewBundle = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

export default NewBundle(nextConfig)
