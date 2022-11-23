import React, { FC } from 'react'
//material-ui
import { IconButton, Typography } from '@material-ui/core'
//style
import useStyle from './useChipTagStyle'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


interface IChipTag {
  text?: string
  onCloseClick?: any
  onClickTag?: any
  close?: boolean
}

const ChipTag: FC<IChipTag> = (props) => {
  const { text, onCloseClick, close, onClickTag } = props
  const classes = useStyle()
  return (
    <div className={classes.container}>
      <div onClick={onClickTag} className={classes.row}>
        <Typography>{text}</Typography>
      </div>
      {close && (
        <IconButton className={classes.iconButton} onClick={onCloseClick}>
          <CloseOutlinedIcon />
        </IconButton>
      )}
    </div>
  )
}

export default ChipTag
