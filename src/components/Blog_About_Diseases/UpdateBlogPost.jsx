import React from 'react'

export default function UpdateBlogPost() {
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
                            <a href="/Bank_Reg_Details">
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
                            <a href="/Veiw_Blogs">
                                <i class="fa-solid fa-diamond"></i>
                                <span class="text">Blogs</span>
                            </a>
                        </li>
                        <li>
                            <a href="Report_Generate_Home">
                                <i class="fa-solid fa-users"></i>
                                <span class="text">Reports</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="side-menu">
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-gear"></i>
                                <span class="text">Settings</span>
                            </a>
                        </li>
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
                        <a href="/view_post" class="nav-link">Post Data</a>
                        <a href="/user_feedback" class="nav-link">User Feedback</a>
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
                                        <a href="#">Blogs</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a class="active" href="#">Update Post</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mt-3" >
                            <div className="p-5 rounded" style={{ backgroundColor: '#F0B856' }}>
                                <h1 className='text-center'>Update Existing Post</h1>
                                <form className='mt-5'>
                                    <form class="row g-3">
                                        <div class="col-md-6">
                                            <label for="inputName" class="form-label">Name :</label>
                                            <input type="text" class="form-control" id="inputName" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputLink" class="form-label">Youtube Link :</label>
                                            <input type="text" class="form-control" id="inputLink" />
                                        </div>
                                        <div class="col-12">
                                            <label for="inputReason" class="form-label">Reasons :</label>
                                            <textarea type="textarea" class="form-control" id="exampleFormControlTextarea1" placeholder="......" rows="3" />
                                        </div>
                                        <div class="col-12">
                                            <label for="inputTreatments" class="form-label">Treatments :</label>
                                            <textarea type="textarea" class="form-control" id="exampleFormControlTextarea1" placeholder="Write a value Treatments...." rows="3" />
                                        </div>
                                        <div class="col-12">
                                            <label for="formFileMultiple" class="form-label">Related Image :</label>
                                            <input class="form-control" type="file" id="formFileMultiple" multiple />
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-info">Update data</button>
                                        </div>
                                    </form>
                                </form>
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
