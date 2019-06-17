import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { unstable_Box as Box } from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];
const funcionario = [
  {
    value: '',
    label: '',
  },
  {
    value: 'USD',
    label: 'Disponível',
  },
  {
    value: 'EUR',
    label: 'Indisponível',
  },
];
export default function Recurso(props) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(false);
    const [valor, setValor] = React.useState('female');
    const [values, setValues] = React.useState({
      age: '',
      multiline: 'Controlled',
      tipos: '',
      funcionario: '',
      setores: '',
    });

  function handleClickOpen() {
    setOpen(true);
  }
  const handleChangeto = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  function handleChange(event) {
    setValor(event.target.value);
  }
  function handleCloseTo() {
    if(values.funcionario == ''){
      alert("Selecione um funcionário na Fila")
      return
    }
    if(props.gerente.estado == 'Indisponivel'){
      alert("Recurso Indisponível, verifique o Histórico do Recurso.")

    }
    if(props.gerente.estado == 'Disponivel' && values.funcionario != ''){
    alert("A Alocação foi realizada com sucesso")

    setTimeout(function(){ setOpen(false); }, 200);
    }
  }
  function handleClose() {
    setOpen(false);
  }
  function handleClick() {
    setValue(!value)
  }

        return (<Card style={{maxWidth:320,display:'inline-block',margin:7}}>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.gerente.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.gerente.descricao}
          </DialogContentText>
          <DialogContentText>
          <Typography component="div">
      <Box fontWeight={500} textAlign='left' fontSize={12} fontFamily="Roboto" style={{color:'#025c'}} m={2}>
      Setor : {props.gerente.setor}
      </Box>
      <Box fontWeight={500} textAlign='left' fontSize={12} fontFamily="Roboto" style={{color:'#025c'}} m={2}>
        Categoria : {props.gerente.categoria}
      </Box>
      <Box fontWeight={500} textAlign='left' fontSize={12} fontFamily="Roboto" style={{color:'#025c'}} m={2}>
      Estado : {props.gerente.estado}
      </Box>
      </Typography>
          </DialogContentText>
          <form style={{marginTop:10}} noValidate>
          <div style={{margin:20}}>
        <TextField
        id="time"
        label="Tempo Mínimo"
        type="time"
        defaultValue={props.gerente.tempominimo}
        disabled
        style={{width:200}}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        id="time"
        label="Tempo Máximo"
        type="time"
        defaultValue="77:30"
        disabled
        style={{width:200}}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
        </div>
      <div style={{margin:20}}>
      <TextField
        id="datetime-local"
        label="Data de Empréstimo"
        type="datetime-local"
        style={{width:200}}
        margin = 'normal'
        disabled
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="datetime-local"
        label="Data de Devolução"
        type="datetime-local"
        style={{width:200}}
        margin = 'normal'
        disabled
        InputLabelProps={{
          shrink: true,
        }}
      />
            </div>
            <TextField
        id="outlined-select-currency"
        select
        label="Fila"
        style={{minWidth:120}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon style={{color:'black'}}>
        perm_identity
      </Icon>
            </InputAdornment>
          ),
        }}
        value={values.funcionario}
        onChange={handleChangeto('funcionario')}
        helperText="Selecione para quem deseja alocar"
        variant="outlined"
        fullWidth
      >
        {funcionario.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
    
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTo} color="primary" size='large' variant='outlined'>
            Alocar
          </Button>
        
        </DialogActions>
        <ListItem button onClick={handleClick} style={{backgroundColor:'rgba(156, 159, 156,0.4)', elevation:3}}>
        <ListItemText primary=" Histórico do Recurso " align='center' variant='outlined'/>
        {value? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={value} timeout="auto" unmountOnExit>
      <Paper style={{ overflowX: 'auto'}}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Data de Início de Alocação</TableCell>
            <TableCell align="right">Autorizador</TableCell>
            <TableCell align="right">Solicitador</TableCell>
            <TableCell align="right">Data de Término de Alocação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
      </Collapse>
      </Dialog>
      <CardActionArea onClick={handleClickOpen}>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={require(`./${props.gerente.image}`)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.gerente.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.gerente.descricao}
          </Typography>
        </CardContent>
      
      <CardActions>
        <Fab variant="extended" aria-label="Delete" style={{marginRight:0,width:330}}>
        <NavigationIcon style={{marginRight:0}} />
        Botão
      </Fab>
      </CardActions>
      </CardActionArea>
    </Card>)
    };
