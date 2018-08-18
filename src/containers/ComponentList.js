import React from 'react';
import { Link } from 'react-router-dom';


export default class ComponentList extends React.Component {

    render() {
        return (
        <div><h1>Hi</h1>
            <Link to="gridView" >Grid View</Link><br/>
            <Link to="csvToExcel" >CSV To Excel</Link><br/>
            <Link to="printpdf" >Print PDF</Link><br/>
          
        </div>);
    }
}