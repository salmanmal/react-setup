
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import store from './../store'

import '../assets/styles/Main.scss';

import Pace from 'pace-progress';
import 'pace-progress/themes/blue/pace-theme-center-simple.css';

import App from './app/App';
import ComponentList from './ComponentList';
import GridView from './gridview/GridView';
import CsvToExcel from './csvtoexcel/CsvToExcel';
import PrintExample from './printComponent/RenderComponet';
import DataTable from './dataTable/DataTableSS';
import Carasoul from './carasoul';

String.prototype.capitalize = function () {
    return this.toLowerCase().replace(/\b\w/g, function (m) {
        return m.toUpperCase();
    });
};


class Main extends Component {



    render() {
        return (

            <BrowserRouter history={browserHistory} >
                <App>
                    <Switch>
                        <Route path="/" component={ComponentList} exact={true} />
                        <Route path="/Home" component={ComponentList} exact={true} />
                        <Route path="/gridView" component={GridView} />
                        <Route path="/csvToExcel" component={CsvToExcel} />
                        <Route path="/printpdf" component={PrintExample} />
                        <Route path="/carasoul" component={Carasoul} />
                        <Route path="/datatable" component={DataTable} />
                    </Switch>
                </App>
            </BrowserRouter>

        );
    }
}

export default Main;

