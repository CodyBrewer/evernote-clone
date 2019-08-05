import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function header() {
    return (
        <PopupState variant="popover" popupId='accout-pop-menu'>
            {popupState => (
                <React.Fragment>
                    <Button variant='contained' {...bindTrigger(popupState)}>
                        Account
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Login</MenuItem>
                        <MenuItem onClick={popupState.close}>Signup</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    )
}
