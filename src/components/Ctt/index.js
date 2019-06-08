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
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mainListItems, secondaryListItems } from './listItems';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import Home from './Home'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

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
          backgroundColor: 'rgba(119, 166, 111,0.6)',
          borderColor: 'rgba(119, 166, 111,0.6)',
        },
        '&:active': {
          color:'rgba(119, 166, 111,0.6)',
          backgroundColor: 'rgba(119, 166, 111,0.6)',
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

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

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
              Gerenciador Pro Data 
            </Typography>
            <div className={classes.grow} />
            
          <div>
            <IconButton color="inherit" className={classes.iconbutton} component={Link} to="/dashboard">
              <Icon className={classes.icon} style={{color:'white'}}>
        perm_identity
      </Icon>
            </IconButton>
            <IconButton color="inherit" className={classes.iconbutton} component={Link} to="/dashboard/funcionario1">
              <Badge badgeContent={1} color="primary">
              <Icon className={classes.icon} style={{color:'black'}}>
        perm_identity
      </Icon>
              </Badge>
            </IconButton>
            <IconButton color="inherit" className={classes.iconbutton} component={Link} to="/dashboard/funcionario2">
              <Badge badgeContent={2} color="primary">
              <Icon className={classes.icon} style={{color:'black'}}>
        perm_identity
      </Icon>
              </Badge>
            </IconButton>
            <IconButton color="inherit" className={classes.iconbutton} component={Link} to="/dashboard/funcionario3">
              <Badge badgeContent={3} color="primary">
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
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
                      <div className={classes.drawerHeader} />
          <Route exact path="/dashboard"   render={(props) => <Home {...props} h1first='Reservas do Gerente' />}/>
              <Route path="/dashboard/funcionario1" exact render={(props) => <Home {...props} h1first='Reserva de Recursos f1' funcionario='funcionário 1'/>} />
              <Route path="/dashboard/funcionario2" exact render={(props) => <Home {...props} h1first='Reserva de Recursos f2' funcionario='funcionário 2'/>} />
              <Route path="/dashboard/funcionario3" exact render={(props) => <Home {...props} h1first='Reserva de Recursos f3' funcionario='funcionário 3'/>} />
              

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