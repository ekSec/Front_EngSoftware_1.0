import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(false)
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  function handleClick() {
    setValue(!value)
  }

        return (<Card style={{maxWidth:320,display:'inline-block',margin:7}}>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ferramenta</DialogTitle>
        <DialogContent>
          <DialogContentText>
            O kit Ferramentas com 129 peças 13564 da Sparta é ideal para os pequenos trabalhos do dia a dia pois tem alicates, chaves, estilete, martelo, parafusos, pregos entre outros itens.
          </DialogContentText>
          <form style={{marginTop:10}} noValidate>
     
        <TextField
        id="time"
        label="Tempo Mínimo"
        type="time"
        defaultValue="07:30"
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
        defaultValue="07:30"
        disabled
        style={{width:200}}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
        
      <div style={{display:'flex'}}>
      <TextField
        id="datetime-local"
        label="Data de Empréstimo"
        type="datetime-local"
        margin = 'normal'
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="datetime-local"
        label="Data de Devolução"
        type="datetime-local"
        margin = 'normal'
        InputLabelProps={{
          shrink: true,
        }}
      />
            </div>

    </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" size='large'>
            Reservar
          </Button>
        
        </DialogActions>
        <ListItem button onClick={handleClick} style={{backgroundColor:'rgba(110, 118, 137,0.4)'}}>
        <ListItemText primary=" Histórico do Recurso " align='center'/>
        {value? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={value} timeout="auto" unmountOnExit>
      <Typography gutterBottom variant="h5" component="h2">
            Ferramenta
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            O kit Ferramentas com 129 peças 13564 da Sparta é ideal para os pequenos trabalhos do dia a dia pois tem alicates, chaves, estilete, martelo, parafusos, pregos entre outros itens.
          </Typography>
      </Collapse>
      </Dialog>
      <CardActionArea onClick={handleClickOpen}>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={require('./download.jpeg')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ferramenta
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            O kit Ferramentas com 129 peças 13564 da Sparta é ideal para os pequenos trabalhos do dia a dia pois tem alicates, chaves, estilete, martelo, parafusos, pregos entre outros itens.
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
