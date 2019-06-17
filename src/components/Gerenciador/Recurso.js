import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import { Link, browserHistory } from "react-router";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { unstable_Box as Box } from "@material-ui/core/Box";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0)
];
const funcionario = [
  {
    value: "",
    label: ""
  },
  {
    value: "USD",
    label: "Disponível"
  },
  {
    value: "EUR",
    label: "Indisponível"
  }
];
export default function Recurso(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(false);
  const [valor, setValor] = React.useState("female");
  const [values, setValues] = React.useState({
    age: "",
    multiline: "Controlled",
    tipos: "",
    funcionario: "",
    setores: "",
    dataemprestimo: props.gerente.dataemprestimo,
    datatermino: props.gerente.datatermino
  });

  function handleClickOpen() {
    setOpen(true);
  }
  const onChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  function handleCloseTo() {
    if (props.gerente.estado == "Indisponivel") {
      alert("Recurso Indisponível, verifique o Histórico do Recurso.");
      return
    }
    if(values.dataemprestimo == "2019-05-24T10:30" || values.datatermino == "2019-05-24T10:30"){
      alert("Recurso Disponível, Mas altere as datas de Reserva");
    }
    if(values.dataemprestimo != "2019-05-24T10:30" && values.datatermino != "2019-05-24T10:30" && props.gerente.estado != "Indisponivel"){
      
        browserHistory.push({
          pathname: "/",
          state: { message: "hello, im a passed message!",
                   recurso: {
                  "title": props.gerente.title,
                   "tipo": props.gerente.tipo,
                   "estado": props.gerente.estado,
                   "setor": props.gerente.setor,
                   "descricao": props.gerente.descricao,
                   "categoria": props.gerente.categoria,
                   "gerente": props.gerente.gerente,
                   "identificacao": props.gerente.identificacao,
                   "data_criacao": props.gerente.data_criacao,
                   "data_modificacao": props.gerente.data_modificacao,
                   "tempominimo": props.gerente.tempominimo,
                   "image": props.gerente.image},
                   reservado: true,
                   identificacao: props.gerente.identificacao,
                   dataemprestimo:values.dataemprestimo,
                   datatermino:values.datatermino}
        });
        browserHistory.push({
          pathname: "/funcionario1",
          state: { message: "hello, im a passed message!",
                   reservado: true,
                   identificacao: props.gerente.identificacao,
                   dataemprestimo:values.dataemprestimo,
                   datatermino:values.datatermino
                 }
        });
        
      alert("Você agora faz parte da Fila de Alocação do Recurso");

      setTimeout(function() {
        setOpen(false);
      }, 200);
    }
  }
  function handleClose() {
    setOpen(false);
  }
  function handleClick() {
    setValue(!value);
  }
  function componenteShow() {
    if(props.gerente.reservado == false){
    return(
      <Card style={{ maxWidth: 320, display: "inline-block", margin: 7 }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.gerente.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.gerente.descricao}</DialogContentText>
          <DialogContentText>
            <Typography component="div">
              <Box
                fontWeight={500}
                textAlign="left"
                fontSize={12}
                fontFamily="Roboto"
                style={{ color: "#025c" }}
                m={2}
              >
                Setor : {props.gerente.setor}
              </Box>
              <Box
                fontWeight={500}
                textAlign="left"
                fontSize={12}
                fontFamily="Roboto"
                style={{ color: "#025c" }}
                m={2}
              >
                Categoria : {props.gerente.categoria}
              </Box>
              <Box
                fontWeight={500}
                textAlign="left"
                fontSize={12}
                fontFamily="Roboto"
                style={{ color: "#025c" }}
                m={2}
              >
                Estado : {props.gerente.estado}
              </Box>
            </Typography>
          </DialogContentText>
          <form style={{ marginTop: 10 }} noValidate>
            <div style={{ margin: 20 }}>
              <TextField
                id="time"
                label="Tempo Mínimo"
                type="time"
                defaultValue={props.gerente.tempominimo}
                disabled
                style={{ width: 200 }}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
              <TextField
                id="time"
                label="Tempo Máximo"
                type="time"
                defaultValue="77:30"
                disabled
                style={{ width: 200 }}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </div>
            <div style={{ margin: 20 }}>
              <TextField
                id="datetime-local"
                label="Data de Empréstimo"
                type="datetime-local"
                style={{ width: 200 }}
                margin="normal"
                value={values.dataemprestimo}
          onChange={onChange('dataemprestimo')}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="datetime-local"
                label="Data de Devolução"
                type="datetime-local"
                style={{ width: 200 }}
                margin="normal"
                value={values.datatermino}
          onChange={onChange('datatermino')}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          {/* <Link style={{ textDecoration: 'none'}}
    to={{ 
    pathname: '/gerente', 
    state: { message: 'hello, im a passed message!' } 
  }}
  >*/}
          <Button
            onClick={handleCloseTo}
            color="primary"
            size="large"
            variant="outlined"
          >
            Reservar
          </Button>
          {/*
          </Link> */}
        </DialogActions>
        <ListItem
          button
          onClick={handleClick}
          style={{ backgroundColor: "rgba(156, 159, 156,0.4)", elevation: 3 }}
        >
          <ListItemText
            primary=" Histórico do Recurso "
            align="center"
            variant="outlined"
          />
          {value ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={value} timeout="auto" unmountOnExit>
          <Paper style={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Data de Início de Alocação</TableCell>
                  <TableCell align="right">Autorizador</TableCell>
                  <TableCell align="right">Solicitador</TableCell>
                  <TableCell align="right">
                    Data de Término de Alocação
                  </TableCell>
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
          <Fab
            variant="extended"
            aria-label="Delete"
            style={{ marginRight: 0, width: 330 }}
          >
            <NavigationIcon style={{ marginRight: 0 }} />
            Botão
          </Fab>
        </CardActions>
      </CardActionArea>
    </Card>

    )}
    else{
      return(
        <Card style={{ maxWidth: 320, display: "inline-block", margin: 7 }}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{props.gerente.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{props.gerente.descricao}</DialogContentText>
            <DialogContentText>
              <Typography component="div">
                <Box
                  fontWeight={500}
                  textAlign="left"
                  fontSize={12}
                  fontFamily="Roboto"
                  style={{ color: "#025c" }}
                  m={2}
                >
                  Setor : {props.gerente.setor}
                </Box>
                <Box
                  fontWeight={500}
                  textAlign="left"
                  fontSize={12}
                  fontFamily="Roboto"
                  style={{ color: "#025c" }}
                  m={2}
                >
                  Categoria : {props.gerente.categoria}
                </Box>
                <Box
                  fontWeight={500}
                  textAlign="left"
                  fontSize={12}
                  fontFamily="Roboto"
                  style={{ color: "#025c" }}
                  m={2}
                >
                  Estado : {props.gerente.estado}
                </Box>
              </Typography>
            </DialogContentText>
            <form style={{ marginTop: 10 }} noValidate>
              <div style={{ margin: 20 }}>
                <TextField
                  id="time"
                  label="Tempo Mínimo"
                  type="time"
                  defaultValue={props.gerente.tempominimo}
                  disabled
                  style={{ width: 200 }}
                  InputLabelProps={{
                    shrink: true
                  }}
                  inputProps={{
                    step: 300 // 5 min
                  }}
                />
                <TextField
                  id="time"
                  label="Tempo Máximo"
                  type="time"
                  defaultValue="77:30"
                  disabled
                  style={{ width: 200 }}
                  InputLabelProps={{
                    shrink: true
                  }}
                  inputProps={{
                    step: 300 // 5 min
                  }}
                />
              </div>
              <div style={{ margin: 20 }}>
                <TextField
                  id="datetime-local"
                  label="Data de Empréstimo"
                  value={props.gerente.dataemprestimo}
                  disabled
                  type="datetime-local"
                  style={{ width: 200 }}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="datetime-local"
                  label="Data de Devolução"
                  value={props.gerente.datatermino}
                  disabled
                  type="datetime-local"
                  style={{ width: 200 }}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            {/* <Link style={{ textDecoration: 'none'}}
      to={{ 
      pathname: '/gerente', 
      state: { message: 'hello, im a passed message!' } 
    }}
    >*/}
            {/*
            </Link> */}
          </DialogActions>
          <ListItem
            button
            onClick={handleClick}
            style={{ backgroundColor: "rgba(156, 159, 156,0.4)", elevation: 0 }}
          >
            <ListItemText
              primary=" Histórico do Recurso "
              align="center"
              variant="outlined"
            />
            {value ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={value} timeout="auto" unmountOnExit>
            <Paper style={{ overflowX: "auto" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Data de Início de Alocação</TableCell>
                    <TableCell align="right">Autorizador</TableCell>
                    <TableCell align="right">Solicitador</TableCell>
                    <TableCell align="right">
                      Data de Término de Alocação
                    </TableCell>
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
            <Fab
              variant="extended"
              aria-label="Delete"
              style={{ marginRight: 0, width: 330,backgroundColor:'rgba(149, 39, 11,0.5)'}}
            >
              <NavigationIcon style={{ marginRight: 0}} />
              Botão
            </Fab>
          </CardActions>
        </CardActionArea>
      </Card>
      )
    }
  }
  return (
    <div style={{display:'inline'}}>
    {componenteShow()}
    </div>
      );
}
