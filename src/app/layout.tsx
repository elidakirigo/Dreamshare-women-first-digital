import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ weight: ['100', '500'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Dreamshare-women-first-digital',
	description: 'Dreamshare-women-first-digital',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<link rel='icon' href='/favicon.svg' sizes='any' />
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
