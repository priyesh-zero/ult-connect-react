import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import listIcon from '../../images/topbar/list.png';
import notificationsIcon from '../../images/topbar/notifications.png';
import phoneIcon from '../../images/topbar/phone.png';
import profileImage from '../../images/topbar/profile.png';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  appBar: {
    background: 'rgba(245, 248, 254, 1)',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 5px 3px',
    height: '100px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    background: 'rgba(245, 248, 254, 1)',
    height: '100px',
    width: `calc(100% - ${260}px)`,
    marginLeft: '260px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));
const Content = props => {
  const { branchValue, profileStatus } = props.state;
  const { opened, handleOptionChange } = props;
  const classes = useStyles();
  return (
    <AppBar
      elevation={0}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: opened,
      })}
    >
      <Grid container className="topbar-container">
        <Grid item xs={2}>
          <div className="topbar-dropdown-section">
            <FormControl className="topbar-branch-select">
              <InputLabel htmlFor="branch-value" className="topbar-select-text">
                Select Branch
              </InputLabel>
              <Select
                classes={{ root: 'topbar-select-text' }}
                value={branchValue}
                onChange={handleOptionChange}
                inputProps={{
                  name: 'branchValue',
                  id: 'branch-dropdown',
                }}
                IconComponent={ExpandMoreIcon}
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  getContentAnchorEl: null,
                }}
              >
                <MenuItem className="topbar-branch-select-text" value={'branch-1'}>
                  Branch 01
                </MenuItem>
                <MenuItem className="topbar-branch-select-text" value={'branch-2'}>
                  Branch 02
                </MenuItem>
                <MenuItem className="topbar-branch-select-text" value={'branch-3'}>
                  Branch 03
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="topbar-stats-area">
            <div className="topbar-stats-div">
              <Typography className="topbar-stats-text">Inbound IVR</Typography>
              <div className="topbar-stats-circle">1800</div>
            </div>
            <div className="topbar-stats-div">
              <Typography className="topbar-stats-text">Instant</Typography>
              <div className="topbar-stats-circle">150</div>
            </div>
            <div className="topbar-stats-div">
              <Typography className="topbar-stats-text">Instant-Q</Typography>
              <div className="topbar-stats-circle">100</div>
            </div>
            <div className="topbar-stats-div">
              <Typography className="topbar-stats-text">Instatn-EVE</Typography>
              <div className="topbar-stats-circle">150</div>
            </div>
            <div className="topbar-stats-div">
              <Typography className="topbar-stats-text">Drip DIAL</Typography>
              <div className="topbar-stats-circle">100</div>
            </div>
            <div className="topbar-stats-div">
              <Typography className="topbar-stats-text">Dial-Q</Typography>
              <div className="topbar-stats-circle">150</div>
            </div>
            <div className="topbar-stats-div">
              <Typography className="topbar-stats-text">Predidictive Dialer</Typography>
              <div className="topbar-stats-circle">100</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className="topbar-profile-section">
          <div className="topbar-list-div">
            <Badge color="primary" variant="dot">
              <img src={listIcon} className="topbar-profile-section-icon" alt="" />
            </Badge>
          </div>
          <div className="topbar-notification-div">
            <Badge color="primary" variant="dot">
              <img src={notificationsIcon} className="topbar-profile-section-icon" alt="" />
            </Badge>
          </div>
          <div className="topbar-profile-status">
            <Typography classes={{ root: 'topbar-profile-name' }}>Jonathan Samuel</Typography>
            <Box className="topbar-profile-phone">
              <img src={phoneIcon} alt="" />
              +1-206-719-5879
            </Box>
            <FormControl>
              <Select
                classes={{ root: 'topbar-select-text' }}
                value={profileStatus}
                onChange={handleOptionChange}
                inputProps={{
                  name: 'profileStatus',
                  id: 'profile-status-dropdown',
                }}
                IconComponent={ExpandMoreIcon}
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  getContentAnchorEl: null,
                }}
              >
                <MenuItem className="topbar-branch-select-text" value={'busy'}>
                  Busy
                </MenuItem>
                <MenuItem className="topbar-branch-select-text" value={'online'}>
                  Online
                </MenuItem>
                <MenuItem className="topbar-branch-select-text" value={'meeting'}>
                  In meeting
                </MenuItem>
                <MenuItem className="topbar-branch-select-text" value={'break'}>
                  Break
                </MenuItem>
                <MenuItem className="topbar-branch-select-text" value={'lunch'}>
                  Lunch
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="topbar-display-picture-div">
            <Avatar alt="Jon" src={profileImage} className="topbar-profile-avatar" />
          </div>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branchValue: '',
      profileStatus: 'busy',
    };
  }
  static propTypes = {
    topbar: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  handleOptionChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="topbar-topbar">
        <Content {...this.props} handleOptionChange={this.handleOptionChange} state={this.state} />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    topbar: state.topbar,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Topbar);
