'use client'

import { useEffect } from "react"
import WaveSurfer from "wavesurfer.js"
const WaveTrack = () => {

    //put this wavesufer in useEffect because we only insert this feature into UI after the DOM is complete
    //and everything is ready
    useEffect(() => {
        if (document.getElementById("hoidanit")) {
            WaveSurfer.create({
                container: document.getElementById("hoidanit")!,
                waveColor: 'rgb(200, 0, 200)',
                progressColor: 'rgb(100, 0, 100)',
                url: '/audio/hoidanit.mp3',
            })
        }
    }, [])
    return (
        <div id="hoidanit">
            wave track
        </div>
    )
}

export default WaveTrack