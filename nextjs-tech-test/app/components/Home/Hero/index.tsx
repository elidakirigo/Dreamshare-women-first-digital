// Import the `Image` component from `next/image` for optimized image handling
import Image from "next/legacy/image";

const Hero = () => {
  // Return the JSX structure for rendering the hero section
  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="relative bg-gradient-to-r from-blazingRed  to-blazingYellow h-[80vh]">
        <div className="h-full">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              
              {/* Render the background image using the `Image` component with appropriate props */}

              <picture>
                <Image
                  src="/images/home/hero/partner-hero.webp"
                  alt="Find a partner"
                  role="img"
                  tabIndex={0}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={100}
                  priority // This tells Next.js to load the image eagerly
                />
                <source srcSet="/images/home/hero/view-point-hero.jpg" type="image/jpeg" />
              </picture>
            </div>
          </div>

          <div className="relative mx-auto w-[96%] lg:w-[70%] z-10 flex flex-col h-full justify-center items-center text-center">
            {/* Render the hero section title with appropriate styling */}
            <h1
              id="hero-heading"
              className="text-4xl lg:text-5xl text-white uppercase  font-bold leading-tight mb-4 font-montserrat"
            >
              Share Your <br/>
              Holiday Dream
            </h1>
            {/* Render the hero section description with appropriate styling */}
            <p className="text-xl lg:text-2xl text-lightAlmond mb-8 font-roboto ">
              And find the perfect partner to fulfill it.
            </p>
            {/* Render a button with a call to action */}
            <a
              href="#meet-a-partner"
              aria-label="Meet a partner for your best holiday"
              role="button"
              className="bg-blazingRed text-white py-2 px-6 rounded-full text-sm lg:text-base font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Find your holiday partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
