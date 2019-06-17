import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Icon from '@material-ui/core/Icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Funcionário from './Funcionário'
import Gerente from './Gerente'
import {Route,Router,browserHistory, Link} from 'react-router';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 20,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
      },
      icon: {
        margin: theme.spacing.unit * 2,
      },
      iconbutton: {
        '&:visited': {
          boxShadow: 'none',
          backgroundColor: 'rgba(156, 159, 156,0.6)',
          borderColor: 'rgba(156, 159, 156,0.6)',
        },
        '&:active': {
          color:'rgba(156, 159, 156,0.6)',
          backgroundColor: 'rgba(156, 159, 156,0.6)',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit,
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
});
var hi;
class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
    message:'',
    recurso:[],
    dataemprestimo:'',
    datatermino:'',
    reservado:false,
    identificacao:''
  };

  componentDidMount() {
    if(this.props.location.state == null){
    }
  }
  componentDidUpdate(prevProps) {
    // Uso típico, (não esqueça de comparar as props):
    if (this.props.location.state !== prevProps.location.state) {
      alert('didUpdateGeral')
      alert(this.props.location.state.datatermino)
      this.setState({message:this.props.location.state.message + this.state.message,
      recurso: [...this.state.recurso, this.props.location.state.recurso],
      reservado: this.props.location.state.reservado,
      dataemprestimo: this.props.location.state.dataemprestimo,
      datatermino:this.props.location.state.datatermino,
      identificacao: this.state.identificacao + this.props.location.state.identificacao
    });
    }
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open, message } = this.state;

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}

        >
          <Toolbar className={classes.toolbar}>
            
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {message}
            </Typography>
            <div className={classes.grow} />
            
          <div>
            <IconButton color="inherit" className={classes.iconbutton} component={Link} to={{ 
    pathname: '/gerente1', 
    state: { message: this.state.message,
              recurso: this.state.recurso } 
  }}>
                  <Badge badgeContent={1} color="primary">

              <Icon className={classes.icon} style={{color:'white'}}>
        perm_identity
      </Icon>
      </Badge>

            </IconButton>
            
            
            <IconButton color="inherit" className={classes.iconbutton} component={Link} to={{ 
    pathname: '/gerente2', 
    state: { message: this.state.message,
              recurso: this.state.recurso } 
  }}>
                <Badge badgeContent={2} color="primary">

              <Icon className={classes.icon} style={{color:'white'}}>
        perm_identity
      </Icon>
      </Badge>

            </IconButton>


            <IconButton color="inherit" className={classes.iconbutton} component={Link} to={{ 
    pathname: '/funcionario1', 
    state: { message: this.state.message,
              identificacao: this.state.identificacao.split(','),
              reservado:this.state.reservado,
              datatermino:this.state.datatermino,
              dataemprestimo:this.state.dataemprestimo} 
  }}>
              <Badge badgeContent={1} color="primary">
              <Icon className={classes.icon} style={{color:'black'}}>
        perm_identity
      </Icon>
              </Badge>
            </IconButton>
            <IconButton color="inherit" className={classes.iconbutton} component={Link} to="/funcionario2">
              <Badge badgeContent={2} color="primary">
              <Icon className={classes.icon} style={{color:'black'}}>
        perm_identity
      </Icon>
              </Badge>
            </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
                      <div className={classes.drawerHeader} />
              <Router history = {browserHistory}>
              <Route path="/gerente1" component = {(props) => <Gerente {...props} h1first='Alocação' numero='01'/>}/>
              <Route path="/gerente2" component = {(props) => <Gerente {...props} h1first='Alocação' numero='02'/>}/>
              <Route path="/funcionario1" component={(props) => <Funcionário {...props} h1first='Reserva' numero='01'/>} />
              <Route path="/funcionario2" component={(props) => <Funcionário {...props} h1first='Reserva' numero='02'/>} />
              </Router>
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);