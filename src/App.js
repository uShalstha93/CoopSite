import React from 'react'
import './App.css';
import Navibar from './Components/Pages/Navigation/Navibar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Pages/Main/Homepage';
import Footer from './Components/Pages/Navigation/Footer';
import BoardOfDirectors from './Components/Pages/Hr/BoardOfDirectors';
import AccountComittee from './Components/Pages/Hr/AccountComittee';
import AdvisoryBoard from './Components/Pages/Hr/AdvisoryBoard';
import LoanSubComittee from './Components/Pages/Hr/LoanSubComittee';
import AssetsPurchaseSubComittee from './Components/Pages/Hr/AssetsPurchaseSubComittee';
import ManagementTeam from './Components/Pages/Hr/ManagementTeam';
import BranchesPage from './Components/Pages/Main/BranchesPage';
import Branch1 from './Components/Pages/Branches/Branch1';

const App = () => {
  return (
    <>

      <div className='navigation-top'>
        <Navibar />
      </div>

      <Routes>

        {/* home route */}
        <Route exact path='/' element={<Homepage />} />

        {/* hr routes */}
        <Route exact path='/hr/bod-members' element={<BoardOfDirectors />} />
        <Route exact path='/hr/supervisory-committee' element={<AccountComittee />} />
        <Route exact path='/hr/advisory-board' element={<AdvisoryBoard />} />
        <Route exact path='/hr/loan-subcommittee' element={<LoanSubComittee />} />
        <Route exact path='/hr/assets-purchase-subcommittee' element={<AssetsPurchaseSubComittee />} />
        <Route exact path='/hr/management-team' element={<ManagementTeam />} />
        <Route exact path='/branches/all' element={
          <div className='main'>
            <div className='left-fixed'></div>
            <div className='container'>
              <BranchesPage />
            </div>
            <div className='right-fixed'></div>
          </div>
        } />

        {/* branches routes */}
        <Route exact path='/branches/kotihawa-service-center' element={<Branch1 />} />

        {/* other routes */}
        <Route path='*' element={<div style={{ display: 'flex', justifyContent: 'center', }}><p><b>404 PAGE NOT FOUND !</b></p></div>} />

      </Routes>

      <div className='footer'>
        <Footer />
      </div>

    </>
  )
}

export default App