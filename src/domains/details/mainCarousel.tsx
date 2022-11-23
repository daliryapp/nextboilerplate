import { Box, Link as MuiLink } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Skeleton from "@mui/material/Skeleton";
import Link from 'next/link';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';
import React, { useState } from 'react';
import "swiper/swiper-bundle.min.css";
const bluredImage = "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

const MainCarousel = ({ slides, isLoading }: IProps) => {
    const [toggler, setToggler] = useState(false);
    const sliderSettings = {
        freeMode: false,
        className: "mySwiper3",
        slidesPerView: 1,
        spaceBetween: 0,
        modules: [Navigation, Pagination],
    };
    return (
        <Box
            sx={{
                overflow: "hidden",
                borderRadius: 3,
                backgroundColor: "onPrimary.main",
                height: 385,
                width: '100%',
                '& .mySwiper3': {
                    position: 'relative'
                },
                '& .swiper-pagination-fraction': {
                    position: 'absolute',
                    top: 10,
                    left: 5,
                    width: 50,
                    height: 30,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    borderRadius: 3,
                    backgroundColor: '#666',
                    direction: 'rtl'
                }
            }}
        >
            <Swiper {...sliderSettings}
                pagination={{
                    type: 'fraction',
                }}>
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
                    : slides?.map?.((image: string, index: number) => {
                        return (
                            <SwiperSlide key={`mainCarousel${index}`}>
                                <Box
                                    onClick={() => {
                                        setToggler(!toggler)
                                    }}
                                    sx={{
                                        '& span': {
                                            display: 'block !important'
                                        },
                                        overflow: 'hidden',
                                        borderRadius: 3
                                    }}
                                >
                                    <Image
                                        src={image}
                                        alt="Picture of the author"
                                        objectFit="contain"
                                        height="385"
                                        width="384"
                                        blurDataURL={bluredImage}
                                        placeholder="blur"
                                    />
                                </Box>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>

            <FsLightbox
                toggler={toggler}
                sources={slides}
            />
        </Box>
    );
};

export default MainCarousel;

export interface IProps {
    slides?: string[];
    isLoading?: boolean;
}

export interface ISlides {
    image?: string;
}
