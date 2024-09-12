import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<div>
			<div className=''>
				<Button
					variant='outline'
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
			</div>
		</div>
	)
}
