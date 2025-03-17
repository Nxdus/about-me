"use client"

import { motion } from "framer-motion";
import { ArrowBigUpIcon, GithubIcon, InstagramIcon, MailIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Drag from "./components/cursor";

export default function Home() {

  const [cursorHover, setCursorHover] = useState(false);

  return (
    <section className="w-full h-full overflow-hidden relative">

      {/* Cursor Component */}
      <Drag isHover={cursorHover} />

      {/* Main Grid Bento */}
      <main className="h-dvh grid grid-cols-5 grid-rows-4 sm:grid-rows-3 gap-5 justify-center bg-[#F9F7F0] select-none px-5 sm:px-20 py-5">

        {/* My Experience Box */}
        <motion.article className="col-span-5 sm:col-span-3 xl:col-span-2 bg-[#6F3CE7] rounded-4xl flex justify-center items-center md:gap-5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0, duration: 0.3 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1.1, 1],
              rotate: [0, -25, 25, 0],
            }}
            transition={{
              duration: 1.5,
              ease: [0, 0.71, 0.2, 1.01],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Image src={'./3.svg'} alt="Ducky" width={125} height={168.81} className="drop-shadow-md w-full hidden md:block" draggable={false} />
          </motion.div>
          <div className="text-center">
            <div className="mb-5 text-[#F9F7F0]">
              <h1 className="text-[calc(1rem+2vw)]">MY EXPERIENCE</h1>
              <p className="text-[calc(1rem+0.5vw)]">What I&apos;ve worked on so far</p>
            </div>
            <motion.button whileHover={{ scale: 1.05, z: 1 }} whileTap={{ scale: 0.85 }} onHoverStart={() => setCursorHover(true)} onHoverEnd={() => setCursorHover(false)}
              className="uppercase text-[#4A4947] text-[calc(1rem+1vw)]/tight px-10 py-0.5 pb-2 bg-[#F9F7F0] text-center rounded-full border-3 border-dashed">
              Explore
            </motion.button>
          </div>
        </motion.article>

        {/* Dokky Decorate */}
        <motion.article className="col-start-3 bg-[#01A56B] rounded-4xl hidden justify-center items-center gap-5 xl:flex"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Image src={'./1.svg'} alt="Dokky" width={170} height={263.66} className="drop-shadow-md w-fit" draggable={false} />
        </motion.article>

        {/* My Projects Box */}
        <motion.article className="col-span-5 sm:col-span-2 row-start-2 sm:row-start-1 sm:col-start-4 bg-[#457FB2] rounded-4xl flex justify-center items-center relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <div className="text-center">
            <div className="mb-5 text-[#F9F7F0]">
              <h1 className="text-[calc(1rem+2vw)]">THIS IS</h1>
              <h1 className="text-[calc(1rem+2vw)]">MY PROJECTS</h1>
            </div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.85 }} onHoverStart={() => setCursorHover(true)} onHoverEnd={() => setCursorHover(false)}
              className="uppercase text-[#4A4947] text-[calc(1rem+1vw)]/tight px-10 py-0.5 pb-2 bg-[#F9F7F0] text-center rounded-full border-3 border-dashed">
              Explore
            </motion.button>
          </div>
          <Image src={"./star.svg"} alt="Star" width={45} height={45} className="absolute top-1/6 right-1/8 hidden lg:block" draggable={false} />
          <Image src={"./star.svg"} alt="Star" width={45} height={45} className="absolute bottom-1/6 left-1/8 hidden lg:block" draggable={false} />
        </motion.article>

        {/* Go On Adventure Box */}
        <motion.article className="row-span-2 row-start-2 bg-[#FFBB4E] rounded-4xl hidden justify-center items-center gap-8 flex-col relative lg:flex"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        >
          <div className="text-center">
            <h1 className="text-[#F9F7F0] text-[calc(1rem+1.5vw)]/tight uppercase">GO ON</h1>
            <h1 className="text-[#F9F7F0] text-[calc(1rem+1.5vw)]/tight uppercase">ADVENTURE</h1>
            <h1 className="text-[#F9F7F0] text-[calc(1rem+1.5vw)]/tight uppercase">IN MY BLOG</h1>
          </div>
          <ArrowBigUpIcon fill="#4A4947" color="#4A4947" size={120} className="absolute bottom-[2%] left-[3%] rotate-45 hidden 2xl:block" />
          <Image src={"./6.svg"} alt="book" width={172} height={172} draggable={false} className="w-fit" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.85 }} onHoverStart={() => setCursorHover(true)} onHoverEnd={() => setCursorHover(false)}
            className="uppercase text-[#4A4947] text-[calc(1rem+1.25vw)]/tight px-10 py-0.5 pb-2 bg-[#F9F7F0] text-center rounded-full border-3 border-dashed">
            Read
          </motion.button>
        </motion.article>

        {/* Hello Box */}
        <motion.article className="col-span-5 xl:col-span-3 lg:col-span-4 row-start-3 sm:row-start-2 bg-[#FD5A46] rounded-4xl relative flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-1.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
        >
          <div className="text-center sm:text-start sm:pl-15 relative">
            <h1 className="text-[#F9F7F0] text-[calc(1rem+2vw)]/tight uppercase">HELLO :)</h1>
            <h1 className="text-[#F9F7F0] text-[calc(1rem+2vw)]/tight uppercase">I&apos;M PEERANUT</h1>
            <h1 className="text-[#F9F7F0] text-[calc(1rem+2vw)]/tight uppercase">A Web Developer</h1>
            <p className="text-[#F9F7F0] text-[calc(0.75rem+0.25vw)] lowercase absolute top-[40%] -right-[30%] hidden xl:block">( but you can call me paitong )</p>
            <Image src={"./lightning.svg"} alt="Lightning" width={30} height={53.08} className="absolute -bottom-1 -right-12 hidden 2xl:block" draggable={false} />
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.85 }} onHoverStart={() => setCursorHover(true)} onHoverEnd={() => setCursorHover(false)}
            className="sm:absolute sm:bottom-[8%] sm:right-[4%] uppercase text-[#4A4947] text-[calc(1rem+1vw)]/tight px-10 py-0.5 pb-2 bg-[#F9F7F0] text-center rounded-full border-3 border-dashed">
            Hire me
          </motion.button>
        </motion.article>

        {/* Puggy Decorate */}
        <motion.article className="col-start-5 row-start-2 bg-[#01A56B] rounded-4xl hidden justify-center items-center xl:flex"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.3 }}
        >
          <Image src={'./5.svg'} alt="Puggy" width={200} height={266.56} className="drop-shadow-md" draggable={false} />
        </motion.article>

        {/* Duckky Decorate */}
        <motion.article className="col-start-2 row-start-3 bg-[#01A56B] rounded-4xl hidden justify-center items-center xl:flex"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.8, duration: 0.3 }}
        >
          <Image src={'./2.svg'} alt="Duckky" width={193} height={225.47} className="drop-shadow-md" draggable={false} />
        </motion.article>

        {/* My Contacts Box */}
        <motion.article className="col-span-5 lg:col-span-4 xl:col-span-3 lg:col-start-2 xl:col-start-3 row-start-4 sm:row-start-3 bg-[#FE9CD5] rounded-4xl flex flex-col justify-start items-center py-2 sm:py-10 gap-2 sm:gap-8 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.1, duration: 0.3 }}
        >
          <h1 className="text-[#F9F7F0] text-[calc(1rem+2.5vw)] uppercase">MY CONTACTS</h1>
          <div className="flex justify-center items-center gap-3 px-2">
            <motion.a href={"https://github.com/Nxdus"} target="_blank" className="items-center p-5 bg-[#F9F7F0] rounded-full border-3 border-dashed border-[#4A4947]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              onHoverStart={() => setCursorHover(true)}
              onHoverEnd={() => setCursorHover(false)}
            >
              <GithubIcon size={50} style={{ width: '100%', height: '100%' }} color="#4A4947" fill="#F9F7F0" />
            </motion.a>
            <motion.a href={"https://www.instagram.com/_.ptxz/"} target="_blank" className="items-center p-5 bg-[#F9F7F0] rounded-full border-3 border-dashed border-[#4A4947]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              onHoverStart={() => setCursorHover(true)}
              onHoverEnd={() => setCursorHover(false)}
            >
              <InstagramIcon size={50} style={{ width: '100%', height: '100%' }} color="#4A4947" fill="#F9F7F0" />
            </motion.a>
            <motion.a href={"mailto:paitong1550@gmail.com"} className="items-center p-5 bg-[#F9F7F0] rounded-full border-3 border-dashed border-[#4A4947]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              onHoverStart={() => setCursorHover(true)}
              onHoverEnd={() => setCursorHover(false)}
            >
              <MailIcon size={50} style={{ width: '100%', height: '100%' }} color="#4A4947" fill="#F9F7F0" />
            </motion.a>
            <motion.a href={"https://x.com/Nxdus2007"} target="_blank" className="items-center p-5 bg-[#F9F7F0] rounded-full border-3 border-dashed border-[#4A4947]"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.85 }} 
              onHoverStart={() => setCursorHover(true)}
              onHoverEnd={() => setCursorHover(false)}
            >
              <TwitterIcon size={50} style={{ width: '100%', height: '100%' }} color="#4A4947" fill="#F9F7F0" />
            </motion.a>
          </div>
          <Image src={"./7.svg"} alt="smile" width={75} height={75} className="absolute top-6 left-5 w-fit hidden md:block" draggable={false} />
          <Image src={"./8.svg"} alt="spiral" width={130} height={60} className="absolute -top-10 -right-10 w-fit hidden md:block" draggable={false} />
        </motion.article>
      </main>
    </section>
  );
}
