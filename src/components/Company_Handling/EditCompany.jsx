import React, { useContext, useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { updatedata } from './context/ContextProvider';


const EditCompany = () => {

    const { setUPdata} = useContext(updatedata)

   const navigate = useNavigate("");

    const [inpval, setINP] = useState({
        c_req_ID:"",
        c_name:"",
        c_location:"",
        requirement:"",
        cinnamon_grade:"",
        companyMobile:"",
        date:""
    });

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:8100/api/company/update/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data.CompanyReq);//must be change
        

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data.CompanyReq)//must be change
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
        console.log("test inpval",inpval);
    }, []);


    const updateCompanyReq = async(e)=>{
        e.preventDefault();

        const {c_req_ID,c_name,c_location,requirement,cinnamon_grade,companyMobile,date} = inpval;

        const res2 = await fetch(`http://localhost:8100/api/company/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                c_req_ID,c_name,c_location,requirement,cinnamon_grade,companyMobile,date
            })
        });

        const data2 = await res2.json();
        console.log(data2);
        alert("Do you want to edit that data?");
        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate("/All_Companies")
            setUPdata(data2);
        }

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
                                    <input type="search" placeholder="Search..." />
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
                                <h1>Admin Dashboard</h1>
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
                        </div>

                        <div class="table-data">
                            <div class="order">
                                <div class="d-flex justify-content-center mt-3">
                                    <div className="p-5 text-bg-light rounded">
                                        <h1 className='text-center'>Add Company Request</h1>
                                        <form className='row g-3 mt-5' noValidate>
                                            {/* <form class="row g-3"> */}
                                                <div class="col-md-6">
                                                    <label for="inputText" class="form-label">Company Request ID :</label>
                                                    <input type="text" class="form-control" id="inputText" name='c_req_ID' value={inpval.c_req_ID} onChange={setdata}/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputText" class="form-label">Company Name :</label>
                                                    <input type="text" class="form-control" id="inputText" name='c_name' value={inpval.c_name} onChange={setdata}/>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputText" class="form-label">Company Location :</label>
                                                    <input type="text" class="form-control" id="inputText" placeholder="City or Main town" name='c_location' value={inpval.c_location} onChange={setdata}/>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputText" class="form-label">Requirement :</label>
                                                    <input type="text" class="form-control" id="inputText" name='requirement' value={inpval.requirement} onChange={setdata}/>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputText" class="form-label">Cinnamon Grade :</label>
                                                    <input type="text" class="form-control" id="inputText" name='cinnamon_grade' value={inpval.cinnamon_grade} onChange={setdata}/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputEmail" class="form-label">Company Mobile :</label>
                                                    <input type="tel" class="form-control" id="inpuText" name='companyMobile' value={inpval.companyMobile} onChange={setdata}/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputEmail" class="form-label">Date :</label>
                                                    <input type="date" class="form-control" id="inputText" name='date' value={inpval.date} onChange={setdata}/>
                                                </div>
                                                <div class="col-12">
                                                    <button type="submit" class="btn btn-warning" onClick={updateCompanyReq}>Update</button>
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

export default EditCompany;