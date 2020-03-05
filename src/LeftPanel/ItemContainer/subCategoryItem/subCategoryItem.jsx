import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Beer</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Brandy</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Cocktail</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Desserts</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Gin</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Liquors</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Main Course</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Mocktails</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Pizza/Platter/Pasta</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Rum</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Shooters</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Soft Drinks</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Soft Drinks Can</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Soups &amp; Salads</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Starters</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Tent Card</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Tent Card Alcohol</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Tequila</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Tobacco</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Vodka</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Water</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Whisky</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Wine/Chapange</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Beer</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Brandy</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Cocktail</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Desserts</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Gin</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Liquors</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Main Course</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Mocktails</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Pizza/Platter/Pasta</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Rum</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Shooters</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Soft Drinks</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Soft Drinks Can</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Soups &amp; Salads</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Starters</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Tent Card</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Tent Card Alcohol</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Tequila</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Tobacco</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Vodka</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Water</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Whisky</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 subCategoryName">
                        <div className="subCategoryInner">
                            <div className="subCategoryValue">
                                <p>Wine/Chapange</p>
                                <p className="valuePrice">&#x20b9; 1500.00</p>
                            </div>
                            <div className="row m-0 subCategoryMenu">
                                <div className="col-md-3 p-0 runningOrder"><Link to='./' className="btn btn-primary">RO</Link></div>
                                <div className="col-md-3 p-0 tableOrder"><Link to='./' className="btn btn-primary">O</Link></div>
                                <div className="col-md-3 p-0 tableBill"><Link to='./' className="btn btn-primary">CUST</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default SubCategoryItem;