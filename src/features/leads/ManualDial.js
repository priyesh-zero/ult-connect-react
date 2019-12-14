import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import './ManualDial.css'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab'
import PhoneDisabledRoundedIcon from '@material-ui/icons/PhoneDisabledRounded';
import PhonePausedRoundedIcon from '@material-ui/icons/PhonePausedRounded';
import PhoneCallbackRoundedIcon from '@material-ui/icons/PhoneCallbackRounded'
import CallMergeRoundedIcon from '@material-ui/icons/CallMergeRounded';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types';
import IncomingDialog from './IncomingDialog'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '20px',
    boxShadow: theme.shadows[5],
    // maxWidth: '800px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(auto, 600px))',
    gridTemplateRows: '80vh',
    position: 'relative'
    // padding: theme.spacing(2, 4, 3),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}


function a11yProps(index) {
return {
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
}}

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const [hook, setHook] = React.useState('');

  const handleOpen = () => {
    props.togglePopup(true)
  };

  const handleClose = () => {
    props.togglePopup(false);
  };

  const [chip, setChip] = React.useState(0)
  console.log(chip)
  const handleChange = event => {
    setHook(event.target.value);
  };

  const handleChangeTabs = (event, newValue) => {
   setValue(newValue);
 };

 const handleChangeTabs2 = (event, newValue) => {
  setValue2(newValue);
};

  function createData(name, calories, fat) {
    return { name, calories, fat };
  }

  const selectedChip = (n) => {
    return n==chip ? 'selectedChip' : ''
  }

  const setSelectedChip = (n) => {
    setChip(n)
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);

  const rows = [
  createData('SMART CALL', 'REFI', 'INBOUND IVR'),
];

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.popup}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.popup}>
          <div className={classes.paper}>
            <Paper className="leftPaper">
              <div className="topbar">
                <span>
                  Inbound Calls: <span className="num">150</span>
                </span>
                <span>
                  Outbound Calls: <span className="num">150</span>
                </span>
                <span>
                  Total Calls: <span className="num">150</span>
                </span>
              </div>
              <Typography id="subTopBar" component="h6" className={classes.heading}>
                <label><span className="recordText"><span>&middot;</span> Recording</span> 2:45 Sec</label>
                <Chip
                  label="Split Recording"
                  clickable
                  color="primary"
                />
                <FormControl className={classes.formControl}>
                 <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                   value={hook}
                   onChange={handleChange}
                 >
                   <MenuItem value={10}>Webhook</MenuItem>
                   <MenuItem value={20}>Webhook</MenuItem>
                   <MenuItem value={30}>Webhook</MenuItem>
                 </Select>
               </FormControl>
              </Typography>
              <div className="recordContainer">
                <Chip
                  label="Recording"
                  clickable
                  color="primary"
                />
                <div className="recordDiv">
                  <span className="timer">02:00:00</span>
                  <div>
                    <Fab aria-label="success">
                      <PhoneDisabledRoundedIcon />
                    </Fab>
                    <label>MUTE</label>
                  </div>
                  <div>
                    <Fab aria-label="accept">
                      <PhoneCallbackRoundedIcon />
                    </Fab>
                    <label>HOLD</label>
                  </div>
                  <div>
                    <Fab color="info" aria-label="hold">
                      <PhonePausedRoundedIcon />
                    </Fab>
                    <label>TRANSFER</label>
                  </div>
                  <div>
                    <Fab color="primary" aria-label="merge">
                      <CallMergeRoundedIcon />
                    </Fab>
                    <label>EC</label>
                  </div>
                </div>
              </div>
              <div className="statusContainer">
                <div className="statusInput">
                  <Typography component="h5" variant="h6" styles={{fontSize: '0.8rem', fontWeight: 'bolder'}}>SELECT STATUS</Typography>
                  <FormControl className={classes.formControl}>
                   <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     placeholder="Not Statused"
                     value={hook}
                     onChange={handleChange}
                   >
                     <MenuItem value={10}>Webhook</MenuItem>
                     <MenuItem value={20}>Webhook</MenuItem>
                     <MenuItem value={30}>Webhook</MenuItem>
                   </Select>
                   </FormControl>
                </div>
                <div className="statusOptions">
                  <Chip
                    label="1 - VOICEMAIL"
                    clickable
                    color="primary"
                    variant="outlined"
                    className={selectedChip(1)}
                    onClick={() => setSelectedChip(1)}
                  />
                  <Chip
                      label="2 - ATTEMPTING CONTACT"
                      clickable
                      color="primary"
                      variant="outlined"
                      className={selectedChip(2)}
                      onClick={() => setSelectedChip(2)}
                    />
                    <Chip
                      label="3 - QUOTED"
                      clickable
                      color="primary"
                      variant="outlined"
                      className={selectedChip(3)}
                      onClick={() => setSelectedChip(3)}
                    />
                    <Chip
                      label="4 - FOLLOW UP"
                      clickable
                      color="primary"
                      variant="outlined"
                      className={selectedChip(4)}
                      onClick={() => setSelectedChip(4)}
                    />
                    <Chip
                      label="5 - SOLID"
                      clickable
                      color="primary"
                      variant="outlined"
                      className={selectedChip(5)}
                      onClick={() => setSelectedChip(5)}
                    />
                    <Chip
                      label="6 - REFERRAL"
                      clickable
                      color="primary"
                      variant="outlined"
                      className={selectedChip(6)}
                      onClick={() => setSelectedChip(6)}
                    />
                    <Chip
                      label="7 - FOLLOW UP"
                      clickable
                      color="primary"
                      variant="outlined"
                      className={selectedChip(7)}
                      onClick={() => setSelectedChip(7)}
                    />
                    <Chip
                      label="8 - FOLLOW"
                      clickable
                      color="primary"
                      variant="outlined"
                      className={selectedChip(8)}
                      onClick={() => setSelectedChip(8)}
                    />
                </div>
              </div>
              <div className="infoContainer">
              <Table className={classes.table} size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>VENDOR NAME</TableCell>
                    <TableCell >CAMPAIGN</TableCell>
                    <TableCell >CALL TYPE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell>
                        {row.name}
                      </TableCell>
                      <TableCell >{row.calories}</TableCell>
                      <TableCell >{row.fat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </div>
              <AppBar position="static">
                <Tabs value={value} onChange={handleChangeTabs} aria-label="simple tabs example">
                  <Tab label="NOTES" {...a11yProps(0)} />
                  <Tab label="TASKS" {...a11yProps(1)} />
                  <Tab label="SMS/MMS" {...a11yProps(2)} />
                  <Tab label="EMAIL" {...a11yProps(3)} />
                </Tabs>
              </AppBar>
              <TabPanel className="tab notes" value={value} index={0}>
                <div className="noteTab">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows="4"
                  placeholder="Add a Note"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <Button variant="contained" color="primary">
                  Add Task
                </Button>
                </div>
                <div className="cards">

                  <Card className={classes.card}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        Shashikant
                      </Typography>
                      <Typography variant="body2" component="p">
                        In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        Shashikant
                      </Typography>
                      <Typography variant="body2" component="p">
                        In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </TabPanel>
              <TabPanel className="tab notes"  value={value} index={1}>
              <div className="noteTab">
              <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                placeholder="Add a Note"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <Button variant="contained" color="primary">
                Add Note
              </Button>
              </div>
              <div className="cards">

                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Shashikant
                    </Typography>
                    <Typography variant="body2" component="p">
                      In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </Typography>
                  </CardContent>
                </Card>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Shashikant
                    </Typography>
                    <Typography variant="body2" component="p">
                      In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              </TabPanel>
              <TabPanel className="tab notes"  value={value} index={2}>
              <div className="noteTab">
              <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                placeholder="Add a Note"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <Button variant="contained" color="primary">
                Add SMS
              </Button>
              </div>
              <div className="cards">

                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Shashikant
                    </Typography>
                    <Typography variant="body2" component="p">
                      In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </Typography>
                  </CardContent>
                </Card>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Shashikant
                    </Typography>
                    <Typography variant="body2" component="p">
                      In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              </TabPanel>
              <TabPanel className="tab notes"  value={value} index={3}>
              <div className="noteTab">
              <TextField
                id="outlined-multiline-static"
                multiline
                rows="4"
                placeholder="Add a Note"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <Button variant="contained" color="primary">
                Add Email
              </Button>
              </div>
              <div className="cards">

                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Shashikant
                    </Typography>
                    <Typography variant="body2" component="p">
                      In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </Typography>
                  </CardContent>
                </Card>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Shashikant
                    </Typography>
                    <Typography variant="body2" component="p">
                      In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              </TabPanel>
            </Paper>
            <div style={{overflow: 'auto'}}>
            <AppBar position="static">
              <Tabs value={value2} onChange={handleChangeTabs2} aria-label="simple tabs example">
                <Tab label="LEAD DETAILS" {...a11yProps(0)} />
                <Tab label="SCRIPT 1" {...a11yProps(1)} />
                <Tab label="SCRIPT 2" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel className="tab contact" value={value2} index={0}>
            <div className="contactCard">
              <div className="avatar">
                <Avatar>AD</Avatar>
              </div>
              <div className="info">
                <Typography component="h2" variant="h4">ARINDAM DE</Typography>
                <div>
                  <span className="head">Creation Date </span>
                  <span className="head">Creation Date </span>
                  <span> 10 September 2019</span>
                  <span> 10 September 2019</span>
                </div>
              </div>
            </div>
            <h4>PERSONAL DETAILS</h4>
            <div className="contactInfo">
              <div>
              <span className="head">Name </span>
              <span>First Name</span>
              <span className="head">Email </span>
              <span>first@name.com</span>
              <span className="head">Phone </span>
              <span> +91 254 522 5896</span>
              <span className="head">Company </span>
              <span> Company Name</span>
              </div>
              <div>
              <span className="head">Name </span>
              <span>First Name</span>
              <span className="head">Email </span>
              <span>first@name.com</span>
              <span className="head">Phone </span>
              <span> +91 254 522 5896</span>
              <span className="head">Company </span>
              <span> Company Name</span>
              </div>
            </div>
            </TabPanel>
            <TabPanel className="tab contact" value={value2} index={1}>
              <em style={{fontSize: '1.2rem', color: 'orange'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </em>
            </TabPanel>
            <TabPanel className="tab contact" value={value2} index={2}>
              <em style={{fontSize: '1.2rem', color: 'green'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </em>
            </TabPanel>
            <Button id ="checkLeadButton" variant="contained" color="secondary">
            Check Lead Details
            </Button>
            <IncomingDialog />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
