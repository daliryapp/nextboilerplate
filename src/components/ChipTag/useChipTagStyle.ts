import { makeStyles } from '_core/theme';

const useChipTagStyle = makeStyles(
  ({ spacing, palette: { neutral, primary, accent } }) => ({
    container: {
      display: 'flex',
      flexShrink: 0,
      width: 'fit-content',
      flexDirection: 'row',
      alignItems: 'center',
      padding: spacing(2),
      height: spacing(9),
      backgroundColor: primary[50],
      borderRadius: 3,
      color: primary[500],
      fontWeight: '600'
    },
    iconButton: {
      padding: 0,
      marginLeft: spacing(2),
      backgroundColor: accent['main'],
      '& svg': {
        '& path': {
          fill: 'white',
        },
      },
    },
    text: {
      margin: spacing(0, 2, 0, 2),
      color: neutral[600],
    },
    row: {
      display: 'flex',
      width: 'fit-content',
      flexDirection: 'row',
      alignItems: 'center',
    },

  }),
)

export default useChipTagStyle
