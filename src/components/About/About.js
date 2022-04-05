import React from 'react';

const About = () => {
    return (
        <div className='container question my-5'>
            <h2 className="text-center fw-bold my-5 faq">About this keyboard</h2>

            <div id="accordionExample">
                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            What is key features of this keyboard?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body fs-5 fw-light">
                            <strong>
                                <b>[Key Features]</b><br /><br />
                                1. Premium-quality and affordable 65% keyboard<br /> <br />
                                2. PCB: Type-C（Support C-C), QMK, ESD-protected, etc. The PCB is compatible with R1 Space65.<br /> <br />
                                3. Mounting Method: Top mount; with two noise and vibration reduction pads<br /> <br />
                                4. No switch leakage views.<br /> <br />
                                5. Carbon fiber plate or Aluminum plate (compatible with R1)<br /> <br />
                                6. Manufacturer: gray studio and factory<br /> <br />
                                7. Keyboard Design: airpotter & oldcat<br /> <br />
                                8. PCB Design: DEMO Studio <br /> <br /><br /> <br />



                                <b>[SPACE65:CyberVoyager Package Includes]</b><br /><br />

                                Each unit will include the following:
                                1x case, top and bottom<br /> <br />
                                1x LED badge<br /> <br />
                                1x weight<br /> <br />
                                1x badge<br /> <br />
                                1x L-shaped badge<br /> <br />
                                1x PCB<br /> <br />
                                1X LED diffuser<br /> <br />
                                1x vibration reduction pad<br /> <br />
                                1x noise reduction pad<br /> <br />
                                1x screwdriver (graystudio brand)<br /> <br />
                                1x tweezer (do test the PCB before soldering!)<br /> <br />
                                1x instructional manual<br /> <br />
                                Screws, rubber feet, some backup SMD LEDs, box designed by airpotter.<br /> <br />

                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;