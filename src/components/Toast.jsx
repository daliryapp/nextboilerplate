import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { Typography } from '@mui/material'

const Tost = () => {
  const lang = useSelector(state => state.setting.lang)
  const theme = useSelector(state => state.setting.theme)

  const isRtl = lang === 'fa' || lang === 'ar'

  return (
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  )
}

export default Tost

export const openToast = (type, text) => {
  const options = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  }

  if (type === 'info')
    toast.info(
      <Typography color='#fff' variant='body1'>
        {text}
      </Typography>,
      options
    )
  else if (type === 'success')
    toast.success(
      <Typography color='#fff' variant='body1'>
        {text}
      </Typography>,
      options
    )
  else if (type === 'warning')
    toast.warn(
      <Typography color='#fff' variant='body1'>
        {text}
      </Typography>,
      options
    )
  else if (type === 'error')
    toast.error(
      <Typography color='#fff' variant='body1'>
        {text}
      </Typography>,
      options
    )
  else toast(text, options)
}
