import React, {useState} from "react";
import axios from "axios";

function Home() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function sendData(e) {
        
        e.preventDefault();

        const newContacts ={
            name,
            email,
            subject,
            message
        }

        axios.post("http://localhost:8100/contact/Send_contact_details", newContacts).then(()=>{
            alert("Send to message Succesfully");
            window.location = "/";
        }).catch((err)=>{
            alert(err);
        })
    }


    return (
        <div>
            {/* Sub Header  */}
            <div class="sub-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-sm-8">
                            <div class="left-content">
                                <p>Sri Lankan <em>CINNAMON</em> Cultivation Development </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <div class="right-icons">
                                <ul>
                                    <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ***** Header Area Start ***** */}
            <header class="header-area header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="main-nav">
                                {/* ***** Logo Start ***** */}
                                <a href="/" class="logo">
                                    CINNAMON
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul class="nav">
                                    <li class="scroll-to-section"><a href="#bg-video" class="active">Home</a></li>
                                    <li class="scroll-to-section"><a href="/about-cinnamon">About</a></li>
                                    <li class="scroll-to-section"><a href="#meetings">Cinnamon Product</a></li>
                                    <li class="scroll-to-section"><a href="#contact">Contact Us</a></li>
                                    <li class="scroll-to-section"><a href="/login">Join us</a></li>
                                </ul>
                                
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* ***** Header Area End ***** */}

            {/* ***** Main Banner Area Start ***** */}
            <section class="section main-banner" id="top" data-section="section1">
                <video id="bg-video" controls autoPlay muted loop>
                    <source src="assets/images/cinnamon.mp4" type="video/mp4" />
                </video>

                <div class="video-overlay header-text">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="caption">
                                    <h6>Hello Sri Lankans</h6>
                                    <h2>Welcome to CINNAMON</h2>
                                    <p>Thank you to all of you who have come together to promote the local cinnamon trade and cultivation. Basic facilities are provided for all the services availed by this.</p>
                                    <div class="main-button-red">
                                        <div class=""><a href="/login">Join Us Now!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ***** Main Banner Area End ***** */}

            <section class="services">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="owl-service-item owl-carousel">

                                <div class="item">
                                    <div class="icon">
                                        <img src="assets/images/service-icon-01.png" alt="" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Best Production</h4>
                                        <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="icon">
                                        <img src="assets/images/service-icon-02.png" alt="" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Best Farmers</h4>
                                        <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="icon">
                                        <img src="assets/images/service-icon-03.png" alt="" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Best Entrepreneur</h4>
                                        <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="icon">
                                        <img src="assets/images/service-icon-03.png" alt="" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Best Banks</h4>
                                        <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="upcoming-meetings" id="meetings">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>CINNAMON PRODUCTS</h2>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="categories">
                                <h4>Cinnamon is delivered to the consumer in various forms</h4>
                                <ul>
                                    <li><a href="#">Cinnamon Oils</a></li><br/>                               
                                    <li><a href="#">Cinnamon Quilling</a></li>
                                    <li><a href="#">Cinnamon Powder</a></li>
                                    <li><a href="#">Cinnamon bail form</a></li>
                                    <li><a href="#">cinnamon cut form</a></li>
                                </ul>
                                <div class="main-button-red">
                                    <a href="https://www.finedininglovers.com/article/cinnamon-benefits-recipes#:~:text=It%20is%20used%20to%20flavour,hearty%20pies%2C%20crumbles%20and%20cobblers.">Benefits, Uses & Recipes</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="meeting-item">
                                        <div class="thumb">
                                            <div class="tagName">
                                                <span>Cinnamon Oils</span>
                                            </div>
                                            <a href="meeting-details.html"><img src="assets/images/Cinnamon_oil.jpg" alt="Cinnamon Oil" /></a>
                                        </div>
                                        <div class="down-content">
                                            <a href="meeting-details.html"><h4>Uses Cinnamon Oil</h4></a>
                                            <p>cinnamon oil is used to reduce the feelings of depression, faintness, and exhaustion.
                                            It is also used to strengthen libido and immunity. Its anti-rheumatic properties help to reduce joint and muscle pain.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="meeting-item">
                                        <div class="thumb">
                                            <div class="tagName">
                                                <span>Cinnamon Powder</span>
                                            </div>
                                            <a href=""><img src="assets/images/Cinnamon_Powder.jpg" alt="Cinnamon Powder" /></a>
                                        </div>
                                        <div class="down-content">
                                            <a href=""><h4>Cinnamon is Rich</h4></a>
                                            <p>it may help support blood sugar control, protect against heart disease, and reduce inflammation.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="meeting-item">
                                        <div class="thumb">
                                            <div class="tagName">
                                                <span>Cinnamon Bale Form</span>
                                            </div>
                                            <a href=""><img src="assets/images/Cinnamon_bail_form.jpg" alt="Cinnamon_bail_form" /></a>
                                        </div>
                                        <div class="down-content">
                                            <a href=""><h4>Bale Packed Form Of Compact Bales</h4></a>
                                            <p>Bale Packed Form Of Compact Bales About 25 kg to 45 kg Wrapped With Suitable Material (Gunny Or Pp Bags) CHIPS Dried Bark of Unpeelable Cinnamon Stems</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="meeting-item">
                                        <div class="thumb">
                                            <div class="tagName">
                                                <span>Cinnamon Cut Form</span>
                                            </div>
                                            <a href="meeting-details.html"><img src="assets/images/Cinnamon_cut_form.jpg" alt="Student Training" /></a>
                                        </div>
                                        <div class="down-content">
                                            <a href="meeting-details.html"><h4>quality bark to maintain a cylindrical shape</h4></a>
                                            <p>Cinnamon is originally grown wild in central hill country of
                                            Sri Lanka. Cinnamon bark is largely available in the form of quills and
                                            making quills is unique to Sri Lanka.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="apply-now" id="apply">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 align-self-center">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="item">
                                        <h3>APPLY FOR ESTATE OWNERS</h3>
                                        <p>Are you a cinnamon estate owner? Would you like to earn more? Come join us.</p>
                                        <div class="main-button-red">
                                            <div class="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="item">
                                        <h3>APPLY FOR ENTREPRENEURS</h3>
                                        <p>Are you a cinnamon entrepreneur? Do you also want to get the best quality yields at a lower cost? come join us.</p>
                                        <div class="main-button-yellow">
                                            <div class="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="accordions is-first-expanded">
                                <article class="accordion">
                                    <div class="accordion-head">
                                        <h3>Are there any financial obstacles to your farming activities? Get a <span>low interest bank loan</span> from us.</h3>
                                        <p>Cinnamon is a highly valued spice known for its unique taste and aroma.
                                             It is derived from the inner bark of trees belonging to the Cinnamomum family, 
                                             which are native to Sri Lanka, India, and other parts of Asia. Cinnamon has been used for thousands 
                                             of years in various cultures for medicinal and culinary purposes.<br/><br/>
                                             In terms of health benefits, cinnamon has been shown to have anti-inflammatory and antioxidant properties.
                                              It has also been linked to improved blood sugar control, lower cholesterol levels, and better brain function.
                                               Some studies have even suggested that cinnamon may have anti-cancer properties,
                                                although more research is needed in this area</p> 
                                    </div>
                                </article>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="our-facts">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-lg-12">
                                    <h2>A Few Facts About Our Systems</h2>
                                </div>
                                <div class="col-lg-6">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="count-area-content">
                                                <div class="count-digit">2,507</div>
                                                <div class="count-title">Current Estate Owners</div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="count-area-content">
                                                <div class="count-digit">1,260</div>
                                                <div class="count-title">Current Entrepreneurs</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="count-area-content new-students">
                                                <div class="count-digit">20,345</div>
                                                <div class="count-title">Ratings</div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="count-area-content">
                                                <div class="count-digit">580</div>
                                                <div class="count-title">Approved Bank Loan</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 align-self-center">
                            <div class="video">
                                <a href="https://youtu.be/DzOcZlmeaH0" target="_blank"><img src="assets/images/play-icon.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact-us" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 align-self-center">
                            <div class="row">
                                <div class="col-lg-12">
                                    <form id="contact" method="post" onSubmit={sendData}>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <h2>Let's get in touch</h2>
                                            </div>
                                            <div class="col-lg-4">
                                                <fieldset>
                                                    <input name="name" type="text" id="name" placeholder="YOURNAME...*" onChange={(e)=>{
                                                        setName(e.target.value);
                                                    }} />
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-4">
                                                <fieldset>
                                                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL..." onChange={(e)=>{
                                                        setEmail(e.target.value);
                                                    }} />
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-4">
                                                <fieldset>
                                                    <input name="subject" type="text" id="subject" placeholder="SUBJECT...*" onChange={(e)=>{
                                                        setSubject(e.target.value);
                                                    }} />
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-12">
                                                <fieldset>
                                                    <textarea name="message" type="text" class="form-control" id="message" placeholder="YOUR MESSAGE..." onChange={(e)=>{
                                                        setMessage(e.target.value);
                                                    }}></textarea>
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-12">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" class="button">SEND MESSAGE NOW</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="right-info">
                                <ul>
                                    <li>
                                        <h6>Phone Number</h6>
                                        <span>075-657-0667</span>
                                    </li>
                                    <li>
                                        <h6>Email Address</h6>
                                        <span>pico.zen2k23@gmail.com</span>
                                    </li>
                                    <li>
                                        <h6>Street Address</h6>
                                        <span>145/A, New Turn Road, Colombo 7.</span>
                                    </li>
                                    <li>
                                        <h6>Owners</h6>
                                        <span>PicoZen_2k23</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <p>Copyright © 2023 PicoZen Business Solutions. All Rights Reserved.
                        <br />Design: <a href="https://github.com/RolandSamidu" target="_parent" title="Author other designing">A3RSD</a></p>
                </div>
            </section>


        </div>
    )
}

export default Home;