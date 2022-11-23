import { FC } from "react";
import {
    AppBar,
    Box,
    Stack,
    IconButton,
    Container
} from "@mui/material";
import AppbarStyle from './appBarStyle';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useDispatch, useSelector } from "react-redux";
import {
    toogleDrawer,
} from "_core/store/reducers/app/appSlice";

const Appbar: FC = () => {
    const dispatch = useDispatch();
    const classes = AppbarStyle();
    const onMenuButtonClick = () => {
        dispatch(toogleDrawer());
    }
    return (
        <AppBar position="fixed" className={classes.appBar} >
            <Container
                maxWidth="xs"
                sx={{
                    position: 'relative',
                    color: "#fff",
                    p: 0,
                }}
            >
                <Box sx={{
                    position: 'absolute',
                    pl: { xs: 1, sm: 3 },
                    pr: { xs: 1, sm: 3 },
                    left: { xs: 0, sm: 0 },
                    top: { xs: -4, sm: 0 },
                    '& button': {
                        pr: 0,
                        pl: 0
                    }
                }}>
                    <IconButton onClick={onMenuButtonClick}>
                        <MenuOutlinedIcon />
                    </IconButton>
                </Box>
                <Stack flexDirection="row" justifyContent="center">
                    <Box
                        sx={{
                            width: { xs: 120, sm: 175 },
                            '& img': {
                                width: '100%',
                            }
                        }}>
                        <img src="/images/logo/pendyShop.png" alt="pendy shop" />
                    </Box>
                </Stack>

            </Container>
        </AppBar>
    );
}

export default Appbar;