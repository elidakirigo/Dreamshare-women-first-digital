import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import PartnersAvatars from './PartnersAvatars'
import { Button } from './ui/button'

const Modal = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>More Partner Suggestions</DialogTitle>
					<DialogDescription>
						<div className='grid grid-cols-3 gap-8 '>
							{new Array(3).fill([]).map((n: any, i: number) => (
								<PartnersAvatars key={i} name='Bradley Hunter' location='Based in Chicago. I love playing tennis and loud music.'  background='#FF4E50' />
							))}
						</div>
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className='sm:justify-start'>
					<DialogClose asChild>
						<Button type='button' variant='secondary'>
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default Modal
