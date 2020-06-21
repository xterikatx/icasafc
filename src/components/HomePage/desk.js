import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import './styles.css';
import './patrocinio.css';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import MobileStepper from '@material-ui/core/MobileStepper';

import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Link from '@material-ui/core/Link';
{/* <script src="fonte.js"></script> */}
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=600&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=1200&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=1200&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=1200&h=250&q=60',
  },
];

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

const newPhoto = require('../../assets/foto5.jpg');
const imagens = require('../../assets/banner.PNG');
const imgs = require('../../assets/banner-slider.jpg');
const ft = require('../../assets/foto5.jpg');


function HomePage() {
  const theme = useTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  const preventDefault = (event) => event.preventDefault();


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div className="all_components">
          <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography className='tett'>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div className='tett' key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={5}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
         
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        
        </Button>
        }
      />
    </div>

      {/*section de noticias aqui*/}

      <div className="newsJogoss">
      <h3>Notícias de Jogos</h3>
      <button onClick="fonte('a');">A+</button>
      <button onClick="fonte('n');" title="Normal">A</button>
      <button onClick="fonte('d');">A-</button>
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
      </div>

      <div className="newsJogos3">
      <h3>Notícias de Jogos</h3>
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
              <Typography gutterBottom variant="subtitle1">
                 Titulo
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Qualleeeeeeee
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
                <Typography gutterBottom variant="subtitle1">
                 Titulo
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Qualleeeeeeee
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
              <Typography gutterBottom variant="subtitle1">
                 Titulo
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Qualleeeeeeee
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

      <div className="sponsorship">
        <h3>Patrocinio</h3>
        <iframe width="310" height="175" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="310" height="175" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
