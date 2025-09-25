'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from 'react-slick'
import { Box, Button, Divider } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const MainSlider = () => {
    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <Button variant="outlined"
                // className={className}
                // style={{ ...style, display: "block", background: "red" }}
                sx={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
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
            <Button variant="outlined"
                // className={className}
                // style={{ ...style, display: "block", background: "red" }}
                sx={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
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
                ".abc": {
                    padding: "0 10px"
                },
                "h3": {
                    border: "1px solid #ccc",
                    padding: "20px",
                    height: "200px"
                }
            }}>

            <h2>Multiple Tracks</h2>
            <Slider {...settings}>
                <div className="abc">
                    <h3>1</h3>
                </div>
                <div className="abc">
                    <h3>2</h3>
                </div>
                <div className="abc">
                    <h3>3</h3>
                </div>
                <div className="abc">
                    <h3>4</h3>
                </div>
                <div className="abc">
                    <h3>5</h3>
                </div>
                <div className="abc">
                    <h3>6</h3>
                </div>
            </Slider>
            <Divider />

            <h2>Multiple Tracks</h2>
            <Slider {...settings}>
                <div className="abc">
                    <h3>1</h3>
                </div>
                <div className="abc">
                    <h3>2</h3>
                </div>
                <div className="abc">
                    <h3>3</h3>
                </div>
                <div className="abc">
                    <h3>4</h3>
                </div>
                <div className="abc">
                    <h3>5</h3>
                </div>
                <div className="abc">
                    <h3>6</h3>
                </div>
            </Slider>
            <Divider />

            <h2>Multiple Tracks</h2>
            <Slider {...settings}>
                <div className="abc">
                    <h3>1</h3>
                </div>
                <div className="abc">
                    <h3>2</h3>
                </div>
                <div className="abc">
                    <h3>3</h3>
                </div>
                <div className="abc">
                    <h3>4</h3>
                </div>
                <div className="abc">
                    <h3>5</h3>
                </div>
                <div className="abc">
                    <h3>6</h3>
                </div>
            </Slider>
            <Divider />
        </Box>
    );
}

export default MainSlider