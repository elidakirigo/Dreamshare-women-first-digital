import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

type ImageProps = {
	ImageUrl: string
	step: string
	title: string
	description: string
}

const StepImage = ({ ImageUrl, step, title, description }: ImageProps) => {
	return (
		<div className='relative w-full min-h-80 md:min-h-[400px]'>
			<AspectRatio ratio={16 / 9}>
				<Image src={ImageUrl} alt='' className='shadow-lg rounded-md  object-cover  min-h-80 md:min-h-[400px]' fill={true} />
			</AspectRatio>
			<div className='absolute left-0 top-0  w-full h-full bg-zinc-900/20 opacity-100 duration-500 p-6 text-white flex flex-col items-start justify-end gap-10 md:gap-6 rounded'>
				<span className='bg-[#FF4E50] rounded-3xl px-4 py-1 font-light text-sm'>STEP {step}</span>
				<h1 className='text-2xl font-bold'>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default StepImage
