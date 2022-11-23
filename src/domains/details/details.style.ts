import { makeStyles } from '_core/theme';
const useDetailStyle = makeStyles(({ spacing, palette: { onPrimary, neutral, primary } }) => ({
    shareBox: {
        backgroundColor: neutral[100],
        borderRadius: 3
    },
    contactUsBox: {
        backgroundColor: primary[50],
        color: primary[500],
        fontWeight: '600',
        padding: spacing(3),
        borderRadius: spacing(1),
        marginTop: spacing(4)
    }
})
);

export default useDetailStyle;