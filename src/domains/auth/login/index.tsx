// ** React Imports
import { ReactNode, useState, useEffect, MouseEvent } from 'react'
import { Container } from "@mui/material";
import AuthLayout from 'domains/auth/AuthLayout';
import { Box, TextField, InputAdornment, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from '@mui/material/styles'
import { useForm, Controller } from "react-hook-form";
import { setAuthData } from "_core/store/reducers/auth/authSlice";
import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginWithMobileValidation } from "_core/utils/validations/authValidation";
import {
    login,
} from "_core/store/reducers/auth/asyncActions";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface State {
    password: string
    showPassword: boolean
}
interface LoginDataTypes {
    rememberMe: boolean,
    password: string,
    username: string,
    captchaToken: string,
}
const LinkStyled = styled('a')(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: theme.palette.primary.main
}))
const Login = () => {
    const router = useRouter()
    const dispatch = useDispatch<any>();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const resolver = yupResolver(loginWithMobileValidation);
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
        defaultValues: { username: "", password: "" },
        resolver,
    });

    const onSubmit = async (data: any) => {
        try {
            const gToken = await executeRecaptcha();
            const loginData: LoginDataTypes = {
                username: data?.username,
                password: data?.password,
                captchaToken: "",
                rememberMe: true,
            };

            dispatch(setAuthData(loginData));
            await dispatch(login(loginData));

        } catch (error) {
            console.log(error)
        }
    };
    return (
        <>
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
                            name="username"
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <TextField
                                    error={errors?.username}
                                    helperText={errors?.username?.message}
                                    margin="normal"
                                    fullWidth
                                    size="small"
                                    id="username"
                                    label="موبایل"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
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

                        <Box
                            sx={{ width: '100%', mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
                        >
                            <Link passHref
                                href='/auth/forgot-password'>
                                <LinkStyled >فراموشی رمز عبور</LinkStyled>
                            </Link>
                        </Box>
                        <LoadingButton
                            fullWidth
                            loading={isSubmitting}
                            size='large'
                            variant='contained'
                            sx={{ marginBottom: 7 }}
                            type="submit"
                        >
                            ورود
                        </LoadingButton>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Typography variant='body2' sx={{ marginRight: 2, ml: 1 }}>
                                اکانت ندارید ؟ {" "}
                            </Typography>
                            <Typography variant='body2'>
                                <Link passHref href='/auth/register'>
                                    <LinkStyled>ایجاد اکانت</LinkStyled>
                                </Link>
                            </Typography>
                        </Box>


                    </Box>
                </Container>
            </AuthLayout>
        </>
    );
};
export default Login;