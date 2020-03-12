import React, { Component } from 'react';
import SubCategoryInner from "./SubCategoryItemInner/subCategoryItemInner";
import "./subCategoryItem.scss";

class SubCategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row subCategoryItem">
                    <SubCategoryInner />
                    <SubCategoryInner />
                    <SubCategoryInner />
                    <SubCategoryInner />
                    <SubCategoryInner />
                    <SubCategoryInner />
                    <SubCategoryInner />
                    <SubCategoryInner />
                    <SubCategoryInner />
                </div>
            </React.Fragment>
         );
    }
}
 
export default SubCategoryItem;