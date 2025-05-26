import { homeTexts } from "@/utils/texts";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/forChristWP3.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div> {/* Added bg-opacity-60 for better readability if needed */}
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h2 className="mb-5 text-3xl font-bold">{homeTexts.hTitle}</h2>
            <h1 className="mb-5 text-5xl font-bold">{homeTexts.hSubtitle}</h1>
            {homeTexts.hparrafos.map((parrafo) => (
              <p key={parrafo} className="mb-5">
                {parrafo}
              </p>
            ))}
            <button className="btn btn-primary">{homeTexts.hBotton}</button>
          </div>
        </div>
      </div>
      {/* Musicians Section */}
      <div className="py-10 lg:py-16"> {/* Added padding top and bottom for the section */}
        <div className="container mx-auto px-4"> {/* Centering content and adding horizontal padding */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              {homeTexts.musicosTitle}
            </h2>
            {homeTexts.musicosSubtitle && ( /* Conditionally render subtitle if it exists */
              <h6 className="text-xl mt-2 text-gray-600">{homeTexts.musicosSubtitle}</h6>
            )}
            <div className="max-w-2xl mx-auto"> {/* Limit width of description */}
              <p className="mt-4 text-lg text-gray-700">
                {homeTexts.musicosDescription[0]}
                {homeTexts.musicosDescription[1]}
              </p>
            </div>
          </div>


          {/* Cards Container */}
          <div className="flex flex-wrap justify-center items-stretch gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="card bg-base-100 image-full w-full sm:w-96 shadow-xl transform hover:scale-105 transition-transform duration-300"> {/* Added hover effect & responsive width */}
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                {/* It's generally better for card titles to be more specific if they are under a section title */}
                {/* For now, keeping as per original, but consider changing this homeTexts.musicosTitle */}
                <h2 className="card-title">{homeTexts.musicosTitle}</h2>
                <p>
                  {homeTexts.musicosDescription[0]}
                  {homeTexts.musicosDescription[1]}
                </p>
                <div className="card-actions justify-end mt-auto"> {/* Added mt-auto to push button to bottom */}
                  <button className="btn btn-primary">Tutoriales</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}


            {/* Card 3 */}

          </div>
        </div>
      </div>
    </div>
  );
}
