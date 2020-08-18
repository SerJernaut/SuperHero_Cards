import React, {Suspense} from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route} from "react-router";
import CreateSuperHeroCardPage from "./pages/CreateSuperHeroCardPage/CreateSuperHeroCardPage";
import MainPage from "./pages/MainPage/MainPage";
import UpdateSuperHeroCardPage from "./pages/UpdateSuperHeroCardPage/UpdateSuperHeroCardPage";

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
                      <Route exact path="/" component={MainPage}/>
                      <Route path="/create_superhero_card" component={CreateSuperHeroCardPage}/>
                      <Route path="/update_superhero_card/:id" component={UpdateSuperHeroCardPage}/>
                  </Switch>
              </Suspense>
          </Router>
  );
}


export default App;
