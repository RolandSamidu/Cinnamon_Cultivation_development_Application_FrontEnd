import React, { Component } from 'react'
import axios from 'axios';

class ViewContact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contacts: []
        };

    }

    componentDidMount() {
        this.retrieveContacts();
    }

    retrieveContacts() {
        axios.get("http://localhost:8100/contact/all_contact_details").then(res => {
            if (res.data.success) {
                this.setState({
                    contacts: res.data.existingContacts
                });

                console.log(this.state.contacts);
            }
        });
    }


    onDelete = (id) => {

        axios.delete(`http://localhost:8100/contact/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrieveContacts();
        });
    }


    filterData(contacts, searchKey) {
        const result = contacts.filter((contacts) =>
            contacts.name.toLowerCase().includes(searchKey) ||
            contacts.email.toLowerCase().includes(searchKey) ||
            contacts.subject.toLowerCase().includes(searchKey)
        )

        this.setState({ contacts: result })
    }


    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8100/contact/all_contact_details").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingContacts, searchKey);
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
                        <li class="active">
                            <a href="/AdminHome">
                                <i class="fa-solid fa-gauge fa-beat"></i>
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
                        <a href="/AdminHome" class="nav-link">Dashboard</a>
                        <a href="/Admin_Contact" class="nav-link">View Contact</a>
                        <form action="#">
                            <div class="form-input">
                                <input type="search" placeholder="Search..." onChange={this.handleSearchArea} />
                                <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
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
                                        <a class="active" href="/Admin_Contact">View Contact</a>
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
                                    <h3>ALL CONTACT DETAILS</h3>

                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Subject</th>
                                            <th>Message</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.contacts.map((contacts, index) => (
                                            <tr>
                                                <td>{contacts.name}</td>
                                                <td>{contacts.email}</td>
                                                <td>{contacts.subject}</td>
                                                <td>{contacts.message}</td>
                                                <td><a className='btn btn-danger btn-sm' href="#" onClick={() => this.onDelete(contacts._id)}>
                                                    <i className='far fa-trash-alt'></i>&nbsp; Delete
                                                </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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

export default ViewContact;