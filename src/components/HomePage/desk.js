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
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../Menu/MenuDesktop.css';
import FontSizeChanger from 'react-font-size-changer';
const logo = require('../../assets/logo.png');


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
      <header>
        <img alt="Logo do icasa" className="logo" src={logo} />
        <div className="head">
          <ul class="ul">
            <div class="margin">
              <li className="font"><a class="" href="/home">Início</a></li>
              <li  className="font"><a href="/">O clube</a></li>
              <li  className="font"><a href="/Tabelas">Tabelas</a></li>
              <li  className="font"><a href="/club">Notícias</a></li>
              <li  className="font"><a href="/">Programação</a></li>
              <li  className="font"><a href="/Midia">Mídia</a></li>
              <li  className="font"><a href="/">Contato</a></li>
              <li>
                {/** COMPONENTE QUE AUMENTA VOL */}
                <FontSizeChanger
                  targets={['.font, .txtnot, .linkdanoticia, .descricaonoticia, .datanoticia, .iddanoticia, .titulodanoticia']} //aqui deve ficar as class que tem que alterar, separar por virgula
                  onChange={(element, newValue, oldValue) => {
                    console.log(element, newValue, oldValue);
                  }}
                  options={{
                    stepSize: 2,
                    range: 3
                  }}
                  customButtons={{
                    up: <span style={{ 'fontSize': '36px' }}>A+</span>,
                    down: <span style={{ 'fontSize': '20px' }}>A-</span>,
                    style: {
                      backgroundColor: 'red',
                      color: 'white',
                      WebkitBoxSizing: 'border-box',
                      WebkitBorderRadius: '5px',
                      width: '60px'
                    },
                    buttonsMargin: 10
                  }}
                />
              </li>
            </div>
          </ul>
        </div>
      </header>
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
              <Link href="/Noticia" color="inherit" variant="h6" className="linkdanoticia">
              {'Titulo da Noticia'}
              </Link>
              {/* <Typography className='ti' href="/Club" gutterBottom variant="subtitle1">
                 Titulo da Noticia
                </Typography> */}
                <Typography variant="body2" gutterBottom color="textSecondary" className="descricaonoticia">
                  A descrição das noticias fica localizado aqui
                </Typography>
                <Typography variant="body2" color="textSecondary" className="datanoticia">
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
              <Link href="/Noticia" onClick={preventDefault} color="inherit" variant="h6" className="linkdanoticia">
              {'Titulo da Noticia'}
              </Link>
              {/* <Typography className='ti' href="/Club" gutterBottom variant="subtitle1">
                 Titulo da Noticia
                </Typography> */}
                <Typography variant="body2" gutterBottom color="textSecondary" className=".descricaonoticia ">
                  A descrição das noticias fica localizado aqui
                </Typography>
                <Typography variant="body2" color="textSecondary" className="iddanoticia">
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
              <Link href="/Noticia" onClick={preventDefault} color="inherit" variant="h6" className="linkdanoticia">
              {'Titulo da Noticia'}
              </Link>
              {/* <Typography className='ti' href="/Club" gutterBottom variant="subtitle1">
                 Titulo da Noticia
                </Typography> */}
                <Typography variant="body2" gutterBottom color="textSecondary" className="descricaonoticia ">
                  A descrição das noticias fica localizado aqui
                </Typography>
                <Typography variant="body2" color="textSecondary" className="iddanoticia">
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
      <h3 className="titulodanoticia">Notícias de Jogos</h3>
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
              <Link href="/Noticia" onClick={preventDefault} color="inherit" variant="h6" className="linkdanoticia">
              {'Titulo da Noticia'}
              </Link>
              {/* <Typography className='ti' href="/Club" gutterBottom variant="subtitle1">
                 Titulo da Noticia
                </Typography> */}
                <Typography variant="body2" gutterBottom color="textSecondary" className="descricaonoticia">
                  A descrição das noticias fica localizado aqui
                </Typography>
                <Typography variant="body2" color="textSecondary" className="iddanoticia">
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
              <Link href="/Noticia" onClick={preventDefault} color="inherit" variant="h6" className="linkdanoticia">
              {'Titulo da Noticia'}
              </Link>
              {/* <Typography className='ti' href="/Club" gutterBottom variant="subtitle1">
                 Titulo da Noticia
                </Typography> */}
                <Typography variant="body2" gutterBottom color="textSecondary" className="descricaonoticia">
                  A descrição das noticias fica localizado aqui
                </Typography>
                <Typography variant="body2" color="textSecondary" className="iddanoticia">
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
              <Link href="/Noticia" onClick={preventDefault} color="inherit" variant="h6" className="linkdanoticia">
              {'Titulo da Noticia'}
              </Link>
              {/* <Typography className='ti' href="/Club" gutterBottom variant="subtitle1">
                 Titulo da Noticia
                </Typography> */}
                <Typography variant="body2" gutterBottom color="textSecondary" className="descricaonoticia">
                  A descrição das noticias fica localizado aqui
                </Typography>
                <Typography variant="body2" color="textSecondary" className="iddanoticia">
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
        <h3 className="titulodanoticia">Patrocinio</h3>
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

    <React.Fragment>
    <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{marginTop:100, marginLeft:-400,backgroundColor: '#fafafa', height: '15vh', width:'244.4%',}} />
      </Container>
        <Typography style={{ margintTop: 10, padding:'10px',}} variant="body1" color="initial">
        Associa  o Desportiva Recreativa e Cultural Icasa
        Icasafc.com - Todos os direitos reservados.
        </Typography>
    </React.Fragment>
    </div>
  );
}

export default HomePage;
