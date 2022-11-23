const primary: DefaultPalette = {
  get main() {
    return this[700]
  },
  get contrastText() {
    return accent.main
  },
  50: '#DCF3FA',
  100: '#A7DCEB',
  200: '#50A2B9',
  300: '#31839A',
  400: '#78C1D5',
  500: '#78C1D5',
  600: '#78C1D5',
  700: '#78C1D5',
  800: '#78C1D5',
  900: '#78C1D5',
}

const secondary: DefaultPalette = {
  get main() {
    return this[300]
  },
  get contrastText() {
    return accent.main
  },
  50: '#BFFFEA',
  100: '#99FFE0',
  200: '#4CFFCF',
  300: '#1DE9B6',
  400: '#12B392',
  500: '#16A689',
  600: '#0E8C75',
  700: '#097361',
  800: '#055C50',
  900: '#00403A',
}

const neutral: DefaultPalette = {
  get main() {
    return this[50]
  },
  get contrastText() {
    return accent.main
  },
  50: '#EFF4F8',
  100: '#EDEEF1',
  200: '#D3DAE5',
  300: '#ADB6C5',
  400: '#6D7686',
  500: '#4F596A',
  600: '#303F4E',
  700: '#253543',
  800: '#17212A',
  900: '#282624',
}

const grey = {
  main: '#E0E0E0',
  '1': '#333333',
  '2': '#4F4F4F',
  '3': '#828282',
  '4': '#BDBDBD',
  '5': '#E0E0E0',
  '6': '#F2F2F2',
}
const onPrimary = {
  get main() {
    return '#FFFFFF'
  },
}

const onSecondary = {
  get main() {
    return '#00403A'
  },
}

const btnPrimaryStates = {
  600: '#008EFF',
  625: '#0084FF',
  650: '#007AFF',
  675: '#0070FF',
  700: '#0066FF',
}

const btnSecondaryStates = {
  200: '#4CFFCF',
  225: '#3CF5C8',
  250: '#28F0BE',
  275: '#20EDB9',
  300: '#1DE9B6',
}

const btnOutlineText = {
  5: '#0066FF0D',
  10: '#0066FF1A',
  15: '#0066FF26',
  20: '#0066FF33',
  30: '#0066FF4D',
  50: '#0066FF80',
  100: '#0066FF',
}

const white = {
  5: '#ffffff0D',
  10: '#ffffff1A',
  15: '#ffffff26',
  20: '#ffffff33',
  30: '#ffffff4D',
  50: '#ffffff80',
  100: '#ffffff',
}

const accent = {
  get main() {
    return '#840CF9'
  },
}

const error = {
  get main() {
    return '#ED0063'
  },
}

const errorLight = {
  get main() {
    return '#FFE3EF'
  },
}

const warning = {
  get main() {
    return '#FFB84D'
  },
}

const success = {
  get main() {
    return '#16A689'
  },
}

const pastel = {
  red: '#FF9B9B',
  yellow: '#FFE297',
  green: '#DAFFBD',
  cyan: '#A0FFEE',
  blue: '#5BD8FF',
  purple: '#94BFFF',
}

const palette: IPalette = {
  primary,
  onPrimary,
  secondary,
  onSecondary,
  neutral,
  grey,
  accent,
  error,
  errorLight,
  success,
  warning,
  btnPrimaryStates,
  btnSecondaryStates,
  btnOutlineText,
  white,
  surface: {
    default: '#fff',
  },
  background: {
    default: onPrimary.main, //'#F8FCFF' => this is incorrect color for background,
    paper: '#fafafa',
  },
  onBackground: {
    default: '#17212A',
  },
  pastel,
}

export default palette
