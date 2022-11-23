import { Box, Link as MuiLink, Typography, Stack, Button, linkClasses } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Skeleton from "@mui/material/Skeleton";
import Link from 'next/link';
import Image from 'next/image';
import "swiper/swiper-bundle.min.css";
const bluredImage = "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

const MainCarousel = ({ slides, isLoading }: IProps) => {
    const sliderSettings = {
        freeMode: false,
        className: "mySwiper2",
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        modules: [Autoplay, Navigation],
    };
    return (
        <Box
            sx={{
                overflow: "hidden",
                borderRadius: 3,
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#78C1D5" : "#78C1D5",
                ".swiper": {},
            }}
        >
            <Swiper {...sliderSettings} >
                {isLoading || slides === null
                    ? Array(1)
                        .fill({})
                        .map((_, i) => (
                            <SwiperSlide key={`trendingArt${i}`}>
                                <Skeleton
                                    animation="wave"
                                    sx={{
                                        width: "100%",
                                        height: "210px",
                                        borderRadius: "10px",
                                        transform: "scale(1)",
                                    }}
                                />
                            </SwiperSlide>
                        ))
                    : slides?.map?.(({ image }: ISlides, index: number) => {
                        return (
                            <SwiperSlide key={`mainCarousel${index}`}>
                                <MuiLink
                                    component={Link}
                                    href={`#`}
                                    underline="none"
                                    color="inherit"

                                >
                                    <Box
                                        sx={{
                                            '& span': {
                                                display: 'block !important'
                                            }
                                        }}
                                    >
                                        <Image
                                            src={image}
                                            alt="Picture of the author"
                                            height="250"
                                            width="384"
                                            blurDataURL={bluredImage}
                                            placeholder="blur"
                                        />
                                    </Box>
                                </MuiLink>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </Box>
    );
};

export default MainCarousel;

export interface IProps {
    slides?: ISlides[];
    isLoading?: boolean;
}

// export interface IPages {
//     pages?: IGroup[];
// }
// export interface IGroup {
//     group?: IList[];
// }
// export interface IList {
//     list?: Islides[];
// }

export interface ISlides {
    image?: string;
}
