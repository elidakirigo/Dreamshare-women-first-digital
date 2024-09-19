import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UseProfile } from "@/Hooks/UseProfile";
import Image from "next/image";

type PartnerProps = {
  name: string;
  location: string;
  svg?: string;
  background: string;
};
const PartnersAvatars = ({ name, location, svg, background }: PartnerProps) => {
  const { results } = UseProfile();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mt-4">
        <Avatar className="h-[9rem] w-[9rem] rounded-full shadow-md">
          {results.map(({ picture }: { picture: { large: string } }, i) => (
            <AvatarImage key={i} alt="user avatars" src={picture.large || '/assets/formatted/user-profile.webp'} />
          ))}

          <AvatarFallback
            className="text-lg dark:bg-white dark:text-black" 
          >
            {name
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>

        {svg && (
          <Image
            src={`/assets/SVGs/${svg}.svg`}
            width={40}
            height={40}
            alt=""
            className={`z-1 absolute bottom-0 right-2 rounded-full border-4 border-white bg-fuchsia-500 p-2 shadow-md`}
          />
        )}
      </div>
      <h3 className="my-4 font-black">{name}</h3>
      <p className="text-center font-medium text-zinc-400">{location}</p>
    </div>
  );
};

export default PartnersAvatars;
