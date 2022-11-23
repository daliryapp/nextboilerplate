import { Components } from "@mui/material/styles/components";
import palette from "./palette";
import PeydaWoff2 from 'assets/fonts/Peyda/woff2/PeydaWeb-light.woff2';
import PeydaEot from 'assets/fonts/Peyda/eot/PeydaWeb-light.eot';
import PeydaWebWoff from 'assets/fonts/Peyda/woff/PeydaWeb-light.woff';
import Peydattf from 'assets/fonts/Peyda/ttf/Peyda-light.ttf'
const overrides: Components = {
    MuiTypography: {
        styleOverrides: {

        }
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: palette.onPrimary.main,
            }
        }
    },
    MuiContainer: {
        styleOverrides: {
            root: {

            }
        }
    },
    MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Peyda';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${PeydaEot}) format('embedded-opentype'), 
          url(${PeydaWoff2}) format('woff2'),
          url(${PeydaWebWoff}) format('woff'),
          url(${Peydattf}) format('truetype');
        }
      `,
    },
    MuiButton: {
        styleOverrides: {
            containedPrimary: {
                color: palette.onPrimary.main,
                backgroundColor: palette.primary[400],
                '&:hover': {
                    backgroundColor: palette.primary[400],
                }
            },
            outlinedPrimary: {
                border: `1px solid ${palette.primary[700]}`
            },
            containedSecondary: {
                backgroundColor: palette.secondary[300],
                color: palette.onSecondary.main,
                border: `1px solid ${palette.secondary[500]}`
            },
            outlinedSecondary: {
                border: `1px solid ${palette.secondary[300]}`,
                color: palette.secondary[300]
            },
            sizeLarge: {
                height: 56,
            },
            sizeMedium: {
                height: 48,
            },
            sizeSmall: {
                height: 38,
            }
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
            }
        }
    },
    MuiTextField: {
        styleOverrides: {
            root: {

            }
        }
    }
};

export default overrides;
