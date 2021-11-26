import React from 'react';
import Fade from 'react-reveal/Fade';

const Faq = () => {
    return (
        <div>
             <section className="container my-5 pt-5 text-start">
            <h2 className="fw-bold text-center">Frequently Asked <span style={{color: "orangered"}}>Questions</span></h2>

            <div className="row align-items-center">
                <Fade>
                <div className="col-lg-6 mb-5">
                    <img width='100%' src="https://pambda.com/Documentation/faq/faq.svg" alt="" />
                </div>
                </Fade>
                <Fade>
                <div className="col-lg-6" >
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne">
                                    How do I return my item?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                • You can add "Review" to describe your return reason elaborately. <br />
                                • Contact with Us in Email or Mobile Number, we will discribe you how to return your product
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo">
                                    How to Know About discount offers
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                • When You Login to our Site, we will get your Email address. When Offers are available, we will send to your email all the Details about offer 
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree">
                                   If i Want to Cancel My Order, What i need to do ?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                • When you Order any Product, we added this Product in "My Order" menu.. You can cancel your Order from That Option 
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour">
                                    How to know When My Product will deliever ?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    you will get Confirmation messege in Your Email Address..We Will Let you Know about the Delivery Time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        </section>
        </div>
    );
};

export default Faq;