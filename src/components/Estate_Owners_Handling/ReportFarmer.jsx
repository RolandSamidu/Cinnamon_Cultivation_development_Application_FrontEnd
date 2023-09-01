import axios from 'axios';
import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';

class ReportFarmer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stateowners: []
        };
    }

    componentDidMount() {
        this.retrieveStateowners();
    }

    retrieveStateowners() {
        axios.get("http://localhost:8100/api/stateOwners").then(res => {
            if (res.data.success) {
                this.setState({
                    stateowners: res.data.existingPosts
                });

                console.log(this.state.stateowners);
            }
        });
    }

    onDelete = (id) => {

        axios.delete(`http://localhost:8100/api/stateOwner/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrieveStateowners();
        });
    }


    filterData(stateowners, searchKey) {
        const result = stateowners.filter((stateowners) =>
        stateowners.name.toLowerCase().includes(searchKey) ||
        stateowners.district.toLowerCase().includes(searchKey)
        )

        this.setState({ stateowners: result })
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8100/api/stateOwners").then(res => {
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
                        <li>
                            <a href="/View_All_Blogs_Details">
                                <i class="fa-solid fa-diamond"></i>
                                <span class="text">Blogs</span>
                            </a>
                        </li>
                        <li class="active">
                            <a href="/View_EstateOwners">
                                <i class="fa-solid fa-users fa-beat"></i>
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
                        <a href="/Add_Estate_Owner" class="nav-link">New Estate Owner Registration</a>
                        <a href="/View_EstateOwners" class="nav-link">View All EstateOwners</a>
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
                                        <a href="#">Estate Owners</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a class="active" href="#">View all Estate Owners</a>
                                    </li>
                                </ul>
                            </div>
                            <ReactToPrint
                                trigger={() => {
                                    return <a class="btn-download">
                                        <i class='bx bxs-cloud-download' ></i>
                                        <span class="text">Download PDF</span>
                                    </a>
                                }}
                                content={() => this.componentRef}
                                documentTitle='Estate Owner Details Report'
                                pageStyle="print"
                            />
                        </div>

                        <div class="table-data" ref={el=>(this.componentRef=el)}>
                            <div class="order">
                                <div class="head">
                                    <h3>ALL BANKS DETAILS</h3>

                                </div>

                                <div className="row">
                                    {/* Card View */}
                                    {this.state.stateowners.map((stateowners,index) => (
                                        <div className="col-sm-6 mt-3">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p className='text-center'>Estate Owner's ID : ES430{index+1} </p>
                                                    <h5 class="card-title">Name : {stateowners.name}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">Annual Yeild : {stateowners.annualYeild}</h6>
                                                    <br />
                                                    <h6>NIC : {stateowners.NIC} | Tel : {stateowners.telephoneNo}</h6><br/>
                                                    <p class="card-text">{stateowners.address}</p>
                                                    <p class="card-text">{stateowners.district}</p>
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

export default ReportFarmer;