import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import {removalHTMLTags} from '../helpers';

class SideBarItemComponent extends Component {
    constructor(){
        super();
    }


    render() {
        return (<div>Hello from the sidebar</div>);
      }
}

export default withStyles(styles)(SideBarItemComponent)