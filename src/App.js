import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from "./Header/header";
import DineIn from "./LeftPanel/DineIn/dineIn";
import ItemContainer from "./LeftPanel/ItemContainer/itemContainer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
            <Switch>
              <Route path="/" exact component={DineIn} />
              <Route path="/menu" component={ItemContainer} />
            </Switch>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Router>
  );
}

export default App;