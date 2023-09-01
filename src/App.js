import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AdminHome from "./components/AdminHome/AdminHome";
import ViewContact from "./components/AdminHome/ViewContact";
import AddBlogPost from "./components/Blog_About_Diseases/AddBlogPost";
import UpdateBlogPost from "./components/Blog_About_Diseases/UpdateBlogPost";
import AdminDashboard from "./components/AdminHome/AdminDashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddBank from "./components/AdminHome/Bank/AddBank";
import ViewBank from "./components/AdminHome/Bank/ViewBank";
import EditBank from "./components/AdminHome/Bank/editBank";
import ViewVSODetails from "./components/AdminHome/VSO/ViewVSODetails";
import AddVSODetails from "./components/AdminHome/VSO/AddVSODetails";
import FarmerHome from "./components/Estate_Owners_Handling/FarmerHome";
import RequestHarvestList from "./components/Estate_Owners_Handling/RequestHarvestList";
import ApplyLoan from "./components/Estate_Owners_Handling/ApplyLoan";
import BlogPostViewHome from "./components/Estate_Owners_Handling/BlogPostViewHome";
import AddFarmer from "./components/Estate_Owners_Handling/AddFarmer";
import EstateOwnersDetails from "./components/Estate_Owners_Handling/EstateOwnersDetails";
import ViewAllBlogPosts from "./components/Blog_About_Diseases/ViewAllBlogPosts";
import ReportVSO from "./components/AdminHome/VSO/ReportVSO";
import ReportBank from "./components/AdminHome/Bank/ReportBank";
import ReportFarmer from "./components/Estate_Owners_Handling/ReportFarmer";
import ViewCompany from "./components/Company_Handling/viewCompany";
import AddCompany from "./components/Company_Handling/AddCompany";
import ReportCompanyReqs from "./components/Company_Handling/ReportCompanyReqs";
import EditCompany from "./components/Company_Handling/EditCompany";


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/Admin" element={<AdminDashboard/>}/>
      <Route path="/AdminHome" exact element={<AdminHome/>}/>
      <Route path="/Admin_Contact" exact element={<ViewContact/>}/>

      <Route path="/Bank_Reg_Details" element={<AddBank/>}/>
      <Route path="/All_Branches_Details" element={<ViewBank/>} />
      <Route path="/Maintain_Bank_Details" element={<EditBank/>} />
      <Route path="/Report_Bank" element={<ReportBank/>}/>

      <Route path="/Add_New_VSO" element={<AddVSODetails/>} />
      <Route path="/VSO_List" element={<ViewVSODetails/>}/>
      <Route path="/Report_VSO" element={<ReportVSO/>}/>

      <Route path="/Farmer_Home" element={<FarmerHome/>}/>
      <Route path="/Request_Harvest_List" element={<RequestHarvestList/>}/>
      <Route path="/Apply_Bank_Loan" element={<ApplyLoan/>}/>
      <Route path="/Cinnamon_blog" element={<BlogPostViewHome/>}/>
      <Route path="/Add_Estate_Owner" element={<AddFarmer/>}/>
      <Route path="/View_EstateOwners" element={<EstateOwnersDetails/>}/>
      <Route path="/Report_EstateOwner" element={<ReportFarmer/>}/>

      <Route path="/AddBlog" element={<AddBlogPost/>}/>
      <Route path="/update_post" element={<UpdateBlogPost/>}/>
      <Route path="/View_All_Blogs_Details" element={<ViewAllBlogPosts/>}/>

      <Route path="/All_Companies" element={<ViewCompany/>}/>
      <Route path="/new_CompanyReq" element={<AddCompany/>}/>
      <Route path="/Report_Company" element={<ReportCompanyReqs/>}/>
      <Route path="/Edit_Company_Request/:id" element={<EditCompany/>}/>

    </Routes>
  );
}

export default App;
