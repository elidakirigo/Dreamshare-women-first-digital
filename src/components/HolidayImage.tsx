import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

type ImageProps = {
	ImageUrl: string
	title: string
}

const HolidayImages = ({ ImageUrl, title }: ImageProps) => {
	return (
		<div className='relative min-h-80'>
			<AspectRatio ratio={16 / 9}>
				<Image src={ImageUrl} alt='' className='min-h-80 rounded-md object-cover shadow-lg' fill={true} />
			</AspectRatio>
			<div className='absolute left-0 top-0 flex h-full w-full flex-col items-start justify-end gap-10 rounded bg-zinc-900/20 p-6 text-white opacity-100 duration-500'>
				<span className='rounded-3xl bg-[#FF4E50] px-4 py-1 font-light'>STEP {step}</span>
				<h1 className='text-3xl font-bold'>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default HolidayImages
