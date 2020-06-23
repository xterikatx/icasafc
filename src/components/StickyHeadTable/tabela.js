import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import FontSizeChanger from 'react-font-size-changer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { deepOrange, orange, lightBlue, deepPurple } from '@material-ui/core/colors';
import { Switch } from '@material-ui/core';

const logo = require('../../assets/logo.png');

const columns = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'code', label: '`Pontos', minWidth: 100 },
  {
    id: 'population',
    label: 'Vitórias',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'DER',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'E',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('Icasa', 'IN', 1324171354, 3287263),
  createData('Ceará', 'CN', 1403500365, 9596961),
  createData('Flamengo', 'IT', 60483973, 301340),
  createData('Corinthians', 'US', 327167434, 9833520),
  createData('Palmeiras', 'CA', 37602103, 9984670),
  createData('Atlético-GO', 'AU', 25475400, 7692024),
  createData('Chapecoense', 'DE', 83019200, 357578),
  createData('Fluminense', 'IE', 4857000, 70273),
  createData('Grêmio', 'MX', 126577691, 1972550),
  createData('Atlético-MG', 'JP', 126317000, 377973),
  createData('Atlético-PR', 'FR', 67022000, 640679),
  createData('Vasco', 'GB', 67545757, 242495),
  createData('Internacional', 'RU', 146793744, 17098246),
  createData('São Paulo', 'NG', 200962417, 923768),
  createData('Bahia', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
   
  },
    container: {
      maxHeight: 1040,
      marginLeft: 65,
      marginTop: 10,
      width: '90%',
    },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
   
  
  },
  
  es: {
    height:70,
    alignItems:'center',
    backgroundColor:'#388E3C',
    color:'white',
  },
});

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
    links: {
      margin: 10,
      color:theme.palette.background.default,
    },
  },
}))(Chip);

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 
  const [value, setValue] = React.useState(1);

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

  
  return (
    <ThemeProvider theme={darkTheme}>
    <Paper className={classes.root}>
      <header>
      <Link className='aces' variant="body2" color="inherit" accessKey = "H" href="/home" >
        Ir para o Início [ H ]
      </Link>
      <Link className='aces' variant="body2" color="inherit" accessKey = "M" href="/midia">
        Ir para Mídia [ M ]
      </Link>
      <Link className='aces' variant="body2" color="inherit" accessKey = "T" href="/Tabelas/#ancora2">
        Ir para a Tabela [ T ]
      </Link>
      <Link className={classes.links}  variant="body2" color="inherit" >
            Ativar alto contraste →
        <Switch checked={darkState} onChange={handleThemeChange} />

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
        <Tab className="tab" label="Início"  href="/home" accessKey = "w" />
        <Tab className="tab a" label="Tabelas" href="/Tabelas" />
        <Tab className="tab" label="Programação" />
        <Tab className="tab" label="Mídia" href="/midia"/>
        <Tab className="tab" label="Contato" />
        {/** COMPONENTE QUE AUMENTA VOL */}
        <FontSizeChanger
                  targets={['.font, .tii, .tab, .tett, .txtnot, .linkdanoticia, .descricaonoticia, .datanoticia, .iddanoticia, .titulodanoticia']} //aqui deve ficar as class que tem que alterar, separar por virgula
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

      <Breadcrumbs style={{marginLeft: '90px', marginTop: '15px', marginBottom: 5,}} aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={handleClick}
      />
      <StyledBreadcrumb component="a" href="#" label="Tabelas" onClick={handleClick} />
    </Breadcrumbs>
      <Typography id="ancora2" className='tii' href="/Club" gutterBottom variant="itle1">
      TABELA BRASILEIRÃO SERIE B
      </Typography>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />

      {/* Footer */}
    <React.Fragment>
    <CssBaseline />
      <Container maxWidth="sm" >
        <Typography component="div"/>
      </Container >
      <Grid  style={{marginTop: 30, marginLeft:10,}}>
      <FacebookIcon />
      <InstagramIcon />
      </Grid>
        <Typography style={{ margintTop: 10, padding:'10px',}} variant="body1" color="initial">
        Associação Desportiva Recreativa e Cultural Icasa
        Icasafc.com - Todos os direitos reservados.
        </Typography>
    </React.Fragment>
    </Paper>
    </ThemeProvider>
  );
}
export default StickyHeadTable;
