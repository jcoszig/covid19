import React, { Component } from "react";
// import { ... } from "../helpers";
import CountrySummary from "./CountrySummary";
 
class App extends Component {

  // Initialize state, default countries are set
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
    ]
  }

  // Fetch JSON data and set in state.
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
        <main className="country-summary-table">
          {/* Render country summaries */}
          {this.state.filteredCountries.length > 0 && this.state.filteredCountries.map( (item, index) => (
            <CountrySummary
              key={item.Slug}
              index={index}
              country={item.Country}
              newConfirmed={item.NewConfirmed}
              newDeaths={item.NewDeaths}
              newRecovered={item.NewRecovered}
              slug={item.Slug}
              totalConfirmed={item.TotalConfirmed}
              totalDeaths={item.TotalDeaths}
              totalRecovered={item.TotalRecovered}
            />
          ))}
        </main>
      </>
    );
  }
}
 
export default App;
