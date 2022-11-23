import Head from 'next/head';
import LoginDomain from 'domains/auth/login';

const Login = () => {
    return (
        <>
            <Head>
                <title>Login | PendyShop</title>
                <meta name="description" content="description" />
                <meta name="keywords" content="" />
            </Head>
            <LoginDomain />
        </>
    );
};
export default Login;