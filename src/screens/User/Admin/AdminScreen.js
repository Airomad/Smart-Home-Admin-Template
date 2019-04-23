import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/icons/Home';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    flex: 1
  },
  appBar: {
    color: '#fff',
    backgroundColor: '#092426',
    zIndex: 100
  },
  drawer: {
    zIndex: 99,
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  avatar: {
    width: 24,
    height: 24,
    backgroundColor: '#13969F'
  }
});

class AdminScreen extends Component {
  componentDidMount() {
    this.a = 10;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Smart Home Template
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />

          <ListItem button key="user">
            <ListItemIcon>
              <Avatar className={classes.avatar}>A</Avatar>
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>

          <Divider />
          <List>
            {['Option 1', 'Option 2', 'Option 3'].map(text => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(AdminScreen);
