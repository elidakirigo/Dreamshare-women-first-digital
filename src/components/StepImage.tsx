import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

type ImageProps = {
	ImageUrl: string
	vote: number
	title: string
	description: string
}

const StepImage = ({ ImageUrl, vote, title, description }: ImageProps) => {
	return (
		<>
			<AspectRatio ratio={16 / 9}>
				<Image src={ImageUrl} alt={`${title}-image`} className='min-h-80 rounded-md object-cover shadow-lg md:min-h-[400px]' fill={true} sizes='(max-width: 768px) 50%, 50%' />
			</AspectRatio>
			<div className='absolute left-0 top-0 flex h-full w-full flex-col items-start justify-end gap-4 rounded bg-zinc-900/60 p-6 text-white opacity-100 duration-500 md:gap-10'>
				<span className='rounded-3xl bg-[#661F20] px-2 py-1 text-sm font-normal'>vote: {vote} / 10</span>
				<h1 className='text-2xl font-bold'>{title}</h1>
				<p>{description}</p>
			</div>
		</>
	)
}

export default StepImage
