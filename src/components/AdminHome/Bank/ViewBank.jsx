import React, { Component } from 'react';
import axios from 'axios';

export default class ViewBank extends Component {

    constructor(props) {
        super(props);

        this.state = {
            banks: []
        };

    }

    componentDidMount() {
        this.retrieveBanks();
    }

    retrieveBanks() {
        axios.get("http://localhost:8100/bank/all_bank_details").then(res => {
            if (res.data.success) {
                this.setState({
                    banks: res.data.existingBanks
                });

                console.log(this.state.banks);
            }
        });
    }


    onDelete = (id) => {

        axios.delete(`http://localhost:8100/bank/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrieveBanks();
        });
    }


    filterData(banks, searchKey) {
        const result = banks.filter((banks) =>
            banks.bankRegID.toLowerCase().includes(searchKey) ||
            banks.bankName.toLowerCase().includes(searchKey)
        )

        this.setState({ banks: result })
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8100/bank/all_bank_details").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingBanks, searchKey);
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
                        <li class="active">
                            <a href="/All_Branches_Details">
                                <i class="fa-solid fa-briefcase fa-beat"></i>
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
                        <a href="/Bank_Reg_Details" class="nav-link">Bank Details Registration</a>
                        <a href="/All_Branches_Details" class="nav-link">View Bank Details</a>
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
                                        <a href="#">Bank</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a class="active" href="#">Update Bank Details</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="/Report_Bank" class="btn-download">
                                <i class='bx bxs-cloud-download' ></i>
                                <span class="text">Download PDF</span>
                            </a>
                        </div>

                        <div class="table-data">
                            <div class="order">
                                <div class="head">
                                    <h3>ALL BANKS DETAILS</h3>

                                </div>

                                <div className="row">
                                    {/* Card View */}
                                    {this.state.banks.map((banks, index) => (
                                        <div className="col-sm-6 mt-3">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p className='text-center'>Bank Registration ID : {banks.bankRegID}</p>
                                                    <h5 class="card-title">Bank : {banks.bankName}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">Main Branch Location : {banks.mainBranchVenue}</h6>
                                                    <br />
                                                    <h6>Tel : {banks.bankMobile} | Email : {banks.bankEmail}</h6>
                                                    <p class="card-text">{banks.historyOfBank}</p>
                                                    <a href="#" class="card-link">Update</a>
                                                    <a href="#" class="card-link" onClick={() => this.onDelete(banks._id)}>Delete Details</a>
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
