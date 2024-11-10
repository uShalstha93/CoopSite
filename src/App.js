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
import Branch2 from './Components/Pages/Branches/Branch2';
import SavingDashboard from './Components/Pages/Dashboard/SavingDashboard';
import RegularMSaving from './Components/Pages/SavingService/RegularMSaving';
import RemittanceSaving from './Components/Pages/SavingService/RemittanceSaving';
import GrihiniSaving from './Components/Pages/SavingService/GrihiniSaving';
import KhutrukeSaving from './Components/Pages/SavingService/KhutrukeSaving';
import UjjalBhabishyaSaving from './Components/Pages/SavingService/UjjalBhabishyaSaving';
import DailySaving from './Components/Pages/SavingService/DailySaving';
import SajiloSaving from './Components/Pages/SavingService/SajiloSaving';

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
        <Route exact path='/branches/pahuch-service-center' element={<Branch2 />} />

        {/* saving services */}
        <Route exact path='/service/saving-service' element={<SavingDashboard />}>
          <Route path='/service/saving-service/regularmonthlysaving' element={<RegularMSaving />} />
          <Route path='/service/saving-service/remittancesaving' element={<RemittanceSaving />} />
          <Route path='/service/saving-service/grihinisaving' element={<GrihiniSaving />} />
          <Route path='/service/saving-service/khutrukesaving' element={<KhutrukeSaving />} />
          <Route path='/service/saving-service/ujjalbhabishyasaving' element={<UjjalBhabishyaSaving />} />
          <Route path='/service/saving-service/dailysaving' element={<DailySaving />} />
          <Route path='/service/saving-service/sajilosaving' element={<SajiloSaving />} />
        </Route>

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