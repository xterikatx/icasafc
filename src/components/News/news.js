import React, { useState } from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles, useTheme, emphasize, withStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MobileStepper from '@material-ui/core/MobileStepper';
import ButtonBase from '@material-ui/core/ButtonBase';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FontSizeChanger from 'react-font-size-changer';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { orange, lightBlue, deepOrange, deepPurple } from '@material-ui/core/colors';
import { Switch, ThemeProvider } from '@material-ui/core';

const img5 = require('../../assets/foto5.jpg')
const img1 = require('../../assets/foto1.jpg')
const img2 = require('../../assets/foto2.jpg')
const img6 = require('../../assets/foto6.jpg')
const img3 = require('../../assets/foto3.jpg')
const ft = require('../../assets/foto5.jpg');
const logo = require('../../assets/logo.png');


const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[400],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

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
    links: {
      margin: 10
    },
    es: {
      height:70,
      alignItems:'center',
      backgroundColor:'#388E3C',
      color:'white',
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
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  function News() {
    const theme = useTheme();
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
  
    const [value, setValue] = React.useState(8);
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
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
    return(
  <ThemeProvider theme={darkTheme}>
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
      <Link className={classes.links} variant="body2" color="inherit" >
        Ativar alto contraste →
      </Link>
          <Switch checked={darkState} onChange={handleThemeChange} />
      <Paper className={classes.root}>
        <img alt="Logo do icasa" className="logo" src={logo} />
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        centered
        className={classes.es}
        >
        <Tab className="tab" label="Início"  href="/home" />
        <Tab className="tab" label="Tabelas" href="/Tabelas"/>
        <Tab className="tab" label="Programação" />
        <Tab className="tab" label="Mídia" />
        <Tab className="tab" label="Contato" />
        {/** COMPONENTE QUE AUMENTA VOL */}
        <FontSizeChanger
                  targets={['.font, .goog, .dta, .titulonot, .crumb, .tab, .tett, .txtnot, .linkdanoticia, .descricaonoticia, .datanoticia, .iddanoticia, .titulodanoticia']} //aqui deve ficar as class que tem que alterar, separar por virgula
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
                      cursor:'pointer',
                    },
                    buttonsMargin: 10
                  }}
                />
      </Tabs>
    </Paper>
      </header>

    <Breadcrumbs className='crumb' style={{marginLeft: '90px', marginTop: '15px',}} aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        href="/home"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        
      />
      <StyledBreadcrumb component="a" href="#" label="Notícias" onClick={handleClick} />
      <StyledBreadcrumb
        label="Barulhos estranhos no céu assustam pessoas de todo o mundo"
      />
    </Breadcrumbs>

    <div style={{marginLeft: '90px', width: '740px'}}>
        <a><h1 className='titulonot' style={{marginTop: 10, marginBottom:10,}}>Barulhos estranhos no céu assustam pessoas de todo o mundo</h1></a>
        <Typography style={{ marginBottom:15,}} className="txtnot" variant="body1" color="initial">
        A desenvolvedora de soluções tecnológicas com gerador de ozônio (O3) pode ter encontrado 
        uma nova arma contra o coronavírus.
        </Typography>
    </div>

    <img className="banner" src={img1} alt="Foto de capa" />
    <h6 className="goog" style={{marginLeft: '90px', marginTop: '0px'}}>Fonte: Google</h6>
    <h6 className="dta" style={{marginLeft: '90px', marginTop: '0px'}}>30 Abril 2020</h6>

    <div id="ancora3" style={{height: '3vh', marginLeft: '5%', width: '55%', marginTop: '30px', lineHeight: 1.6, marginBottom: '130px'}}>
        <Typography className="txtnot" variant="body1" color="initial">
            A desenvolvedora de soluções tecnológicas com gerador de ozônio (O3) pode ter
            encontrado uma nova arma contra o coronavírus. Após realizar testes com o gás
            no laboratório da Universidade Federal de Santa Catarina, a Wier, startup em questão,
            constatou que ele foi eficiente na eliminação de 99,9% das amostras de dois tipos de
            vírus em ambientes fechados e com alto fluxo de pessoas – sendo que um deles
            possui semelhanças com o Sars-CoV-2, causador da covid-19.
       
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
              <Link href="/Noticia" color="inherit" variant="h6" className="linkdanoticia">
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
              <Link href="/Noticia" onClick={preventDefault} color="inherit" variant="h6" className="linkdanoticia">
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
              <Link href="/Noticia" onClick={preventDefault} color="inherit" variant="h6" className="linkdanoticia">
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
              <Link href="/Noticia" onClick={preventDefault} color="inherit" variant="h6" className="linkdanoticia">
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
    {/* Footer */}
    <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Typography component="div" style={{ marginTop: 300, marginLeft: -400, backgroundColor: '#fafafa', height: '15vh', width: '244.4%', }} />
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
  </ThemeProvider>
  );
}

export default News;
