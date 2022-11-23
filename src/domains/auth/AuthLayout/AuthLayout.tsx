// import { Context } from 'providers/LanguageProvider'
import cs from 'classnames'
import React, { FC, ReactNode } from 'react'
import useAuthLayoutStyle from './useAuthLayoutStyle';
import GlobalStyle from "./useGlobarStyle";

export type ITransition = 'MOVEUP-ROUTE' | 'MOVEDOWN-ROUTE'
interface IAuthLayout {
  children?: ReactNode
  transition?: ITransition
}

const AuthLayout: FC<IAuthLayout> = (props) => {
  const { children, transition } = props
  const classes = useAuthLayoutStyle(props)

  return (
    <>
      <GlobalStyle />
      <div className={cs(classes.container, transition && classes.animate)} >
        <div className={classes.bg}>{children}</div>
      </div>
    </>
  )
}

export default AuthLayout
