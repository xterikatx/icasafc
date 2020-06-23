import React from 'react';
import './styles.css';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FontSizeChanger from 'react-font-size-changer';
import { makeStyles, useTheme, withStyles, emphasize } from '@material-ui/core/styles';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const logo = require('../../assets/logo.png')
const img1 = require('../../assets/foto1.jpg')
const img2 = require('../../assets/foto2.jpg')
const img3 = require('../../assets/foto3.jpg')
const img6 = require('../../assets/foto6.jpg')
const img5 = require('../../assets/foto5.jpg')

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
    backgroundColor: '#388E3C',
    color: 'white',
  },
  img: {
    marginLeft: '10',
    objectFit: 'cover',
    height: 328,
    display: 'block',
    maxWidth: 1243,
    overflow: 'hidden',
    width: '100%',
    WebkitBorderRadius: '20px',
  },
}));

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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function Midia() {
  const classes = useStyles();
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="body">
            <header>
          <Link className='aces' variant="body2" color="inherit" accessKey="H" href="/home" >
            Ir para o Início [ H ]
      </Link>
          <Link className='aces' variant="body2" color="inherit" accessKey="M" href="/midia">
            Ir para Mídia [ M ]
      </Link>
          <Link className='aces' variant="body2" color="inherit" accessKey="N" href="/#ancora">
            Ir para Notícias do Time [ N ]
      </Link>
      
          <Paper className={classes.root}>
            <img alt="Logo do icasa" className="logo" src={logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              centered
              className={classes.es}
            >
              <Tab className="tab" label="Início" href="/home" />
              <Tab className="tab" label="Tabelas" href="/Tabelas" accessKey="w" />
              <Tab className="tab" label="Programação" />
              <Tab className="tab b" label="Mídia" />
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

        <Breadcrumbs className='crumb' style={{marginLeft: '90px', marginTop: '15px',}} aria-label="breadcrumb">
          <StyledBreadcrumb
          component="a"
          href="/home"
          label="Início"
          icon={<HomeIcon fontSize="small" />}
        
        />
        <StyledBreadcrumb component="a" href="#" label="Mídia" onClick={handleClick} />
        </Breadcrumbs>
    
      <div className="wrapper">

        {/* logo */}
        <div className="container1">
          <a href="/"><img src={logo} alt="Logo do icasa" style={{ marginLeft: '550px', height: '43px', width: '62px', marginTop: '3px' }} /></a>
          <div className="margingallery">
            <a>Fotos</a>
          </div>
        </div>

        {/* image grid list */}
        <div className="container2">
          <div className="cont">
            <img className="fotos" src={img1} style={{ height: '152px' }} />
            <img className="fotos" src={img2} style={{ height: '152px' }} />
            <img className="fotos" src={img3} style={{ height: '152px' }} />
            <img className="fotos" src={img6} style={{ height: '152px' }} />
            <img className="fotos" src={img5} style={{ height: '152px' }} />
          </div>

          <div className="cont">
            <img className="fotos" src={img1} style={{ height: '152px' }} />
            <img className="fotos" src={img2} style={{ height: '152px' }} />
            <img className="fotos" src={img3} style={{ height: '152px' }} />
            <img className="fotos" src={img6} style={{ height: '152px' }} />
            <img className="fotos" src={img5} style={{ height: '152px' }} />
          </div>
        </div>

        {/* title video grid list */}
        <div className="container3">
          <a><img src={logo} alt="Logo do icasa" style={{ marginLeft: '550px', height: '43px', width: '62px', marginTop: '3px' }} /></a>
          <div className="margingallery">
            <a>Videos</a>
          </div>
        </div>

      {/* videos grid list */}
      <div className="container4">
			<div style={{marginLeft: '30px'}}>
				<iframe style={{marginLeft: '50px', marginTop: '25px'}} width="336" height="222" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe style={{marginLeft: '50px', marginTop: '25px'}} width="336" height="222" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe style={{marginLeft: '50px', marginTop: '25px'}} width="336" height="222" src="https://www.youtube.com/embed/wHV1TKkceow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>

      </div>
    </div>
  );
}

export default Midia;