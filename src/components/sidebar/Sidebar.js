import React, { Component } from 'react';
import List, { ListItem } from 'material-ui/List';

import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import SalmanMal from '../../assets/images/sidebar/Salman Mal.jpg';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            

        }

    }

    componentDidMount() {
       
    }
    componentWillReceiveProps(nextProps) {
    
        if (nextProps.drawerState) {
            this.setState({ drawerState: true });
        }
    
    }

    closeDrawer = () => {
        this.setState({ drawerState: false });
        this.props.toggleDrawer(false);
    }



   
    render() {
        
        //As per mobile.
        
        

        
        const drawerList =
            <div>
                <Link  to="/">

                    <img className="company-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiYAa70SUyqTGiAY6ZcwOY0oGB7sj7p636qfMb_8mD2JjNlJ6" alt="Salman mal" />

                </Link>
                <List className="sidebar-list">

                    <Link to={`/Home`} activeClassName="active">
                        <ListItem button onClick={this.closeDrawer}>
                            <div className="sidebar-icons home-icon" />Home
                    </ListItem>
                    </Link>
                    
                    <Link to={`/gridView`} activeClassName="active">
                        <ListItem button onClick={this.closeDrawer}>
                            <div className="sidebar-icons home-icon" />Grid View
                    </ListItem>
                    </Link>
                    <Link to={`/csvToExcel`} activeClassName="active">
                        <ListItem button onClick={this.closeDrawer}>
                            <div className="sidebar-icons home-icon" />CSV To Excel
                    </ListItem>
                    </Link>
                    
                    <Link to={`/printpdf`} activeClassName="active">
                        <ListItem button onClick={this.closeDrawer}>
                            <div className="sidebar-icons home-icon" />Print PDf
                    </ListItem>
                    </Link> 
                    <Link to={`/carasoul`} activeClassName="active">
                        <ListItem button onClick={this.closeDrawer}>
                            <div className="sidebar-icons home-icon" />Carasoul
                    </ListItem>
                    </Link> 
                    <Link to={`/datatable`} activeClassName="active">
                        <ListItem button onClick={this.closeDrawer}>
                            <div className="sidebar-icons home-icon" />Grid View
                    </ListItem>
                    </Link> 
                   
                </List>

            </div>
        return (
            <div className="sidebar-container">
                <Hidden only={['xs', 'sm']}>
                    <Drawer className="sidebar" type="permanent" classes={
                        {
                            paper: 'drawer-root'
                        }}>
                        {drawerList}
                    </Drawer>
                </Hidden>
                <Hidden only={['md', 'lg', 'xl']}>
                    <Drawer

                        classes={
                            {
                                paper: 'drawer-root',
                                modal: 'sidebar'
                            }
                        }
                        open={this.state.drawerState}
                        onRequestClose={this.closeDrawer}
                    >

                        {drawerList}
                    </Drawer>
                </Hidden>


            </div>
        );
    }
}


export default Sidebar;