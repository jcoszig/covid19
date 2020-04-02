import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { getFromDate } from "../helpers";
 
class App extends Component {

  // Initialize state
  state = {
    parsedData : []
  }

  // Fetch JSON data and set in state.
  async componentDidMount() {
    await fetch('http://localhost:3000/data/data.json')
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(
          data => { this.setState({parsedData:data})
        })
      }
    )
    .catch(err => {
      console.log('unable to fetch JSON data. Error: ', err)
    });
  }

  // Store user input from search query
  // updateSearchQuery = ui => {
  //   // Take copy of current state then update
  //   let searchQuery = { ...this.state.searchQuery };
  //   searchQuery = ui;
  //   this.setState({ searchQuery });

  //   this.updateFilteredData(searchQuery.toLowerCase() );
  // };

  // Filter matches within title or description
  // updateFilteredData = wordToMatch => {
  //   let filteredData = { ...this.state.filteredData };

  //   filteredData = this.state.parsedData.filter( item => {
  //     const regex = new RegExp(wordToMatch, 'gi');
  //     return item.title.match(regex) || item.description.match(regex)
  //   });
  //   this.setState({ filteredData });
  // }

  // toggleSortByDate = () => {
  //   let filteredData = { ...this.state.filteredData };
  //   filteredData = this.state.filteredData.sort((a, b) => getFromDate(a.temporal) - getFromDate(b.temporal))
  //   this.setState({ filteredData: filteredData, sortOption: 'by Date' });
  // }

  // toggleSortAlphabetically = () => {
  //   let filteredData = { ...this.state.filteredData };
  //   filteredData = this.state.filteredData.sort((a, b) => a.title.localeCompare(b.title))    
  //   this.setState({ filteredData: filteredData, sortOption: 'Alphabetically' });
  // }

  // Filter matches based on filter checkbox
  // updateFilterList = filter => {
  //   let filterList = { ...this.state.filterList };

  //   filterList = this.state.parsedData.filter( item => {
  //     const regex = new RegExp(filter, 'gi');
  //     return item.title.match(regex) || item.description.match(regex)
  //   });
  //   this.setState({ filterList });
  // }

  // Displays total number of results for search query
  // numberResults = () => {
  //   if(this.state.filteredData.length > 0){
  //     return (
  //       `${this.state.filteredData.length} results for "${this.state.searchQuery}"`
  //     );
  //   }
  // }

  // Toggle 'sort by' dropdown
  // toggleSortOptions = () => {
  //   this.setState(state => ({
  //     sortDropdown: !state.sortDropdown
  //   }));
  // }

  // toggleMobileMenu = () => {
  //   this.setState(state => ({
  //     mobileMenu: !state.mobileMenu
  //   }));
  // }

  render() {

    return (
      <>
        <main>test. hello!</main>
      </>
    );
  }
}
 
export default App;
