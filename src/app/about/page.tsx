import { aboutTexts } from "@/utils/texts";

export default function About() {
  return (
    <div>
      <div className="mx-5 pb-10">
        <h6 className="mt-20">{aboutTexts.preTitle}</h6>
        <h1 className="mb-15 mt-5 text-5xl font-bold">{aboutTexts.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {aboutTexts.parrafos.map((parrafo) => (
            <p key={parrafo} className="mt-1 ">
              {parrafo}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
