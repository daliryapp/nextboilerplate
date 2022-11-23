// ** MUI Imports
import {
    Typography,
    Card,
    CardContent,
    Box,
    Stack,
    Link as MuiLink,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import Link from 'next/link';
import "swiper/swiper-bundle.min.css";
import { NumericFormat } from 'react-number-format';
import { Navigation, Pagination } from "swiper";
const bluredImage = "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

const slides: string[] = [
    "https://loremflickr.com/320/240?random=",
    "https://loremflickr.com/320/240?random=",
    "https://loremflickr.com/320/240?random="
]
const ProductCard = ({ photos, name, price, route, indexi }: IProduct) => {
    const sliderSettings = {
        freeMode: false,
        className: "mySwiper2",
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            clickable: true,
            dynamicBullets: true,
        },
        modules: [Navigation, Pagination],
    };
    return (<>
        <Card sx={{
            width: '49%',
            borderRadius: 3,
        }}>
            <CardContent>
                <Swiper {...sliderSettings} >
                    {slides?.map?.((image: string, index: number) => {
                        return (
                            <SwiperSlide key={`mainCarousel${index}`}>
                                <MuiLink
                                    component={Link}
                                    href={route}
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
                                            src={`${image}${index + indexi}`}
                                            alt="Picture of the author"
                                            height="180"
                                            width="150"
                                            objectFit="cover"
                                            blurDataURL={bluredImage}
                                            placeholder="blur"
                                        />
                                    </Box>
                                </MuiLink>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <Typography variant="body1" mt={2} sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}>{name}</Typography>
                <Stack flexDirection="row" justifyContent="flex-end" alignItems="flex-start" mt={6} gap={1}>

                    <Typography variant="body1" fontWeight="600" ><NumericFormat
                        value={price}
                        thousandSeparator
                        prefix=''
                        displayType="text"
                        renderText={(value) => value}
                    /></Typography> <Typography variant="body1" sx={{
                        opacity: 0.8
                    }}>تومان</Typography></Stack>

            </CardContent>
        </Card>
    </>)
}
export default ProductCard;

export interface IProduct {
    photos?: string[];
    name?: string;
    price?: number;
    indexi: number;
    route: string;
}