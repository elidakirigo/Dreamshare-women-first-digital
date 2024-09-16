'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import StepImage from '@/components/StepImage'
import PartnersAvatars from '@/components/PartnersAvatars'
import Link from 'next/link'

export default function Home() {
	return (
		<main className=''>
			<header className='relative h-full w-full'>
				<AspectRatio ratio={16 / 9}>
					<Image src='/assets/formatted/party-bg.webp' alt='Image' className='bg-gradient-to-r from-cyan-500 to-blue-500 object-cover' fill={true} />
				</AspectRatio>
				{/* homepage description and call to action */}
				<div className='absolute left-0 top-0 h-full w-full bg-zinc-900/20 opacity-100 duration-500'>
					{/* login buttons */}
					<nav className='flex'>
						<h1 className='hidden'>DREAMSHARE</h1>
						<Button variant='link' size='sm' className='text-white' onClick={() => signIn('google')}>
							Login
						</Button>
						<Button variant='outline' className='rounded-3xl bg-transparent text-white' onClick={() => signIn('google')} size='sm'>
							SignUp
						</Button>
					</nav>
					<div>
						<h1>SHARE YOUR HOLIDAY DREAM</h1>
						<h2>And find the perfect partner to fullfill it</h2>
						<Button variant='outline' className='rounded-3xl bg-transparent text-white' onClick={() => signIn('google')} size='sm'>
							Find your holiday partner
						</Button>
					</div>
				</div>
			</header>
			<section>
				<h2>How Dreamshare works?</h2>
				<StepImage ImageUrl='' />
				<StepImage ImageUrl='' />
				<StepImage ImageUrl='' />
			</section>
			<section>
				<h2>Meet a partner for your best holiday</h2>
				<PartnersAvatars />
				<PartnersAvatars />
				<PartnersAvatars />
				<Button variant='outline' className='rounded-3xl bg-transparent text-white' onClick={() => signIn('google')} size='sm'>
					See other partners
				</Button>
			</section>
			<section>
				<h2>Discover holiday activity ideas</h2>
				<StepImage ImageUrl='' />
				<StepImage ImageUrl='' />
				<StepImage ImageUrl='' />
				<StepImage ImageUrl='' />
				<StepImage ImageUrl='' />
				<StepImage ImageUrl='' />
				<StepImage ImageUrl='' />
			</section>
			<section>
				<div>
					<h3>Crate your holiday activity</h3>
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
					<Image src="/ARETO.svg" alt='' width={80} height={0} className='h-auto'/>
				</section>
			</footer>
		</main>
	)
}
