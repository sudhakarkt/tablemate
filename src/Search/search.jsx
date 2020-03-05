import React, { Component } from 'react';
import "./search.scss"

class Search extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <form className="search-form">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Search;