import React, { useState } from "react";
import axios from "axios";

export default function AddBlogPost() {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [reasons, setReasons] = useState("");
    const [treatments, setTreatments] = useState("");
    const [youtube_links, setYoutube_links] = useState("");

    function sendData(e) {

        e.preventDefault();

        const newDiseases = {
            name,
            image,
            reasons,
            treatments,
            youtube_links
        }

        axios.post("http://localhost:8100/api/diseases/save", newDiseases).then(() => {
            alert("New Diseases Post Added.");
            window.location = '/View_All_Blogs_Details';
        }).catch((err) => {
            alert(err);
        })
    }

    function demofill() {
        setName("Cinnamomum verum foliage")
        setImage("blog1.jpg")
        setReasons("Fungus is established in many regions of the world; fungus can survive for prolonged periods of time in the soil");
        setTreatments("Use only disease free seed and planting material; if disease is present in the soil then crop should be rotated to a non-susceptible host for a period of four years; avoid planting in water saturated soils; soil drenches with appropriate systemic fungicide may give a measure of control");
        setYoutube_links("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
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
                        </div>

                        <div class="table-data">
                            <div class="order">
                                <div class="d-flex justify-content-center mt-3">
                                    <div className="p-5 text-bg-light rounded">
                                        <h1 className='text-center'>Added New BlogPost</h1>
                                        <form className='row g-3 mt-5' onSubmit={sendData}>
                                            {/* <form class="row g-3"> */}
                                            <div class="col-md-6">
                                                <label for="inputText" class="form-label">Diseases Name :</label>
                                                <input type="text" class="form-control" id="inputText" name='name' value={name} onChange={(e) => { setName(e.target.value); }} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputText" class="form-label">Diseases Image :</label>
                                                <input type="text" class="form-control" id="inputText" name='image' value={image} onChange={(e) => { setImage(e.target.value); }} />
                                            </div>
                                            <div class="col-12">
                                                <label for="inputText" class="form-label">Reasons for Diseases :</label>
                                                <textarea type="text" class="form-control" id="inputText" name='reasons' rows="3" value={reasons} onChange={(e) => { setReasons(e.target.value); }} />
                                            </div>
                                            <div class="col-12">
                                                <label for="inputText" class="form-label">Treatments for Diseases :</label>
                                                <textarea type="text" class="form-control" id="inputText" name='treatments' rows="3" value={treatments} onChange={(e) => { setTreatments(e.target.value); }} />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="inputEmail" class="form-label">Give the Youtube Link :</label>
                                                <input type="text" class="form-control" id="inputText" name='youtube_links' value={youtube_links} onChange={(e) => { setYoutube_links(e.target.value); }} />
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-success">Add Post</button> &nbsp;
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
