import './App.css';
import DataProvider from './context/DataProvider';

import {BrowserRouter,Routes,Route,Navigate,Outlet} from 'react-router-dom'
import {useState} from 'react';

import Login from './components/accounts/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import CreatePost from './components/create/CreatePosts';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';
import  {ContactUs} from './components/contactus/ContactUs';
import  {About} from './components/About/About';

const PrivateRoute=({isAuthenticated,...props})=>{
   // outlet is used to get the route inside the child component
  return isAuthenticated ?
          <>
            <Header />
             <Outlet /> 
          </>
        :<Navigate replace to='/login' />

}


function App() {

  const [isAuthenticated,isUserAuthenticated]=useState('false');

  return (
     // only login route is set to be a public route rest of the routes are private routes
    <DataProvider>
      <BrowserRouter>
          <div style={{marginTop:64}}>
          <Routes>
             <Route path='/login'  element={<Login isUserAuthenticated={isUserAuthenticated}/>}/>
             <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                  <Route path='/'  element={<Home />}/>
             </Route>
             <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                  <Route path='/create'  element={<CreatePost />}/>
             </Route>
             <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                  <Route path='/details/:id'  element={<DetailView/>}/>
             </Route>
             <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                  <Route path='/update/:id'  element={<Update />}/>
             </Route>
            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                  <Route path='/contact'  element={<ContactUs/>}/>
             </Route>
              <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                  <Route path='/about'  element={<About/>}/>
              </Route>
          </Routes>
        </div> 
      </BrowserRouter>
    </DataProvider>
   
  );
}

export default App;
