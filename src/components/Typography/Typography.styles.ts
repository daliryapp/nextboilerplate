import { makeStyles } from '_core/theme'
import constants from '_core/theme/constants'
import { pxToRem } from '_core/theme/helpers'

const useTypographyStyle = makeStyles(
  ({ typography }) => ({
    h2Bold: { ...typography?.h2, fontWeight: 700 },
    h3Bold: { ...typography?.h3, fontWeight: 700 },
    h4Bold: { ...typography?.h4, fontWeight: 700 },
    h5Bold: { ...typography?.h5, fontWeight: 700 },
    h6Bold: { ...typography?.h6, fontWeight: 700 },
    subtitle1Bold: { ...typography?.subtitle1, fontWeight: 700 },
    subtitle2Bold: { ...typography?.subtitle2, fontWeight: 700 },
    body1Bold: { ...typography?.body1, fontWeight: 700 },
    body2Bold: { ...typography?.body2, fontWeight: 700 },
    captionBold: { ...typography?.caption, fontWeight: 700 },
    buttonBold: { ...typography?.button, fontWeight: 700 },
    overlineBold: { ...typography?.overline, fontWeight: 700 },
    tiny: {
      fontWeight: constants.fontWeightMedium,
      fontSize: pxToRem(8.8),
      lineHeight: '11.4px',
      textTransform: 'none',
    }
  }),
  { name: 'typography' },
)

export default useTypographyStyle
