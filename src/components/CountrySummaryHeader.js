import React, { Component } from "react";
 
class CountrySummaryHeader extends Component {

    render() {
        return (
            <li><h3>{this.props.header}</h3></li>
        );
    }
}

export default CountrySummaryHeader;