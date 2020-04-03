import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class CountrySummary extends Component {

    render() {

        return (
            <ul key={this.props.key}>
                <li>country: {this.props.country}</li>
                <li>new confirmed: {this.props.newConfirmed}</li>
                <li>new deaths: {this.props.newDeaths}</li>
                <li>new recovered: {this.props.newRecovered}</li>
                <li>slug: {this.props.slug}</li>
                <li>total confirmed: {this.props.totalConfirmed}</li>
                <li>total deaths: {this.props.totalDeaths}</li>
                <li>total recovered: {this.props.totalRecovered}</li>
                <Link to={`/graph/${this.props.slug}`}>
                    <div  className="country-summary-view-full">View full details</div>
                </Link>
            </ul> 
        );
    }
}

export default CountrySummary;