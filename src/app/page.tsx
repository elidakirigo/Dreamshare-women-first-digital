import ImageRatio from '@/components/ImageRatio'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className=''>
			<section className=''>
				<header className='flex items-center justify-center pt-5'>
					<div className='relative h-full w-full'>
						<AspectRatio ratio={16 / 9}>
							<Image src='/assets/formatted/party-bg.webp' alt='Image' className='object-cover' fill={true} />
						</AspectRatio>
						{/* homepage description and call to action */}
						<div className='absolute top-0'>
							{/* login buttons */}
						<Button
							variant='link'
							size='sm'
							// onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}
						>
							Login
						</Button>
						<Button
							variant='outline'
							className='rounded-3xl text-white'
							size='sm'
							// onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}
						>
							SignUp
						</Button>
					</div>
					</div>
					
				</header>
			</section>
		</div>
	)
}
