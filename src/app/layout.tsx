import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { SessionProvider } from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/authoptions'

import dynamic from 'next/dynamic'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const montserrat = Montserrat({ weight: ['100', '500'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Dreamshare-women-first-digital',
	description: 'Dreamshare-women-first-digital',
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
			<link rel='icon' href='/favicon.svg' sizes='any' />
			<body className={montserrat.className}>
				<SessionProvider session={session}>
					{children}
				</SessionProvider>
			</body>
		</html>
	)
}
