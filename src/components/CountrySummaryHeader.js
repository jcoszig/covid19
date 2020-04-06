import React, { Component } from "react";
import { CountrySummaryTableLi } from "../styles/CountrySummaryTable.js";
 
class CountrySummaryHeader extends Component {

    render() {
        return (
            <CountrySummaryTableLi>
                <h3>{this.props.header}</h3>
            </CountrySummaryTableLi>
        );
    }
}

export default CountrySummaryHeader;