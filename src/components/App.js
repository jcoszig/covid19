import React, { Component } from "react";
import styled from 'styled-components';
// import { ... } from "../helpers";
import Header from "./Header";
import CountrySummary from "./CountrySummary";
import CountrySummaryHeader from "./CountrySummaryHeader";
import {  CountrySummaryTableWrapper, CountrySummaryTable } from "../styles/CountrySummaryTable.js";

class App extends Component {

  /* Initialize state, default countries are set */
  state = {
    requestFailed: false,
    isLoaded: false,
    countriesSummary: [],
    countriesSummaryRetrievalDate: '',
    filteredCountries: [],
    countries: [
      'US',
      'Italy',
      'Spain',
      'United Kingdom',
      'Norway',
      'Sweden',
      'Germany',
      'South Korea'
    ],
    summaryTableHeaders: [
      'Country:',
      'Total confirmed:',
      'New confirmed:',
      'New deaths:',
      'New recovered:',
      'Total deaths:',
      'Total recovered:',
      '' // view further info
    ]
  }

  /* Fetch JSON data and set in state. */
  async componentDidMount() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }; 

    // await fetch('https://api.covid19api.com/summary', requestOptions)
    await fetch('http://localhost:3000/data/summary.json')
    .then( response => {
      if (response.status !== 200) {
        throw Error('Network request failed. Status Code: ' + response.status);
        return;
      }
      response.json().then(
        result => { 
          this.setState({ 
            countriesSummary: result.Countries, 
            countriesSummaryRetrievalDate: result.Date,
            isLoaded: true
          })
        }, 
        error => {
          this.setState({ 
            requestFailed: error,
            isLoaded: true 
          })
      })
    })
  }

  componentDidUpdate(prevState){
    if(!this.state.filteredCountries.length > 0 ){
      this.filterCountries()
    }
    console.log('component did update')
  }

  /*  Filter data by list of countries (filters an array with an array) */
  filterCountries = () => {
    let filteredCountries = { ...this.state.filteredCountries };

    filteredCountries = this.state.countriesSummary.filter(item => {
      return this.state.countries.indexOf(item.Country) !== -1;
    })
    this.setState({ filteredCountries })
  }

  render() {
    if(this.state.requestFailed) return <div className="error">Unable to fetch data</div>
    else if(!this.state.isLoaded) return <div className="loading">Loading...</div>
    else return (
      <>
        <Header/>
        <main className="main">
          <CountrySummaryTableWrapper className="country-summary-table-wrapper">
            <CountrySummaryTable 
              className="country-summary-table"
              rows={Number(this.state.countries.length) + 1}
              columns={this.state.summaryTableHeaders.length}>
              
              {/* Table headers */}
              {this.state.summaryTableHeaders.map( (header, index) => (
                <CountrySummaryHeader
                  key={index}
                  header={header}
                />
              ))}

              {/* Table data */}
              {this.state.filteredCountries.length > 0 &&
               this.state.filteredCountries.map( (item, index) => (
                <CountrySummary
                  key={item.CountrySlug}
                  index={index}
                  country={item.Country}
                  newConfirmed={item.NewConfirmed}
                  newDeaths={item.NewDeaths}
                  newRecovered={item.NewRecovered}
                  slug={item.CountrySlug}
                  totalConfirmed={item.TotalConfirmed}
                  totalDeaths={item.TotalDeaths}
                  totalRecovered={item.TotalRecovered}
                />
              ))}
            </CountrySummaryTable>
          </CountrySummaryTableWrapper>
        </main>
      </>
    );
  }
}
 
export default App;
