import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="w-[600px] h-[300px] bg-[#6F3CE7] flex justify-center items-center rounded-4xl">
        <Image src={'/3.svg'} alt="Ducky" width={125} height={168.81} className="drop-shadow-md"/>
      </div>
      <div className="w-[300px] h-[300px] bg-[#01A56B] flex justify-center items-center rounded-4xl">
        <Image src={'/1.svg'} alt="Dokky" width={170} height={263.66} className="drop-shadow-md"/>
      </div>
      <div className="w-[300px] h-[300px] bg-[#01A56B] flex justify-center items-center rounded-4xl">
        <Image src={'/2.svg'} alt="Duckky" width={193} height={225.47} className="drop-shadow-md"/>
      </div>
      <div className="w-[300px] h-[300px] bg-[#01A56B] flex justify-center items-center rounded-4xl">
        <Image src={'/5.svg'} alt="Puggy" width={200} height={266.56} className="drop-shadow-md"/>
      </div>
    </div>
  );
}
