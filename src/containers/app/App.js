import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './App.scss';
export default class App extends React.Component{

constructor(props){
    
        super(props);
        this.state = {openDrawer: false};
    
}
toggleDrawer = (toggleDrawer) => {
    this.setState({openDrawer:toggleDrawer});
}
    render(){

        return(<div className="app-container">
            <Sidebar toggleDrawer={this.toggleDrawer} drawerState={this.state.openDrawer}/>
            <Navbar toggleDrawer={this.toggleDrawer}/>
            <div className="app-content">
            {this.props.children}
            </div>
        </div>)
    }
}