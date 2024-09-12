import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

type ImageProps = {
	fill?: boolean
	ImageUrl: string
}

const ImageRatio = ({ fill, ImageUrl }: ImageProps) => {
	return (
		<div className='w-[450px]'>
			<AspectRatio ratio={16 / 9}>
				<Image src={ImageUrl} alt='Image' className='rounded-md object-cover'  fill={fill} />
			</AspectRatio>
		</div>
	)
}

export default ImageRatio
