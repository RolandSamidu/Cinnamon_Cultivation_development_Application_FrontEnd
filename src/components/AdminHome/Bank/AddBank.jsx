import React, {useState} from "react";
import axios from "axios";

export default function AddBank() {

    const [bankRegID, setBankRegID] = useState("");
    const [bankName, setBankName] = useState("");
    const [mainBranchVenue, setMainBranchVenue] = useState("");
    const [numOfBranches, setNumOfBranches] = useState("");
    const [bankMobile, setBankMobile] = useState("");
    const [bankEmail, setBankEmail] = useState("");
    const [historyOfBank, setHistoryOfBank] = useState("");

    // const [contractIDErr, setContractIDErr] = useState({});
    // const [materialIDErr, setMaterialIDErr] = useState({});


    function sendData(e){
        
        e.preventDefault();
        // const isValid = formValidation();

        // if(isValid) {
        const newBank ={
            bankRegID,
            bankName,
            mainBranchVenue,
            numOfBranches,
            bankMobile,
            bankEmail,
            historyOfBank
        }

        axios.post("http://localhost:8100/bank/registered_new_bank", newBank).then(()=>{
            alert("New Bank Branch Details Added.");
            window.location = '/All_Branches_Details';
            
        }).catch((err)=>{
            alert(err);
        })
    
        // }
    }

    function demofill(){
        setBankRegID("CYL2200")
        setBankName("Seylan Bank")
        setMainBranchVenue("Colombo 03, Sri Lanka")
        setNumOfBranches("35")
        setBankMobile("0112008888")
        setBankEmail("info@seylan.lk")
        setHistoryOfBank("Seylan Bank PLC is a Public Limited Liability company incorporated in Sri Lanka in 1987. The bank focuses on conventional commercial banking and operates from its Head Office in Colombo through its islandwide network of branches.")
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
                                        <a href="#">Bank</a>
                                    </li>
                                    <li><i class='bx bx-chevron-right' ></i></li>
                                    <li>
                                        <a class="active" href="#">Bank Registration</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="table-data">
                            <div class="order">
                                <div class="d-flex justify-content-center mt-3">
                                    <div className="p-5 text-bg-light rounded">
                                        <h1 className='text-center'>Register Bank</h1>
                                        <form className='row g-3 mt-5' onSubmit={sendData}>
                                            {/* <form class="row g-3"> */}
                                                <div class="col-md-6">
                                                    <label for="inputText" class="form-label">Bank Register ID</label>
                                                    <input type="text" class="form-control" id="inputText" name='bankRegID' value={bankRegID} onChange={(e) =>{setBankRegID(e.target.value);}}/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputText" class="form-label">bank's Name</label>
                                                    <input type="text" class="form-control" id="inputText" name='bankName' value={bankName} onChange={(e) =>{setBankName(e.target.value);}}/>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputText" class="form-label">Main Branch Venue</label>
                                                    <input type="text" class="form-control" id="inputText" placeholder="City or Main town" name='mainBranchVenue' value={mainBranchVenue} onChange={(e) =>{setMainBranchVenue(e.target.value);}}/>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputText" class="form-label">Number of Branches</label>
                                                    <input type="number" class="form-control" id="inputNumber" name='numOfBranches' value={numOfBranches} onChange={(e) =>{setNumOfBranches(e.target.value);}}/>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputText" class="form-label">Bank Telephone Number</label>
                                                    <input type="tel" class="form-control" id="inputNumber" name='bankMobile' value={bankMobile} onChange={(e) =>{setBankMobile(e.target.value);}}/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputEmail" class="form-label">Bank Email</label>
                                                    <input type="email" class="form-control" id="inpuEmail" name='bankEmail' value={bankEmail} onChange={(e) =>{setBankEmail(e.target.value);}}/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputText" class="form-label">History of Bank</label>
                                                    <textarea type="text" class="form-control" id="inputText" name='historyOfBank' rows="2" value={historyOfBank} onChange={(e) =>{setHistoryOfBank(e.target.value);}}/>
                                                </div>
                                                <div class="col-12">
                                                    <button type="submit" class="btn btn-success">Register Bank</button>
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
