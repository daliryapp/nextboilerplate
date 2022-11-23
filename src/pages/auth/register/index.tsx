import Head from 'next/head';
import RegisterDomain from 'domains/auth/register';

const Register = () => {
    return (
        <>
            <Head>
                <title>Register | PendyShop</title>
                <meta name="description" content="description" />
                <meta name="keywords" content="" />
            </Head>
            <RegisterDomain />
        </>
    );
};
export default Register;