import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type ImageProps = {
  ImageUrl: string;
  title: string;
  span: number;
};

const HolidayImages = ({ ImageUrl, title, span }: ImageProps) => {
  return (
		// span can be col-span-1 or col-span-2
		<div className={`col-span-1 ${span == 2 ? 'md:col-span-2' : 'md:col-span-1'} relative rounded-lg items-center md:h-80 overflow-hidden`}>
			<AspectRatio ratio={16 / 9}>
				<Image src={`/assets/formatted/${ImageUrl}.webp`} alt='' className='rounded-md object-cover shadow-lg md:min-h-80' fill={true} sizes='(max-width: 768px) 50%, 80%' />
			</AspectRatio>
			<div className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-10 rounded bg-zinc-900/30 p-6 text-center text-white opacity-100 duration-500'>
				<h3 className='text-2xl font-bold'>{title}</h3>
			</div>
		</div>
  )
};

export default HolidayImages;
