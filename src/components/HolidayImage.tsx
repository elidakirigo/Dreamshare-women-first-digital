import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

type ImageProps = {
	ImageUrl: string
	title: string
}

const HolidayImages = ({ ImageUrl, title }: ImageProps) => {
	return (
		<div className='relative'>
			<AspectRatio ratio={16 / 9}>
				<Image src={`/assets/formatted/${ImageUrl}.webp`} alt='' className='rounded-md object-cover shadow-lg' fill={true} />
			</AspectRatio>
			<div className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-10 rounded bg-zinc-900/30 p-6 text-center text-white opacity-100 duration-500'>
				<h4 className='text-2xl font-bold'>{title}</h4>
			</div>
		</div>
	)
}

export default HolidayImages
