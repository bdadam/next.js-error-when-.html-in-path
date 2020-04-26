export default (props) => {
    return <h1>Hello</h1>;
};

export const getStaticPaths = async () => {
    return { fallback: false, paths: [{ params: { slug: 'article-slug.html' } }] };
};

export const getStaticProps = async () => {
    return { props: {} };
};
