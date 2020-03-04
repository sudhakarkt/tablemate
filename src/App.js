import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from "./Header/header";
import Search from "./Search/search";
import LeftPanel from "./LeftPanel/leftPanel";
import RightPanel from "./RightPanel/rightPanel";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <Search />
        <div className="row">
          <div className="col-md-10">
            <LeftPanel />
          </div>
          <div className="col-md-2">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;