import { makeStyles } from '_core/theme';

const AppbarStyle = makeStyles(({ spacing, palette: { onPrimary, neutral, primary } }) => ({

    appBar: {
        height: 60,
        padding: spacing(2, 4),
        justifyContent: 'center',
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.30) !important'
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