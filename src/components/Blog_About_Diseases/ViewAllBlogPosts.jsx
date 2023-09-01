import React, { Component } from 'react';
import axios from 'axios';

class ViewAllBlogPosts extends Component {

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

    onDelete = (id) => {

        axios.delete(`http://localhost:8100/api/diseases/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrieveDiseases();
        });
    }


    filterData(diseases, searchKey) {
        const result = diseases.filter((diseases) =>
        diseases.name.toLowerCase().includes(searchKey) ||
        diseases.reasons.toLowerCase().includes(searchKey)
        )

        this.setState({ diseases: result })
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8100/api/diseases").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts, searchKey);
            }
        });

    }


    render() {
        return (
            <div>
                {/* <!-- SIDEBAR --> */}
                <section id="sidebar">
                    <a href="#" class="brand">
                        <i class="fa-brands fa-slack fa-flip"></i>
                        <span class="text">CINNAMON</span>
                    </a>
                    <ul class="side-menu top">
                        <li>
                            <a href="/AdminHome">
                                <i class="fa-solid fa-gauge"></i>
                                <span class="text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Bank_Loan_Details">
                                <i class="fa-solid fa-dollar-sign"></i>
                                <span class="text">Bank Loan</span>
                            </a>
                        </li>
                        <li>
                            <a href="/All_Branches_Details">
                                <i class="fa-solid fa-briefcase"></i>
                                <span class="text">Banks</span>
                            </a>
                        </li>
                        <li>
                            <a href="/VSO_List">
                                <i class="fa-solid fa-people-roof"></i>
                                <span class="text">VSO</span>
                            </a>
                        </li>
                        <li class="active">
                            <a href="/View_All_Blogs_Details">
                                <i class="fa-solid fa-diamond fa-beat"></i>
                                <span class="text">Blogs</span>
                            </a>
                        </li>
                        <li>
                            <a href="/View_EstateOwners">
                                <i class="fa-solid fa-users"></i>
                                <span class="text">Estate Owners</span>
                            </a>
                        </li>
                        <li>
                            <a href="/All_Companies">
                                <i class="fa-solid fa-leaf"></i>
                                <span class="text">Companies</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="side-menu">
                        <li>
                            <a href="#" class="logout">
                                <i class="fa-solid fa-right-to-bracket fa-rotate-180"></i>
                                <span class="text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </section>
                {/* <!-- SIDEBAR --> */}


                {/* <!-- CONTENT --> */}
                <section id="content">
                    {/* <!-- NAVBAR --> */}
                    <nav>
                        <a href="/AddBlog" class="nav-link">New Post</a>
                        <a href="/View_All_Blogs_Details" class="nav-link">View Post Details</a>
                        <form action="#">
                            <div class="form-input">
                                <input type="search" placeholder="Search..." onChange={this.handleSearchArea} />
                                <button type="submit" class="search-btn"><i class='bx bx-search'></i></button>
                            </div>
                        </form>
                        <a href="#" class="notification">
                            <i class='bx bxs-bell' ></i>
                            <span class="num">10</span>
                        </a>
                        <a href="#" class="profile">
                            <img src="assets/images/people.png" />
                        </a>
                    </nav>
                    {/* <!-- NAVBAR --> */}

                    {/* <!-- MAIN --> */}
                    <main>
                        <div class="head-title">
                            <div class="left">
                                <h1>Dashboard</h1>
                                <ul class="breadcrumb">
                                    <li>
                                        <a href="/AdminHome" >Dashboard</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a href="#">Blogs</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a class="active" href="#">View All Blog Post</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" class="btn-download">
                                <i class='bx bxs-cloud-download' ></i>
                                <span class="text">Download PDF</span>
                            </a>
                        </div>

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
                                                    <a href="#" class="card-link">Update</a>
                                                    <a href="#" class="card-link" onClick={() => this.onDelete(diseases._id)}>Delete Details</a>
                                                    {/* "assets/images/blog1.jpg" */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </main>
                    {/* <!-- MAIN --> */}
                </section>
                {/* <!-- CONTENT --> */}
            </div>
        )
    }

}

export default ViewAllBlogPosts;