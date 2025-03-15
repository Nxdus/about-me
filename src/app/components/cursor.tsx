"use client"

import { AnimatePresence, frame, motion, useSpring } from "motion/react"
import { RefObject, useEffect, useRef } from "react"

export default function Drag({ isHover }: Readonly<{ isHover: boolean }>) {
    const ref = useRef<HTMLDivElement>(null)
    const { x, y } = useFollowPointer(ref)

    return <AnimatePresence initial={false} > { !isHover && <motion.div ref={ref} style={{ x, y }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}                         exit={{ opacity: 0, scale: 0 }}
    className="w-12 h-12 bg-amber-950 rounded-full absolute z-10"/> } </AnimatePresence >
}

const spring = { damping: 15, stiffness: 80, restDelta: 0.001 }

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
                y.set(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    }, [x, y, ref])

    return { x, y }
}