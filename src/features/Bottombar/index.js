import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DialpadPop from '../dialpad/DialPadPop'
import './index.css'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PhoneEnabledRoundedIcon from '@material-ui/icons/PhoneEnabledRounded';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    boxShadow: '0px 0px 5px #aaa',
    position: 'fixed',
    bottom: '0px',
    left: '0px',
    right: '0px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'none'
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    color: '#3A78E9',
    transform: 'scale(1.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 5),
    transition: theme.transitions.create('width'),
    width: '100%',
    color: '#000',
    [theme.breakpoints.up('sm')]: {
      width: 0,
      '&:focus': {
        width: 200,
      },
    },
  },
  option: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  phoneIcon: {
    background: '#3A78E9',
    color: '#FFF',
    padding: '5px',
    margin: '0 10px',
    borderRadius: '50%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function Bottombar(props) {
  const classes = useStyles();
  const [search, setSearch] = React.useState(false)


  const handleOptionSelect = () => {
    setSearch(false);
    props.togglePopup(true)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
          </Typography>
          <div className={classes.search}>
          { search ?
            (<Autocomplete
              id="combo-box-demo"
              options={options}
              getOptionLabel={option => (
                <div className={classes.option}>
                <span>{option.name}</span>
                <span>{option.number}
                  <span className={classes.phoneIcon}><PhoneEnabledRoundedIcon /></span>
                </span>
              </div>)}
              style={{ width: 300 }}
              onChange={(e) => handleOptionSelect()}
              renderInput={params => (
                <TextField {...params} placeholder="Search..." fullWidth />
              )}
              />):
          ''}
          </div>
          <div className={classes.searchIcon}>
            <SearchIcon onClick={() => setSearch(true)}/>
          </div>
          <DialpadPop />
        </Toolbar>
      </AppBar>
    </div>
  );
}

const options = [
  { name: 'Ryan', number: '+919876543210'},
  { name: 'Ryan', number: '+919876543210'},
  { name: 'Ryan', number: '+919876543210'},
  { name: 'Ryan', number: '+919876543210'},
  { name: 'Ryan', number: '+919876543210'},
]
