import React, { useState } from 'react';
import axios from 'axios';

export default function ApplyLoan() {

    const [formID, setFormID] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [estateOwnerMobile, setEstateOwnerMobile] = useState("");
    const [estateOwnerEmail, setEstateOwnerEmail] = useState("");
    const [typeOfID, setTypeOfID] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [propetyVenue, setPropetyVenue] = useState("");
    const [propertyOwnship, setPropertyOwnship] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [jobExperience, setJobExperience] = useState("");
    const [yieldAddress, setYieldAddress] = useState("");
    const [bankName, setBankName] = useState("");
    const [branchName, setBranchName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountType, setAccountType] = useState("");
    const [purposeOFPersonalLoan, setPurposeOFPersonalLoan] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [guranterName, setGuranterName] = useState("");
    const [guranterPhoneNumber, setGuranterPhoneNumber] = useState("");
    const [guranterEmailAddress, setGuranterEmailAddress] = useState("");
    const [guranterPlaceOfWork, setGuranterPlaceOfWork] = useState("");
    const [applicant_Signature, setApplicant_Signature] = useState("");
    const [villageServer_Signature, setVillageServer_Signature] = useState("");
    

    // const [contractIDErr, setContractIDErr] = useState({});
    // const [materialIDErr, setMaterialIDErr] = useState({});


    function sendData(e){
        
        e.preventDefault();
        // const isValid = formValidation();

        // if(isValid) {
        const newLoan ={
            formID,
            firstName,
            lastName,
            birthdate,
            estateOwnerMobile,
            estateOwnerEmail,
            typeOfID,
            idNumber,
            monthlyIncome,
            propetyVenue,
            propertyOwnship,
            maritalStatus,
            jobExperience,
            yieldAddress,
            bankName,
            branchName,
            accountNumber,
            accountType,
            purposeOFPersonalLoan,
            loanAmount,
            guranterName,
            guranterPhoneNumber,
            guranterEmailAddress,
            guranterPlaceOfWork,
            applicant_Signature,
            villageServer_Signature
        }

        axios.post("http://localhost:8100/LoanApply/Apply_Loan", newLoan).then(()=>{
            alert("Apply Loan Successfully...!");
            window.location = '/Apply_Bank_Loan';
        }).catch((err)=>{
            alert(err);
        })
    
        // }
    }

    function demofill(){
        setFormID("ELS-001");
        setFirstName("Malith Subasinha");
        setLastName("Fernando");
        setBirthdate("2023/04/24");
        setEstateOwnerMobile("0768554324");
        setEstateOwnerEmail("malith78@gmail.com");
        setTypeOfID("NIC");
        setIdNumber("78003992893V");
        setMonthlyIncome(55000);
        setPropetyVenue("Nikawaratiya");
        setPropertyOwnship("Private");
        setMaritalStatus("Marriage");
        setJobExperience(15);
        setYieldAddress("Girawthota, Nikawaratiya");
        setBankName("BOC");
        setBranchName("Kurunegala");
        setAccountNumber("24435-443553-55366");
        setAccountType("Deposit Account");
        setPurposeOFPersonalLoan("I want to buy some Property.");
        setLoanAmount(500000);
        setGuranterName("Thusith Wijayarathna");
        setGuranterPhoneNumber("0114357380");
        setGuranterEmailAddress("thusith08@gmail.com");
        setGuranterPlaceOfWork("Nikawaratiya");
        setApplicant_Signature("true");
        setVillageServer_Signature("true");
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
                {/* Sub Header  */}
                <div class="sub-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-sm-8">
                                <div class="left-content">
                                    <p>Sri Lankan <em>CINNAMON</em> Cultivation Development </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-4">
                                <div class="right-icons">
                                    <ul>
                                        <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-instagram"></i></a></li>
                                        <li><a href="https://www.srilankabusiness.com/spices/about/cinnamon-cultivation-sri-lanka.html"><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ***** Header Area Start ***** */}
                <header class="header-area header-sticky">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <nav class="main-nav">
                                    {/* ***** Logo Start ***** */}
                                    <a href="/" class="logo">
                                        CINNAMON
                                    </a>
                                    {/* ***** Logo End ***** */}
                                    {/* ***** Menu Start ***** */}
                                    <ul class="nav">
                                        <li class="scroll-to-section"><a href="/Farmer_Home">Home</a></li>
                                        <li class="scroll-to-section"><a href="/Request_Harvest_List">Request Harvest</a></li>
                                        <li class="scroll-to-section"><a href="/Apply_Bank_Loan" class="active">Apply Loan</a></li>
                                        <li class="scroll-to-section"><a href="/Cinnamon_blog">Blog</a></li>
                                        <li class="scroll-to-section"><a href="/Farmer_Dashboard">Dashboard</a></li>
                                    </ul>

                                    {/* ***** Menu End ***** */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ***** Header Area End ***** */}

                {/* ***** Main Banner Area Start ***** */}
                <section class="section main-banner" id="top" data-section="section1">
                    <video id="bg-video" controls autoPlay muted loop>
                        <source src="assets/images/cinnamon.mp4" type="video/mp4" />
                    </video>

                    <div class="video-overlay header-text">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="caption">
                                        <h6>Hello Sri Lankans</h6>
                                        <h2>Welcome to CINNAMON</h2>
                                        <p>Thank you to all of you who have come together to promote the local cinnamon trade and cultivation. Basic facilities are provided for all the services availed by this.</p>
                                        <div class="main-button-red">
                                            <div class=""><a href="/login">Join Us Now!</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Main Banner Area End ***** */}


                {/* **** Form start **** */}

                <div class="d-flex justify-content-center mt-3">
                            <div className="p-5 rounded" style={{ backgroundColor: '#FFF6F6' }}>
                                <h1 className='text-center'>Apply Loan Form</h1>
                                <form className='mt-5' style={{ backgroundColor: '#FFF6F6' }}>
                                    <form class="row g-3" style={{ backgroundColor: '#FFF6F6' }} onSubmit={sendData}>
                                        
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Form Number :</label>
                                            <input type="text" class="form-control" id="inputText" value={formID} onChange={(e) =>{setFormID(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Birth Date :</label>
                                            <input type="text" class="form-control" id="inputText" value={birthdate} onChange={(e) =>{setFormID(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">First Name :</label>
                                            <input type="text" class="form-control" id="inputText" value={firstName} onChange={(e) =>{setFirstName(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Last Name :</label>
                                            <input type="text" class="form-control" id="inputText" value={lastName} onChange={(e) =>{setLastName(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Estate Owner's Mobile :</label>
                                            <input type="text" class="form-control" id="inputText" value={estateOwnerMobile} onChange={(e) =>{setEstateOwnerMobile(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Estate Owner's Email :</label>
                                            <input type="text" class="form-control" id="inputText" value={estateOwnerEmail} onChange={(e) =>{setEstateOwnerEmail(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Type of ID :</label>
                                            <input type="text" class="form-control" id="inputText" value={typeOfID} onChange={(e) =>{setTypeOfID(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">ID Number :</label>
                                            <input type="text" class="form-control" id="inputText" value={idNumber} onChange={(e) =>{setIdNumber(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Monthly Income :</label>
                                            <input type="text" class="form-control" id="inputText" value={monthlyIncome} onChange={(e) =>{setMonthlyIncome(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Property Venue :</label>
                                            <input type="text" class="form-control" id="inputText" value={propetyVenue} onChange={(e) =>{setPropetyVenue(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Property Ownership :</label>
                                            <input type="text" class="form-control" id="inputText" value={propertyOwnship} onChange={(e) =>{setPropertyOwnship(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Marital Status :</label>
                                            <input type="text" class="form-control" id="inputText" value={maritalStatus} onChange={(e) =>{setMaritalStatus(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Job Experience :</label>
                                            <input type="text" class="form-control" id="inputText" value={jobExperience} onChange={(e) =>{setJobExperience(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Yield Address :</label>
                                            <input type="text" class="form-control" id="inputText" value={yieldAddress} onChange={(e) =>{setYieldAddress(e.target.value);}}/>
                                        </div>


                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Bank Name :</label>
                                            <input type="text" class="form-control" id="inputText" value={bankName} onChange={(e) =>{setBankName(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Branch Name :</label>
                                            <input type="text" class="form-control" id="inputText" value={branchName} onChange={(e) =>{setBranchName(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Account Number :</label>
                                            <input type="text" class="form-control" id="inputText" value={accountNumber} onChange={(e) =>{setAccountNumber(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Type of Account :</label>
                                            <input type="text" class="form-control" id="inputText" value={accountType} onChange={(e) =>{setAccountType(e.target.value);}}/>
                                        </div>
                                        <div class="col-12">
                                            <label for="inputReason" class="form-label">Purpose for Loan :</label>
                                            <textarea type="textarea" class="form-control" id="exampleFormControlTextarea1" placeholder="......" rows="3" value={purposeOFPersonalLoan} onChange={(e) =>{setPurposeOFPersonalLoan(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Loan Amount :</label>
                                            <input type="text" class="form-control" id="inputText" value={loanAmount} onChange={(e) =>{setLoanAmount(e.target.value);}}/>
                                        </div>


                                        <div class="col-12">
                                            <label for="inputText" class="form-label">Guranter Name :</label>
                                            <input type="text" class="form-control" id="inputText" value={guranterName} onChange={(e) =>{setGuranterName(e.target.value);}}/>
                                        </div>
                                        <div class="col-12">
                                            <label for="inputText" class="form-label">Guranter Phone Number :</label>
                                            <input type="text" class="form-control" id="inputText" value={guranterPhoneNumber} onChange={(e) =>{setGuranterPhoneNumber(e.target.value);}}/>
                                        </div>
                                        <div class="col-12">
                                            <label for="inputText" class="form-label">Guranter Email Address :</label>
                                            <input type="text" class="form-control" id="inputText" value={guranterEmailAddress} onChange={(e) =>{setGuranterEmailAddress(e.target.value);}}/>
                                        </div>
                                        <div class="col-12">
                                            <label for="inputText" class="form-label">Guranter Place of work :</label>
                                            <input type="text" class="form-control" id="inputText" value={guranterPlaceOfWork} onChange={(e) =>{setGuranterPlaceOfWork(e.target.value);}}/>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Applicant Signature :</label>
                                            <input type="text" class="form-control" id="inputText" value={applicant_Signature} onChange={(e) =>{setApplicant_Signature(e.target.value);}}/>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputText" class="form-label">Village Server Signature :</label>
                                            <input type="text" class="form-control" id="inputText" value={villageServer_Signature} onChange={(e) =>{setVillageServer_Signature(e.target.value);}}/>
                                        </div>
                                    
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-success">Save</button>
                                            <button onClick={()=>{demofill()}} className="btn btn-info ml-3">DEMO</button>
                                        </div>
                                    </form>
                                </form>
                            </div>
                        </div>

                {/* **** Form End **** */}

            </div>
        </div >
    )
}
