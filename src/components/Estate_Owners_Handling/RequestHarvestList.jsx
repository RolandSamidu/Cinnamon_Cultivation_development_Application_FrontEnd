import React, { Component } from 'react'

export default class RequestHarvestList extends Component {
  render() {
    return (
      <div>
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
                                        <li class="scroll-to-section"><a href="/Request_Harvest_List" class="active">Request Harvest</a></li>
                                        <li class="scroll-to-section"><a href="/Apply_Bank_Loan">Apply Loan</a></li>
                                        <li class="scroll-to-section"><a href="/Cinnamon_blog">Blog</a></li>
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
            </div>
      </div>
    )
  }
}
