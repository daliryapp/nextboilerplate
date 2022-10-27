import { FC, useState, forwardRef, useMemo } from "react";
import { Box, Stack, IconButton, Button, Drawer, CssBaseline } from '@mui/material';
import Typography from 'components/Typography';
import useMenuListStyle from './MenuStyle';
import menuHeaderImg from 'assets/images/pictures/menu-header-cofee.jpg';
import { useDispatch, useSelector } from "react-redux";
import {
    toogleDrawer,
} from "_core/store/reducers/app/appSlice";

const SideBar: FC = () => {
    const { sidebar } = useSelector((state: any) => state.app);
    const dispatch = useDispatch();
    const classes = useMenuListStyle();
    const onDrawerToggle = () => {
        dispatch(toogleDrawer());
    };


    return (
        <>
            <CssBaseline />
            <Drawer
                open={sidebar}
                onClose={onDrawerToggle}
                dir="ltr"
                anchor="left"
            >
                <Box className={classes.menuListScrollWrapper}>
                    <Box className={classes.menuListHeader}>

                        <Box className={classes.menuHeaderTitle}>
                            <Typography variant="h5Bold" mt={6}>منو</Typography>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>);
}
export default SideBar;