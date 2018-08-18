import React from 'react';
import {browserHistory ,Link} from 'react-router-dom';
import List, { ListItem } from 'material-ui/List';
import { findDOMNode } from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import MenuIcon from 'material-ui-icons/Menu';
import LocationIcon from 'material-ui-icons/LocationOn';
import { CircularProgress } from 'material-ui/Progress';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Menu from '../menu/Menu'
import Hidden from 'material-ui/Hidden';
import feedIcon from './img/feeds-icon.png';
import menuIcon from './img/menu-icon.png';
import notificationIcon from './img/notification-icon.png';
import profileIcon from '../../assets/images/sidebar/user.png';
import SalmanMal from '../../assets/images/sidebar/Salman Mal.jpg';
import './Navbar.scss';
import Popover from 'material-ui/Popover';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
            anchorOriginVertical: 'bottom',
            anchorOriginHorizontal: 'center',
            transformOriginVertical: 'bottom',
            transformOriginHorizontal: 'center',
            
        };
    }

    handleUserActions = (data, index, id) => {
        if (data.action === 'logout') {
            alert("write action on click")
        }
        if (data.action === 'changePassword') {
            alert("write action on click")
        }
    }

    handleLeftOpen = () => {
        this.props.toggleDrawer(true);
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


    handleClickButton = () => {
        this.setState({
            open: true,
            anchorEl: findDOMNode(this.button),
        });
    };

    
    componentDidMount() {
    
    }
    componentWillReceiveProps(nextProps) {
     
    }
    handleScroll = () => {
        // if (this.props.notifications && this.state.currentNotificationPage < this.props.notifications.tTotalPages && !this.state.loadingNotification) {
        //     this.props.getNotifications(this.state.currentNotificationPage + 1, this.props.notifications)
        //     this.setState({ currentNotificationPage: this.state.currentNotificationPage + 1, loadingNotification: true })
        // }
    }
    
    render() {
        const options = [{ "name": "Change Password", "action": "changePassword" },{ "name": "Logout", "action": "logout" }]

        let { open, anchorOriginHorizontal, anchorOriginVertical, transformOriginHorizontal, transformOriginVertical, anchorEl } = this.state
     
        let breadCrumb = this.props.location
        let breadCrumbList = []
        let breadCrumbListEl = []
        if (breadCrumb) {
            breadCrumbList = breadCrumb.pathname.split('/')
            let link = '/'
            breadCrumbList.map((name, index) => {
                if (index !== 0) {
                    link += (name)
                    
                        breadCrumbListEl.push(<a href={link} key={'a' + index} className='breadcrumb-link'>{name.replace('-', ' ').capitalize()}</a>)
                    
                    if (index < (breadCrumbList.length - 1) && breadCrumbList[index + 1] !== '') {
                     
                            breadCrumbListEl.push(<span key={'s' + index}>/</span>)
                        
                        link += '/'
                    }
                }
                return;
            })
        }

        let imgSrc = profileIcon;
     
        return (
            <div className="navbar-container">
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Grid container spacing={0}>
                            <Hidden mdUp>
                                <Grid item sm={1} xs={2}>
                                    <IconButton className="menu-icon" color="contrast" aria-label="Menu" onClick={this.handleLeftOpen}>
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                            </Hidden>

                            <Grid item md={6} sm={4}>
                                <Hidden only={['sm', 'xs']}><h2 type="title" color="inherit" className="title">
                                    {breadCrumbListEl}
                                </h2></Hidden>
                            </Grid>

                            <Grid item md={6} sm={7} xs={10}>
                                <List className="topbar-links">
                                    <Hidden smUp>
                                        <ListItem disableGutters>
                                            <Link to="/">
                                                {/*<img className="company-appbar-logo" src={SalmanMal} alt="Salman Mal" />*/}
                                            </Link>
                                        </ListItem>

                                    </Hidden>
                                   
                                    {/* <ListItem disableGutters>
                                        <a href={basepath + "/feeds"} className="flex-center"><img src={feedIcon} alt="feeds" className="feeds-icon" /><Hidden only={'xs'}><span className="feeds">Feeds</span></Hidden></a>
                                    </ListItem>
                                    <ListItem>
                                        {notificationBtn}
                                        <Popover
                                            open={open}
                                            anchorEl={anchorEl}
                                            onRequestClose={this.handleRequestClose}
                                            anchorOrigin={{
                                                vertical: anchorOriginVertical,
                                                horizontal: anchorOriginHorizontal,
                                            }}
                                            transformOrigin={{
                                                vertical: transformOriginVertical,
                                                horizontal: transformOriginHorizontal,
                                            }}
                                        >
                                            <div className='flex-column notification-container'>
                                                <div className='p-2'>{(!notifications || (notifications && notifications.NotificationList && notifications.NotificationList.length === 0)) ? 'No Notification Found' : 'Notifications'}</div>
                                                <div onScroll={this.handleScroll} className='notifications'>
                                                    {notifications && notifications.NotificationList && notifications.NotificationList.length > 0 && notifications.NotificationList.map((data, index) => {
                                                        return <div className='notification' key={index}>
                                                            <div className='flex-space-between title'>
                                                                <div>{data.Title}</div>{data.canClear && <div onClick={() => this.clearNotification(data)} className='cursor '>&times;</div>}</div>
                                                            {data.Descr && <div className='message'>{data.Descr}</div>}
                                                        </div>
                                                    })}
                                                    {this.props.notifications && this.state.currentNotificationPage < this.props.notifications.tTotalPages - 1 && <div className='flex-center'>
                                                        <CircularProgress />
                                                    </div>}
                                                </div>
                                            </div>
                                        </Popover>
                                    </ListItem> */}
                                    <ListItem disableGutters>
                                       <Avatar>
                                            <img src={imgSrc} alt="my profile" className="my-profile-icon"  />
                                        </Avatar>
                                        {this.props.userData && <Hidden only={'xs'}><span className="user-name"><div>{`Salman Mal`}</div><div className='flex-center'><LocationIcon />{this.props.basicInfo.state}</div></span></Hidden>}
                                        <span>
                                            <Menu options={options} actionHandler={this.handleUserActions} menuIcon={menuIcon} />
                                        </span>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Hidden only={['md', 'lg', 'xl']}>
                    <div className='mobile-breadcrumb'>
                        <h2 type="title" color="inherit" className="title">
                            {breadCrumbListEl}
                        </h2>
                    </div>
                </Hidden>
                
            </div>
        );
    }
}


export default Navbar;
