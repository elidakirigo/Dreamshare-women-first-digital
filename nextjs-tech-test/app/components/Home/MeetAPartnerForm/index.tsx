import AnchorSection from "../../Common/AnchorSection";

// Create a functional component named `Form`
const MeetAPartnerForm = () => {
  // Return the JSX structure for rendering the form
  return (
    <AnchorSection
      id="create-your-holiday-form"
      title="Create your holiday activity"
      ariaLabel="create-your-holiday-form-heading"
    >
      <div>
        <p className="font-roboto text-center text-base sm:text-xl mt-10">
          Hi! What are your holiday interests?
        </p>
      </div>
      <div>
        <form>
          <div className="w-full  ">
            <div className="flex relative flex-wrap gap-2 md:gap-5 justify-center items-center py-4 mt-5 w-full xs:w-[100%] sm-md:w-[80%] md:w-[80%] lg:w-[70%] mx-auto">
              <div className="w-full h-[48px] sm-md:w-[55%] md:w-[60%]">
                <input
                  className="appearance-none block font-roboto w-full h-full  text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Enter your interests"
                  aria-label="Enter your interests"
                  required
                />
              </div>
              <div className="w-full h-[48px] sm-md:w-[35%] md:w-[30%]">
                <button
                  className="w-full h-full bg-blazingRed text-white py-2 px-6 rounded-full text-base sm-md:text-sm font-bold hover:shadow-lg"
                  type="submit"
                >
                  Search partners
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AnchorSection>
  );
};
export default MeetAPartnerForm;
