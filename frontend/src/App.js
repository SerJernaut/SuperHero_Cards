import React, {Suspense} from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import {connect} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';


function App () {


  return (
          <Router>
              <ToastContainer
                  position="top-center"
                  autoClose={2000}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnVisibilityChange
                  draggable
                  pauseOnHover
              />
              <Suspense fallback={<div className='loader'>Loading...</div>}>
                  <Switch>

                  </Switch>
              </Suspense>
          </Router>
  );
}


export default App;
