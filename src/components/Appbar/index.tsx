import { FC } from "react";
import {
    Grid,
    AppBar,
    Box,
    Stack,
    IconButton,
    Button,
    Badge,
    Container
} from "@mui/material";
import AppbarStyle from './appBarStyle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Image from "next/image";
import menuchiLogo from "assets/images/pictures/logo-1.png";

const Appbar: FC = () => {
    const classes = AppbarStyle();
    const onMenuButtonClick = () => {
    }
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Container
                maxWidth="xs"
                sx={{
                    color: "#fff",
                    p: 0,
                }}
            >
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={6}>
                        <div className={classes.logoContent}>
                            <div className={classes.menuchiLogoWrapper}>
                                <Image src={menuchiLogo} alt="menuchi Logo" />
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={6} justifyContent="flex-end" display="flex" alignItems="center">
                        <IconButton size="small" className={classes.menuIcon} onClick={onMenuButtonClick}>
                            <Badge badgeContent={3} color="primary"
                                className={classes.badgeIcon}>
                                <MenuBookIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
}

export default Appbar;