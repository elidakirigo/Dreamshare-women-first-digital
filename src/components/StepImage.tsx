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
				<Image src={ImageUrl} alt='' className='shadow-lg rounded-md  object-cover  min-h-80 md:min-h-[400px]' fill={true} sizes='(max-height: 400px) 100%, (min-height: 320px)' />
			</AspectRatio>
			<div className='absolute left-0 top-0  w-full h-full bg-zinc-900/20 opacity-100 duration-500 p-6 text-white flex flex-col items-start justify-end gap-4 md:gap-10 rounded'>
				<span className='bg-[#661F20] rounded-3xl px-2 py-1 font-normal text-sm'>vote: {vote} / 10</span>
				<h1 className='text-2xl font-bold'>{title}</h1>
				<p>{description}</p>
			</div>
		</>
	)
}

export default StepImage
