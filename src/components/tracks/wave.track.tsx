'use client'

import { useEffect, useRef } from "react"
import WaveSurfer from "wavesurfer.js"

const WaveTrack = () => {

    const containerRef = useRef<HTMLDivElement>(null)

    //put this wavesufer in useEffect because we only insert this feature into UI after the DOM is complete
    //and everything is ready
    useEffect(() => {

        if (containerRef.current) {
            WaveSurfer.create({
                container: containerRef.current,
                waveColor: 'rgb(200, 0, 200)',
                progressColor: 'rgb(100, 0, 100)',
                url: '/audio/hoidanit.mp3',
            })
        }
    }, [])
    return (
        <div ref={containerRef}>
            wave track
        </div>
    )
}

export default WaveTrack