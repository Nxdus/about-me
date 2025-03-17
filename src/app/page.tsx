"use client"

import { motion } from "framer-motion";
import { ArrowBigUpIcon, GithubIcon, InstagramIcon, MailIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Drag from "./components/cursor";

export default function Home() {

  const [cursorHover, setCursorHover] = useState(false);

  return (
    <>

      <Drag isHover={cursorHover} />

      <main className="h-dvh grid grid-cols-5 grid-rows-3 gap-5 justify-center bg-[#F9F7F0] select-none px-20 py-5">
        <article className="col-span-2 bg-[#6F3CE7] rounded-4xl flex justify-center items-center gap-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={'./3.svg'} alt="Ducky" width={125} height={168.81} className="drop-shadow-md" draggable={false} />
          </motion.div>
          <div className="text-center">
            <div className="mb-5 text-[#F9F7F0]">
              <h1 className="text-5xl">MY EXPERIENCE</h1>
              <p className="text-2xl">What I&apos;ve worked on so far</p>
            </div>
            <motion.button whileHover={{ scale: 1.05, z: 1 }} whileTap={{ scale: 0.85 }} onHoverStart={() => setCursorHover(true)} onHoverEnd={() => setCursorHover(false)}
              className="uppercase text-[#4A4947] text-4xl px-10 py-0.5 pb-2 bg-[#F9F7F0] text-center rounded-full border-3 border-dashed">
              Explore
            </motion.button>
          </div>
        </article>
        <article className="col-start-3 bg-[#01A56B] rounded-4xl flex justify-center items-center gap-5">
          <Image src={'./1.svg'} alt="Dokky" width={170} height={263.66} className="drop-shadow-md" draggable={false} />

        </article>
        <article className="col-span-2 col-start-4 bg-[#457FB2] rounded-4xl flex justify-center items-center relative">
          <div className="text-center">
            <div className="mb-5 text-[#F9F7F0]">
              <h1 className="text-6xl">THIS IS</h1>
              <h1 className="text-6xl">MY PROJECTS</h1>
            </div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.85 }} onHoverStart={() => setCursorHover(true)} onHoverEnd={() => setCursorHover(false)}
              className="uppercase text-[#4A4947] text-4xl/tight px-10 py-0.5 pb-2 bg-[#F9F7F0] text-center rounded-full border-3 border-dashed">
              Explore
            </motion.button>
          </div>
          <Image src={"./star.svg"} alt="Star" width={45} height={45} className="absolute top-10 right-20" draggable={false} />
          <Image src={"./star.svg"} alt="Star" width={45} height={45} className="absolute bottom-10 left-20" draggable={false} />
        </article>
        <article className="row-span-2 row-start-2 bg-[#FFBB4E] rounded-4xl flex justify-center items-center gap-8 flex-col relative">
          <div className="text-center">
            <h1 className="text-[#F9F7F0] text-5xl uppercase">GO ON</h1>
            <h1 className="text-[#F9F7F0] text-5xl uppercase">ADVENTURE</h1>
            <h1 className="text-[#F9F7F0] text-5xl uppercase">IN MY BLOG</h1>
          </div>
          <ArrowBigUpIcon fill="#4A4947" color="#4A4947" size={120} className="absolute bottom-2 left-2 rotate-45" />
          <Image src={"./6.svg"} alt="book" width={172} height={172} draggable={false} />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.85 }} onHoverStart={() => setCursorHover(true)} onHoverEnd={() => setCursorHover(false)}
            className="uppercase text-[#4A4947] text-4xl/tight px-10 py-0.5 pb-2 bg-[#F9F7F0] text-center rounded-full border-3 border-dashed">
            Read
          </motion.button>
        </article>
        <article className="col-span-3 row-start-2 bg-[#FD5A46] rounded-4xl relative">
          <div className="text-start absolute top-12 left-20">
            <h1 className="text-[#F9F7F0] text-6xl uppercase">HELLO :)</h1>
            <h1 className="text-[#F9F7F0] text-6xl uppercase">I&apos;M PEERANUT</h1>
            <h1 className="text-[#F9F7F0] text-6xl uppercase">A Web Developer</h1>
            <p className="text-[#F9F7F0] text-lg lowercase absolute top-[70px] -right-36">( but you can call me paitong )</p>
            <Image src={"./lightning.svg"} alt="Lightning" width={30} height={53.08} className="absolute -bottom-1 -right-12" draggable={false} />
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.85 }} onHoverStart={() => setCursorHover(true)} onHoverEnd={() => setCursorHover(false)}
            className="absolute bottom-8 right-18 uppercase text-[#4A4947] text-4xl/tight px-10 py-0.5 pb-2 bg-[#F9F7F0] text-center rounded-full border-3 border-dashed">
            Hire me
          </motion.button>
        </article>
        <article className="col-start-5 row-start-2 bg-[#01A56B] rounded-4xl flex justify-center items-center">
          <Image src={'./5.svg'} alt="Puggy" width={200} height={266.56} className="drop-shadow-md" draggable={false} />
        </article>
        <article className="col-start-2 row-start-3 bg-[#01A56B] rounded-4xl flex justify-center items-center">
          <Image src={'./2.svg'} alt="Duckky" width={193} height={225.47} className="drop-shadow-md" draggable={false} />
        </article>
        <article className="col-span-3 col-start-3 row-start-3 bg-[#FE9CD5] rounded-4xl flex flex-col justify-start items-center py-10 gap-10 relative">
          <h1 className="text-[#F9F7F0] text-6xl uppercase">MY CONTACTS</h1>
          <div className="flex justify-center items-center gap-5">
            <div className="items-center p-5 bg-[#F9F7F0] rounded-full border-3 border-dashed border-[#4A4947]">
              <GithubIcon size={50} color="#4A4947" fill="#F9F7F0" />
            </div>
            <div className="items-center p-5 bg-[#F9F7F0] rounded-full border-3 border-dashed border-[#4A4947]">
              <InstagramIcon size={50} color="#4A4947" fill="#F9F7F0" />
            </div>
            <div className="items-center p-5 bg-[#F9F7F0] rounded-full border-3 border-dashed border-[#4A4947]">
              <MailIcon size={50} color="#4A4947" fill="#F9F7F0" />
            </div>
            <div className="items-center p-5 bg-[#F9F7F0] rounded-full border-3 border-dashed border-[#4A4947]">
              <TwitterIcon size={50} color="#4A4947" fill="#F9F7F0" />
            </div>
          </div>
          <Image src={"./7.svg"} alt="smile" width={75} height={75} className="absolute top-6 left-5" draggable={false} />
          <Image src={"./8.svg"} alt="spiral" width={130} height={60} className="absolute -top-10 -right-10" draggable={false} />
        </article>
      </main>
    </>
  );
}
