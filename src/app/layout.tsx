import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { SessionProvider } from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/authoptions'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })
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
					{children}
					<GoogleAnalytics gaId={proccess.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
				</SessionProvider>

				{/* <!-- Google tag (gtag.js) --> */}
			</body>
		</html>
	)
}
