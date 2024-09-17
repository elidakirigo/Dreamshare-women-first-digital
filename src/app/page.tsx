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
		<main className='flex flex-col items-center justify-center'>
			<header className='relative h-full min-h-[30rem] w-full'>
				{/* <AspectRatio ratio={16 / 9}> */}
				<Image src='/assets/formatted/party-bg.webp' alt='' className='min-h-[30rem] object-cover' fill={true} />
				{/* </AspectRatio> */}

				{/* homepage description and call to action */}
				<div className='md:flex md:flex-col md:items-center absolute left-0 top-0 h-full w-full bg-zinc-900/20 p-6 opacity-100 duration-500'>
					{/* login buttons */}
					<nav className='flex items-center justify-center md:justify-between max-w-[1100px] w-full'>
						<h1 className='hidden md:block text-white font-bold'>DREAMSHARE</h1>
						<div>
							<Button variant='link' size='sm' className='text-white' onClick={() => signIn('google')}>
								Login
							</Button>
							<Button variant='outline' className='rounded-3xl bg-transparent text-white' onClick={() => signIn('google')} size='sm'>
								SignUp
							</Button>
						</div>
					</nav>

					{/* page call to to action */}
					<div className='mt-16 text-center text-white'>
						<span className='font-bold md:hidden'>DREAMSHARE</span>
						<h1 className='my-6 text-3xl md:text-5xl font-bold'>
							SHARE YOUR <br />
							HOLIDAY DREAM
						</h1>
						<p className='mx-auto max-w-68 md:w-full text-xl font-extralight'>And find the perfect partner to fullfill it</p>
						<Button variant='ghost' className='mt-6 rounded-3xl bg-[#FF4E50] text-white hover:border hover:border-white hover:bg-transparent hover:text-white' size='sm'>
							Find your holiday partner
						</Button>
					</div>
				</div>
			</header>

			{/* How it works section */}
			<section className='px-3 py-12 w-full max-w-[1100px]'>
				<h2 className='text-center text-2xl font-bold'>How Dreamshare works?</h2>
				<div className='mt-8 flex flex-col md:flex-row justify-between  gap-4'>
					<StepImage ImageUrl='/assets/formatted/bruce-mars.webp' step='1' title='Sed leo enim, condimentum' description='Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.' />
					<StepImage ImageUrl='/assets/formatted/mesut.webp' step='2' title='Morbi velit risus' description='Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.' />
					<StepImage ImageUrl='/assets/formatted/mor-shani.webp' step='3' title='Sed leo enim, condimentum' description='Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.' />
				</div>
			</section>

			{/* holiday section */}
			<section className='px-3 py-6'>
				<h2 className='text-center text-2xl font-bold'>Meet a partner for your best holiday</h2>
				<div className='mt-4 grid flex-col items-center justify-center p-4'>
					<PartnersAvatars name='Bradley Hunter' location='Based in Chicago. I love playing tennis and loud music.' svg='music' background='red' />
					<PartnersAvatars name='Diana Wells' location='Living in Athens, Greece. I love black and white classics, chillout music and green tea.' svg='camera' background='lime' />
					<PartnersAvatars name='Marie Bennett' location='Currently living in Colorado. Lover of art, languages and travelling.' svg='pen' background='Fuchsia' />
					<PartnersAvatars name='Christopher Pierce' location='Star Wars fanatic. I have a persistent enthusiasm to create new things.' svg='plane' background='cyan' />
				</div>
				<Button variant='outline' className='mx-auto mt-4 w-full rounded-3xl border-2 border-[#FF4E50] bg-transparent text-[#FF4E50] hover:bg-[#FF4E50] hover:text-white' size='sm'>
					See other partners
				</Button>
			</section>

			{/* holiday ideas section */}
			<section className='px-3 py-6'>
				<h2 className='text-center text-2xl font-bold'>Discover holiday activity ideas</h2>
				<div className='mt-8 flex flex-col gap-4'>
					<HolidayImages ImageUrl='folco' title='Sports and Activities' />
					<HolidayImages ImageUrl='food-bowl' title='Wellness and Health' />
					<HolidayImages ImageUrl='mesut' title='Extreme Sports and Expeditions' />
					<HolidayImages ImageUrl='oppo' title='Games' />
					<HolidayImages ImageUrl='culture' title='Culture and Education' />
					<HolidayImages ImageUrl='mor-shani' title='Enjomet and Relaxation' />
					<HolidayImages ImageUrl='sunshine' title='Trevelling' />
				</div>
			</section>

			{/* Create holiday activities section */}
			<section className='px-3 py-6'>
				<h2 className='text-center text-2xl font-bold'>Crate your holiday activity</h2>
				<p className='my-6 font-light'>Hi! What are your holiday interests?</p>
				<div className=''>
					<input className=' border p-2 w-full  outline-none text-md font-normal rounded-md text-black  ' type='search' name='search' placeholder='Enter your insterests' />
					<Button variant='ghost' className='mt-6 rounded-3xl bg-[#FF4E50] w-full text-white hover:border hover:border-[#FF4E50] hover:bg-white hover:text-[#FF4E50]' size='sm'>
						Search partners
					</Button>
				</div>
			</section>

			{/* page footer */}
			<footer className='flex flex-col items-center w-full border-t-2 border-[#FF4E50] mt-4 p-4 '>
				<div className='flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between md:items-start md:pt-8 w-full max-w-[1100px]'>
					<section>
						<h1 className='text-[#FF4E50]'>DREAMSHARE</h1>
					</section>
					<section>
						<h2 className='font-bold text-center md:text-start'>Company</h2>
						<ul className='inline-flex flex-wrap justify-center items-center gap-3 mt-4 text-gray-800 font-extralight md:block'>
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
						<h2 className='font-bold'>Partners</h2>
					</section>
					<section>
						<span className='text-gray-500 font-bold text-xs text-center block'>DESIGNED BY</span>
						<Image src='/ARETO.svg' alt='' width={100} height={0} className='h-auto py-4' />
					</section>
				</div>
			</footer>
		</main>
	)
}
