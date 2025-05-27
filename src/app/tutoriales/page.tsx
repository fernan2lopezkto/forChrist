import Link from "next/link";

import venEspirituSanto from "@/assets/images/VenEspirituSanto.webp"

export default function Tutoriales() {
  return (
    <div>
      <div className="mx-5 pb-10">
        <h1 className="mb-15 mt-15 text-5xl font-bold text-center">
          Tutoriales
        </h1>
        {/* Card 1 */}
        <div className="card bg-base-100 image-full w-full sm:w-96 shadow-xl transform hover:scale-105 transition-transform duration-300">
          <figure>
            <img src= {venEspirituSanto.src} alt="Ven Espiritu Santo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ven Espiritu Santo</h2>
            <p>
              Este video es una pequeña demostración de cómo se podría tocar la canción Ven Espíritu Santo de Barak
            </p>
            <div className="card-actions justify-end mt-auto">
              <Link href="/tutoriales/venespiritusanto" className="btn btn-primary">
                Ven Espiritu Santo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
