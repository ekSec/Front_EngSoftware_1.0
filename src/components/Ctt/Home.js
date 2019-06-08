import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MaskedInput from 'react-text-mask';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box } from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DataTable from './DataTable'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },colorSwitchBase: {
    color: red[400],
    '&$colorChecked': {
      color: blue[900],
      '& + $colorBar': {
        backgroundColor: blue[900],
      },
    },
  },
  colorBar: {
     borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  colorChecked: {},
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  textFieldFirst: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '45%',
  },
  textFieldMax: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '65%',
  },
  textFieldAfterRadio: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '65%',
  },
  textField3em1Linha: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '30%',
  },
  textField3em1LinhaLeft: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '30%',
  },
  textFieldNaturalidade: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '25%',
  },
   root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 1,
    marginTop: theme.spacing.unit * 2,
  },
  formControlDoubleRadio: {
    margin: theme.spacing.unit * 1,
    marginTop: theme.spacing.unit * 2,
  },
  group: {
    marginTop: theme.spacing.unit * 1,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  fontLabel:{
    fontWeight:'bold',
  },
  fontSwitch:{
    fontFamily:'Roboto Slab',
    fontSize:30,
    color:'#025c'
  },
  fontInput:{
    fontWeight:'bold',
  }
});

const currencies = [
  {
    value: 'USD',
    label: 'MG',
  },
  {
    value: 'EUR',
    label: 'PI',
  },
  {
    value: 'BTC',
    label: 'BA',
  },
  {
    value: 'JPY',
    label: 'RO',
  },
];
function TextMaskCustom(props) {

  return (
    <MaskedInput
      mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}
function TextMaskFixo(props) {

  return (
    <MaskedInput
      mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}
function TextMaskCep(props) {

  return (
    <MaskedInput
      mask={[ /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

class TextFields extends React.Component {
  state = {
    numeroresponsavel: '(086)9    -    ',
  
  };

  render() {
    return (
      <div>
      <Typography component="div">
      <Box fontWeight={1000} textAlign='center' fontSize={42} fontFamily="Monospace" style={{color:'#025c'}} m={2}>
        {this.props.h1first}
      </Box>
      <Box textAlign="center" m={2}>
       Notificação Recente:
      </Box>
    </Typography>
      <div style={{alignSelf: 'stretch',
    textAlign: 'center',}}>
        <DataTable />
        <DataTable />
        <DataTable />
        <DataTable />
        <DataTable />
        <DataTable />
        <DataTable />
        <DataTable />
        <DataTable />
        <DataTable />
        <DataTable />
        <DataTable />
      </div>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);