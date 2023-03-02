

import { getPosts } from "../../utils/wordpress";



const BlogPostCard = ({ post, number }) => {

    const imageUrl = post?._embedded['wp:featuredmedia'][0]?.source_url;

    return <a href={`blog/${post?.slug}`}>
        <div className="card bg-light p-0 border-white" style={{ width: 250, height: 280, borderRadius: 10, fontSize: 14, color: "#212121" }}>
            <div style={{ height: "60%", width: "100%", backgroundSize: 'cover', backgroundImage: `url(${imageUrl})`, borderRadius: 10 }}></div>
            <div className="p-2 mt-2 text-center" style={{ fontSize: 12 }}>
                {post?.date}
                {/* <div dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}></div> */}
            </div>

            <div className="text-center mt-3">
                <h5 style={{ fontSize: 14 }}>{post?.title?.rendered}</h5>
            </div>
        </div >
    </a>
}

const BlogIndex = ({ posts }) => {
    return <>
        <div className="mx-5">
            <div className="blur-a"></div>
            <div className="blur-b"></div>
            <div className="blur-c"></div>
            <h2 className="mt-5 mb-5 text-center" style={{ textTransform: "uppercase" }}>Our <span style={{ color: "#F134E9" }}>Blog</span></h2>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">Take a look at our recent work, things we found interesting and useful information about our services in the posts below</div>
                <div className="col-md-2"></div>
            </div>

            <div className="mt-5 row">
                <div className="col-md-2 "></div>
                <div className="col-md-8 p-4 d-flex flex-wrap flex-row gap-2 justify-content-evenly align-items-center">

                    {posts.map((post, i) => <BlogPostCard post={post} number={i} />)}
                </div>
                <div className="col-md-2"></div>
            </div>

        </div>
    </>

}

export default BlogIndex;

export async function getStaticProps({ params }) {

    const posts = await getPosts();

    return {
        props: {
            posts,
        },
        revalidate: 10, // In seconds
    }

}