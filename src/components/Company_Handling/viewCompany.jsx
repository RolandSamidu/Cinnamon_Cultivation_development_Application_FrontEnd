import React, { Component } from 'react';
import axios from 'axios';

export default class ViewCompany extends Component {

    constructor(props) {
        super(props);

        this.state = {
            companyrequirements: []
        };

    }

    componentDidMount() {
        this.retrieveCompanyRequirements();
    }

    retrieveCompanyRequirements() {
        axios.get("http://localhost:8100/api/company/view").then(res => {
            if (res.data.success) {
                this.setState({
                    companyrequirements: res.data.existingCompanyReqs
                });

                console.log(this.state.companyrequirements);
            }
        });
    }


    onDelete = (id) => {

        axios.delete(`http://localhost:8100/api/company/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrieveCompanyRequirements();
        });
    }


    filterData(companyrequirements, searchKey) {
        const result = companyrequirements.filter((companyrequirements) =>
        companyrequirements.c_name.toLowerCase().includes(searchKey) ||
        companyrequirements.c_location.toLowerCase().includes(searchKey) ||
        companyrequirements.requirement.toLowerCase().includes(searchKey)
        )

        this.setState({ companyrequirements: result })
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8100/api/company/view").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingCompanyReqs, searchKey);
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
                        <li>
                            <a href="/Veiw_BlogPost">
                                <i class="fa-solid fa-diamond"></i>
                                <span class="text">Blogs</span>
                            </a>
                        </li>
                        <li>
                            <a href="/View_EstateOwners">
                                <i class="fa-solid fa-users"></i>
                                <span class="text">Estate Owners</span>
                            </a>
                        </li>
                        <li class="active">
                            <a href="/All_Companies">
                                <i class="fa-solid fa-leaf fa-beat"></i>
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
                    <a href="/new_CompanyReq" class="nav-link">Add Company Request</a>
                        <a href="/All_Companies" class="nav-link">View All company Requirements</a>
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
                                        <a href="#">Dashboard</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a href="#">Companies</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a class="active" href="#">Add Company Requirement</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="/Report_Company" class="btn-download">
                                <i class='bx bxs-cloud-download' ></i>
                                <span class="text">Download PDF</span>
                            </a>
                        </div>

                        <div class="table-data">
                            <div class="order">
                                <div class="head">
                                    <h3>ALL COMPANY REQUEST DETAILS</h3>

                                </div>

                                <div className="row">
                                    {/* Card View */}
                                    {this.state.companyrequirements.map((companyrequirements, index) => (
                                        <div className="col-sm-6 mt-3">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p className='text-center'>Company Request ID : {companyrequirements.c_req_ID}</p>
                                                    <h5 class="card-title">Company : {companyrequirements.c_name}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">{companyrequirements.c_location}</h6>
                                                    <br />
                                                    <p class="card-text">{companyrequirements.requirement}<br/> Grade <b>{companyrequirements.cinnamon_grade}</b></p><br/>
                                                    <h6>Tel : {companyrequirements.companyMobile} | Date : {companyrequirements.date}</h6><br/>
                                                    <a class="card-link">Update</a>
                                                    <a href="#" class="card-link" onClick={() => this.onDelete(companyrequirements._id)}>Delete Details</a>
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
