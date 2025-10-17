'use client'

import WaveTrack from '@/components/tracks/wave.track'
import { useSearchParams } from 'next/navigation'

const DetailTrackPage = ({ params }: { params: { slug: string } }) => {
    const searchParams = useSearchParams()

    const search = searchParams.get('audio')
    return (
        <div>
            DetailTrackPage
            <div>
                <WaveTrack />
            </div>
        </div>
    )
}

export default DetailTrackPage