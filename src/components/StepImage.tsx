import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

type ImageProps = {
	ImageUrl: string
}

const StepImage = ({ ImageUrl }: ImageProps) => {
	return (
		<AspectRatio ratio={16 / 9}>
			<Image src={ImageUrl} alt='Image' className='rounded-md object-cover' />
		</AspectRatio>
	)
}

export default StepImage
