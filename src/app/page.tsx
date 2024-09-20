'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import PartnersAvatars from '@/components/PartnersAvatars'
import HolidayImages from '@/components/HolidayImage'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import StepImage from '@/components/StepImage'
import { UsefetchMovies } from '@/Hooks/UseMovies'
import Loading from '@/components/Loading'

type MovieResults = {
	vote_average: number
	backdrop_path: string
	id: number
	overview: string
	original_title: string
	name: string
}
export default function Home() {
	const DynamicModal = dynamic(() => import('@/components/Modal'), { ssr: false })

	const GoogleTagManager = dynamic(() => import('@next/third-parties/google').then((data) => data.GoogleTagManager), { ssr: false })

	const GoogleAnalytics = dynamic(() => import('@next/third-parties/google').then((data) => data.GoogleAnalytics), { ssr: false })

	const { data: session } = useSession()

	const [count, setCount] = useState(3)

	const { results } = UsefetchMovies()

	const Trancate = (string: string, n: number) => (string?.length > n ? string.substr(0, n - 1) + '...' : string)

	const Counter = () => {
		if (count < 20) setCount(count + 3)
	}

	return (
		<main className='flex flex-col items-center justify-center'>
			<GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
			{/* <GoogleTagManager gtmId='G-E6QC2G1KE3' /> */}

			<header className='relative h-full min-h-[30rem] w-full'>
				<Image src='/assets/formatted/party-bg.webp' alt='party header image' className='min-h-[30rem] object-cover' fill={true} priority={true} sizes='(max-width: 768px) 50%, 50%' />

				{/* homepage description and call to action */}
				<div className='absolute left-0 top-0 h-full w-full bg-zinc-900/60 p-6 opacity-100 duration-500 md:flex md:flex-col md:items-center'>
					{/* login buttons */}
					<nav className='flex w-full max-w-[1100px] items-center justify-center md:justify-between'>
						<span className='hidden font-bold text-white md:block'>DREAMSHARE</span>
						<div>
							{session ? (
								<div className='flex items-center justify-center gap-4'>
									<h1 className='rounded-lg border border-white px-2 py-1 text-white'>{session.user?.name} </h1>
									<Avatar className='h-auto w-9 border-2 border-black shadow-md'>
										<AvatarImage src={session?.user?.image as string} />
										<AvatarFallback className='text-lg dark:bg-white dark:text-black' delayMs={1000}>
											{session.user
												?.name!.split(' ')
												.map((n) => n[0])
												.join('')
												.toUpperCase()}
										</AvatarFallback>
									</Avatar>
									<Button onClick={() => signOut()} variant='ghost' size='sm' className='text-white'>
										signOut
									</Button>
								</div>
							) : (
								<>
									<Button
										variant='link'
										size='sm'
										className='text-white'
										onClick={async () => {
											const SignIn = await import('next-auth/react').then((data) => data.signIn)

											SignIn('google')
										}}>
										Login
									</Button>
									<Button
										variant='outline'
										className='rounded-3xl bg-transparent text-white'
										onClick={async() => {
											const SignIn = await import('next-auth/react').then((data) => data.signIn)

											SignIn('google')
										}}
										size='sm'>
										SignUp
									</Button>
								</>
							)}
						</div>
					</nav>

					{/* page call to to action */}
					<div className='mt-16 text-center text-white'>
						<div className='h-6'>
							<span className='font-bold md:hidden'>DREAMSHARE</span>
						</div>
						<h1 className='my-6 text-3xl font-bold md:text-5xl'>
							SHARE YOUR <br />
							HOLIDAY DREAM
						</h1>
						<p className='max-w-68 mx-auto text-xl font-normal md:w-full'>And find the perfect partner to fullfill it</p>

						<DynamicModal>
							<Button variant='ghost' className='mt-6 rounded-3xl bg-[#661F20] text-white hover:border hover:border-white hover:bg-transparent hover:text-white' size='sm'>
								Find your holiday partner
							</Button>
						</DynamicModal>
					</div>
				</div>
			</header>

			{/* How it works section / most trending movies */}
			<section className='w-full max-w-[1100px] px-3 py-12 text-center'>
				<h2 className='text-center text-2xl font-bold'>Most Trending Movies</h2>

				{results.length > 0 ? (
					<div className='mt-8 grid grid-cols-1 gap-6 text-start md:grid-cols-3'>
						{results.slice(0, count).map(({ vote_average, backdrop_path, id, overview, original_title, name }: MovieResults) => {
							const shortDescription = Trancate(overview, 100)

							return (
								<div key={id} className='relative min-h-80 w-full md:min-h-[400px]'>
									<StepImage ImageUrl={`https://image.tmdb.org/t/p/original/${backdrop_path}`} vote={vote_average} title={original_title || name} description={shortDescription} />
								</div>
							)
						})}
					</div>
				) : (
					<Loading />
				)}

				<Button variant='outline' className='mx-auto mt-6 w-full rounded-3xl border-2 border-[#661F20] bg-transparent text-[#661F20] hover:bg-[#661F20] hover:text-white md:w-auto' onClick={Counter} size='sm'>
					Read More
				</Button>
			</section>

			{/* holiday section */}
			<section className='px-3 py-6 text-center'>
				<h2 className='text-center text-2xl font-bold'>Most Popular Celebs</h2>
				<div className='mx-auto mt-4 grid w-full grid-cols-1 items-start gap-6 p-4 md:max-w-[1100px] md:grid-cols-2 lg:grid-cols-4'>
					<PartnersAvatars name='Bradley Hunter' location='Based in Chicago. I love playing tennis and loud music.' svg='music' background='#661F20' />
					<PartnersAvatars name='Diana Wells' location='Living in Athens, Greece. I love black and white classics, chillout music and green tea.' svg='camera' background='lime' />
					<PartnersAvatars name='Marie Bennett' location='Currently living in Colorado. Lover of art, languages and travelling.' svg='pen' background='Fuchsia' />
					<PartnersAvatars name='Christopher Pierce' location='Star Wars fanatic. I have a persistent enthusiasm to create new things.' svg='plane' background='cyan' />
				</div>
				<DynamicModal>
					<Button variant='outline' className='mx-auto mt-4 w-full rounded-3xl border-2 border-[#661F20] bg-transparent text-[#661F20] hover:bg-[#661F20] hover:text-white md:w-auto' size='sm'>
						See other partners
					</Button>
				</DynamicModal>
			</section>

			{/* holiday ideas section */}
			<section className='w-full px-3 py-6 md:max-w-[1100px]'>
				<h2 className='text-center text-2xl font-bold'>Discover holiday activity ideas</h2>
				<div className='mx-auto mt-4 grid w-full grid-cols-1 items-start gap-6 p-4 md:grid-cols-3'>
					<HolidayImages ImageUrl='folco' title='Sports and Activities' span={1} />
					<HolidayImages ImageUrl='food-bowl' title='Wellness and Health' span={1} />
					<HolidayImages ImageUrl='reduced/mesut' title='Extreme Sports and Expeditions' span={1} />
					<HolidayImages ImageUrl='oppo' title='Games' span={1} />
					<HolidayImages ImageUrl='culture' title='Culture and Education' span={2} />
					<HolidayImages ImageUrl='reduced/mor-shani' title='Enjoment and Relaxation' span={2} />
					<HolidayImages ImageUrl='sunshine' title='Travelling' span={1} />
				</div>
			</section>

			{/* Create holiday activities section */}
			<section className='w-full px-3 py-6 md:max-w-[600px]'>
				<h2 className='text-center text-2xl font-bold'>Create your holiday activity</h2>
				<p className='my-6 text-center font-normal'>Hi! What are your holiday interests?</p>
				<div className='flex flex-col items-center justify-center md:flex-row'>
					<input className='text-md w-full rounded-md border border-[#661F20] p-2 font-normal text-black outline-none' type='search' name='search' placeholder='Enter your insterests' aria-label=' search' />

					<DynamicModal>
						<Button variant='ghost' className='m-6 w-full rounded-3xl bg-[#661F20] text-white hover:border hover:border-[#661F20] hover:bg-white hover:text-[#661F20] md:max-w-[200px]' size='sm'>
							Search partners
						</Button>
					</DynamicModal>
				</div>
			</section>

			{/* page footer */}
			<footer className='mt-4 flex w-full flex-col items-center border-t-2 border-[#661F20] p-4'>
				<div className='flex w-full max-w-[1100px] flex-col items-center justify-center gap-6 md:flex-row md:items-start md:justify-between md:pt-8'>
					<section>
						<h1 className='text-[#661F20]'>DREAMSHARE</h1>
					</section>
					<section>
						<h2 className='text-center font-bold md:text-start'>Company</h2>
						<ul className='mt-4 inline-flex flex-wrap items-center justify-center gap-3 font-normal text-gray-600 md:block'>
							<li>
								<Link href={'/About'}>About</Link>
							</li>
							<li>
								<Link href={'/Contact'}>Contact</Link>
							</li>
							<li>
								<Link href={'/Press'}>Press</Link>
							</li>
							<li>
								<Link href={'/Blog'}>Blog</Link>
							</li>
							<li>
								<Link href={'/Terms&Conditions'}>Terms and Privacy</Link>
							</li>
							<li>
								<Link href={'/Help'}>Help</Link>
							</li>
						</ul>
					</section>
					<section>
						<h2 className='font-bold'>Partners</h2>
					</section>
					<section>
						<span className='block text-center text-xs font-bold text-gray-600'>DESIGNED BY</span>
						<Image src='/ARETO.svg' alt='footer logo' width={100} height={0} className='h-auto py-4' style={{ height: 'auto' }} />
					</section>
				</div>
			</footer>
		</main>
	)
}
