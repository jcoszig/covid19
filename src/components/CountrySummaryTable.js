import React, { Component } from "react";
import styled from 'styled-components';
import CountrySummaryData from "./CountrySummaryData";
import {  CountrySummaryTableWrapper, 
          CountrySummaryMainTable, 
          CountrySummaryTableLi } from "../styles/CountrySummaryTableStyles.js";

 
class CountrySummaryTable extends Component {
  state = {
    sortConfig: null,
    setSortConfig: null
  }

  useSortableData = (items, config = null) => {
    const sortConfig = {...this.state.sortConfig}
    const setSortConfig = {...this.state.setSortConfig}

    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if(sortConfig != null) {
        sortableItems.sort((a,b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        })
      }
      return sortableItems;
    }, [items, sortConfig]); //set 

    const requestSort = key => {
      let direction = 'up'; //ascending
      if (
        sortConfig &&
        sortConfig.key == key &&
        sortConfig.direction == 'up' //ascending
      ) {
        direction = 'down'; // descending
      }
      setSortConfig({ key, direction });
    };
    return { items: sortedItems, requestSort, sortConfig };
  }

  ProductTable = props => {
    const { items, requestSort, sortConfig } = this.useSortableData(this.props.filteredCountries);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
      <>
        {/* table headers */}
        {this.props.countrySummaryCategories.map( (header, index) => (
          <CountrySummaryTableLi           
            className="table-header"
            key={index}
            header={header}
            onClick={requestSort(header)}>
            <h3>{header}</h3>
            <i className={`fas fa-sort-${getClassNamesFor(header)}`}></i> 
          </CountrySummaryTableLi>
        ))}
        {/* table data */}
        {items.map((item, index) => (
          <CountrySummaryData
            key={item.CountrySlug}
            index={index}
            country={item.Country}
            newConfirmed={item.NewConfirmed}
            newDeaths={item.NewDeaths}
            newRecovered={item.NewRecovered}
            totalConfirmed={item.TotalConfirmed}
            totalDeaths={item.TotalDeaths}
            totalRecovered={item.TotalRecovered}
            slug={item.CountrySlug}
          />
        ))}
      </>
    );
  };
  
  render() {
    return (
      <>

      <CountrySummaryTableWrapper className="country-summary-table-wrapper">
        <CountrySummaryMainTable 
          className="country-summary-table"
          rows={Number(this.props.countries.length) + 1}
          columns={this.props.countrySummaryCategories.length}>
          {this.ProductTable()}
        </CountrySummaryMainTable>
      </CountrySummaryTableWrapper>

      </>
    );
  }
}

export default CountrySummaryTable;