

import { getBasicMegaTree } from "../../utils/wordpress";

const BasicMegaTree = ({ basicMegaTree }) => {
    return <>
        <div className="bg-white container-fluid" style={{ marginBottom: '1px' }}>

            <div className="row bg-white mb-5" style={{ color: "black", marginBottom: '100px' }}>
                <h2 className="mt-5 mb-2 text-center" style={{ textTransform: "uppercase" }}>Basic Mega tree</h2>
                <div className="col-md-1"></div>
                {/* <div
                    className="col-md-8 p-5" style={{ fontSize: 18, borderRadius: 30 }}
                    dangerouslySetInnerHTML={{ __html: basicMegaTree && basicMegaTree[0]?.content?.rendered }}
                ></div> */}
                <div className="col-md-10 mt-5">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="row mx-4">

                                <div className="col-md-12 mb-2" style={{ background: 'lightgray', height: '300px' }}>

                                </div>
                                <div className="col-md-12 ">
                                    <div className="row  d-flex gap-2 justify-content-center">
                                        <div className="col-md-3" style={{ background: 'lightgray', height: '100px' }}>

                                        </div>
                                        <div className="col-md-3" style={{ background: 'lightgray', height: '100px' }}>

                                        </div>
                                        <div className="col-md-3" style={{ background: 'lightgray', height: '100px' }}>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 mb-2 mt-2 text-center" style={{ height: '300px' }}>
                                    <strong>
                                        <em>
                                            Includes Expert installation
                                        </em>
                                    </strong>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <p>Introducing our Pre-built RGB Pixel MegaTree, a well designed and durable outdoor commercial LED pre-built ready for installation. Years of research and development have resulted in a stunning display that combines computer-controlled animations, color-changing LED lights, and high-quality components.</p>
                            <p>
                                The tree's powder-coated tube frame, CNC laser-cut steel, and marine-grade hardware ensure long-lasting performance year after year.
                            </p>
                            <p>With the ability to program new sequence animations annually, this MegaTree offers fresh and captivating content while maximizing your investment.
                            </p>
                            Our commercial-rated Christmas Tree brings awe-inspiring visuals to any occasion. The dynamic display of color-changing LED lights creates a mesmerizing experience for audiences. Designed for durability and built with top-notch materials, this MegaTree withstands various weather conditions. Its computer-controlled features and the option to program new animations annually make it a versatile investment that guarantees a breathtaking display every time.
                            <p className="mt-3" style={{ fontSize: "1.5em" }}>
                                Only<br />
                                <span style={{ fontSize: "1.5em" }}>
                                    <strong>£11,499.99</strong>
                                </span>
                            </p>

                            <div className="btn btn-lg btn-primary" style={{ backgroundColor: "#0BC7D3", border: "white", borderRadius: 30 }}>
                                Add to cart
                            </div>
                        </div>
                    </div>



                </div>

                <div className="col-md-1"></div>
            </div>

            <div className="row">
                <div className="col-md-12"></div>
                <div className="col-md-6">

                </div>
            </div>


        </div >

    </>

}

export default BasicMegaTree;

export async function getStaticProps({ params }) {

    const basicMegaTree = await getBasicMegaTree();

    return {
        props: {
            basicMegaTree,
        },
        revalidate: 10, // In seconds
    }

}