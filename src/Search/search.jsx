import React from "react";
import "./search.scss"

class Search extends React.Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <form className="col-md-10 search-form">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Search;