import styled from 'styled-components';

export const CountrySummaryTableWrapper = styled.div `
    background-color: #fff;
    margin: 0 auto 5rem;
    width: 100%;
    padding: 3rem;
`;

/*  props.rows: country number +1 (headers) 
    props.columns: number of country summary categories */
export const CountrySummaryTable = styled.ul.attrs(props => ({
        rows: props.rows, 
        columns: props.columns 
    }))`
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(${props => props.rows}, auto);
    grid-template-columns: repeat(${props => props.columns}, 1fr);
`;

export const CountrySummaryTableLi = styled.li `
    background-color: #fff;
    border: 1px solid #f2f2f2;
    padding: 1rem 2.5rem;
`;
