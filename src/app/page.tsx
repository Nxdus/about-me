import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-[#F9F7F0] select-none">
      <div className="w-[600px] h-[300px] bg-[#6F3CE7] flex justify-center items-center rounded-4xl absolute top-0/12 left-1/10">
        <Image src={'/3.svg'} alt="Ducky" width={125} height={168.81} className="drop-shadow-md" draggable={false} />
        <div className="centered text-center">
          <div className="mb-5 text-[#F9F7F0]">
            <h1 className="text-5xl">MY EXPERIENCE</h1>
            <p className="text-2xl">What I've worked on so far</p>
          </div>
          <button className="uppercase text-[#4A4947] text-4xl px-10 py-0.5 pb-2 bg-[#F9F7F0] text-center rounded-full border-3 border-dashed">Explore</button>
        </div>
      </div>

      <div className="w-[600px] h-[300px] bg-[#457FB2] flex justify-center items-center rounded-4xl absolute top-0/12 right-1/10">
        <div className="centered text-center">
          <div className="mb-5 text-[#F9F7F0]">
            <h1 className="text-6xl">THIS IS</h1>
            <h1 className="text-6xl">MY PROJECTS</h1>
          </div>
          <button className="uppercase text-[#4A4947] text-4xl/tight px-10 py-0.5 pb-2 bg-[#F9F7F0] text-center rounded-full border-3 border-dashed">Explore</button>
        </div>
        <Image src={"/Star.svg"} alt="Star" width={45} height={45} className="absolute top-10 right-20" draggable={false} />
        <Image src={"/Star.svg"} alt="Star" width={45} height={45} className="absolute bottom-10 left-20" draggable={false} />
      </div>

      <div className="w-[900px] h-[300px] bg-[#FD5A46] flex justify-center items-center rounded-4xl absolute top-4/12 left-1/2 transform -translate-x-1/2">
      </div>

      <div className="w-[900px] h-[300px] bg-[#FE9CD5] flex justify-center items-center rounded-4xl absolute top-8/12 right-1/10">
      </div>

      <div className="w-[300px] h-[620px] bg-[#FFBB4E] flex justify-center items-center rounded-4xl absolute top-4/12 left-1/10">
      </div>

      <div className="w-[300px] h-[300px] bg-[#01A56B] flex justify-center items-center rounded-4xl absolute top-0/12 left-1/2 transform -translate-x-1/2">
        <Image src={'/1.svg'} alt="Dokky" width={170} height={263.66} className="drop-shadow-md" draggable={false} />
      </div>

      <div className="w-[300px] h-[300px] bg-[#01A56B] flex justify-center items-center rounded-4xl absolute top-8/12 left-4/15">
        <Image src={'/2.svg'} alt="Duckky" width={193} height={225.47} className="drop-shadow-md" draggable={false} />
      </div>

      <div className="w-[300px] h-[300px] bg-[#01A56B] flex justify-center items-center rounded-4xl absolute top-4/12 right-1/10">
        <Image src={'/5.svg'} alt="Puggy" width={200} height={266.56} className="drop-shadow-md" draggable={false} />
      </div>
    </div>
  );
}
