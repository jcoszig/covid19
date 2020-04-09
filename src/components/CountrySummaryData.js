import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CountrySummaryTableLi } from "../styles/CountrySummaryTableStyles";
import { numberWithCommas } from "../helpers"; 

class CountrySummaryData extends Component {

    render() {

        return (
            <>
                <CountrySummaryTableLi>{this.props.country}</CountrySummaryTableLi>
                <CountrySummaryTableLi>{numberWithCommas(this.props.totalConfirmed)}</CountrySummaryTableLi>
                <CountrySummaryTableLi>{numberWithCommas(this.props.newConfirmed)}</CountrySummaryTableLi>
                <CountrySummaryTableLi>{numberWithCommas(this.props.newDeaths)}</CountrySummaryTableLi>
                <CountrySummaryTableLi>{numberWithCommas(this.props.newRecovered)}</CountrySummaryTableLi>
                <CountrySummaryTableLi>{numberWithCommas(this.props.totalDeaths)}</CountrySummaryTableLi>
                <CountrySummaryTableLi>{numberWithCommas(this.props.totalRecovered)}</CountrySummaryTableLi>
                <Link to={`/graph/${this.props.slug}`}>
                    <CountrySummaryTableLi className="country-summary-view-full">
                        <p>View full details</p>
                    </CountrySummaryTableLi>
                </Link>
            </>
        );
    }
}

export default CountrySummaryData;