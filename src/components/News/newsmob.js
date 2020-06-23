import Typography from '@material-ui/core/Typography';
import React from 'react';
// import { Container } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import './tyle.css';

import Toolbar from '@material-ui/core/Toolbar';
import { MenuContainer } from '../styles';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const logo = require('../../assets/foto8.png');
const logo2 = require('../../assets/logo.png')
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    width: '100%',
    maxWidth: '90ch',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
 
    maxWidth: 600,
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
  Typography:{
    marginLeft:100,
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
    marginRight: theme.spacing(2),
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
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
}));
function Club() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const preventDefault = (event) => event.preventDefault();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return(
    <div>
      <MenuContainer
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img style={{marginLeft: '36%'}} alt="Logo do icasa" className="logo" src={logo2} />


        </Toolbar>
      </MenuContainer>

      <img alt="Logo do icasa" className="bannr" src={logo} />
        <h6 className="por">Por: Luis amstrong</h6>
        <h6 className="dt">30 abril 2020</h6>
        <h1 className="til">Titulo da Notícia</h1>
        <Typography className="typo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
    <div ClassName="foot">



    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img className="blc" alt="Travis Howard" src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary="Titulo da noticia"
          secondary={
            <React.Fragment>
              {' — Aqui fica localizado um pouco da notica…'}
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                10/10/20
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img className="blc" alt="Travis Howard" src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary="Titulo da noticia"
          secondary={
            <React.Fragment>
              {'Aqui fica localizado um pouco da notica…'}
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                10/10/20
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
         <img className="blc" alt="Travis Howard" src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary="Titulo da noticia"
          secondary={
            <React.Fragment>
              {' — Aqui fica localizado um pouco da notica…'}
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                10/10/20
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

    <React.Fragment>
    <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{marginTop:100, }} />
      </Container>
      <Grid  style={{marginLeft: '30px', marginBottom: 5,}}>
      <FacebookIcon />
      <InstagramIcon />
      </Grid>
        <Typography style={{ margintTop: 30, padding:'10px',}} variant="body1" color="initial">
        Associação Desportiva Recreativa e Cultural Icasa
        Icasafc.com - Todos os direitos reservados.
        </Typography>
    </React.Fragment>


    </div>
    </div>
  );
}

export default Club;
