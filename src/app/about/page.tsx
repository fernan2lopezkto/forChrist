import { navigationItems, proyectNames } from "@/utils/texts";

export default function About() {
  return (
    <div>
      <div className="mx-5 pb-10">
        <h1 className="mb-15 mt-15 text-5xl font-bold text-center">
          Acerca nuestro?
        </h1>
        <h6>Quienes somos?</h6>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <p className="mt-5 ">
              Benvenidos a For Christ, en esta página encontraras tutoriales
              cristianos para distintos instrumentos, al igual que material para
              que tus ensayos y aprendizaje sea de la mejor manera posible.
              Estos tutoriales en su mayoría están orientados a músicos que
              recién comienzan o que lo quieren hacer, la idea es brindarles
              material y tutoriales explicados de una forma sencilla y fácil,
              así tener un punto de apoyo en el cual arrancar, pues hay muchas
              canciones que son de tremenda bendición, ministran muchísimo de la
              presencia de Dios, y a su vez se pueden interpretar en el
              instrumento de una forma muy fácil y sencilla.
            </p>

            <p className="mt-5">
              Si te interesa te aconsejo suscribirte a mi canal de YouTube y
              actives la campanita así te avisa cuando suba algo nuevo, aunque
              aqui lo tendras todo mas organizado
              4C en un principio fue por Cuatro Cuerdas, mi instrumento favorito
              es el bajo y por lo general lo estándar es el de 4 cuerdas. hoy se
              convirtio en algo mucho mas significativo para la mision que nos
              dejo encomendada Jesus, por el y para el hacemos lu que hacemos,
              por eso cuatro cuerdas se transformo en for Christ, 4C, para
              Cristo.
            </p>

          </div>
      </div>
    </div>
  );
}
