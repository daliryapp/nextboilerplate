import { ReactNode } from 'react'
import { makeStyles } from '_core/theme'

interface IStyleProps {
  type?: string
  classes?: any
  size?: 'large' | 'medium' | 'small'
  leftPrefix?: ReactNode | Element
}

const FORCE_LTR: Array<string> = [
  'tel',
  'number',
  'date',
  'datetime-local',
  'email',
  'password',
]

const forceLtrCheck = (type: any) => {
  const index = FORCE_LTR.findIndex((item) => item === type)
  return index >= 0
}

export default makeStyles<IStyleProps>(
  ({ palette: { neutral, primary, error }, spacing, typography }) => ({
    root: {
      '& .MuiOutlinedInput-root': {
        minHeight: 36,
        '& fieldset': {
          borderWidth: 1,
          borderColor: neutral[200],
          '& > legend > span': {
            paddingRight: spacing(1.5),
            paddingLeft: spacing(1.5)
          }
        },
        '&.Mui-focused fieldset': {
          borderColor: primary[900],
        },
        '& input': {
          color: neutral[600],
          textAlign: (props) =>
            props.type && forceLtrCheck(props.type) ? 'left' : 'start',
          direction: (props) =>
            props.type && forceLtrCheck(props.type) ? 'ltr' : 'auto',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: primary[900],
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: error.main,
        },
      },
      '& .MuiInputBase-root': {
        '& .MuiIconButton-root': {
          padding: spacing(0, 3),
        },
        '& div.MuiInputBase-input': {
          padding: getSize(spacing),
        },
        '& .GolTextFieldLeftPrefix': {
          height: 24,
          alignItems: 'center',
        },
        '&.Mui-disabled svg path': {
          fill: neutral[300]
        }
      },
      '& label': {
        color: neutral[600],
        ...typography.subtitle1,
        '&.MuiInputLabel-filled.MuiInputLabel-shrink': {
          transform: 'translate(12px, 3px) scale(1)',
        },
        '&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
          transform: 'translate(16px, -6px) scale(1)',
          ...typography.overline,
        },
        '&.MuiInputLabel-filled, &.MuiInputLabel-outlined': {
          transform: translate(),
        },
        '&.Mui-error,&.Mui-focused.Mui-error': {
          color: error.main,
        },
        '&.Mui-focused': {
          color: primary[900],
        },
      },
      '& .MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error': {
        bottom: -18
      }
    },
  }),
  { name: 'TextField' },
)

const getSize = (spacing: any) => ({ size, leftPrefix }: IStyleProps) => {
  if (size === 'large') return spacing(4.925, !leftPrefix ? 4 : 2.5)
  else if (size === 'medium') return spacing(3.925, !leftPrefix ? 4 : 2.5)
  return spacing(2.425, !leftPrefix ? 4 : 2.5)
}

const translate = () => ({ size }: IStyleProps) => {
  if (size === 'large') return `translate(16px, 18px) scale(1)`
  else if (size === 'medium') return `translate(16px, 15px) scale(1)`
  return `translate(16px, 9px) scale(1)`
}
