

import { useEffect, useState } from "react";
import { getBasicMegaTree } from "../../utils/wordpress";

const BasicMegaTree = ({ basicMegaTree }) => {

    const [treeType, setTreeType] = useState();
    const [treeHeight, setTreeHeight] = useState();
    const [strips, setStrips] = useState();
    const [spacing, setSpacing] = useState();
    const [controllerType, setControllerType] = useState();
    const [total, setTotal] = useState(0.00);
    const [contactUs, setContactUs] = useState(false);


    const calculateCost = () => {
        let totalCost = 0;

        if (treeHeight) {

            switch (treeHeight) {
                case "6":
                    totalCost = 10000;
                    break;
                case "9":
                    totalCost = 14000;
                    break;
                case "12":
                    totalCost = 18000;
                    break;
                default:
                    totalCost = 10000;
            }
        }

        if (spacing && strips) {

            switch (spacing) {
                case "5":
                    totalCost += (strips * treeHeight) * 2;
                    break;
                case "4":
                    totalCost += (strips * treeHeight) * 4;
                    break;
                case "3":
                    totalCost += (strips * treeHeight) * 6;
                    break;
                case "1":
                    totalCost += (strips * treeHeight) * 8;
                    break;
                default:
                    totalCost += (strips * treeHeight) * 1;
            }
        }

        if (treeType) {

            switch (treeType) {
                case "full":
                    totalCost = totalCost;
                    break;
                case "half":
                    totalCost = totalCost / 2;
                    break;
                case "corner":
                    totalCost = (totalCost / 4) * 3;
                    break;
                default:

                    break;

            }
        }

        if (controllerType) {

            switch (controllerType) {
                case "raspberry_pi":
                    totalCost = totalCost + 300;
                    break;
                case "beaglebone":
                    totalCost = totalCost + 200;
                    break;
                default:

                    break;

            }
        }

        setTotal(totalCost.toFixed(2));
    }

    useEffect(() => {
        calculateCost();
    }, [treeType, treeHeight, strips, spacing, controllerType])




    return <>
        <div className="bg-white container-fluid" style={{ marginBottom: '1px' }}>

            <div className="row bg-white mb-5" style={{ color: "black", marginBottom: '100px' }}>
                <h2 className="mt-5 mb-2 text-center" style={{ textTransform: "uppercase" }}>Custom Mega tree</h2>
                <div className="col-md-1"></div>
                {/* <div
                    className="col-md-8 p-5" style={{ fontSize: 18, borderRadius: 30 }}
                    dangerouslySetInnerHTML={{ __html: basicMegaTree && basicMegaTree[0]?.content?.rendered }}
                ></div> */}
                <div className="col-md-10 mt-5">

                    <div className="row">
                        <div className="col-md-6">
                            <p>We recognise that our pre-built trees don't always cover everyones requirements, however we have the ability to build Mega Trees to match your desired specifications.</p>
                            <p>Using the options provided, you can customise your own tree, by specifying the height, the number of LED strips and even the density of the pixels</p>
                            <p>If you don't see options to meet your requirements, then get in touch with us instead as we will most certainly be able to help</p>

                            {/* <div className="row mx-4">
                                <div className="col-md-12 mb-2" style={{ background: 'lightgray', height: '300px' }}>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-6">

                            <div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Tree Type</label><br />
                                    {/* <small>The more strips you have the closer they will be - making the visual effect better</small> */}
                                    <select class="form-select" aria-label="Default select example" onChange={(e) => setTreeType(e.target.value)}>
                                        <option value="">-</option>
                                        <option value="full">Full Tree (360&deg;)</option>
                                        <option value="half">Half Tree (180&deg;)</option>
                                        <option value="corner">Corner Tree (90&deg; segment missing)</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Tree Height</label><br />
                                    {/* <small>The more strips you have the closer they will be - making the visual effect better</small> */}
                                    <select class="form-select" aria-label="Default select example" onChange={(e) => setTreeHeight(e.target.value)}>
                                        <option value="">-</option>
                                        <option value="6">6ft</option>
                                        <option value="9">9ft</option>
                                        <option value="12">12ft</option>

                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">No. of LED Strips</label><br />
                                    {/* <small>The more strips you have the closer they will be - making the visual effect better</small> */}
                                    <select class="form-select" aria-label="Default select example" onChange={(e) => setStrips(e.target.value)}>
                                        <option value="">-</option>
                                        <option value="16">16</option>
                                        <option value="24">24</option>
                                        <option value="32">32</option>
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">LED Spacing</label><br />
                                    {/* <small>The more strips you have the closer they will be - making the visual effect better</small> */}
                                    <select class="form-select" aria-label="Default select example" onChange={(e) => setSpacing(e.target.value)}>
                                        <option value="">-</option>
                                        <option value="5">5 inch apart</option>
                                        <option value="4">4 inch apart</option>
                                        <option value="3">3 inch apart</option>
                                        <option value="1">1 inch apart</option>
                                    </select>
                                </div>


                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Micro Controller Type</label><br />
                                    {/* <small>The more strips you have the closer they will be - making the visual effect better</small> */}
                                    <select class="form-select" aria-label="Default select example" onChange={(e) => setControllerType(e.target.value)}>
                                        <option value="">-</option>
                                        <option value="raspberry_pi">Raspberry Pi</option>
                                        <option value="beaglebone">BeagleBone</option>
                                        <option value="none">None - will provide own Micro Controller</option>
                                    </select>
                                </div>

                            </div>

                            <p className="mt-3" style={{ fontSize: "1.5em" }}>

                                <span style={{ fontSize: "1.5em" }}>
                                    <strong>£{total}</strong>
                                </span>
                            </p>

                            <div className="btn btn-lg btn-primary mt-5" style={{ backgroundColor: "#0BC7D3", border: "white", borderRadius: 30 }}>
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