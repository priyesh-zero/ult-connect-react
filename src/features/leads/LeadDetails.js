import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Link } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import letterIcon from '../../images/leads/homepage/letterIcon.png';
import phoneIcon from '../../images/leads/homepage/phoneIcon.png';
import chatIcon from '../../images/leads/homepage/chatIcon.png';
import pencilIcon from '../../images/leads/homepage/pencil.png';

import {
  LeadCallHistory,
  LeadStatusHistory,
  LeadTextHistory,
  LeadEmailHistory,
  LeadOrganizationHistory,
  LeadDocumentationHistory,
  LeadNotes,
  LeadTasks,
  LeadEditDialog,
} from './';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="leads-details-tab-panel"
    >
      {children}
    </div>
  );
};

export class LeadDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leadContactedDropdownValue: '',
      leadContactedOptions: [
        {
          id: 'contacted',
          label: 'Contacted',
        },
        {
          id: 'notContacted',
          label: 'Not Contacted',
        },
      ],
      detailsTabValue: 0,
      historyTabValue: 0,
      editDialogOpen: false,
    };
  }
  static propTypes = {
    leads: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  handleDropdownChange = e => {
    
    this.setState({ [e.target.name]: e.target.value });
  };
  a11yProps = index => {
    return {
      id: `lead-details-details-tab-${index}`,
      'aria-controls': `lead-details-tabpanel-${index}`,
    };
  };
  handleChangeTab = str => (e, val) => {
    this.setState({ [str]: val });
  };
  openEditDialog = e => {
    
    this.setState({ editDialogOpen: true });
  };
  closeEditDialog = prop => {
    this.setState({ editDialogOpen: false });
  };

  render() {
    const {
      leadContactedDropdownValue,
      leadContactedOptions,
      detailsTabValue,
      historyTabValue,
      editDialogOpen,
    } = this.state;
    return (
      <div className="leads-lead-details">
        <Breadcrumbs aria-label="breadcrumb" classes={{ separator: 'breadcrumbs-separator' }}>
          <Link to="/leads/" className="leads-link-breadcrumb">
            leads
          </Link>
          <Typography classes={{ root: 'leads-link-breadcrumb' }}>Arindam De</Typography>
        </Breadcrumbs>
        <section className="d-flex lead-details-avatar-section">
          <div className="lead-details-avatar-div">
            <Avatar
              className="d-flex align-items-center justify-content-center"
              classes={{ root: 'lead-details-avatar' }}
            >
              AD
            </Avatar>
          </div>
          <div className="flex-column justify-content-space-between w-100">
            <Typography classes={{ root: 'lead-details-name' }}>Arindam De</Typography>
            <div className="lead-details-avatar-bar w-100 h-100 d-flex justify-content-space-between">
              <div className="lead-details-avatar-bar-blocks d-flex ">
                <div className="lead-details-block lead-details-block-separator h-100 flex-column justify-content-center">
                  <Typography className="lead-details-block-heading">Creation Date</Typography>
                  <Typography className="lead-details-block-value">10 September 2019</Typography>
                </div>
                <div className="lead-details-block lead-details-block-separator h-100 flex-column justify-content-center">
                  <Typography className="lead-details-block-heading">Last Modified</Typography>
                  <Typography className="lead-details-block-value">10 September 2019</Typography>
                </div>
                <div className="lead-details-block lead-details-block-separator h-100 flex-column justify-content-center">
                  <Typography className="lead-details-block-heading">Lead Source</Typography>
                  <Typography className="lead-details-block-value">3 Days Ago</Typography>
                </div>
                <div className="lead-details-block h-100 flex-column justify-content-center">
                  <Typography className="lead-details-block-heading">Lead Owner</Typography>
                  <Typography className="lead-details-block-value">Adi Leads</Typography>
                </div>
              </div>
              <div className="lead-details-avatar-bar-icons d-flex align-items-center">
                <div className="lead-details-short-icon">
                  <img className="lead-details-short-icon-img" src={letterIcon} alt="" />
                </div>
                <div className="lead-details-short-icon">
                  <img className="lead-details-short-icon-img" src={phoneIcon} alt="" />
                </div>
                <div className="lead-details-short-icon">
                  <img className="lead-details-short-icon-img" src={chatIcon} alt="" />
                </div>
                <div className="d-flex align-items-center">
                  <Typography className="lead-details-bar-label">Lead Status</Typography>
                  <FormControl
                    variant="filled"
                    className="leads-homepage-filter-options mass-edit-form-control-selects"
                  >
                    <Select
                      disableUnderline
                      classes={{
                        root: 'select-root-slim',
                        icon: 'select-head-icon',
                      }}
                      value={leadContactedDropdownValue}
                      onChange={this.handleDropdownChange}
                      inputProps={{
                        name: `leadContactedDropdownValue`,
                        id: `leads-homepage-filter-value`,
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
                        classes: {
                          list: 'lead-details-contacted-list-root',
                          paper: 'dropdown-paper',
                        },
                      }}
                      displayEmpty
                    >
                      <MenuItem classes={{ root: 'dropdown-item' }} value="">
                        Lead Status
                      </MenuItem>
                      {leadContactedOptions.map(option => (
                        <MenuItem
                          key={option.id}
                          classes={{ root: 'dropdown-item' }}
                          value={option.id}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lead-details-details-section d-flex-col-reverse">
          <Box className="leads-detail-tabspanels-section">
            <div
              id="edit-details"
              className="leads-details-tabs-edit-btn"
              onClick={this.openEditDialog}
            >
              <div className="lead-details-short-icon bg-dark-blue">
                <img className="lead-details-short-icon-img" src={pencilIcon} alt="pencil icon" />
              </div>
            </div>
            <TabPanel value={detailsTabValue} index={0}>
              <div className="d-flex">
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Arindam De</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Email Address
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">
                        cfo@pixerweb@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Phone Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">+91 6289 140 517</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Company Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Pixer World</Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Arindam De</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Email Address
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">
                        cfo@pixerweb@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Phone Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">+91 6289 140 517</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Company Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Pixer World</Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={detailsTabValue} index={1}>
              <div className="d-flex">
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Arindam De</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Email Address
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">
                        cfo@pixerweb@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Phone Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">+91 6289 140 517</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Company Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Pixer World</Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Arindam De</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Email Address
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">
                        cfo@pixerweb@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Phone Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">+91 6289 140 517</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Company Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Pixer World</Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={detailsTabValue} index={2}>
              <div className="d-flex">
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Arindam De</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Email Address
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">
                        cfo@pixerweb@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Phone Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">+91 6289 140 517</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Company Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Pixer World</Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Arindam De</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Email Address
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">
                        cfo@pixerweb@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Phone Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">+91 6289 140 517</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Company Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Pixer World</Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={detailsTabValue} index={3}>
              <div className="d-flex">
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Arindam De</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Email Address
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">
                        cfo@pixerweb@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Phone Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">+91 6289 140 517</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Company Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Pixer World</Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box lead-details-block-separator w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Arindam De</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Email Address
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">
                        cfo@pixerweb@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div className="tabpanel-details-box w-100 flex-column">
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Phone Number
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">+91 6289 140 517</Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="tabpanel-details-box-row">
                    <Grid item xs={4}>
                      <Typography className="tabpanel-details-text-heading text-blue">
                        Company Name
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className="tabpanel-details-text">Pixer World</Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </TabPanel>
          </Box>
          <Tabs
            classes={{
              root: 'leads-details-tabs-style',
              indicator: 'leads-details-custom-indications',
            }}
            value={detailsTabValue}
            onChange={this.handleChangeTab('detailsTabValue')}
            aria-label="Vertical tabs example"
          >
            <Tab
              disableRipple
              classes={{ selected: 'leads-table-selected-tab', root: 'leads-details-tab-style' }}
              label="Personal Details"
              {...this.a11yProps(0)}
            />
            <Tab
              disableRipple
              classes={{ selected: 'leads-table-selected-tab', root: 'leads-details-tab-style' }}
              label="Company Details"
              {...this.a11yProps(1)}
            />
            <Tab
              disableRipple
              classes={{ selected: 'leads-table-selected-tab', root: 'leads-details-tab-style' }}
              label="Personal Details"
              {...this.a11yProps(2)}
            />
            <Tab
              disableRipple
              classes={{ selected: 'leads-table-selected-tab', root: 'leads-details-tab-style' }}
              label="Company Details"
              {...this.a11yProps(3)}
            />
          </Tabs>
        </section>
        <section className="lead-details-history-section d-flex-col-reverse">
          <Box className="leads-detail-tabspanels-section">
            <TabPanel value={historyTabValue} index={0}>
              <LeadCallHistory />
            </TabPanel>
            <TabPanel value={historyTabValue} index={1}>
              <LeadStatusHistory />
            </TabPanel>
            <TabPanel value={historyTabValue} index={2}>
              <LeadTextHistory />
            </TabPanel>
            <TabPanel value={historyTabValue} index={3}>
              <LeadEmailHistory />
            </TabPanel>
            <TabPanel value={historyTabValue} index={4}>
              <LeadOrganizationHistory />
            </TabPanel>
            <TabPanel value={historyTabValue} index={5}>
              <LeadDocumentationHistory />
            </TabPanel>
          </Box>
          <Tabs
            classes={{
              root: 'leads-details-tabs-style',
              indicator: 'leads-details-custom-indications',
            }}
            value={historyTabValue}
            onChange={this.handleChangeTab('historyTabValue')}
            aria-label="Vertical tabs example"
          >
            <Tab
              disableRipple
              classes={{ selected: 'leads-table-selected-tab', root: 'leads-details-tab-style' }}
              label="Call History"
              {...this.a11yProps(0)}
            />
            <Tab
              disableRipple
              classes={{ selected: 'leads-table-selected-tab', root: 'leads-details-tab-style' }}
              label="Status History"
              {...this.a11yProps(1)}
            />
            <Tab
              disableRipple
              classes={{ selected: 'leads-table-selected-tab', root: 'leads-details-tab-style' }}
              label="Text History"
              {...this.a11yProps(2)}
            />
            <Tab
              disableRipple
              classes={{ selected: 'leads-table-selected-tab', root: 'leads-details-tab-style' }}
              label="Email History"
              {...this.a11yProps(3)}
            />
            <Tab
              disableRipple
              classes={{ selected: 'leads-table-selected-tab', root: 'leads-details-tab-style' }}
              label="Organization"
              {...this.a11yProps(4)}
            />
            <Tab
              disableRipple
              classes={{ selected: 'leads-table-selected-tab', root: 'leads-details-tab-style' }}
              label="Documentation"
              {...this.a11yProps(5)}
            />
          </Tabs>
        </section>
        <section className="lead-details-notes-tasks-section">
          <Grid container spacing={2}>
            <Grid item xs={6} classes={{ root: 'single-grid' }}>
              <LeadNotes />
            </Grid>
            <Grid item xs={6} classes={{ root: 'single-grid' }}>
              <LeadTasks />
            </Grid>
          </Grid>
        </section>
       <LeadEditDialog open={editDialogOpen} closeDialog={this.closeEditDialog} />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    leads: state.leads,
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
)(LeadDetails);
