import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing_page from "./Common pages/Landing_page";
import HomePage from "./Users Pages/HomePage";
import Login from "./Users Pages/Login";
import Register from "./Users Pages/Register";
import JobPosting from "./Admin Pages/JobPosting";
import Eroor from "./Users Pages/Eroor";
import Portal from "./Admin Pages/Portal";
import JobAppliedList from "./Admin Pages/jobAppliedList";
import Jobpage from "./Users Pages/jobpage";
import ApplyJobs from "./Users Pages/ApplyJobs";
import JobPosted from "./Admin Pages/JobPosted";
import AboutUs from "./Common pages/AboutUs";
import ContactUs from "./Common pages/ContactUS";
import Profile from "./Common pages/Profile";

export default function App() {
  return (
    <>
      {/* Routing Using React Router DOM */}
      {/* no changes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/JobPosting" element={<JobPosting />} />
          <Route path="*" element={<Eroor />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/jobAppliedList" element={<JobAppliedList />} />
          <Route path="/Jobpage" element={<Jobpage />} />
          <Route path="/ApplyJobs" element={<ApplyJobs />} />
          <Route path="/jobPosted" element={<JobPosted />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Profile" element={<Profile />} />

          {/* <Route path="/Search" element={<Search />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
