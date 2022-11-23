
import Head from 'next/head';
import DetailsDomain from 'domains/details';
import { BASE_URL } from '_core/configs/config';

const Details = ({ data }) => {
    return (
        <>
            <Head>
                <title>مشخصات و قیمت {data?.name}</title>
                <meta name="description" content={data?.shortDescription} />
                <meta name="keywords" content="" />
            </Head>
            <DetailsDomain data={data} />
        </>
    );
};
export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await fetch(`${BASE_URL}public/kala/100346/id/${id}`);
    const data = await res.json();
    return { props: { data } }
}
export default Details;