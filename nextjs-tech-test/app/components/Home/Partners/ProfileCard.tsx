// Import the `Image` component from `next/image` for optimized image handling
import Image from "next/legacy/image";

// Define the type of props accepted by the `ProfileCard` component
type ProfileCardProps = {
  imageUrl: string; // URL of the profile image
  name: string; // Name of the person
  knownFor: string; // Brief description of what the person is known for
};

// Create the functional component named `ProfileCard`
const ProfileCard = ({ imageUrl, name, knownFor }: ProfileCardProps) => (
  <div
    className="w-full sm:w-[50%] lg:w-[23.5%] 
    relative py-1 transition-all duration-300 
    ease-in-out hover:rounded-md hover:border-1
  hover:border-gray-300 hover:shadow-lg 
    focus:outline-none focus:ring-2 focus:ring-blazingRed focus:rounded-md "
    tabIndex={0}
    role="button"
    aria-label={`View Profile details: ${name}`}
  >
    {/* Profile image container */}
    <div className="relative flex justify-center w-32 h-32 mx-auto ">
      <Image
        src={`https://image.tmdb.org/t/p/w200${imageUrl}`}
        alt={name}
        objectFit="cover"
        objectPosition="center"
        quality={100}
        width={128}
        height={128}
        className="rounded-full object-cover"
      />

      {/* Overlay image with absolute positioning (optional) */}
      <div className="absolute -bottom-5 right-0 z-10">
        <div className="bg-blazingRed border-4 border-white h-14 w-14 overflow-hidden rounded-full flex justify-center items-center">
          <Image
            src="/images/home/partners/movie-svgrepo-com.svg"
            alt={name}
            objectPosition="center"
            quality={100}
            width={25}
            height={25}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
    {/* Card body with name and known for description */}
    <div className="card-body my-10 text-center">
      <div>
        <h3 className="font-montserrat font-bold mt-3 text-gray-700 text-center text-xl line-clamp-1">
          {name}
        </h3>
      </div>
      <div>
        <p className="font-roboto text-sm mt-3 text-center px-2 text-gray-700 line-clamp-3">
          {knownFor}
        </p>
      </div>
    </div>
  </div>
);
export default ProfileCard;
