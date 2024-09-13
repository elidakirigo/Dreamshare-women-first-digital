import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button';
import Image from 'next/image'

export default function Home() {
	return (
		<div className=''>
			<section className=''>
				<header className='relative h-full w-full'>
					<AspectRatio ratio={16 / 9}>
						<Image src='/assets/formatted/party-bg.webp' alt='Image' className='object-cover ' fill={true} />
					</AspectRatio>
					{/* homepage description and call to action */}
					<div className='flex items-center justify-center pt-5 absolute top-0 w-full'>
						{/* login buttons */}
						<Button
							variant='link'
							size='sm'
							className='text-white'
							// onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}
						>
							Login
						</Button>
						<Button
							variant='outline'
							className='rounded-3xl text-white bg-transparent'
							size='sm'
							// onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}
						>
							SignUp
						</Button>
					</div>
				</header>
			</section>
		</div>
	)
}
