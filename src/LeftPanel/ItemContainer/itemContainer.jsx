import React, { Component } from 'react';
import CategoryItem from "./CategoryItem/categoryItem";
import SubCategoryItem from "./subCategoryItem/subCategoryItem";

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
                        <div className="col">
                        <CategoryItem />
                    </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <SubCategoryItem />
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}

export default itemContainer;