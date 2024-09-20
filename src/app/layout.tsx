import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { SessionProvider } from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/authoptions'

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

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

	return (
		<html lang='en'>
			<link rel='icon' href='/favicon.svg' sizes='any' />
			<body className={montserrat.className}>
				<SessionProvider session={session}>
					<GoogleTagManager gtmId='G-E6QC2G1KE3' />
					{children}
					<GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
				</SessionProvider>
			</body>
		</html>
	)
}
