import React, { useState } from 'react'
import axios from 'axios'

export default function AddVSODetails() {

  const [vsoID, setVsoID] = useState("");
  const [vso_FullName, setVso_FullName] = useState("");
  const [vso_Email, setVso_Email] = useState("");
  const [vso_PhoneNumber, setVso_PhoneNumber] = useState("");
  const [vso_WorkArea, setVso_WorkArea] = useState("");
  const [vso_District, setVso_District] = useState("");
  const [vso_Province, setVso_Province] = useState("");


  function sendData(e) {

    e.preventDefault();

    const newVSO = {
      vsoID,
      vso_FullName,
      vso_Email,
      vso_PhoneNumber,
      vso_WorkArea,
      vso_District,
      vso_Province
    }

    axios.post("http://localhost:8100/VSO/registered_new_VSOs", newVSO).then(() => {
      alert("New Village Server Registered.");
      window.location = '/All_VSO_Details';

    }).catch((err) => {
      alert(err);
    })

  }

  function demofill() {
    setVsoID("VSO834556")
    setVso_FullName("Mr. Damith Kulasekara")
    setVso_Email("damith86@gmail.com")
    setVso_PhoneNumber("0349076734")
    setVso_WorkArea("kochchikade")
    setVso_District("Kurunegala")
    setVso_Province("North Western Province")
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
                    <a href="#">VSO</a>
                  </li>
                  <li><i class='bx bx-chevron-right' ></i></li>
                  <li>
                    <a class="active" href="/Add_New_VSO">VSO Registration</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="table-data">
              <div class="order">
                <div class="d-flex justify-content-center mt-3">
                  <div className="p-5 text-bg-light rounded">
                    <h1 className='text-center'>Add New VSO</h1>
                    <form className='row g-3 mt-5' onSubmit={sendData}>
                      {/* <form class="row g-3"> */}
                      <div class="col-md-6">
                        <label for="inputText" class="form-label">VSO Register ID</label>
                        <input type="text" class="form-control" id="inputText" name='vsoID' value={vsoID} onChange={(e) => { setVsoID(e.target.value); }} />
                      </div>
                      <div class="col-md-6">
                        <label for="inputText" class="form-label">VSO's Name</label>
                        <input type="text" class="form-control" id="inputText" name='vso_FullName' value={vso_FullName} onChange={(e) => { setVso_FullName(e.target.value); }} />
                      </div>
                      <div class="col-12">
                        <label for="inputText" class="form-label">VSO's Email</label>
                        <input type="email" class="form-control" id="inputText" name='vso_Email' value={vso_Email} onChange={(e) => { setVso_Email(e.target.value); }} />
                      </div>
                      <div class="col-12">
                        <label for="inputText" class="form-label">VSO's Phone Number</label>
                        <input type="tel" class="form-control" id="inputText" name='vso_PhoneNumber' value={vso_PhoneNumber} onChange={(e) => { setVso_PhoneNumber(e.target.value); }} />
                      </div>
                      <div class="col-12">
                        <label for="inputText" class="form-label">Work Area</label>
                        <input type="text" class="form-control" id="inputText" name='vso_WorkArea' value={vso_WorkArea} onChange={(e) => { setVso_WorkArea(e.target.value); }} />
                      </div>
                      <div class="col-md-6">
                        <label for="inputText" class="form-label">District</label>
                        <input type="text" class="form-control" id="inpuText" name='vso_District' value={vso_District} onChange={(e) => { setVso_District(e.target.value); }} />
                      </div>
                      <div class="col-md-6">
                        <label for="inputText" class="form-label">Province</label>
                        <input type="text" class="form-control" id="inputText" name='vso_Province' rows="2" value={vso_Province} onChange={(e) => { setVso_Province(e.target.value); }} />
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-success">Save</button> &nbsp;
                        <button onClick={() => { demofill() }} className="btn btn-info">DEMO</button>
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
