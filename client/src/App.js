import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import './App.css';

import { GiChestnutLeaf } from  'react-icons/gi';

import Footer from './Components/footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Vaccine from './Components/Vaccine';
import IvsC from './Components/IvsC';

class App extends React.Component {
    render()
    {
      return(
        <>
            <div className = "MainBody">
              <h1 style = {{textAlign : "center"}}> <GiChestnutLeaf className = "icon"/>V.A.B.O.P</h1>
              <div className = "content">
                <div className = "content1">
                  <Navbar/>
                </div>
                <div className = "content2">
                  <BrowserRouter>
                    <Route exact path = {'/'} component = {Home}/>
                    <Route exact path = {'/Contact'} component = {Contact} />
                    <Route exact path = {'/Vaccine'} component = {Vaccine} />
                    <Route exact path = {'/IvsC'} component = {IvsC} />
                  </BrowserRouter>
                </div>
              </div>
            </div>
            {/* <Footer/> */}
        </>
      )
    }
}
export default App;
