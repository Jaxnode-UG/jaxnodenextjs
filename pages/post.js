class Post extends React.Component {
    static async getInitialProps({asPath, pathname, query}) {
        console.log('asPath', asPath);
        console.log('pathname', pathname);
        console.log('SLUG', query.slug);
        return {  };//slug: query.slug
    }
    render() {
        return <h1>My blog post</h1>;
    }
}

export default Post;