import Head from 'next/head'
import Layout from '@components/Layout/Layout'
import Jumbotron from '@components/Jumbotron/Jumbotron';
import List from '@components/List/List'

export const config = { amp: 'hybrid' }

const Post = ({ post }) => {
    const { id, title, body } = post;

    return (
        <Layout>
            <Head>
                <title>News Article {id}</title>
                <style amp-custom>
                   {`
                    body {
                        background-color: orange
                    }
                   `}
                </style>
            </Head>
            <Jumbotron title={title} description={body} />
            <List />
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();

    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const allPosts = posts.slice(0, 9);

    const paths = allPosts.map(post => `/news/${post.id}`) || [];

    return {
        paths,
        fallback: false
    }
}

export default Post;