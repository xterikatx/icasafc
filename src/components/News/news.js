import React from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MobileStepper from '@material-ui/core/MobileStepper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const img5 = require('../../assets/foto5.jpg')
const img1 = require('../../assets/foto1.jpg')
const img2 = require('../../assets/foto2.jpg')
const img6 = require('../../assets/foto6.jpg')
const img3 = require('../../assets/foto3.jpg')
const ft = require('../../assets/foto5.jpg');

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 150,
      height: 100,
      objectFit:'cover',
    },
    imgs: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit:'cover',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
     img: {
       marginLeft:'10',
       objectFit:'cover',
       height: 328,
       display: 'block',
       maxWidth: 1243,
       overflow: 'hidden',
       width: '100%',
      
    },
  }));

function News() {
    const theme = useTheme();
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
  
  return(
  <div>
        <Link style={{marginLeft: '90px',}} href="/home" color="inherit" variant="subtitle2">
            {'Inicio'}
        </Link>
        <Link color="inherit" variant="subtitle2">
            {' > '}
        </Link>
        <Link href="/Noticia" color="inherit" variant="subtitle2">
            {'Noticia'}
        </Link>
    <div style={{marginLeft: '90px', width: '740px'}}>
        <a><h1 style={{marginTop: 10, marginBottom:10,}}>Barulhos estranhos no céu assustam pessoas de todo o mundo</h1></a>
        <Typography style={{ marginBottom:15,}} className="txtnot" variant="body1" color="initial">
        A desenvolvedora de soluções tecnológicas com gerador de ozônio (O3) pode ter encontrado 
        uma nova arma contra o coronavírus.
        </Typography>
    </div>

    <img className="banner" src={img1} alt="Foto de capa" />
    <h6 style={{marginLeft: '90px', marginTop: '0px'}}>Fonte: Google</h6>
    <h6 style={{marginLeft: '90px', marginTop: '0px'}}>30 Abril 2020</h6>

    <div style={{height: '3vh', marginLeft: '5%', width: '55%', marginTop: '30px', lineHeight: 1.6, marginBottom: '130px'}}>
        <Typography className="txtnot" variant="body1" color="initial">
            A desenvolvedora de soluções tecnológicas com gerador de ozônio (O3) pode ter
            encontrado uma nova arma contra o coronavírus. Após realizar testes com o gás
            no laboratório da Universidade Federal de Santa Catarina, a Wier, startup em questão,
            constatou que ele foi eficiente na eliminação de 99,9% das amostras de dois tipos de
            vírus em ambientes fechados e com alto fluxo de pessoas – sendo que um deles
            possui semelhanças com o Sars-CoV-2, causador da covid-19.
        </Typography>
    </div>
    <div style={{height: '3vh', marginLeft: '5%', width: '55%', marginTop: '30px', lineHeight: 1.6}}>
        <Typography className="txtnot" variant="body1" color="initial">
            A desenvolvedora de soluções tecnológicas com gerador de ozônio (O3) pode ter
            encontrado uma nova arma contra o coronavírus. Após realizar testes com o gás
            no laboratório da Universidade Federal de Santa Catarina, a Wier, startup em questão,
            constatou que ele foi eficiente na eliminação de 99,9% das amostras de dois tipos de
            vírus em ambientes fechados e com alto fluxo de pessoas – sendo que um deles
            possui semelhanças com o Sars-CoV-2, causador da covid-19.
        </Typography>
    </div>

    <div className="newsJogos5">
      <Typography className="txtnot" variant="h6" color="initial">
        Notícias de Time
      </Typography>
      {/* <h3>Notícias de Time</h3> */}
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.imgs} alt="Imagen notícia jogadores" src={ft} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Link href="/Noticia" color="inherit" variant="h6">
              {'Titulo da Noticia'}
              </Link>
              {/* <Typography className='ti' href="/Club" gutterBottom variant="subtitle1">
                 Titulo da Noticia
                </Typography> */}
                <Typography variant="body2" gutterBottom color="textSecondary">
                  A descrição das noticias fica localizado aqui
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  10/10/20
                </Typography>
              </Grid>
              
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>

    {/* outro */}

    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.imgs} alt="Imagen notícia jogadores" src={ft} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Link href="/Noticia" onClick={preventDefault} color="inherit" variant="h6">
              {'Titulo da Noticia'}
              </Link>
              {/* <Typography className='ti' href="/Club" gutterBottom variant="subtitle1">
                 Titulo da Noticia
                </Typography> */}
                <Typography variant="body2" gutterBottom color="textSecondary">
                  A descrição das noticias fica localizado aqui
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
{/* outro */}
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.imgs} alt="Imagen notícia jogadores" src={ft} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Link href="/Noticia" onClick={preventDefault} color="inherit" variant="h6">
              {'Titulo da Noticia'}
              </Link>
              {/* <Typography className='ti' href="/Club" gutterBottom variant="subtitle1">
                 Titulo da Noticia
                </Typography> */}
                <Typography variant="body2" gutterBottom color="textSecondary">
                  A descrição das noticias fica localizado aqui
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>

    {/* outro */}

    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.imgs} alt="Imagen notícia jogadores" src={ft} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Link href="/Noticia" onClick={preventDefault} color="inherit" variant="h6">
              {'Titulo da Noticia'}
              </Link>
              {/* <Typography className='ti' href="/Club" gutterBottom variant="subtitle1">
                 Titulo da Noticia
                </Typography> */}
                <Typography variant="body2" gutterBottom color="textSecondary">
                  A descrição das noticias fica localizado aqui
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
    </div>
  </div>
  );
}

export default News;
