import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class CountrySummary extends Component {

    render() {

        return (
            <>
                <li>{this.props.country}</li>
                <li>{this.props.totalConfirmed}</li>
                <li>{this.props.newConfirmed}</li>
                <li>{this.props.newDeaths}</li>
                <li>{this.props.newRecovered}</li>
                <li>{this.props.totalDeaths}</li>
                <li>{this.props.totalRecovered}</li>
                <Link to={`/graph/${this.props.slug}`}>
                    <li className="country-summary-view-full">
                        <p>View full details</p>
                    </li>
                </Link>
            </>
        );
    }
}

export default CountrySummary;