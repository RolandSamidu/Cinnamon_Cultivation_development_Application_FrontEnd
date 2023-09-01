import React, { useState } from "react";
import axios from "axios";

export default function AddFarmer() {

    const [name, setName] = useState("");
    const [NIC, setNIC] = useState("");
    const [telephoneNo, setTelephoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [annualYeild, setAnnualYeild] = useState("");

    function sendData(e) {

        e.preventDefault();

        const newStateOwner = {
            name,
            NIC,
            telephoneNo,
            address,
            district,
            annualYeild
        }

        axios.post("http://localhost:8100/api/stateOwner/save", newStateOwner).then(() => {
            alert("New Esatate Owner details added.");
            window.location = "/View_EstateOwners";
        }).catch((err) => {
            alert(err);
        })
    }

    function demofill() {
        setName("Kumudu Subashinghe")
        setNIC("884536738V")
        setTelephoneNo("0314563783")
        setAddress("12/D, 3rd road, wennappuwa")
        setDistrict("Puttalam")
        setAnnualYeild("45000kg")
    }

    return (
        <div>
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
                                <input type="search" placeholder="Search..." />
                                <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
                            </div>
                        </form>
                        {/* <input type="checkbox" id="switch-mode" hidden />
                        <label for="switch-mode" class="switch-mode"></label> */}
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
                                <h1>Blog Posts</h1>
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
                                        <a class="active" href="#">Add New Estate Owners</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="table-data">
                            <div class="order">
                                <div class="d-flex justify-content-center mt-3">
                                    <div className="p-5 text-bg-light rounded">
                                        <h1 className='text-center'>Added New Estate Owner</h1>
                                        <form className='row g-3 mt-5' onSubmit={sendData}>
                                            {/* <form class="row g-3"> */}
                                            <div class="col-md-6">
                                                <label for="inputText" class="form-label">Estate Owner Name :</label>
                                                <input type="text" class="form-control" id="inputText" name='name' value={name} onChange={(e) => { setName(e.target.value); }} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputText" class="form-label"> NIC Number :</label>
                                                <input type="text" class="form-control" id="inputText" name='NIC' value={NIC} onChange={(e) => { setNIC(e.target.value); }} />
                                            </div>
                                            <div class="col-12">
                                                <label for="inputText" class="form-label">Telephone Number :</label>
                                                <input type="text" class="form-control" id="inputText" name='telephoneNo' value={telephoneNo} onChange={(e) => { setTelephoneNo(e.target.value); }} />
                                            </div>
                                            <div class="col-12">
                                                <label for="inputText" class="form-label">Address :</label>
                                                <textarea type="text" class="form-control" id="inputText" name='address' rows="3" value={address} onChange={(e) => { setAddress(e.target.value); }} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputText" class="form-label">District :</label>
                                                <input type="text" class="form-control" id="inputText" name='district' value={district} onChange={(e) => { setDistrict(e.target.value); }} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputText" class="form-label">Annual Yeild :</label>
                                                <input type="text" class="form-control" id="inputText" name='youtube_links' value={annualYeild} onChange={(e) => { setAnnualYeild(e.target.value); }} />
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-success">Register Bank</button>
                                                <button onClick={() => { demofill() }} className="btn btn-info ml-3">DEMO</button>
                                            </div>
                                            {/* </form> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* <!-- MAIN --> */}
                </section>
                {/* <!-- CONTENT --> */}
            </div>
        </div>
    )
}
