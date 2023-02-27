import Head from 'next/head'
import { getEvents, getPosts } from '../utils/wordpress';
import Post from "../components/Post";
import Event from "../components/Event";

export default function Home({ posts, events }) {

  // const jsxPosts = posts.map(post => {
  //   const featuredMedia = post['_embedded']['wp:featuredmedia'][0];
  //   return (
  //     <Post post={post} featuredMedia={featuredMedia} key={post.id} />
  //   )
  // });

  // const jsxEvents = events.map(event => {
  //   const featuredMedia = event['_embedded']['wp:featuredmedia'][0];
  //   return (
  //     <Event event={event} featuredMedia={featuredMedia} key={event.id} />
  //   )
  // });

  const testimonials = [];

  return (
    <>
      <Head>
        <title>Niche Pixcel Displays</title>
        <meta name="description" content="Bespoke fully automated LED lighting shows tailored to your needs with audio and video" />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      {/* <div className="container bg-black text-white"> */}

      {/* hero section */}
      <div className="row mb-5 px-4">
        <div className="col-md-12 p-5" style={{ position: "relative" }}>
          <div className="blur-a"></div>
          <div className="blur-b"></div>
          <div className="blur-c"></div>

          <h1 className="mt-5 pt-5 d-none d-md-block" style={{ zIndex: 2, fontSize: "4rem", textTransform: "uppercase", fontWeight: "bold" }}>
            We Bring <span className="blink" style={{ color: "#93E9EE", textShadow: "0px 0px 24px rgba(175, 250, 237, 0.92)" }}>Light</span>
            <br />
            to <span style={{ color: "#EC79E7" }}>your</span> events
          </h1>

          <h1 className="mt-2 d-md-none" style={{ zIndex: 2, fontSize: "2.5rem", textTransform: "uppercase", fontWeight: "bold" }}>
            We Bring <span className="blink" style={{ color: "#93E9EE", textShadow: "0px 0px 24px rgba(175, 250, 237, 0.92)" }}>Light</span>
            <br />
            to <span style={{ color: "#EC79E7" }}>your</span> events
          </h1>

          <p style={{ fontSize: "1.5rem" }}>
            BESPOKE LIGHTING DISPLAYS TAILORED TO YOUR REQUIREMENTS
          </p>

          <div className="btn btn-lg btn-primary" style={{ backgroundColor: "#0BC7D3", border: "white", borderRadius: 30 }}>
            GET A QUOTE
          </div>

        </div>


      </div>

      {/* our services */}

      <div className="row mb-5 px-4" style={{ background: "#121212" }}>
        <div className="col-md-12 p-5 text-center">
          <h5 style={{ textTransform: "uppercase", fontSize: "2em", fontWeight: "bold" }}>Our <span style={{ color: "#4FE8FD" }}>Services</span></h5>
          <div className="mt-3 mb-2" >Here’s how we can help you deliver an incredible immersive event</div>
          <p>

            We function as an extension of your you or your team, saving you valuable time and stress.
            We use state-of-the-art technology to deliver technically perfect event production.

            Our lighting displays are completely bespoke, tailored and programmed specifically for your needs, meanging that no-one else will have the same

          </p>
          <div className="row d-flex justify-content-center gap-5  mt-5 mb-5">
            <div style={{ backgroundSize: "cover", backgroundImage: "url('https://s.alicdn.com/@sc04/kf/H885ada37595342edab8a9852d94c6fb6A.jpg_960x960.jpg')", marginTop: 20, width: "150px", border: "solid 1px #F134E9", borderRadius: "25px", height: "150px" }}></div>
            <div style={{ backgroundSize: "cover", backgroundImage: "url('https://www.sussexexpress.co.uk/webimg/b25lY21zOmEwYWM2MDM4LWJiNTUtNGRjNS04MTdmLWI4OTdhY2IwMWZmYzo5MDg5MjFjNi00NWNiLTQwNGItYjYyNy00MjNiODgwZjY1YmU=.jpg?crop=61:45,smart&width=800')", marginTop: 20, width: "150px", border: "solid 1px #4FE8FD", borderRadius: "25px", height: "150px" }}></div>
            <div style={{ backgroundSize: "cover", backgroundImage: "url('http://p.ledinside.com/led/2012-11/1352773624_60275.png')", marginTop: 20, width: "150px", border: "solid 1px #FEEF62", borderRadius: "25px", height: "150px" }}></div>
            <div style={{ backgroundSize: "cover", backgroundImage: "url('https://www.gannett-cdn.com/presto/2020/12/16/NAUG/3f4eac00-9993-4572-8f24-61e0830fef20-GAAUG-121720-ChristmasLightShow3_SS.jpg?height=576')", marginTop: 20, width: "150px", border: "solid 1px #39FD70", borderRadius: "25px", height: "150px" }}></div>
          </div>
        </div>
      </div>

      {/* our processes */}
      <div className="row mb-5 px-4">
        <div className="col-md-2"></div>
        <div className="col-md-12 p-5 text-center">

          <h5 style={{ textTransform: "uppercase", fontSize: "2em", fontWeight: "bold" }}>Our <span style={{ color: "#F134E9" }}>Process</span></h5>
          <div className="mt-3 mb-2" >How does the process work?</div>
          <p>
            Initial meeting to discuss your requirements and vision
            Our expert light show engineers will come out to your venue to size up and render models of the venue
            Using the models taken from the earlier step, the light programming team then program the light sequences to match your venues architecture
            Installation of the lighting ready for the show
            The light show begins and your guests will be amazed
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>

      {/* case studies  */}
      <div className="row px-4 " style={{ background: "#121212" }}>
        <div className="col-md-2"></div>
        <div className="col-md-8 p-5 text-center">
          <h5 style={{ textTransform: "uppercase", fontSize: "2em", fontWeight: "bold", color: "#4FE8FD" }}>Case Studies</h5>

          <p className="mt-5">
            Why not take a look at our previous work for inspiration
            We have a collection of case studies of our previous happy customers, that you can take a look at, to see what their requirements were and what we did in order to provide the client with not only the light show that they wanted, but how we go above and beyond to ensure everything down to sound and timing is
          </p>
          <div className="btn mt-5  btn-primary" style={{ backgroundColor: "#F134E9", border: "white" }}>
            See All Our Case Studies
          </div>

        </div>
        <div className="col-md-2"></div>

      </div>

      {/* testimonials */}
      <div className="row px-4 " style={{ background: "#fff" }}>
        <div className="col-md-2"></div>
        <div className="col-md-8 p-5 text-center">
          <h5 style={{ textTransform: "uppercase", fontSize: "2em", fontWeight: "bold", color: "#212121" }}>Testimonials</h5>

          <p className="mt-5" style={{ color: "#212121" }}>
            We're known for delivering a 5 star experience, but don't just take our word for it. Here's what our clients have to say about the service we provided them.
          </p>
          <div>
            {testimonials?.map((testimonial) => {
              return <Testimonial data={testimonial} />
            })}
          </div>
          <div className="btn mt-5  btn-primary" style={{ backgroundColor: "#4FE8FD", border: "white" }}>
            See All Testimonials
          </div>

        </div>
        <div className="col-md-2"></div>

      </div>


      {/* <div className="row">
          <div className="col-lg-8">
            <h2 className="pb-3">Our blog posts</h2>
            {jsxPosts}
          </div>  
          <div className="col-lg-4">
            <h2 className="pb-3">Events</h2>
            {jsxEvents}
          </div>
        </div> */}
      {/* </div> */}
    </>
  )

}

// export async function getStaticProps({ params }) {

//   const posts = await getPosts();
//   const events = await getEvents();
//   return {
//     props: {
//       posts,
//       events
//     },
//     revalidate: 10, // In seconds
//   }

// }
