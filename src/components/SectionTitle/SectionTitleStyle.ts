import { makeStyles } from '_core/theme';
import lineDouble from 'assets/images/pictures/line-two.png';

const SectionTitleStyle = makeStyles(({ spacing, palette: { onPrimary, neutral, primary } }) => ({
    redTypo: {
        color: primary[500],
        marginBottom: spacing(2),
        textTransform: 'capitalize',

    },
    blackTypo: {
        color: neutral[800],
        fontSize: '2.05rem'
    },
    curveDoubleLine: {
        backgroundPosition: 'left bottom',
        backgroundImage: `url(${lineDouble.src})`,
        backgroundRepeat: 'no-repeat',
        width: 240,
        height: 22,
        marginTop: spacing(3)
    },
    description: {
        marginTop: spacing(5),
        color: neutral[600],
        maxWidth: 335,
        textAlign: 'justify'
    }
})
);

export default SectionTitleStyle;