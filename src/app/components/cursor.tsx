"use client"

import { AnimatePresence, frame, motion, useSpring } from "motion/react"
import { useState, useEffect } from "react"

export default function Drag({ isHover }: { isHover: boolean }) {
    const [element, setElement] = useState<HTMLDivElement | null>(null)
    const { x, y } = useFollowPointer(element)

    return (
        <AnimatePresence>
            {!isHover ? (
                <motion.div
                    ref={setElement}
                    style={{ x, y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="w-12 h-12 bg-amber-950 rounded-full absolute z-10"
                />
            ) : null}
        </AnimatePresence>
    )
}

const spring = { damping: 15, stiffness: 80, restDelta: 0.001 }

export function useFollowPointer(element: HTMLDivElement | null) {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)

    useEffect(() => {
        if (!element) return

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
                y.set(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)
        return () => window.removeEventListener("pointermove", handlePointerMove)
    }, [element, x, y])

    return { x, y }
}
