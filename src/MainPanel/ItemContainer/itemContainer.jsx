import React, { Component } from 'react';
import CategoryItem from "./CategoryItem/categoryItem";
import SubCategoryItem from "./SubCategoryItem/subCategoryItem";
import Search from "../ItemContainer/Search/search";
import RightPanel from "../ItemContainer/RightPanel/rightPanel";
import "./itemContainer.scss";

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
            <div className="col itemLeftContainer">
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
            <div className="col itemRightContainer">
              <RightPanel />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default itemContainer;