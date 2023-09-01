import React, {useState} from "react";
import axios from "axios";

export default function AddCompany() {

    const [c_req_ID, setC_req_ID] = useState("");
    const [c_name, setC_name] = useState("");
    const [c_location, setC_location] = useState("");
    const [requirement, setRequirement] = useState("");
    const [cinnamon_grade, setCinnamon_grade] = useState("");
    const [companyMobile, setCompanyMobile] = useState("");
    const [date, setDate] = useState("");

    // const [contractIDErr, setContractIDErr] = useState({});
    // const [materialIDErr, setMaterialIDErr] = useState({});


    function sendData(e){
        
        e.preventDefault();
        // const isValid = formValidation();

        // if(isValid) {
        const newCompany ={
            c_req_ID,
            c_name,
            c_location,
            requirement,
            cinnamon_grade,
            companyMobile,
            date
        }

        axios.post("http://localhost:8100/api/company/save", newCompany).then(()=>{
            alert("New Company Requirement Details Added.");
            window.location = '/All_Companies';
            
        }).catch((err)=>{
            alert(err);
        })
    
        // }
    }

    function demofill(){
        setC_req_ID("CRE-0996-8970-5667")
        setC_name("Arora")
        setC_location("colombo 7, Sri Lanka")
        setRequirement("test")
        setCinnamon_grade("C")
        setCompanyMobile("0119067876")
        setDate("2023-05-15")
    }

    // const formValidation = () =>{
    //     const contractIDErr = {};
    //     const materialIDErr = {};
    //     let isValid = true;

    //     if(!contractID.includes("CON")){
    //         contractIDErr.contractIdCON = "ContractID should start with 'CON' "
    //         isValid = false;
    //     }

    //     if(!materialID.includes("M")){
    //         materialIDErr.materialIdM = "MaterialID should start with 'M' "
    //         isValid = false;
    //     }

    //     setContractIDErr(contractIDErr);
    //     setMaterialIDErr(materialIDErr);

    //     return isValid;

    // }

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
                                        <form className='row g-3 mt-5' onSubmit={sendData}>
                                            {/* <form class="row g-3"> */}
                                                <div class="col-md-6">
                                                    <label for="inputText" class="form-label">Company Request ID :</label>
                                                    <input type="text" class="form-control" id="inputText" name='c_req_ID' value={c_req_ID} onChange={(e) =>{setC_req_ID(e.target.value);}}/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputText" class="form-label">Company Name :</label>
                                                    <input type="text" class="form-control" id="inputText" name='c_name' value={c_name} onChange={(e) =>{setC_name(e.target.value);}}/>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputText" class="form-label">Company Location :</label>
                                                    <input type="text" class="form-control" id="inputText" placeholder="City or Main town" name='c_location' value={c_location} onChange={(e) =>{setC_location(e.target.value);}}/>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputText" class="form-label">Requirement :</label>
                                                    <input type="text" class="form-control" id="inputText" name='requirement' value={requirement} onChange={(e) =>{setRequirement(e.target.value);}}/>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputText" class="form-label">Cinnamon Grade :</label>
                                                    <input type="text" class="form-control" id="inputText" name='cinnamon_grade' value={cinnamon_grade} onChange={(e) =>{setCinnamon_grade(e.target.value);}}/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputEmail" class="form-label">Company Mobile :</label>
                                                    <input type="tel" class="form-control" id="inpuText" name='companyMobile' value={companyMobile} onChange={(e) =>{setCompanyMobile(e.target.value);}}/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputEmail" class="form-label">Date :</label>
                                                    <input type="date" class="form-control" id="inputText" name='date' value={date} onChange={(e) =>{setDate(e.target.value);}}/>
                                                </div>
                                                <div class="col-12">
                                                    <button type="submit" class="btn btn-success">Submit</button> &nbsp;
                                                    <button onClick={()=>{demofill()}} className="btn btn-info ml-3">DEMO</button>
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
