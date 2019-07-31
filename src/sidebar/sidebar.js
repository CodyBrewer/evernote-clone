import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import List from '@material-ui/core/List';
import {Divider, Button} from '@material-ui/core';
import SideBarComponent from '../sidebaritem/sidebaritem';

class SideBarComponent extends Component {
    constructor(){
        super();
    }


    render() {
        return (<div>Hello from the sidebar</div>);
      }
}

export default withStyles(styles)(SideBarComponent)