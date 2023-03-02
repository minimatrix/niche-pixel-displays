

import { getAbout } from "../../utils/wordpress";

const About = ({ about }) => {
    return <>
        <div className="mx-5">

            <h2 className="mt-5 mb-5 text-center" style={{ textTransform: "uppercase" }}><span style={{ color: "#4FE8FD" }}>About</span> Us</h2>
            <div className="blur-a"></div>
            <div className="blur-b"></div>
            <div className="blur-c"></div>
            <div className="row">
                <div className="col-md-2"></div>
                <div
                    className="col-md-8 bg-dark  p-5" style={{ fontSize: 18, borderRadius: 30 }}
                    dangerouslySetInnerHTML={{ __html: about[0]?.content?.rendered }}
                ></div>
                <div className="col-md-2"></div>
            </div>

        </div>
    </>

}

export default About;

export async function getStaticProps({ params }) {

    const about = await getAbout();

    return {
        props: {
            about,
        },
        revalidate: 10, // In seconds
    }

}