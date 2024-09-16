'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import StepImage from '@/components/StepImage'
import PartnersAvatars from '@/components/PartnersAvatars'
import Link from 'next/link'
import HolidayImages from '@/components/HolidayImage'

export default function Home() {
	return (
		<main className=''>
			<header className='relative h-full min-h-[30rem] w-full'>
				{/* <AspectRatio ratio={16 / 9}> */}
				<Image src='/assets/formatted/party-bg.webp' alt='' className='min-h-[30rem] object-cover' fill={true} />
				{/* </AspectRatio> */}
				{/* homepage description and call to action */}
				<div className='absolute left-0 top-0 h-full w-full bg-zinc-900/20 p-6 opacity-100 duration-500'>
					{/* login buttons */}
					<nav className='flex items-center justify-center'>
						<h1 className='hidden'>DREAMSHARE</h1>
						<Button variant='link' size='sm' className='text-white' onClick={() => signIn('google')}>
							Login
						</Button>
						<Button variant='outline' className='rounded-3xl bg-transparent text-white' onClick={() => signIn('google')} size='sm'>
							SignUp
						</Button>
					</nav>
					<div className='mt-16 text-center text-white'>
						<span className='font-bold'>DREAMSHARE</span>
						<h1 className='my-6 text-3xl font-bold'>
							SHARE YOUR <br />
							HOLIDAY DREAM
						</h1>
						<p className='mx-auto max-w-60'>And find the perfect partner to fullfill it</p>
						<Button variant='ghost' className='mt-6 rounded-3xl bg-[#FF4E50] text-white hover:border hover:border-white hover:bg-transparent hover:text-white' size='sm'>
							Find your holiday partner
						</Button>
					</div>
				</div>
			</header>
			<section className='px-3 py-12'>
				<h2 className='text-center text-2xl font-bold'>How Dreamshare works?</h2>
				<div className='mt-8 flex flex-col gap-4'>
					<StepImage ImageUrl='/assets/formatted/bruce-mars.webp' step='1' title='Sed leo enim, condimentum' description='Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.' />
					<StepImage ImageUrl='/assets/formatted/mesut.webp' step='2' title='Morbi velit risus' description='Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.' />
					<StepImage ImageUrl='/assets/formatted/mor-shani.webp' step='3' title='Sed leo enim, condimentum' description='Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.' />
				</div>
			</section>
			<section className='px-3 py-6'>
				<h2 className='text-center text-2xl font-bold'>Meet a partner for your best holiday</h2>
				<div className='mt-4 flex flex-col items-center justify-center p-4'>
					<PartnersAvatars name='Bradley Hunter' location='Based in Chicago. I love playing tennis and loud music.' svg='music' background='#FF4E50' />
					<PartnersAvatars name='Diana Wells' location='Living in Athens, Greece. I love black and white classics, chillout music and green tea.' svg='camera' background='#FFA710' />
					<PartnersAvatars name='Marie Bennett' location='Currently living in Colorado. Lover of art, languages and travelling.' svg='pen' background='#19D4CA' />
					<PartnersAvatars name='Christopher Pierce' location='Star Wars fanatic. I have a persistent enthusiasm to create new things.' svg='plane' background='#667DF3' />
				</div>
				<Button variant='outline' className='mx-auto mt-4 w-full rounded-3xl border-2 border-[#FF4E50] bg-transparent text-[#FF4E50]' size='sm'>
					See other partners
				</Button>
			</section>
			<section className='px-3 py-6'>
				<h2 className='text-center text-2xl font-bold'>Discover holiday activity ideas</h2>
				{/* <HolidayImages ImageUrl='' title='' /> */}
			</section>
			<section>
				<div>
					<h2 className='text-center text-2xl font-bold'>Crate your holiday activity</h2>
					<p>Hi! What are your holiday interests?</p>
					<div className=''>
						<input className='w-full bg-transparent px-4 py-1 text-xl text-[#1A1818] placeholder-[#1A1818] outline-none focus:outline-none lg:text-2xl' type='search' name='search' placeholder='I am looking for...' />
						<button type='submit' className='rounded-2xl'>
							Search partners
						</button>
					</div>
				</div>
			</section>
			<footer>
				<section>
					<h1>DREAMSHARE</h1>
				</section>
				<section>
					<h2>Company</h2>
					<ul>
						<li>
							<Link href={'/'}>About</Link>
						</li>
						<li>
							<Link href={'/'}>Contact</Link>
						</li>
						<li>
							<Link href={'/'}>Press</Link>
						</li>
						<li>
							<Link href={'/'}>Blog</Link>
						</li>
						<li>
							<Link href={'/'}>Terms and Privacy</Link>
						</li>
						<li>
							<Link href={'/'}>Help</Link>
						</li>
					</ul>
				</section>
				<section>
					<h2>Partners</h2>
				</section>
				<section>
					<span>DESIGNED BY</span>
					<Image src='/ARETO.svg' alt='' width={80} height={0} className='h-auto' />
				</section>
			</footer>
		</main>
	)
}
