
import { Container, Box, Stack, Typography, IconButton, Divider, Button } from "@mui/material";
import { useEffect, useState } from "react";
import MainCarousel from './mainCarousel';
import useDetailStyle from './details.style';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { NumericFormat } from 'react-number-format';
import ChipTag from 'components/ChipTag';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const slides: string[] = [
    "https://loremflickr.com/320/240?random=1",
    "https://loremflickr.com/320/240?random=2",
    "https://loremflickr.com/320/240?random=3"
]
const DetailsDomain = ({ data }: any) => {
    const classes = useDetailStyle();
    console.log(data)

    return (
        <Container maxWidth="xs" sx={{
            mt: '60px',
            p: 5,
            backgroundColor: 'neutral.main',
            pb: 20,
        }}>
            <Typography variant="h6" mt={0} fontWeight="600" mb={4} sx={{
                opacity: 0.7
            }}>خانه / غذا / {data?.name}</Typography>
            <Box sx={{
                backgroundColor: 'onPrimary.main',
                p: 3,
                borderRadius: 3
            }}>
                <Box className={classes.shareBox}>
                    <Stack flexDirection="row" justifyContent="flex-start">
                        <IconButton><FavoriteBorderOutlinedIcon /></IconButton>
                        <IconButton><ShareOutlinedIcon /></IconButton>
                    </Stack>
                </Box>
                <MainCarousel slides={slides} isLoading={false} />
            </Box>
            <Box sx={{
                mt: 3,
                backgroundColor: 'onPrimary.main',
                p: 3,
                borderRadius: 3
            }}>
                <Typography variant="h5" fontWeight="600" component="h1">
                    {data?.name}
                </Typography>
                <Typography variant="body2" mt={2} sx={{
                    opacity: 0.6
                }}>
                    شناسه کالا:  {data?.id}
                </Typography>
                <Stack flexDirection="row" justifyContent="space-between" mt={4}>
                    <Typography variant="body2" sx={{
                        opacity: 0.6,
                        fontWeight: 600
                    }}>
                        تخفیف:
                    </Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="space-between" mt={4}>
                    <Typography variant="body2" sx={{
                        opacity: 0.6,
                        fontWeight: 600
                    }}>
                        قیمت:
                    </Typography>
                    <Stack flexDirection="row" justifyContent="flex-end" alignItems="flex-start" gap={1}>

                        <Typography variant="body1" fontWeight="600" ><NumericFormat
                            value={data?.price}
                            thousandSeparator
                            prefix=''
                            displayType="text"
                            renderText={(value) => value}
                        /></Typography> <Typography variant="body1" sx={{
                            opacity: 0.8
                        }}>تومان</Typography></Stack>
                </Stack>
                <Divider sx={{
                    mt: 4
                }} />
                <Stack flexDirection="row" justifyContent="flex-start" alignItems="flex-start" gap={1} mt={3} pl={6}>
                    <Typography variant="body2" sx={{
                        fontWeight: 600
                    }}>
                        دسته بندی:
                    </Typography>
                    <Typography variant="body2" sx={{
                        fontWeight: 600,
                        color: 'primary.main'
                    }}>
                        تیشتر زنانه
                    </Typography>
                </Stack>
            </Box>
            <Box sx={{
                mt: 3,
                backgroundColor: 'onPrimary.main',
                p: 3,
                borderRadius: 3
            }}>
                <Typography variant="body1" sx={{
                    fontWeight: 600,
                    opacity: 0.8
                }}>برچسب ها:</Typography>
                <Stack flexDirection="row" gap={2} flexWrap="wrap" mt={2}>
                    <ChipTag
                        onClickTag={() => { }}
                        text={'تیشرت زنانه'}
                    />
                </Stack>
            </Box>
            <Box sx={{
                mt: 3,
                backgroundColor: 'onPrimary.main',
                p: 3,
                pb: 6,
                borderRadius: 3
            }}>
                <Stack flexDirection="row" justifyContent="flex-start" alignItems="flex-start" gap={1} mt={3} >
                    <Typography variant="body1" sx={{
                        fontWeight: 600,
                        opacity: 0.8
                    }}> رنگ:</Typography>
                    <Typography variant="body1" sx={{
                        fontWeight: 600,
                    }}>سفید</Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="flex-start" alignItems="flex-start" gap={1} mt={3} >
                    <Typography variant="body1" sx={{
                        fontWeight: 600,
                        opacity: 0.8
                    }}> سایز:</Typography>
                    <Typography variant="body1" sx={{
                        fontWeight: 600,
                    }}>XXL</Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="flex-start" alignItems="flex-start" gap={1} mt={3}>
                    <Button variant="outlined" size="small" sx={{
                        minWidth: 40
                    }}>XS</Button>
                    <Button variant="outlined" size="small" sx={{
                        minWidth: 40
                    }}>XL</Button>
                    <Button variant="outlined" size="small" sx={{
                        minWidth: 40
                    }}>S</Button>
                    <Button variant="outlined" size="small" sx={{
                        minWidth: 40
                    }}>M</Button>
                    <Button variant="outlined" size="small" sx={{
                        minWidth: 40
                    }}>L</Button>
                </Stack>
            </Box>
            <Box sx={{
                mt: 3,
                backgroundColor: 'onPrimary.main',
                p: 3,
                pb: 6,
                borderRadius: 3
            }}>
                <Typography variant="body1" sx={{
                    fontWeight: 600,
                }}>به کمک نیاز دارید؟</Typography>
                <Typography variant="caption" sx={{
                    fontWeight: 600,
                    opacity: 0.7,
                    mt: 1
                }}>کافیست باما درمیان بگذارید تا شما را راهنمایی کنیم.</Typography>
                <Stack flexDirection="row" justifyContent="space-between" className={classes.contactUsBox}>
                    <Typography variant="body1">تماس بگیرید</Typography>
                    <Typography variant="body1">021-12345678</Typography>
                </Stack>
            </Box>
            <Box sx={{
                mt: 3,
                backgroundColor: 'onPrimary.main',
                p: 3,
                pb: 6,
                borderRadius: 3
            }}>
                <Stack flexDirection="row" justifyContent="flex-start" alignItems="flex-end" gap={1} mt={3}>
                    <HowToRegOutlinedIcon sx={{
                        opacity: 0.6
                    }} />
                    <Typography variant="body1" sx={{
                        fontWeight: 600,
                        opacity: 0.6
                    }}> فروشنده:</Typography>
                    <Typography variant="body1" sx={{
                        fontWeight: 600,
                    }}> فروشگاه اینترنتی پندی شاپ</Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="flex-start" alignItems="flex-end" gap={1} mt={3}>
                    <LocalShippingOutlinedIcon sx={{
                        opacity: 0.6
                    }} />
                    <Typography variant="body1" sx={{
                        fontWeight: 600,
                        opacity: 0.6
                    }}> زمان آماده سازی:</Typography>
                    <Typography variant="body1" sx={{
                        fontWeight: 600,
                    }}> آماده ارسال</Typography>
                </Stack>
            </Box>
            <Typography variant="h5" mt={6} fontWeight="600">محصولات مشابه</Typography>
        </Container>
    );
};



export default DetailsDomain;