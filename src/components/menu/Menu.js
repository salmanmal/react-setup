import React, { Component } from 'react';
import Menu, { MenuItem, MenuList } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import './Menu.scss'

class NavbarMenu extends Component {
    state = {
        anchorEl: null,
        open: false,
    };
    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };
    handleRequestClose = () => {
        this.setState({ open: false });
    };
    handleAction = (data, index, id) => {
        this.props.actionHandler(data, index, id);
        this.setState({ open: false });
    }
    render() {
        const { menuIcon, options, className, objectId } = this.props;
        return (<div className={`navar-menu ${className ? className : ""}`}>
            <IconButton
                className="icon-btn"
                onClick={this.handleClick}>
                {<img src={menuIcon} alt="menu" className="icon" />}
            </IconButton>
            <Menu
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}

            >
                {options.map((option, index) =>
                    <MenuItem key={index} onClick={() => this.handleAction(option, index, objectId)}>
                        {option.name}
                    </MenuItem>,
                )}
            </Menu>
        </div>
        );
    }
}
export default NavbarMenu;