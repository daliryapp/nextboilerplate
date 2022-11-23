import { makeStyles } from '_core/theme'
import { useRouter } from 'next/router'
import { ITransition } from './AuthLayout';


interface IStyleProps {
  transition?: ITransition
  classes?: any
}

const useAuthLayoutStyle = makeStyles<IStyleProps>(
  ({ palette: { primary, secondary } }) => {
    const { pathname } = useRouter()

    const bgColor =
      pathname === '/otp' || pathname === '/forgetPassword'
        ? `linear-gradient(0deg, #fff 0%, ${secondary[50]} 100%)`
        : `linear-gradient(0deg, #fff 0%, ${primary[50]} 100%)`

    return {
      bg: {
        background: bgColor,
        width: '100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundSize: '100% 25%',
        justifyContent: 'space-between',
      },
      container: {
        width: '100%',
        height: '100vh',
        position: 'relative',
      },
      animate: ({ transition }) => ({
        animationName: transition,
        animationDuration: '0.2s',
        animationTimingFunction: 'ease-in',
        animationFillMode: 'forwards',
      }),
    }
  },
)

export default useAuthLayoutStyle;

