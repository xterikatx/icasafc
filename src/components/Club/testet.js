import './tyle.css';
import Typography from '@material-ui/core/Typography';
import React from 'react';
// import { Container } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const logo = require('../../assets/logo.png')
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  Typography: {
      marginTop:900,
      marginTop: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  inline: {
    display: 'inline',
  },
}));
function Club() {
  const classes = useStyles();
  return(
    <div>
    <img alt="Logo do icasa" className="banner" src={logo} />
    <h6>Por: Luis amstrong</h6>
    <h6>30 abril 2020</h6>
    <h1>Titulo da Notícia</h1>
    </div>

  );
}

export default Club;
