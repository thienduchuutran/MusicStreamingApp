'use client'
import { useHasMounted } from "@/utils/customHooks";
import { AppBar, Container } from "@mui/material"
import React from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AppFooter = () => {
    const hasMounted = useHasMounted()

    //only when the code is fully returned to client that we return the AudioPlayer, since we don't want Server
    //Next.js to handle this UI, we want the client side to handle this UI 
    if (!hasMounted) return (<></>)
    return (
        <AppBar position="fixed" sx={{ background: '#f2f2f2', top: 'auto', bottom: 0 }}>
            <Container sx={{ display: "flex", gap: 10 }}>
                <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
                    volume={0.5}
                    style={{
                        boxShadow: "unset",
                        background: '#f2f2f2'
                    }}
                // Try other props!
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center",
                        minWidth: 100
                    }}>
                    <div style={{ color: "#ccc" }}>
                        Duc
                    </div>
                    <div style={{ color: 'black' }}>
                        Who am i
                    </div>
                </div>
            </Container>
        </AppBar>
    )
}

export default AppFooter