import { createTheme } from '@mui/material/styles';
import shadows from './shadows'
import typography from './typography'
import overrides from './overrides'
import lightPalette from './palette'
import darkPalette from './darkPalette'
import { Direction } from '@material-ui/core/styles'


export const getThemeOptions = (direction: Direction, palette: any): any => {
    const fontFamily =
        direction === 'rtl'
            ? '"Peyda", "Helvetica", "Arial", sans-serif'
            : '"Roboto", "Peyda", "Helvetica", "Arial", sans-serif'

    typography.fontFamily = fontFamily

    return {
        // direction: 'rtl',
        palette,
        shadows,
        typography,
        spacing: 4,
        components: overrides,
        shape: { borderRadius: 4 },
    }
};
export const rtlThemeDark = (createTheme as any)(
    getThemeOptions('rtl', darkPalette),
);
export const rtlThemeLight = (createTheme as any)(
    getThemeOptions('rtl', lightPalette),
);
const baseTheme = (createTheme as any)(getThemeOptions('ltr', lightPalette));

export default baseTheme