import {
  ButtonBase,
  IconButton,
  InputBase,
  TextField as TextFieldMUI,
  TextFieldProps,
} from '@mui/material'
import CloseIcon from 'assets/images/icons/UI/Close.svg'
import VisibleIcon from 'assets/images/icons/Security/visible.svg'
import InVisibleIcon from 'assets/images/icons/Security/invisible.svg'
import classNames from 'classnames'
import React, { FC, ReactNode, useMemo, useState } from 'react'
import useStyle from './TextField.style'

export interface ITextField
  extends Omit<TextFieldProps, 'size'> {
  size?: 'large' | 'medium' | 'small'
  maxLength?: number
  rightPrefix?: ReactNode | Element
  leftPrefix?: ReactNode | Element
  // maskOptions?: IGolFormatInputBaseOptions
  onClear?: () => void
  withVisibility?: boolean
}

const TextField: FC<ITextField> = (props) => {
  const {
    label,
    helperText: helper,
    error,
    maxLength,
    rightPrefix,
    leftPrefix,
    InputProps: InputProperties,
    inputProps: inputProperties,
    className,
    onClear,
    value,
    disabled,
    variant = 'outlined',
    size,
    type,
    withVisibility,
    ...other
  } = props
  const styles = useStyle(props)
  const [showVisibility, setShowVisibility] = useState(false)
  const valueLength = `${value}`.length
  const helperText = useMemo(
    () => (
      <>
        <span>{error ? error : helper}</span>
        {maxLength && (
          <span>
            {value ? valueLength : 0}/{maxLength}
          </span>
        )}
      </>
    ),
    [error, helper, maxLength, value, valueLength],
  )

  const InputProps = {
    inputComponent: InputBase,
    endAdornment:
      type === 'password' && withVisibility ? (
        <IconButton
          style={{ padding: 0 }}
          onClick={() => setShowVisibility((prev) => !prev)}
        >
          {showVisibility ? <InVisibleIcon /> : <VisibleIcon />}
        </IconButton>
      ) : (
        <div className="endAdornmentContainer">
          {disabled || valueLength === 0 || onClear ? null : (
            <ButtonBase className="endAdornmentElement" onClick={onClear}>
              <CloseIcon />
            </ButtonBase>
          )}
          {rightPrefix}
        </div>
      ),
    startAdornment: leftPrefix && (
      <div className="GolTextFieldLeftPrefix">{leftPrefix}</div>
    ),
    ...InputProperties,
  }
  const inputProps = {
    ...inputProperties,
  }
  return (
    <TextFieldMUI
      className={classNames(styles.root, className)}
      variant={variant}
      {...{
        helperText,
        label,
        type: showVisibility ? 'text' : type,
        error: !!error,
        value,
        InputProps,
        inputProps,
        disabled,
        ...(other as any),
      }}
    />
  )
}

TextField.displayName = 'TextField'
TextField.defaultProps = { size: 'medium' }
export default TextField
