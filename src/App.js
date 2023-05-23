import logo from './logo.svg';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Login from './Login';
import ViewCart from './UserPages/ViewCart';
import ViewMedicines from './UserPages/ViewMedicines';
import ViewUsers from './AdminPages/ViewUsers';
import Register from './Register';
import Dashboard from './components/Layout/Dashboard';
import UserDetails from './AdminPages/UserDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ViewCategories from './AdminPages/ViewCategories';
import ViewCategoryDetails from './AdminPages/ViewCategoryDetails';
import EditCategories from './AdminPages/EditCategories';
import AddCategory from './AdminPages/AddCategory';
import AddMedicine from './AdminPages/medicine/AddMedicine';
import ViewMedicineDetails from './AdminPages/medicine/ViewMedicineDetails';
import ViewMedicinesAdmin from './AdminPages/medicine/ViewMedicinesAdmin';
import EditMedicine from './AdminPages/medicine/EditMedicine';
import CheckOut from './UserPages/CheckOut';
import MakePayment from './UserPages/MakePayment';
import Invoice from './UserPages/Invoice';
import ViewDetailsUser from './UserPages/ViewDetailsUser';
import DefaultPage from './DefaultPage';
import About from './components/Layout/About';
import Privacy from './components/Layout/Privacy';
import Contact from './components/Layout/Contact';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [userid, setUserId] = useState(0);
  const [catid, setCategoryId] = useState(0);
  const [medid, setMedId] = useState(0);
  const [cartid, setCartId] = useState(0);

  const Auth = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  const Role = (parameter) => {
    setRole(parameter);
  }

  const userId = (parameter) => {
    setUserId(parameter);
  }

  const CategoryId = (parameter) => {
    setCategoryId(parameter);
  }

  const MedicineId = (parameter) => {
    setMedId(parameter);
  }

  const CartId = (parameter) => {
    setCartId(parameter);
  }


  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} Auth={Auth} role={role} />

        <Routes>
          <Route exact path='/login'
            Component={(props) => <Login {...props} Auth={Auth} Role={Role} userId={userId} />}
          />
          <Route exact path='/register' Component={Register} />
          <Route exact path='/dashboard' Component={Dashboard} />
          <Route exact path='/viewmedicines'
            Component={(props) => <ViewMedicines {...props} userid={userid} MedicineId={MedicineId} />} />
          <Route exact path='/viewmedicinedetailsuser'
            Component={(props) => <ViewDetailsUser {...props} userid={userid} medid={medid} />} />
          <Route exact path='/viewusers'
            Component={(props) => <ViewUsers {...props} userId={userId} />} />
          <Route exact path='/viewuserdetails'
            Component={(props) => <UserDetails {...props} userid={userid} />} />
          <Route exact path='/viewcategories'
            Component={(props) => <ViewCategories {...props} CategoryId={CategoryId} />} />
          <Route exact path='/viewcategorydetails'
            Component={(props) => <ViewCategoryDetails {...props} catid={catid} />} />
          <Route exact path='/editcategory'
            Component={(props) => <EditCategories {...props} catid={catid} />} />
          <Route exact path='/addcategory' Component={AddCategory} />
          <Route exact path='/viewmedicinesadmin'
            Component={(props) => <ViewMedicinesAdmin {...props} MedicineId={MedicineId} />} />
          <Route exact path='/viewmedicinedetails'
            Component={(props) => <ViewMedicineDetails {...props} medid={medid} />} />
          <Route exact path='/editmedicine'
            Component={(props) => <EditMedicine {...props} medid={medid} />} />
          <Route exact path='/addmedicine' Component={AddMedicine} />
          <Route exact path='/viewcart'
            Component={(props) => <ViewCart {...props} userid={userid} />} />
          <Route exact path='/checkout' Component={CheckOut} />
          <Route exact path='/makepayment' Component={MakePayment} />
          <Route exact path='/invoice' Component={Invoice} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/privacy' Component={Privacy} />
          <Route exact path='/contact' Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
