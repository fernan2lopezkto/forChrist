import { homeTexts } from "@/utils/texts";
import Link from "next/link";

export default function MaterialCards() {
  return (
    <div>
      {/* Material Section */}
      <div id="material" className="py-10 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Centering content and adding horizontal padding */}
          <h2 className="mb-5 text-3xl font-bold text-center">Material</h2>
          {/* Cards Container */}
          <div className="flex flex-wrap justify-center items-stretch gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="card bg-base-100 image-full w-full sm:w-96 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <figure>
                <img
                  src='/forChristWP3.png'
                  alt={homeTexts.musicosTitle}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{homeTexts.musicosTitle}</h2>
                <p>
                  {homeTexts.musicosDescription[0]}
                  {homeTexts.musicosDescription[1]}
                </p>
                <div className="card-actions justify-end mt-auto">
                  <Link href="/tutoriales" className="btn btn-primary">
              Tutoriales
            </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 image-full w-full sm:w-96 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <figure>
                <img
                  src='/evangelizmo.png'
                  alt={homeTexts.evanTitle}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{homeTexts.evanTitle}</h2>
                <p>
                  {homeTexts.evanDescription[0]}
                  {homeTexts.evanDescription[1]}
                </p>
                <div className="card-actions justify-end mt-auto">
                  <Link href="/evangelismo" className="btn btn-primary">
              Evangelismo
            </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 image-full w-full sm:w-96 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <figure>
                <img
                  src="/crecimiento.png"
                  alt={homeTexts.creceTitle}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{homeTexts.creceTitle}</h2>
                <p>
                  {homeTexts.creceDescription[0]}
                  {homeTexts.creceDescription[1]}
                </p>
                <div className="card-actions justify-end mt-auto">
                  <Link href="/edificante" className="btn btn-primary">
              Crecimiento
            </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
