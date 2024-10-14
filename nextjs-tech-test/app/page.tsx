// Import necessary components from their respective paths
import Header from "./components/Layout/Header";
import Hero from "./components/Home/Hero";
import HowDreamshareWorks from "./components/Home/HowDreamShareWorks";
import Partners from "./components/Home/Partners";
import HolidayActivity from "./components/Home/HolidayActivity";
import MeetAPartnerForm from "./components/Home/MeetAPartnerForm";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <div>
      {/* 
        Page Layout:

        - <Header />: Renders the header of the page, typically containing navigation links and branding.
        
        - <main>: The main content section of the page.
          - <Hero />: Displays the hero section, likely containing a prominent image or message.
          - <HowDreamshareWorks/>: Component that explains how the Dreamshare service works.
          - <Partners/>: Displays information about partners related to the holiday experience. 
          - <HolidayActivity/>: Shows different ideas for holiday activities. 
          - <MeetAPartnerForm/>: A form component allowing users to create or submit their holiday activities. 

        - <Footer />: Renders the footer of the page, typically containing contact information, links, and other site-wide details.
      */}
      <Header />
      <main>
        <Hero />
        <HowDreamshareWorks />
        <Partners />
        <HolidayActivity />
        <MeetAPartnerForm />
      </main>
      <Footer />
    </div>
  );
}
