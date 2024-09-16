import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const PartnersAvatars = () => {
	return (
		<Avatar>
			<AvatarImage alt='' src='https://github.com/shadcn.png' />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	)
}

export default PartnersAvatars
