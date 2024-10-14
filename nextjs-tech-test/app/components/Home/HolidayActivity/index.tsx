// Import the `ActivityCard` and `AnchorSection` components from their respective paths
import ActivityCard from "./ActivityCard";
//Import AnchorSection components from their respective paths
import AnchorSection from "../../Common/AnchorSection";

interface Activity {
  width: 'sm' | 'lg';
  image: string;
  fallBackImage: string;
  title: string;
  backgroundPosition: string;
}
// Create a functional component named `HolidayActivity`
const HolidayActivity = () => {
  const activities: Activity[] = [
    { width: 'sm', image: '/images/home/activities/sports.webp', fallBackImage: '/images/home/activities/sports.jpg', title: 'Sports and Activities', backgroundPosition: 'bottom' },
    { width: 'sm', image: '/images/home/activities/wellness.webp', fallBackImage: '/images/home/activities/wellness.jpg', title: 'Wellness and Health', backgroundPosition: 'center' },
    { width: 'sm', image: '/images/home/activities/river-rafting.webp', fallBackImage: '/images/home/activities/river-rafting.jpg', title: 'Extreme Sports and Expeditions', backgroundPosition: 'top left' },
    { width: 'sm', image: '/images/home/activities/safari.webp', fallBackImage: '/images/home/activities/safari.jpg', title: 'Safari', backgroundPosition: 'center' },
    { width: 'lg', image: '/images/home/activities/culture.webp', fallBackImage: '/images/home/activities/culture.jpg', title: 'Culture and Education', backgroundPosition: 'center' },
    { width: 'lg', image: '/images/home/activities/enjoy.webp', fallBackImage: '/images/home/activities/enjoy.jpg', title: 'Enjoyment and Relaxation', backgroundPosition: 'center' },
    { width: 'sm', image: '/images/home/activities/travelling.webp', fallBackImage: '/images/home/activities/travelling.jpg', title: 'Travelling', backgroundPosition: 'top' }
  ]
  return (
    // Return the JSX structure for rendering the holiday activity section

    <AnchorSection
      id="discover-holiday-activity-ideas"
      title="Discover holiday activity ideas"
      ariaLabel="activities-heading"
    >
      <div className="flex justify-between mt-10 flex-wrap">
        {/* Render multiple `ActivityCard` components with different images and titles */}

        {
          activities.map((activity,index) => (

            <ActivityCard
              key={index}
              width={activity.width}
              image={activity.image}
              fallBackImage={activity.fallBackImage}
              title={activity.title}
              backgroundPosition={activity.backgroundPosition}
            />
          ))}

      </div>
    </AnchorSection>
  );
};
export default HolidayActivity;
