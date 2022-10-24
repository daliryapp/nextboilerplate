import { makeStyles } from '_core/theme'

const useHeaderStyle = makeStyles(
  ({ palette: { primary, background }, shadows, spacing }) => ({

    root: {
      // direction: 'rtl'
    },
    appBar: {},

  }),
  { name: 'default-Layout' },
)

export default useHeaderStyle
