import React, { useState } from 'react';
import 'fontsource-roboto';
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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Switch } from '@material-ui/core';

const logo = require('../../assets/logo.png');



{/* <script src="fonte.js"></script> */ }
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1494177310973-4841f7d5a882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1567117632960-56e34a4c2456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1575279326328-49cceeb9c5e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/flagged/photo-1550413231-202a9d53a331?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  primary: {
    main: '#fdd835',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 150,
    height: 100,
    objectFit: 'cover',
  },
  links:{
    margin:10
  },
  imgs: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    WebkitBorderRadius: '10px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  es: {
    height: 70,
    alignItems: 'center',
    backgroundColor: theme.palette.success.dark,
    color: 'white',
  },
  img: {
    marginLeft: '10',
    objectFit: 'cover',
    height: 328,
    display: 'block',
    overflow: 'hidden',
    width: '96%',
    WebkitBorderRadius: '20px',
  },
}));

const ft = require('../../assets/foto5.jpg');

function HomePage() {

  const [open, setOpen] = useState(true);
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
        
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="all_components">
        <header>
          <Link className={classes.links} variant="body2" color="inherit" accessKey="H" href="/home" >
            Ir para o Início [ H ]
      </Link>
          <Link className={classes.links} variant="body2" color="inherit" accessKey="M" href="/midia">
            Ir para Mídia [ M ]
      </Link>
          <Link className={classes.links} variant="body2" color="inherit" accessKey="N" href="/#ancora">
            Ir para Notícias do Time [ N ]
      </Link>
      <Switch checked={darkState} onChange={handleThemeChange} />
          <Paper className={classes.root}>
            <img alt="Logo do icasa" className="logo" src={logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              centered
              
            >
              <Tab className="tab b" label="Início" href="/home" />
              <Tab className="tab" label="Tabelas" href="/Tabelas" accessKey="w" />
              <Tab className="tab" label="Programação" />
              <Tab className="tab" label="Mídia" href="/Midia" />
              <Tab className="tab" label="Contato" />
              {/** COMPONENTE QUE AUMENTA VOL */}
              <FontSizeChanger
                targets={['.font, .tab, .tett, .txtnot, .linkdanoticia, .descricaonoticia, .datanoticia, .iddanoticia, .titulodanoticia']} //aqui deve ficar as class que tem que alterar, separar por virgula
                onChange={(element, newValue, oldValue) => {
                  console.log(element, newValue, oldValue);
                }}
                options={{
                  stepSize: 2,
                  range: 3
                }}
                customButtons={{
                  up: <span style={{ 'fontSize': '20px' }}>A+</span>,
                  down: <span style={{ 'fontSize': '15px' }}>A-</span>,
                  style: {
                    backgroundColor: '#fafafa',
                    color: 'black',
                    WebkitBoxSizing: 'border-box',
                    WebkitBorderRadius: '5px',
                    width: '60px',
                    cursor: 'pointer',
                  },
                  buttonsMargin: 10
                }}
              />

            </Tabs>

          </Paper>
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
          <Typography className="txtnot" id="ancora" variant="h6" color="initial">
            Notícias do Time
      </Typography>
          {/* <h3>Notícias de Time</h3> */}

          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.imgs} alt="Imagen com dois jogadores de futebol" src={ft} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Link href="/Noticia" for="ids" color="inherit" variant="h6" className="linkdanoticia">
                        {'Titulo da Noticia'}
                      </Link>
                      {/* <Typography className='ti' href="/Club" gutterBottom variant="subtitle1">
                 Titulo da Noticia
                </Typography> */}
                      <Typography href="/Noticia" variant="body2" id="ids" gutterBottom color="textSecondary" className="descricaonoticia">
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
                    <img className={classes.imgs} alt="Imagem com dois jogadores de futebol" src={ft} />
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

          {/* outro */}

          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.imgs} alt="Imagem com dois jogadores de futebol" src={ft} />
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
          <Typography className="txtnot" variant="h6" color="initial">
            Notícias de Jogos
      </Typography>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.imgs} alt="Imagem com dois jogadores de futebol" src={ft} />
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
                    <img className={classes.imgs} alt="Imagem com dois jogadores de futebol" src={ft} />
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
                    <img className={classes.imgs} alt="Imagem com dois jogadores de futebol" src={ft} />
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
            <img className="img-address" alt="" />
            <h1>Nossa Localização</h1>
            <p>Rua Frei Damião, 1720 - CEP: 63040-640 - Lagoa Seca - Juazeiro do Norte-CE</p>
            <p>Fone-Fax: (88)3571- 3060.</p>
          </div>
        </section>

        {/* Footer */}
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Typography component="div" style={{ marginTop: 100, marginLeft: -400, backgroundColor: '#fafafa', height: '15vh', width: '244.4%', }} />
          </Container>
          <Grid style={{ marginLeft: '10px', marginBottom: 5, }}>
            <FacebookIcon />
            <InstagramIcon />
          </Grid>
          <Typography style={{ margintTop: 10, padding: '10px', }} variant="body1" color="initial">
            Associação Desportiva Recreativa e Cultural Icasa
            Icasafc.com - Todos os direitos reservados.
        </Typography>
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
