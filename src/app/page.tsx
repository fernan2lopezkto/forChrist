import { homeTexts } from "@/utils/texts";

export default function Home() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/forChristWP3.png')",
        }}
      >
        <div className="hero-overlay"></div>
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
<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{homeTexts.musicosTitle}</h2>
    <p>
      {homeTexts.musicosDescription[0]}
      {homeTexts.musicosDescription[1]}
    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Tutoriales</button>
    </div>
  </div>
</div>

<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>



      



      
      <div>
        <div className="mx-5 pb-10 text-center">
          <h2 className=" mt-20 text-2xl  font-bold">
            {homeTexts.musicosTitle}
          </h2>
          <h6 className="text-xl mt-1">{homeTexts.musicosSubtitle}</h6>
          <div className="px-20">
            <p className="mt-5 ">
              {homeTexts.musicosDescription[0]}
              {homeTexts.musicosDescription[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
