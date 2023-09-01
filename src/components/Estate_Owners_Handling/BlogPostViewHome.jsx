import React, { Component } from 'react';
import axios from 'axios';

class BlogPostViewHome extends Component {


    constructor(props) {
        super(props);

        this.state = {
            diseases: []
        };
    }

    componentDidMount() {
        this.retrieveDiseases();
    }

    retrieveDiseases() {
        axios.get("http://localhost:8100/api/diseases").then(res => {
            if (res.data.success) {
                this.setState({
                    diseases: res.data.existingPosts
                });

                console.log(this.state.diseases);
            }
        });
    }


    render() {
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
                                        <li class="scroll-to-section"><a href="/Farmer_Home">Home</a></li>
                                        <li class="scroll-to-section"><a href="/Request_Harvest_List">Request Harvest</a></li>
                                        <li class="scroll-to-section"><a href="/Apply_Bank_Loan">Apply Loan</a></li>
                                        <li class="scroll-to-section"><a href="/Cinnamon_blog" class="active">Blog</a></li>
                                        <li class="scroll-to-section"><a href="/Farmer_Dashboard">Dashboard</a></li>
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


                <div className="container">
                <div class="table-data">
                            <div class="order">
                                <div class="head">
                                    <h3>ALL Diseases Blogs</h3>

                                </div>

                                <div className="row">
                                    {/* Card View */}
                                    {this.state.diseases.map((diseases, index) => (
                                        <div className="col-sm-6 mt-3">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <img src="assets/images/blog1.jpg" class="card-img-top" alt="..." />
                                                    <p className='text-center'>Blog No:{index + 1}</p>
                                                    <h5 class="card-title">{diseases.name}</h5><br />
                                                    <h6 class="card-subtitle mb-2 text-muted"><b>Reasons</b></h6>
                                                    <h6 class="card-subtitle mb-2 text-muted">{diseases.reasons}</h6>
                                                    <br />
                                                    <h6><b>Treatments</b></h6>
                                                    <h6>{diseases.treatments}</h6><br /><br />
                                                    <p class="card-text"><a href={diseases.youtube_links}></a>GO TO Youtube</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                </div>

            </div>

            
        )
    }
}

export default BlogPostViewHome;