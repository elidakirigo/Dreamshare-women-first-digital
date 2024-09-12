import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
	return (
		<div className=''>
			<section className=''>
				<header className='flex items-center justify-center pt-5'>
				

					<Button
						variant='ghost'
						size='sm'
						// onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}
					>
						Login
					</Button>
					<Button
						variant='outline'
						size='sm'
						// onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}
					>
						SignUp
					</Button>
				</header>
			</section>
		</div>
	)
}
