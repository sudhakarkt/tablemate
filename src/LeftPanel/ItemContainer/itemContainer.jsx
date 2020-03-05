import React, { Component } from 'react';
import CategoryItem from "./CategoryItem/categoryItem";
import SubCategoryItem from "./subCategoryItem/subCategoryItem";
import Search from "../../Search/search";
import RightPanel from "../../RightPanel/rightPanel"

class itemContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {  }
  }
  render() { 
    return ( 
      <React.Fragment>
        <div className="itemContainer">
          <div className="row">
            <div className="col-md-10">
              <Search />
              <div className="row">
                <div className="col-md-2">
                  <CategoryItem />
                </div>
                <div className="col-md-10">
                  <SubCategoryItem />
                </div>
              </div>
            </div>
            <div className="col-md-2 pl-0">
              <RightPanel />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default itemContainer;