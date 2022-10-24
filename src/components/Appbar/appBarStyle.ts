import { makeStyles } from '_core/theme';
import dividerImage from 'assets/images/pictures/divider.png';

const AppbarStyle = makeStyles(({ spacing, palette: { onPrimary, neutral, primary } }) => ({
    root: {
        backgroundColor: neutral.main,
    },
    appBar: {
        height: 60,
        // backgroundColor: onPrimary.main,
        backgroundColor: neutral.main,
        padding: spacing(2, 4),
        boxShadow: 'none',

        '&:after': {
            content: '""',
            backgroundImage: `url(${dividerImage.src})`,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center top',
            height: 15,
            width: '100%',
            position: 'absolute',
            bottom: -15,
            left: 0,
            zIndex: 10
        }
    },
    gridContainer: {
        height: '100%'
    },
    logoContent: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        '& img': {
            height: '40px !important'
        }
    },
    menuchiLogoWrapper: {
        position: 'relative',
        width: '100%',
        paddingRight: spacing(2),
    },
    menuIcon: {
        height: 35,
        width: 40,
        border: `1px solid ${primary[400]}`,
        borderRadius: 4,
        color: primary[400],
    },
    badgeIcon: {

        '& span': {
            color: '#fff',


        }
    }
})
);

export default AppbarStyle;