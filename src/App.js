import React from 'react';
import {Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Category from './components/Category/Category';
import Manga from './components/Manga/Manga';
import Chap from './components/Chap/Chap';

function App() {
  return (
    <Router>
          <Switch>
                <Redirect exact from="/" to="/manga-app"/>
                <Route exact={true} path="/manga-app" component={Home}></Route>
                <Route path="/manga-app/login" component={Category}></Route>
                <Layout>
                    <Route exact={true} path="/manga-app" component={Home}></Route>
                    <Route path="/manga-app/category" component={Category}></Route>
                    <Route path="/manga-app/manga">
                        <Route exact path="/manga-app/manga" component={Manga}></Route>
                        <Route path="/manga-app/manga/chap" component={Chap}></Route>
                    </Route>
                </Layout>
          </Switch>
    </Router>
  );
}

export default App;
