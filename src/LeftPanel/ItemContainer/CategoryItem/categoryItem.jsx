import React, { Component } from 'react';
import "./categoryItem.scss";

class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="categoryItem">
                    <div className="row">
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Beer</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Brandy</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Cocktail</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Desserts</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Gin</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Liquors</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Main Course</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Mocktails</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Pizza/Platter/Pasta</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Rum</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Shooters</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Soft Drinks</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Soft Drinks Can</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Soups &amp; Salads</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Starters</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Tent Card</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Tent Card Alcohol</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Tequila</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Tobacco</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Vodka</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Water</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Whisky</div>
                            </div>
                        </div>
                        <div className="col-md-2 categoryName">
                            <div className="categoryInner">
                                <div className="categoryValue">Wine/Chapange</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CategoryItem;