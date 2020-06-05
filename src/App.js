import React from 'react';
import {Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Category from './components/Category/Category';
import Manga from './components/Manga/Manga';
import Chap from './components/Chap/Chap';
import Login from './components/Login/Login';
import Signin from './components/Login/Signin';
import User from './components/User/User';
import UploadManga from './components/User/UploadManga';

function App() {
  return (
    <Router>
          <Switch>
                <Redirect exact from="/" to="/manga-app"/>
                <Route exact={true} path="/manga-app" component={Home}></Route>
                <Route path="/manga-app/login" component={Login}></Route>
                <Route path="/manga-app/signin" component={Signin}></Route>
                <Route path="/manga-app/user">
                    <Route path="/manga-app/user/info" component={User}></Route>
                    <Route path="/manga-app/user/upload-manga" component={UploadManga}></Route>
                </Route>
                <Layout>
                    <Route exact={true} path="/manga-app" component={Home}></Route>
                    <Route path="/manga-app/category" component={Category}></Route>
                    <Route path="/manga-app/manga">
                        <Route exact path="/manga-app/manga/:idmanga" component={Manga}></Route>
                        <Route path="/manga-app/manga/:idmanga/chap/:idchap" component={Chap}></Route>
                    </Route>
                </Layout>
          </Switch>
    </Router>
  );
}

export default App;
