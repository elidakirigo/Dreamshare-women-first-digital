import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

type PartnerProps = {
	name: string
	location: string
	svg:string
	background:string
}
const PartnersAvatars = ({ name, location,svg,background }: PartnerProps) => {
	return (
		<>
			<div className='relative mt-4'>
				<Avatar className='h-auto w-[9rem]'>
					<AvatarImage alt='' src='https://github.com/shadcn.png' />
					<AvatarFallback className='text-lg dark:bg-white dark:text-black' delayMs={1000}>
						{name
							?.split(' ')
							.map((n) => n[0])
							.join('')
							.toUpperCase()}
					</AvatarFallback>
				</Avatar>

				<Image src={`/assets/SVGs/${svg}.svg`} width={40} height={40} alt='' className={`z-1 absolute bottom-0 right-2 rounded-full border-4 border-white bg-[${background}] p-2 text-white`} />
			</div>
			<h3 className='my-4 font-black'>{name}</h3>
			<p className='text-center font-medium text-zinc-400'>{location}</p>
		</>
	)
}

export default PartnersAvatars
