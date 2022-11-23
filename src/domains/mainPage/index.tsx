
import { Container, Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MainCarousel, { ISlides } from 'domains/mainPage/mainCarousel';
import { useGetProductInfinite } from '_core/hooks/public/mainPage.hooks';
import VisibilitySensor from "react-visibility-sensor";
import ProductCard from '../../components/productCard';
import Skeleton from "@mui/material/Skeleton";

const slides: ISlides[] = [{
    image: "https://loremflickr.com/320/240?random=1"
},
{
    image: "https://loremflickr.com/320/240?random=2"
},
{
    image: "https://loremflickr.com/320/240?random=3"
}]
const Home = ({ data }: any) => {
    const [inView, setInView] = useState(false);
    const {
        data: productData,
        fetchNextPage,
        isLoading,
    } = useGetProductInfinite();
    useEffect(() => {
        if (inView && !isLoading) {
            fetchNextPage();
        }
    }, [inView]);
    return (
        <Container maxWidth="xs" sx={{
            mt: '60px',
            p: 5,
            overflowX: 'hidden',
            backgroundColor: 'neutral.main',
        }}>
            <MainCarousel slides={slides} isLoading={false} />
            <Typography variant="h5" mt={6} fontWeight="600">محصولات پیشنهادی</Typography>
            <Stack flexDirection="row" gap={2} mb={1} flexWrap="wrap" mt={4} justifyContent="center">
                {isLoading
                    ? Array(12)
                        .fill({})
                        .map((_, i) => (
                            <Skeleton
                                animation="wave"
                                sx={{
                                    width: "49%",
                                    height: "230px",
                                    borderRadius: "10px",
                                    transform: "scale(1)",
                                }}
                            />
                        ))
                    : productData?.pages?.map((group) =>
                        group?.list?.map?.((item: any, i: number) => (<>
                            <ProductCard name={item?.name} photos={item?.photos} price={item?.price} indexi={i} route={`/details?id=${item.id}`} />
                        </>))
                    )}
            </Stack>
            <VisibilitySensor
                partialVisibility
                onChange={(isVisible) => {
                    setInView(isVisible);
                }}
            >
                <Box sx={{ height: "20px", width: "100%" }}></Box>
            </VisibilitySensor>
        </Container>
    );
};



export default Home;