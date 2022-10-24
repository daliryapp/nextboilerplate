import { useRouter } from 'next/router'

const Home = ({ data }) => {
    return (
        <div>Homepage</div>
    );
};

// export async function getServerSideProps() {
//     // const { query } = useRouter()
//     // Fetch data from external API
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pendy/1`)
//     const data = await res.json()

//     return { props: { data } }
// }

export default Home;