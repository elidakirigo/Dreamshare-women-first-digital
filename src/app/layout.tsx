import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { SessionProvider } from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/authoptions'
import { Partytown } from '@builder.io/partytown/react'
import Head from 'next/head'

const montserrat = Montserrat({ weight: ['100', '500'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Dreamshare: Share Your Holiday Dream And Find A Partner', // Title of the page
	description: 'Find the perfect partner for your holiday dream with Dreamshare. Share your travel aspirations and connect with like-minded adventurers.',
	keywords: 'Share your ultimate holiday vision, find the perfect partner, bring it to life, explore opportunities, transform your dream vacation, reality, ideal companion, travel partner, vacation planning, adventure, explore, like-minded people, community, social network, Ultimate holiday vision, Perfect travel partner, Dream vacation companion, Transform vacation dreams, Ideal holiday companion, Share holiday vision, Find vacation partner, Dream trip transformation, Ideal vacation match, Explore holiday opportunities, Ultimate travel experience, Vacation planning partner, Perfect holiday match, Dream vacation reality, Find your travel companion',
	icons: {
		apple: {
			url: '/apple-touch-icon.png',
			sizes: '180x180',
		},
		icon: [
			{
				url: '/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
			},
			{
				url: '/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
		],
	},
	manifest: '/site.webmanifest',
	alternates: {
		canonical: 'https://nextjs-tech.vercel.app', // Define the canonical URL here
	},
	openGraph: {
		title: 'Dreamshare',
		description: 'Share your ultimate holiday vision and find the perfect partner to bring it to life. Explore opportunities to transform your dream vacation into reality with the ideal companion.',
		siteName: 'Dreamshare',
		url: 'https://nextjs-tech.vercel.app',
		images: [
			{
				url: 'images/opengraph/open-graph.jpg', // Assuming the image is in the public folder
				width: 1200,
				height: 630,
				alt: 'Dreamshare Og Image',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Dreamshare',
		description: 'Share your ultimate holiday vision and find the perfect partner to bring it to life. Explore opportunities to transform your dream vacation into reality with the ideal companion.',
		images: 'images/opengraph/open-graph.jpg',
	},
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await getServerSession(authOptions)

	// const GoogleTagManager = dynamic(() => import('@next/third-parties/google').then((data) => data.GoogleTagManager),{ssr:false})

	// const GoogleAnalytics = dynamic(() => import('@next/third-parties/google').then((data) => data.GoogleAnalytics), { ssr: false })

	return (
		<html lang='en'>
			<Head>
				<link
					rel='icon'
					href='/favicon.svg'
					sizes='any'
				/>
				<Partytown
					debug={true}
					forward={['dataLayer.push']}
				/>
				{/* <link
					rel='canonical'
					href='/'
				/> */}
				<script
					type='text/partytown'
					async
					dangerouslySetInnerHTML={{
						__html: '/* Inlined Third-Party Script * /',
					}}
				/>
			</Head>
			<body className={montserrat.className}>
				<SessionProvider session={session}>{children}</SessionProvider>
			</body>
		</html>
	)
}
