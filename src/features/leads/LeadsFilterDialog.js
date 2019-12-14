import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from '@material-ui/pickers';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
export class LeadsFilterDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leadsFilterFieldNameValue: '',
      leadsFitlerFieldNameOptions: [
        { id: 'one', label: 'Field One' },
        { id: 'two', label: 'Field Two' },
        { id: 'three', label: 'Field Three' },
        { id: 'four', label: 'Field Four' },
      ],
      leadsFilterCreationDateFrom: null,
      leadsFilterCreationDateTo: null,
      leadsFilterLastActivityFrom: null,
      leadsFilterLastActivityTo: null,
      leadsFilterNameField: '',
      leadsFilterTagField: '',
      leadsFilterSaveNameField: '',

      leadsFilterActivityTypeValue: '',
      leadsFilterActivityTypeOptions: [
        { id: 'one', label: 'Activity One' },
        { id: 'two', label: 'Activity Two' },
        { id: 'three', label: 'Activity Three' },
        { id: 'four', label: 'Activity Four' },
      ],

      leadsFilterLeadOwnerValue: '',
      leadsFilterLeadOwnerOptions: [
        { id: 'one', label: 'Owner One' },
        { id: 'two', label: 'Owner Two' },
        { id: 'three', label: 'Owner Three' },
        { id: 'four', label: 'Owner Four' },
      ],
      leadsFilterNameValue: '',
      leadsFilterLeadSourceValue: '',
      leadsFilterLeadSourceOptions: [
        { id: 'one', label: 'Source One' },
        { id: 'two', label: 'Source Two' },
        { id: 'three', label: 'Source Three' },
        { id: 'four', label: 'Source Four' },
      ],
      leadFilterTagsValue: '',
      leadsFilterLeadStatusValue: '',
      leadsFilterLeadStatusOptions: [
        { id: 'one', label: 'Status One' },
        { id: 'two', label: 'Status Two' },
        { id: 'three', label: 'Status Three' },
        { id: 'four', label: 'Status Four' },
      ],
      leadsFilterReferralPartnerValue: '',
      leadsFilterReferralPartnerOptions: [
        { id: 'one', label: 'Partner One' },
        { id: 'two', label: 'Partner Two' },
        { id: 'three', label: 'Partner Three' },
        { id: 'four', label: 'Partner Four' },
      ],
    };
  }
  static propTypes = {
    leads: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  handleClose = () => {
    this.props.onClose();
  };
  handleDateChange = str => date => {
    this.setState({
      [str]: date,
    });
  };
  handleChangeText = str => e => {
    this.setState({ [str]: e.target.value });
  };
  handleDropDownChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { open } = this.props;
    const {
      leadsFilterFieldNameValue,
      leadsFitlerFieldNameOptions,
      leadsFilterCreationDateFrom,
      leadsFilterCreationDateTo,
      leadsFilterLastActivityTo,
      leadsFilterLastActivityFrom,
      leadsFilterActivityTypeValue,
      leadsFilterActivityTypeOptions,
      leadsFilterLeadOwnerValue,
      leadsFilterLeadOwnerOptions,
      leadsFilterLeadSourceValue,
      leadsFilterLeadSourceOptions,
      leadsFilterLeadStatusValue,
      leadsFilterLeadStatusOptions,
      leadsFilterReferralPartnerValue,
      leadsFilterReferralPartnerOptions,
      leadsFilterNameField,
      leadsFilterTagField,
      leadsFilterSaveNameField,
    } = this.state;
    return (
      <div className="leads-leads-filter-dialog">
        <Dialog
        disableBackdropClick={true}
          onClose={this.handleClose}
          open={open}
          classes={{ paper: 'leads-homepage-filter-popup' }}
        >
          <DialogTitle classes={{ root: 'leads-homepage-filter-popup-title' }}>
            <Typography className="leads-homepage-title-text">Lead Filter</Typography>
            <div className="flex-justify-center">
              <div className="leads-filter-popup-dropdown-wrapper">
                <FormControl className="leads-homepage-filter-popup-options">
                  <Select
                    disableUnderline
                    classes={{
                      root:
                        leadsFilterFieldNameValue === ''
                          ? 'select-white-root silver-text'
                          : 'select-white-root',
                      icon: 'select-head-dark-icon',
                    }}
                    value={leadsFilterFieldNameValue}
                    onChange={this.handleDropDownChange}
                    inputProps={{
                      name: `leadsFilterFieldNameValue`,
                      id: `leads-homepage-leads-filter-activity-type-value`,
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
                      classes: { paper: 'dropdown-paper' },
                    }}
                    displayEmpty
                  >
                    <MenuItem classes={{ root: 'dropdown-item' }} value="" disabled>
                      Add Field Name
                    </MenuItem>
                    {leadsFitlerFieldNameOptions.map(option => (
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
          </DialogTitle>
          <DialogContent className="leads-filter-popup-content">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container className="leads-fitler-popup-row">
                <Grid item xs={6} className="leads-filter-popup-column">
                  <Typography className="leads-filter-heading">Creation Date</Typography>
                  <Grid container>
                    <Grid item xs={5}>
                      <DatePicker
                        emptyLabel="Date"
                        autoOk
                        value={leadsFilterCreationDateFrom}
                        onChange={this.handleDateChange('leadsFilterCreationDateFrom')}
                        format="dd/MM/yyyy"
                        inputVariant="filled"
                        variant="inline"
                        classes={{ root: 'leads-filter-popup-datepicker-filled' }}
                        InputProps={{
                          disableUnderline: true,
                          classes: {
                            input:
                              leadsFilterCreationDateFrom !== null
                                ? 'leads-filter-popup-datepicker-input'
                                : 'leads-filter-popup-datepicker-input silver-text',
                          },
                          endAdornment: (
                            <InputAdornment position="end">
                              <ExpandMoreIcon style={{ cursor: 'pointer' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={2} className="leads-homepage-popup-filter-blue-circle-div">
                      <div className="leads-homepage-popup-filter-blue-circle">To</div>
                    </Grid>
                    <Grid item xs={5}>
                      <DatePicker
                        emptyLabel="Date"
                        autoOk
                        value={leadsFilterCreationDateTo}
                        onChange={this.handleDateChange('leadsFilterCreationDateTo')}
                        format="dd/MM/yyyy"
                        inputVariant="filled"
                        variant="inline"
                        classes={{ root: 'leads-filter-popup-datepicker-filled' }}
                        InputProps={{
                          disableUnderline: true,
                          classes: {
                            input:
                              leadsFilterCreationDateTo !== null
                                ? 'leads-filter-popup-datepicker-input'
                                : 'leads-filter-popup-datepicker-input silver-text',
                          },
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              classes={{ root: 'lead-filter-popup-adornment-end' }}
                            >
                              <ExpandMoreIcon style={{ cursor: 'pointer' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} className="leads-filter-popup-column">
                  <Typography className="leads-filter-heading">Lact Activity Dates</Typography>
                  <Grid container>
                    <Grid item xs={5}>
                      <DatePicker
                        emptyLabel="Date"
                        autoOk
                        value={leadsFilterLastActivityFrom}
                        onChange={this.handleDateChange('leadsFilterLastActivityFrom')}
                        format="dd/MM/yyyy"
                        inputVariant="filled"
                        variant="inline"
                        classes={{ root: 'leads-filter-popup-datepicker-filled' }}
                        InputProps={{
                          disableUnderline: true,
                          classes: {
                            input:
                              leadsFilterLastActivityFrom !== null
                                ? 'leads-filter-popup-datepicker-input'
                                : 'leads-filter-popup-datepicker-input silver-text',
                          },
                          endAdornment: (
                            <InputAdornment position="end">
                              <ExpandMoreIcon style={{ cursor: 'pointer' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={2} className="leads-homepage-popup-filter-blue-circle-div">
                      <div className="leads-homepage-popup-filter-blue-circle">To</div>
                    </Grid>
                    <Grid item xs={5}>
                      <DatePicker
                        emptyLabel="Date"
                        autoOk
                        value={leadsFilterLastActivityTo}
                        onChange={this.handleDateChange('leadsFilterLastActivityTo')}
                        format="dd/MM/yyyy"
                        inputVariant="filled"
                        variant="inline"
                        classes={{ root: 'leads-filter-popup-datepicker-filled' }}
                        InputProps={{
                          disableUnderline: true,
                          classes: {
                            input:
                              leadsFilterLastActivityTo !== null
                                ? 'leads-filter-popup-datepicker-input'
                                : 'leads-filter-popup-datepicker-input silver-text',
                          },
                          endAdornment: (
                            <InputAdornment position="end">
                              <ExpandMoreIcon style={{ cursor: 'pointer' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container className="leads-fitler-popup-row">
                <Grid item xs={6} className="leads-filter-popup-column">
                  <Typography className="leads-filter-heading">Type Of Activity</Typography>
                  <FormControl className="leads-homepage-filter-popup-options">
                    <Select
                      disableUnderline
                      classes={{
                        root:
                          leadsFilterActivityTypeValue === ''
                            ? 'select-white-root silver-text'
                            : 'select-white-root',
                        icon: 'select-head-dark-icon',
                      }}
                      value={leadsFilterActivityTypeValue}
                      onChange={this.handleDropDownChange}
                      inputProps={{
                        name: `leadsFilterActivityTypeValue`,
                        id: `leads-homepage-leads-filter-activity-type-value`,
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
                        classes: { paper: 'dropdown-paper' },
                      }}
                      displayEmpty
                    >
                      <MenuItem classes={{ root: 'dropdown-item' }} value="" disabled>
                        Activity
                      </MenuItem>
                      {leadsFilterActivityTypeOptions.map(option => (
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
                </Grid>
                <Grid item xs={6} className="leads-filter-popup-column">
                  <Typography className="leads-filter-heading">Lead Owner</Typography>
                  <FormControl className="leads-homepage-filter-popup-options">
                    <Select
                      disableUnderline
                      classes={{
                        root:
                          leadsFilterLeadOwnerValue === ''
                            ? 'select-white-root silver-text'
                            : 'select-white-root',
                        icon: 'select-head-dark-icon',
                      }}
                      value={leadsFilterLeadOwnerValue}
                      onChange={this.handleDropDownChange}
                      inputProps={{
                        name: `leadsFilterLeadOwnerValue`,
                        id: `leads-homepage-leads-filter-activity-type-value`,
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
                        classes: { paper: 'dropdown-paper' },
                      }}
                      displayEmpty
                    >
                      <MenuItem classes={{ root: 'dropdown-item' }} value="" disabled>
                        Lead Source Owner
                      </MenuItem>
                      {leadsFilterLeadOwnerOptions.map(option => (
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
                </Grid>
              </Grid>
              <Grid container className="leads-fitler-popup-row">
                <Grid item xs={6} className="leads-filter-popup-column">
                  <Typography className="leads-filter-heading">Name</Typography>
                  <TextField
                    fullWidth
                    id="outlined-textarea"
                    placeholder="Name"
                    classes={{ root: 'leads-filter-textfield-filled' }}
                    InputProps={{
                      disableUnderline: true,
                      classes: {
                        root: 'select-white-root leads-filter-textfield-root',
                      },
                    }}
                    value={leadsFilterNameField}
                    onChange={this.handleChangeText('leadsFilterNameField')}
                  />
                </Grid>
                <Grid item xs={6} className="leads-filter-popup-column">
                  <Typography className="leads-filter-heading">Lead Source</Typography>
                  <FormControl className="leads-homepage-filter-popup-options">
                    <Select
                      disableUnderline
                      classes={{
                        root:
                          leadsFilterLeadSourceValue === ''
                            ? 'select-white-root silver-text'
                            : 'select-white-root',
                        icon: 'select-head-dark-icon',
                      }}
                      value={leadsFilterLeadSourceValue}
                      onChange={this.handleDropDownChange}
                      inputProps={{
                        name: `leadsFilterLeadSourceValue`,
                        id: `leads-homepage-leads-filter-activity-type-value`,
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
                        classes: { paper: 'dropdown-paper' },
                      }}
                      displayEmpty
                    >
                      <MenuItem classes={{ root: 'dropdown-item' }} value="" disabled>
                        Select Source
                      </MenuItem>
                      {leadsFilterLeadSourceOptions.map(option => (
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
                </Grid>
              </Grid>
              <Grid container className="leads-fitler-popup-row">
                <Grid item xs={6} className="leads-filter-popup-column">
                  <Typography className="leads-filter-heading">Tags</Typography>
                  <TextField
                    fullWidth
                    id="outlined-textarea"
                    placeholder="Tags"
                    classes={{ root: 'leads-filter-textfield-filled' }}
                    InputProps={{
                      disableUnderline: true,
                      classes: {
                        root: 'select-white-root leads-filter-textfield-root',
                      },
                    }}
                    value={leadsFilterTagField}
                    onChange={this.handleChangeText('leadsFilterTagField')}
                  />
                </Grid>
                <Grid item xs={6} className="leads-filter-popup-column">
                  <Typography className="leads-filter-heading">Lead Status</Typography>
                  <FormControl className="leads-homepage-filter-popup-options">
                    <Select
                      disableUnderline
                      classes={{
                        root:
                          leadsFilterLeadStatusValue === ''
                            ? 'select-white-root silver-text'
                            : 'select-white-root',
                        icon: 'select-head-dark-icon',
                      }}
                      value={leadsFilterLeadStatusValue}
                      onChange={this.handleDropDownChange}
                      inputProps={{
                        name: `leadsFilterLeadStatusValue`,
                        id: `leads-homepage-leads-filter-activity-type-value`,
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
                        classes: { paper: 'dropdown-paper' },
                      }}
                      displayEmpty
                    >
                      <MenuItem classes={{ root: 'dropdown-item' }} value="" disabled>
                        Select Status
                      </MenuItem>
                      {leadsFilterLeadStatusOptions.map(option => (
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
                </Grid>
              </Grid>
              <Grid container className="leads-fitler-popup-row">
                <Grid item xs={6} className="leads-filter-popup-column">
                  <Typography className="leads-filter-heading">Referral Partner</Typography>
                  <FormControl className="leads-homepage-filter-popup-options">
                    <Select
                      disableUnderline
                      classes={{
                        root:
                          leadsFilterReferralPartnerValue === ''
                            ? 'select-white-root silver-text'
                            : 'select-white-root',
                        icon: 'select-head-dark-icon',
                      }}
                      value={leadsFilterReferralPartnerValue}
                      onChange={this.handleDropDownChange}
                      inputProps={{
                        name: `leadsFilterReferralPartnerValue`,
                        id: `leads-homepage-leads-filter-activity-type-value`,
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
                        classes: { paper: 'dropdown-paper' },
                      }}
                      displayEmpty
                    >
                      <MenuItem classes={{ root: 'dropdown-item' }} value="" disabled>
                        Select Partner
                      </MenuItem>
                      {leadsFilterReferralPartnerOptions.map(option => (
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
                </Grid>
              </Grid>
              <div className="leads-fitler-popup-row leads-filter-popup-btn-div">
                <Button
                  onClick={this.handleClose}
                  disableFocusRipple
                  classes={{ root: 'leads-filter-popup-btn' }}
                >
                  Filter
                </Button>
              </div>
            </MuiPickersUtilsProvider>
          </DialogContent>
          <Grid container className="leads-fitler-popup-footer">
            <Grid item xs={6} className="leads-filter-popup-column">
              <TextField
                fullWidth
                id="outlined-textarea"
                placeholder="Name Your Filter"
                classes={{ root: 'leads-filter-textfield-filled textfield-border' }}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: 'select-white-root leads-filter-textfield-root',
                  },
                }}
                value={leadsFilterSaveNameField}
                onChange={this.handleChangeText('leadsFilterSaveNameField')}
              />
            </Grid>
            <Grid item xs={6} className="leads-filter-popup-column flex-justify-center">
              <Button
                onClick={this.handleClose}
                disableFocusRipple
                classes={{ root: 'leads-filter-popup-btn' }}
              >
                Save The Filter
              </Button>
            </Grid>
          </Grid>
        </Dialog>
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
)(LeadsFilterDialog);
