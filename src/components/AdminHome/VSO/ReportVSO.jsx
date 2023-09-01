import axios from 'axios';
import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import { render } from 'react-dom';

class ReportVSO extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vsos: []
        };

    }

    componentDidMount() {
        this.retrieveVSOs();
    }

    retrieveVSOs() {
        axios.get("http://localhost:8100/VSO/all_vso_details").then(res => {
            if (res.data.success) {
                this.setState({
                    vsos: res.data.existingVSOs
                });

                console.log(this.state.vsos);
            }
        });
    }

    filterData(vsos, searchKey) {
        const result = vsos.filter((vsos) =>
            vsos.vsoID.toLowerCase().includes(searchKey) ||
            vsos.vso_FullName.toLowerCase().includes(searchKey) ||
            vsos.vso_District.toLowerCase().includes(searchKey) ||
            vsos.vso_Province.toLowerCase().includes(searchKey)
        )

        this.setState({ vsos: result })
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8100/VSO/all_vso_details").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingVSOs, searchKey);
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
                        <li class="active">
                            <a href="/VSO_List">
                                <i class="fa-solid fa-people-roof fa-beat"></i>
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
                        <a href="/Add_New_VSO" class="nav-link">New VSO Registration</a>
                        <a href="/VSO_List" class="nav-link">View VSO Details</a>
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
                                        <a href="#">VSO</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a class="active" href="#">VSO List</a>
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
                                documentTitle='VSO Details Report'
                                pageStyle="print"
                            />
                        </div>

                        <div class="table-data" ref={el=>(this.componentRef=el)}>
                            <div class="order">
                                <div class="head">
                                    <h3>ALL VSO DETAILS</h3>

                                </div>

                                <div className="row">
                                    {/* Card View */}
                                    {this.state.vsos.map((vsos, index) => (
                                        <div className="col-sm-6 mt-3">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p className='text-center'>VSO's Registration ID : {vsos.vsoID}</p>
                                                    <h5 class="card-title">VSO's Full Name : {vsos.vso_FullName}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                                                    <br />
                                                    <h6>Tel : {vsos.vso_PhoneNumber} | Email : {vsos.vso_Email}</h6>
                                                    <p class="card-text">Work Area : {vsos.vso_WorkArea}</p>
                                                    <p class="card-text">District : {vsos.vso_District}</p>
                                                    <p class="card-text">Province : {vsos.vso_Province}</p>
                                                    <a href="#" class="card-link">Update</a>
                                                    <a href="#" class="card-link" onClick={() => this.onDelete(vsos._id)}>Delete VSO</a>
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

export default ReportVSO;