import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import './GridView.scss';
import '../../assets/styles/Main.scss';
import 'react-responsive-carousel/lib/styles/carousel.css';

import { TOGGLE_VISIBILITY, UPDATE_GRID_DATA } from '../../constants';
import {toggleVisibility,updateGridata} from '../../utils/actionTypes';

//Remove Following Line During Production Build
//import {BetaVersion} from '../../constants';

export class GridView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        
        setInterval(function () {
            document.getElementById("btnCngGridData").click()
        }, 1000)
    }
    

    componentWillReceiveProps(nextProps) {

    }
    toggleVisibility = () => {
        this.props.toggleVisibility();
    }
    updateGridData=()=>  {
      
        let data = [];
        data.push({ firstName: "Salman", lastName: "Mal", age: parseInt(Math.random()*100)-50 });
        data.push({ firstName: "Komel", lastName: "Lakhani", age: parseInt(Math.random()*100)-50});
        data.push({ firstName: "Rinkal", lastName: "Patel", age: parseInt(Math.random()*100)-50 });
        data.push({ firstName: "Bhagyesh", lastName: "Shukla", age: parseInt(Math.random()*100)-50});
        data.push({ firstName: "Maulik", lastName: "Pathak", age: parseInt(Math.random()*100)-50 });
        data.push({ firstName: "Vijay", lastName: "Parmar", age: parseInt(Math.random()*100)-50});

        this.props.updateGridData(data);
    }

    render() {
        let GridData=[];
        if(this.props.gridData.length>0){
            GridData    =this.props.gridData;
            GridData=   GridData.sort(function(a, b){
                return b.age-a.age
            })
        };
        return (
            <div>
                <button onClick={this.toggleVisibility}>{this.props.appVisibility ? "Hide Grid" : "Show Grid"}</button>
                <button onClick={this.updateGridData} id="btnCngGridData">Change Grid Data</button>
                {this.props.appVisibility && <table><tr className="header"><td>FirstName</td><td>Last Name</td><td>Age</td></tr>
                    <tbody>{this.props.gridData.length > 0 ? GridData.map((item) => { return (<tr className={item.age<0?'red':'green'} key={item.firstName}><td>{item.firstName}</td><td>{item.lastName}</td><td>{item.age}</td></tr>); }) : ""}</tbody></table>}

            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        appVisibility: state.AppState.AppVisibility,
        gridData: state.AppState.GridData
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleVisibility: () => { dispatch( toggleVisibility() ) },
        updateGridData: (data) => { dispatch(updateGridata(data )) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GridView);