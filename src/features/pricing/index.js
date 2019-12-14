import React, { useState } from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import WarningIcon from '@material-ui/icons/Warning';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'


import { makeStyles } from '@material-ui/core/styles';


const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: '#FFF',
    marginBottom: '4rem'
  },
  headingContainer: {
    background: '#3A78E9',
    color: '#FFF',
    padding: theme.spacing(7)
  },
  heading: {
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    fontWeight: 'bolder',
    fontSize: '4rem',
    textAlign: 'center'
  },
  body: {
    margin: '2rem auto',
    marginBottom: ''
  },
  feature: {
      background: '#3A78E9',
      color: '#FFF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      textAlign: 'center',
      padding: '10px 10px',
      borderBottom: '1px solid #FFF'
  },
  cells: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px'
  },
  final: {
    fontWeight: 'bolder',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#80A3EF',
    padding: '10px',
    color: '#FFF'
  },
  finalFeature: {
    background: 'transparent'
  },
  subFinal : {
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    textAlign: 'center',
    padding: '10px 10px',
    borderBottom: '1px solid #FFF',
    background: '#80A3EF'
  },
  lightChip: { color: '#FFF', background: '#80A3EF'},
  darkChip: { color: '#FFF', background: '#3A78E9'},
  tickIcon: {width: '2rem', height: '2rem', color: '#67C93C'},
  crossIcon: {width: '2rem', height: '2rem', color: '#FF0000', transform: 'rotate(45deg)'},
  form: {
    background: '#3A78E9',
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px'
  },
  input: {
    background: '#FFF',
    margin: '10px',
    borderRadius: '20px',
    overflow: 'hidden',
    '&:focus-within': {
      border: '2px solid #3A78E9'
    },
    '& > label': {
      background: '#FFFFFF',
      padding: '2px'
    },
    '& fieldset': {
      border: 0
    }
  },
  info: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '1.5rem',
    padding: '0px 0px 10px 0px'
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoInput: {
    width: 50,
    '& .MuiOutlinedInput-input': {
      padding: '5px 5px 0px 5px',
      fontSize: '1.5rem',
      textAlign: 'center',
    }
  },
  TotalCart: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#FFF',
    fontSize: '1.2rem',
    fontWeight: 600,
    padding: '10px 0',
    background: '#3A78E9'
  },
  checkout: {
    background: '#3A78E9',
    color: '#FFF',
    borderRadius: '20px',
    padding: '10px 20px'
  }
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function PricingPage () {

  const classes = useStyles();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [addr, setAddr] = useState('')
  const [user, setUser] = useState(1)
  const [license, setLicense] = useState(1)
  const [admin, setAdmin] = useState(1)
  const [users, setUsers]= useState(90)
  const [licenses, setLicenses]= useState(40)
  const [admins, setAdmins]= useState(10)
  const [terms, setTerms]= useState(true)

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    error: 'Form Not Open'
  })

  const [pricing, setPricing] = useState({
    UCRM : { tire1: false, tire2: false, tire3: false},
    CPS : { tire1: false, tire2: false, tire3: false},
    CCD : { tire1: false, tire2: false, tire3: false},
    UIC : { tire1: false, tire2: false, tire3: false},
    UOC : { tire1: false, tire2: false, tire3: false},
    PD : { tire1: false, tire2: false, tire3: false},
    DP : { tire1: false, tire2: false, tire3: false},
    LMS : { tire1: false, tire2: false, tire3: false},
    CRCM : { tire1: false, tire2: false, tire3: false},
    LCID : { tire1: false, tire2: false, tire3: false},
    LDT : { tire1: false, tire2: false, tire3: false},
    PV : { tire1: false, tire2: false, tire3: false},
    EMDA : { tire1: false, tire2: false, tire3: false},
    TM : { tire1: false, tire2: false, tire3: false},
    CIM : { tire1: false, tire2: false, tire3: false},
    RT : { tire1: false, tire2: false, tire3: false},
    GF : { tire1: false, tire2: false, tire3: false},
    IPR : { tire1: false, tire2: false, tire3: false},
    WH : { tire1: false, tire2: false, tire3: false}
  })

  const { vertical, horizontal, open, error } = state

  const handleClose = () => {
    setState({ ...state, open: false });
  }

  const handleNameChange = (e) => {
    let value = e.target.value
    if (value.length > 0 && value.charAt(value.length-1).match(/[a-zA-Z ]/i) !== null){
      setName(value)
    } else if (value.length == 0) {
      setName('')
    }
  }

  const handlePhoneChange = (e) => {
    let value = e.target.value
    if (value.length > 0 && value.charAt(value.length-1).match(/[0-9]/i) !== null){
      setPhone(value)
    } else if (value.length == 0) {
      setPhone('')
    }
  }

  const handleUserChange = (e) => {
    let value = e.target.value
    if (value.length > 0 && value.charAt(value.length-1).match(/[0-9]/i) !== null){
      setUser(value)
      setUsers(value * 90)
    } else if (value.length == 0) {
      setUser()
      setUsers(0)
    }
  }

  const handleLicenseChange = (e) => {
    let value = e.target.value
    if (value.length > 0 && value.charAt(value.length-1).match(/[0-9]/i) !== null){
      setLicense(value)
      setLicenses(value * 40)
    } else if (value.length == 0) {
      setLicense()
      setLicenses(0)
    }
  }

  const handleAdminChange = (e) => {
    let value = e.target.value
    if (value.length > 0 && value.charAt(value.length-1).match(/[0-9]/i) !== null){
      setAdmin(value)
      setAdmins(value * 10)
    } else if (value.length == 0) {
      setAdmin()
      setAdmins(0)
    }
  }

  const handleChangeTerm = () => {
    setTerms(!terms)
  }

  const submitForm = () => {
    const regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

    if (!name) {
      setState({...state, open: 'true', error: 'First Name is Required'})
      return
    }
    if (!email) {
      setState({...state, open: 'true', error: 'Email is Required'})
      return
    }
    if (!regex.test(email)) {
      setState({...state, open: 'true', error: 'Email not Valid'})
      return
    }
    if (!phone) {
      setState({...state, open: 'true', error: 'Phone is Required'})
      return
    }
    if (phone.length !== 10) {
      setState({...state, open: 'true', error: 'Phone Number not Valid'})
      return
    }
    if (!addr) {
      setState({...state, open: 'true', error: 'Address is Required'})
      return
    }
    if(!terms) {
      setState({...state, open: 'true', error: 'You Must Agree to Terms and Conditions'})
      return
    }
    if(users+admins+licenses === 0) {
      setState({...state, open: 'true', error: 'Cart Value is zero'})
      return
    }
  }

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} className={classes.headingContainer}>
        <Typography className={classes.heading} variant="h1" component="h1">
          pricing page
        </Typography>
      </Grid>
      <Grid item xs={8} sm={10} spacing={3} className={classes.body}>
        <Grid container direction="row" justify="center" >
          <Grid item xs={3} className={classes.feature}>
            feature
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <Typography variant="h4" component="h3">Tier 1</Typography>
            <Typography variant="h3" component="h3">$40</Typography>
            <Typography variant="h6" component="h3">per user/month</Typography>
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <Typography variant="h4" component="h3">Tier 2</Typography>
            <Typography variant="h3" component="h3">$90</Typography>
            <Typography variant="h6" component="h3">per user/month</Typography>
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <Typography variant="h4" component="h3">Tier 3</Typography>
            <Typography variant="h3" component="h3">$125</Typography>
            <Typography variant="h6" component="h3">per user/month</Typography>
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Ultconnect CRM
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <FormControlLabel
            control={
              <Checkbox
                    icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                    checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                    checked={pricing.UCRM.tire1}
                    onChange={() => setPricing({...pricing, UCRM : {...pricing.UCRM, tire1: !pricing.UCRM.tire1}})}
                  />
                }
              />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.UCRM.tire2}
                  onChange={() => setPricing({...pricing, UCRM : {...pricing.UCRM, tire2: !pricing.UCRM.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.UCRM.tire3}
                  onChange={() => setPricing({...pricing, UCRM : {...pricing.UCRM, tire3: !pricing.UCRM.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Cloud Phone System
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CPS.tire1}
                  onChange={() => setPricing({...pricing, CPS : {...pricing.CPS, tire1: !pricing.CPS.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CPS.tire2}
                  onChange={() => setPricing({...pricing, CPS : {...pricing.CPS, tire2: !pricing.CPS.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CPS.tire3}
                  onChange={() => setPricing({...pricing, CPS : {...pricing.CPS, tire3: !pricing.CPS.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Click-to-Call Dialing
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CCD.tire1}
                  onChange={() => setPricing({...pricing, CCD : {...pricing.CCD, tire1: !pricing.CCD.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CCD.tire2}
                  onChange={() => setPricing({...pricing, CCD : {...pricing.CCD, tire2: !pricing.CCD.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CCD.tire3}
                  onChange={() => setPricing({...pricing, CCD : {...pricing.CCD, tire3: !pricing.CCD.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Unlimited Inbound Calls
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.UIC.tire1}
                  onChange={() => setPricing({...pricing, UIC : {...pricing.UIC, tire1: !pricing.UIC.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.UIC.tire2}
                  onChange={() => setPricing({...pricing, UIC : {...pricing.UIC, tire2: !pricing.UIC.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.UIC.tire3}
                  onChange={() => setPricing({...pricing, UIC : {...pricing.UIC, tire3: !pricing.UIC.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Unlimited Outbound Calls
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.UOC.tire1}
                  onChange={() => setPricing({...pricing, UOC : {...pricing.UOC, tire1: !pricing.UOC.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.UOC.tire2}
                  onChange={() => setPricing({...pricing, UOC : {...pricing.UOC, tire2: !pricing.UOC.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.UOC.tire3}
                  onChange={() => setPricing({...pricing, UOC : {...pricing.UOC, tire3: !pricing.UOC.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Progressive Dialer
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.PD.tire1}
                  onChange={() => setPricing({...pricing, PD : {...pricing.PD, tire1: !pricing.PD.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.PD.tire2}
                  onChange={() => setPricing({...pricing, PD : {...pricing.PD, tire2: !pricing.PD.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.PD.tire3}
                  onChange={() => setPricing({...pricing, PD : {...pricing.PD, tire3: !pricing.PD.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Desktop Phone
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.DP.tire1}
                  onChange={() => setPricing({...pricing, DP : {...pricing.DP, tire1: !pricing.DP.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.DP.tire2}
                  onChange={() => setPricing({...pricing, DP : {...pricing.DP, tire2: !pricing.DP.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.DP.tire3}
                  onChange={() => setPricing({...pricing, DP : {...pricing.DP, tire3: !pricing.DP.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Lead Management System
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.LMS.tire1}
                  onChange={() => setPricing({...pricing, LMS : {...pricing.LMS, tire1: !pricing.LMS.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.LMS.tire2}
                  onChange={() => setPricing({...pricing, LMS : {...pricing.LMS, tire2: !pricing.LMS.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.LMS.tire3}
                  onChange={() => setPricing({...pricing, LMS : {...pricing.LMS, tire3: !pricing.LMS.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Call Recording & Call Monitoring
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CRCM.tire1}
                  onChange={() => setPricing({...pricing, CRCM : {...pricing.CRCM, tire1: !pricing.CRCM.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CRCM.tire2}
                  onChange={() => setPricing({...pricing, CRCM : {...pricing.CRCM, tire2: !pricing.CRCM.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CRCM.tire3}
                  onChange={() => setPricing({...pricing, CRCM : {...pricing.CRCM, tire3: !pricing.CRCM.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Local Caller ID
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.LCID.tire1}
                  onChange={() => setPricing({...pricing, LCID : {...pricing.LCID, tire1: !pricing.LCID.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.LCID.tire2}
                  onChange={() => setPricing({...pricing, LCID : {...pricing.LCID, tire2: !pricing.LCID.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.LCID.tire3}
                  onChange={() => setPricing({...pricing, LCID : {...pricing.LCID, tire3: !pricing.LCID.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Lead Distribution & Tags
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.LDT.tire1}
                  onChange={() => setPricing({...pricing, LDT : {...pricing.LDT, tire1: !pricing.LDT.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.LDT.tire2}
                  onChange={() => setPricing({...pricing, LDT : {...pricing.LDT, tire2: !pricing.LDT.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.LDT.tire3}
                  onChange={() => setPricing({...pricing, LDT : {...pricing.LDT, tire3: !pricing.LDT.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Perfect Voicemail
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.PV.tire1}
                  onChange={() => setPricing({...pricing, PV : {...pricing.PV, tire1: !pricing.PV.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.PV.tire2}
                  onChange={() => setPricing({...pricing, PV : {...pricing.PV, tire2: !pricing.PV.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.PV.tire3}
                  onChange={() => setPricing({...pricing, PV : {...pricing.PV, tire3: !pricing.PV.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Email Messaging Drip Automation
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.EMDA.tire1}
                  onChange={() => setPricing({...pricing, EMDA : {...pricing.EMDA, tire1: !pricing.EMDA.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.EMDA.tire2}
                  onChange={() => setPricing({...pricing, EMDA : {...pricing.EMDA, tire2: !pricing.EMDA.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.EMDA.tire3}
                  onChange={() => setPricing({...pricing, EMDA : {...pricing.EMDA, tire3: !pricing.EMDA.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Text Messaging
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.TM.tire1}
                  onChange={() => setPricing({...pricing, TM : {...pricing.TM, tire1: !pricing.TM.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.TM.tire2}
                  onChange={() => setPricing({...pricing, TM : {...pricing.TM, tire2: !pricing.TM.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.TM.tire3}
                  onChange={() => setPricing({...pricing, TM : {...pricing.TM, tire3: !pricing.TM.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Chat & Instant Messaging
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CIM.tire1}
                  onChange={() => setPricing({...pricing, CIM : {...pricing.CIM, tire1: !pricing.CIM.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CIM.tire2}
                  onChange={() => setPricing({...pricing, CIM : {...pricing.CIM, tire2: !pricing.CIM.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.CIM.tire3}
                  onChange={() => setPricing({...pricing, CIM : {...pricing.CIM, tire3: !pricing.CIM.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Referral Tracking
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.RT.tire1}
                  onChange={() => setPricing({...pricing, RT : {...pricing.RT, tire1: !pricing.RT.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.RT.tire2}
                  onChange={() => setPricing({...pricing, RT : {...pricing.RT, tire2: !pricing.RT.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.RT.tire3}
                  onChange={() => setPricing({...pricing, RT : {...pricing.RT, tire3: !pricing.RT.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Gamification
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.GF.tire1}
                  onChange={() => setPricing({...pricing, GF : {...pricing.GF, tire1: !pricing.GF.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.GF.tire2}
                  onChange={() => setPricing({...pricing, GF : {...pricing.GF, tire2: !pricing.GF.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.GF.tire3}
                  onChange={() => setPricing({...pricing, GF : {...pricing.GF, tire3: !pricing.GF.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            IP Restrictions
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.IPR.tire1}
                  onChange={() => setPricing({...pricing, IPR : {...pricing.IPR, tire1: !pricing.IPR.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.IPR.tire2}
                  onChange={() => setPricing({...pricing, IPR : {...pricing.IPR, tire2: !pricing.IPR.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.IPR.tire3}
                  onChange={() => setPricing({...pricing, IPR : {...pricing.IPR, tire3: !pricing.IPR.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.feature}>
            Webhooks
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.WH.tire1}
                  onChange={() => setPricing({...pricing, WH : {...pricing.WH, tire1: !pricing.WH.tire1}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.WH.tire2}
                  onChange={() => setPricing({...pricing, WH : {...pricing.WH, tire2: !pricing.WH.tire2}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          <FormControlLabel
          control={
            <Checkbox
                  icon={<AddCircleOutlineRoundedIcon className={classes.crossIcon}/>}
                  checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.tickIcon}/>}
                  checked={pricing.WH.tire3}
                  onChange={() => setPricing({...pricing, WH : {...pricing.WH, tire3: !pricing.WH.tire3}})}
                />
              }
            />
          </Grid>
          <Grid item xs={3} className={classes.subFinal}>
            predictive licenses
          </Grid>
          <Grid item xs={3} className={classes.cells}>
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <Typography variant="h5" component="h3">$40</Typography>
            <Typography variant="h6" component="h3">additional per month</Typography>
            <Chip className={classes.lightChip} label="No of User" />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <Typography variant="h5" component="h3">$40</Typography>
            <Typography variant="h6" component="h3">additional per month</Typography>
            <Chip className={classes.lightChip} label="No of User" />
          </Grid>
          <Grid item xs={3} className={classes.subFinal}>
            administrators
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <Typography variant="h5" component="h3">$10</Typography>
            <Typography variant="h6" component="h3">per month</Typography>
            <Chip className={classes.lightChip} label="No of Administrator" />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <Typography variant="h5" component="h3">$10</Typography>
            <Typography variant="h6" component="h3">per month</Typography>
            <Chip className={classes.lightChip} label="No of Administrator" />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <Typography variant="h5" component="h3">$10</Typography>
            <Typography variant="h6" component="h3">per month</Typography>
            <Chip className={classes.lightChip} label="No of Administrator" />
          </Grid>
          <Grid item xs={3} className={classes.subFinal}>
            outside usa will charge additional crm
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <Chip className={classes.darkChip} label="CHECK CRM" />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <Chip className={classes.darkChip} label="CHECK CRM" />
          </Grid>
          <Grid item xs={3} className={classes.cells}>
            <Chip className={classes.darkChip} label="CHECK CRM" />
          </Grid>
          <Grid item xs={3} className={classes.finalFeature}>

          </Grid>
          <Grid item xs={3} className={classes.final}>
            <Chip className={classes.darkChip} label="CHECK CRM" />
          </Grid>
          <Grid item xs={3} className={classes.final}>
            <Chip className={classes.darkChip} label="CHECK CRM" /> <span>$1320</span>
          </Grid>
          <Grid item xs={3} className={classes.final}>
            <Chip className={classes.darkChip} label="CHECK CRM" /><span> $2500</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.headingContainer}>
        <Typography className={classes.heading} variant="h1" component="h1">
          checkout
        </Typography>
      </Grid>
      <Grid item xs={6} sm={8} spacing={3} className={classes.body}>
        <Grid container direction="row" justify="center" >
          <Grid item xs={6} className={classes.form}>
            <Typography className={classes.heading} variant="h4" component="h4">
              Checkout Details
            </Typography>
            <TextField
                id="outlined-error-helper-text"
                value={name}
                placeholder="Name"
                variant="outlined"
                className={classes.input}
                onChange={handleNameChange}
              />
            <TextField
                id="outlined-error-helper-text"
                type="email"
                value={email}
                placeholder="Email"
                variant="outlined"
                className={classes.input}
                onChange={(e) => setEmail(e.target.value)}
              />
            <TextField
                id="outlined-error-helper-text"
                type="text"
                value={phone}
                placeholder="Phone Number"
                variant="outlined"
                onChange={handlePhoneChange}
                className={classes.input}
              />
            <TextField
                id="outlined-error-helper-text"
                value={addr}
                placeholder="Address"
                variant="outlined"
                multiline
                className={classes.input}
                onChange={(e) => setAddr(e.target.value)}
              />
          </Grid>
          <Grid item xs={6} className={classes.cart}>
            <Typography className={classes.heading} variant="h4" component="h4">
              Total value of cart
            </Typography>
            <Chip label="Monthly Rate" style={{margin: '15px'}}/><br />
            <div className={classes.info}>
              <div className={classes.inputContainer}>
              <TextField
                id="outlined-error-helper-text"
                value={user}
                variant="outlined"
                className={classes.infoInput}
                onChange={handleUserChange}
              />
              Users X $90</div>
              <span>---</span>
              <span>${ users }</span>
            </div>
            <p style={{margin: '0px 15px '}}>PREDICTIVE LICENSES</p>
            <div className={classes.info}>
              <div className={classes.inputContainer}>
              <TextField
                id="outlined-error-helper-text"
                value={license}
                variant="outlined"
                className={classes.infoInput}
                onChange={handleLicenseChange}
              />
              Users X $40</div>
              <span>---</span>
              <span>${ licenses }</span>
            </div>
            <p style={{margin: '0px 15px '}}>ADMINISTRATOR</p>
            <div className={classes.info}>
              <div className={classes.inputContainer}>
              <TextField
                id="outlined-error-helper-text"
                value={admin}
                variant="outlined"
                className={classes.infoInput}
                onChange={handleAdminChange}
              />
              Admins X $10</div>
              <span>---</span>
              <span>${ admins }</span>
            </div>
            <hr />
            <div className={classes.TotalCart}>
              <span>Total Value</span>
              <span>---</span>
              <span>${ users + licenses + admins }</span>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} justify="center" align="center">
      <FormControlLabel
      control={
        <Checkbox
              color="#3A3A3A"
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={<RadioButtonCheckedIcon color="blue" fontSize="small" />}
              checked={terms}
              onChange={handleChangeTerm}
            />
          }
          label="TERMS  CONDITION"
        /><br />
        <Button onClick={submitForm} variant="contained" className={classes.checkout}>
          Pay & Checkout
        </Button>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}>
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="error"
          message={error}
        />
      </Snackbar>
    </Grid>
  )
}
