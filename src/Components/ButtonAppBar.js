import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    marginRight: theme.spacing(10),
  
    
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div color="black" className={classes.root}>
      <AppBar  position="static"  >
        <Toolbar color="black">
          <IconButton edge="start" className={classes.menuButton} color="black" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color ="black" className={classes.title}>
            Outlook Mail
          </Typography>
          <Button color="white">M</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}