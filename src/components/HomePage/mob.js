import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import './styles2.css';
import './patrocinio.css';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const newPhoto = require('../../assets/foto5.jpg');
const imagens = require('../../assets/banner.PNG');
const imgs = require('../../assets/banner-slider.jpg');
const ft = require('../../assets/foto5.jpg');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
  },
  image: {
    width: 150,
    height: 100,
    objectFit:'cover',
  },
  Typography:{
    marginLeft:100,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


function HomePage() {
  const classes = useStyles();
  return (
    <div className="all_componentss">
      <AwesomeSlider className='aws-btn b' >
        <div data-src={imgs} />
        <div data-src={imgs} />
        <div data-src={imgs} />
      </AwesomeSlider>
      {/*section de noticias aqui*/}

      <div className="newsJogosss">
      <h3>Notícias de Jogos</h3>
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Imagem da noticia" src={ft} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                
                <Typography className="til" variant="body1" gutterBottom href="#">
                  Full resolution 1920x1080 • JPEG
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
              <img className={classes.img} alt="complex" src={ft} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
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

      <section className="cta" >
        <div className="inner">
          <img className="img-address" alt=""/>
          <h1>Nossa Localização</h1>
          <p>Rua Frei Damião, 1720 - CEP: 63040-640 - Lagoa Seca - Juazeiro do Norte-CE</p>
          <p>Fone-Fax: (88)3571- 3060.</p>
        </div>
      </section>

    </div>

  )
}

export default HomePage;
