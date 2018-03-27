import React from "react";
import ReactDOM from "react-dom";

class Autocomplete extends React.Component { 
    constructor(props) { 
        super(props); 
        this.db = ["ETH", "ETC", "BTC"]; 
    }

    getitems(text) { 
        const filterItems = query => { 
            return this.db.filter( el => el.toLowerCase().indexOf(query.toLowerCase()) > -1 ); 
        };

        console.log(filterItems(text.target.value));
    }

    render() { 
        return (
            <input id="autocomplete" type="text" onChange={e => this.getitems(e)} />
        ); 
    } 
}


export default Autocomplete;

