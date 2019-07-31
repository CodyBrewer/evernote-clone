import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers.js';
import { withStyles } from '@material-ui/core/styles';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { styles } from './styles';

export default class EditorComponent extends Component {
    constructor(){
        super();
    }
  render() {
    return (<div>Hello from the editor</div>);
  }
}

export default withStyles(styles)(EditorComponent)
