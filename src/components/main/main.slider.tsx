'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from 'react-slick'
import { Box, Button, Divider } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Link from "next/link";

interface IProps {
    data: ITrackTop[],
    title: string
}

const MainSlider = (props: IProps) => {
    const { data, title } = props

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <Button variant="contained"
                color="inherit"
                sx={{
                    position: "absolute",
                    right: 0,
                    top: "25%",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35
                }}
                onClick={onClick}
            >
                <ChevronRight />
            </Button>

        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <Button variant="contained"
                color="inherit"
                sx={{
                    position: "absolute",
                    left: 0,
                    top: "525",
                    zIndex: 2,
                    minWidth: 30,
                    width: 35
                }}
                onClick={onClick}
            >
                <ChevronLeft />
            </Button>
        );
    }
    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <Box
            sx={{
                margin: "0 50px",
                ".track": {
                    padding: "0 10px",

                    "img": {
                        height: 150,
                        width: 150
                    }
                },
                "h3": {
                    border: "1px solid #ccc",
                    padding: "20px",
                    height: "200px"
                }
            }}>

            <h2>Multiple Tracks</h2>
            <Slider {...settings}>
                {data.map(track => {
                    return (
                        <div className="track" key={track._id}>
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${track.imgUrl}`} />
                            <Link href={`/track/${track._id}`}>

                                {track.title}
                            </Link>

                            <h5>
                                {track.description}
                            </h5>
                        </div>
                    )
                })}
            </Slider>
            <Divider />
        </Box>
    );
}

export default MainSlider