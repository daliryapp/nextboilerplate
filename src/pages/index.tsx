
import Head from 'next/head';
import HomeDomain from 'domains/mainPage';
import { BASE_URL } from '_core/configs/config';

const Home = ({ data }) => {
    return (
        <>
            <Head>
                <title>{data?.acceptorName}</title>
                <meta name="description" content={data?.shortDescription} />
                <meta name="keywords" content="" />
            </Head>
            <HomeDomain data={data} />
        </>
    );
};
export async function getServerSideProps() {
    // const { query } = useRouter()
    // Fetch data from external API

    const res = await fetch(`${BASE_URL}public/acceptors/ref-code/100346`)
    const data = await res.json();
    return { props: { data } }
}
export default Home;