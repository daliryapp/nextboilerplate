// ** React Imports
import { useState, Fragment, MouseEvent, useEffect } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import { Container } from "@mui/material";
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
// ** Demo Imports
import { useForm, Controller } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerWithMobileValidation } from "_core/utils/validations/authValidation";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData } from "_core/store/reducers/auth/authSlice";
import { register } from "_core/store/reducers/auth/asyncActions";
import { useRouter } from 'next/router'
import { openToast } from 'components/Toast'
import LoadingButton from "@mui/lab/LoadingButton";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import AuthLayout from 'domains/auth/AuthLayout';

interface State {
  password: string
  showPassword: boolean
}
// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const RegisterPage = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { registerError, status } = useSelector((state: any) => state.auth);
  // ** States
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      acceptRules: false,
    },
    resolver: yupResolver(registerWithMobileValidation),
  });
  const onSubmit = async (data: any) => {
    const gToken = await executeRecaptcha();
    const registerData: any = {
      mobile: data.mobile,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      captchaToken: gToken,
      login: data.mobile,
      langKey: "fa",
      clubType: "AYRIA"
    };

    try {
      dispatch(setAuthData(registerData));

      const result = await dispatch(register(registerData));
      if (result?.type === 'auth/register/fulfilled') {
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const redirectFn = async () => {
      if (status !== "fulfilled-register" && registerError) {
        openToast('error', registerError)

      }
    }
    redirectFn();
    // eslint-disable-next-line
  }, [status, registerError]);
  return (
    <AuthLayout transition="MOVEDOWN-ROUTE">
      <Container maxWidth="xs" sx={{
        mt: '60px',
        p: 5,
        overflowX: 'hidden'
      }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          gap={0}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                error={errors?.firstName}
                helperText={errors?.firstName?.message}
                margin="normal"
                fullWidth
                size="small"
                id="name"
                label="نام"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}

              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                error={errors?.lastName}
                helperText={errors?.lastName?.message}
                margin="normal"
                fullWidth
                size="small"
                id="lastName"
                label="نام خانوادگی"
                name="lastName"
                autoComplete="lastName"
                autoFocus
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}

              />
            )}
          />
          <Controller
            control={control}
            name="mobile"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                error={errors?.mobile}
                helperText={errors?.mobile?.message}
                margin="normal"
                fullWidth
                size="small"
                id="mobile"
                label="موبایل"
                name="mobile"
                autoComplete="موبایل"
                type="phone"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}

              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                error={errors?.password}
                helperText={errors?.password?.message}
                margin="normal"
                fullWidth
                id="password"
                size="small"
                label="رمز عبور"
                name="password"
                autoComplete="password"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                type={values.showPassword ? 'text' : 'password'}
                endadornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <RemoveRedEyeOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField
                size="small"
                error={errors?.confirmPassword}
                helperText={errors?.confirmPassword?.message}
                margin="normal"
                fullWidth
                id="confirmPassword"
                label="تکرار رمزر عبور"
                name="confirmPassword"
                autoComplete="password"
                type={"password"}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}

              />
            )}
          />
          <Stack direction="row" justifyContent="flex-start" sx={{
            width: '100%',
            '& label': {
              mr: 0
            },
            '& .MuiCheckbox-root': {
              pr: 0
            }
          }}>
            <Controller
              control={control}
              name="acceptRules"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                    name="acceptRules"
                    id="acceptRules"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value} />}
                  label={
                    <Fragment>
                      <Link href='/' passHref>
                        <LinkStyled onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                          با قوانین و مقررات {" "}
                        </LinkStyled>
                      </Link>
                      <span>موافقم</span>
                    </Fragment>
                  }
                />
              )}
            />
          </Stack>
          <LoadingButton fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 7 }} loading={isSubmitting}>
            ثبت نام
          </LoadingButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Typography variant='body2' sx={{ marginRight: 2 }}>
              درحال حاضر اکانت دارید؟
            </Typography>
            <Typography variant='body2'>
              <Link passHref href='/auth/login'>
                <LinkStyled>وارد شوید</LinkStyled>
              </Link>
            </Typography>
          </Box>

        </Box>
      </Container>
    </AuthLayout>
  )
}


export default RegisterPage
