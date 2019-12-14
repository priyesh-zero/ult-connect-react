import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import pencilIcon from '../../images/leads/homepage/pencil.png';
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

const PersonalDetail = props => {
  const {
    data,
    leadSourceOptions,
    statusOptions,
    tagOptions,
    handleHierarchy,
    heirarchyOptions,
    leadDetailsColumns,
    handleTextChange,
    _DropDownChange,
  } = props;
  const temp = leadSourceOptions;
  const [edit, setEdit] = useState(() => {
    let arr = [];
    leadDetailsColumns.map(item => {
      arr.push({ id: item, edit: false });
    });
    return arr;
  });
  const editField = index => e => {
    setEdit(edit => {
      let oldEdit = edit;
      oldEdit[index].edit = true;
      return [...oldEdit];
    });
  };

  return (
    <div className="two-columns w-100">
      {leadDetailsColumns.map((key, index) => (
        <React.Fragment key={key}>
          <div className="column-item">
            <div className="d-flex justify-content-space-between align-items-center">
              <Typography classes={{ root: 'details-heading' }}>{data[key].label}</Typography>
              <span className="d-flex align-items-center">
                <FormControl classes={{ root: 'form-control-root' }}>
                  <Select
                    disableUnderline
                    value={data[key].heirarchyValue}
                    onChange={handleHierarchy(key)}
                    inputProps={{
                      name: 'hierarchy',
                      id: 'fieldTypeValue-dropdown',
                    }}
                    displayEmpty
                    classes={{ root: 'root-select', icon: 'select-icon' }}
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
                  >
                    <MenuItem value="" disabled>
                      Hierarchy
                    </MenuItem>
                    {heirarchyOptions.map(option => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className="pencil-icon" onClick={editField(index)}>
                  <img src={pencilIcon} alt="" className="pencil-img" />
                </div>
                <div className="close-icon-container">
                  <CloseIcon className="close-icon" />
                </div>
              </span>
            </div>
            <div className="white-box">
              {edit[index].edit ? (
                <span>
                  {key === 'leadStatus' || key === 'tags' || key === 'leadSource' ? (
                    <span>
                      {key === 'leadStatus' ? (
                        <span>
                          <FormControl classes={{ root: 'form-control-root' }}>
                            <Select
                              disableUnderline
                              value={data[key].value}
                              onChange={_DropDownChange}
                              inputProps={{
                                name: `${key}`,
                                id: 'fieldTypeValue-dropdown',
                              }}
                              displayEmpty
                              classes={{ root: 'root-select', icon: 'select-icon' }}
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
                            >
                              <MenuItem value="" disabled>
                                Select Status
                              </MenuItem>
                              {statusOptions.map(option => (
                                <MenuItem key={option.id} value={option.id}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </span>
                      ) : (
                        <span>
                          {key === 'tags' ? (
                            <span>
                              <FormControl classes={{ root: 'form-control-root' }}>
                                <Select
                                  disableUnderline
                                  value={data[key].value}
                                  onChange={_DropDownChange}
                                  inputProps={{
                                    name: `${key}`,
                                    id: 'fieldTypeValue-dropdown',
                                  }}
                                  displayEmpty
                                  classes={{ root: 'root-select', icon: 'select-icon' }}
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
                                >
                                  <MenuItem value="" disabled>
                                    Select Tag
                                  </MenuItem>
                                  {tagOptions.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </span>
                          ) : (
                            <span>
                              <FormControl classes={{ root: 'form-control-root' }}>
                                <Select
                                  disableUnderline
                                  value={data[key].value}
                                  onChange={_DropDownChange}
                                  inputProps={{
                                    name: `${key}`,
                                    id: 'fieldTypeValue-dropdown',
                                  }}
                                  displayEmpty
                                  classes={{ root: 'root-select', icon: 'select-icon' }}
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
                                >
                                  <MenuItem value="" disabled>
                                    Select Source
                                  </MenuItem>

                                  {leadSourceOptions.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </span>
                          )}
                        </span>
                      )}
                    </span>
                  ) : (
                    <TextField
                      id={`headr-input-field-${index}`}
                      value={data[key].value}
                      InputProps={{
                        // disableUnderline: true,
                        classes: { root: 'text-field-root', input: 'text-field-input' },
                      }}
                      classes={{ root: 'textfield-root' }}
                      placeholder={data[key].value !== '' ? data[key].value : data[key].placeholder}
                      onChange={handleTextChange(key)}
                    />
                  )}
                </span>
              ) : (
                <React.Fragment>
                  {data[key].value !== '' ? (
                    <React.Fragment>  
                      {key === 'leadStatus' ? (
                        <React.Fragment>
                          {statusOptions &&
                            statusOptions.filter(option => option.id === data[key].value)[0].label}
                        </React.Fragment> 
                      ) : (
                        <React.Fragment>
                          {key === 'tags' ? (
                            <React.Fragment>
                              {statusOptions &&
                                statusOptions.filter(option => option.id === data[key].value)[0]
                                  .label}
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              {key === 'leadSource' ? (
                                <React.Fragment>
                                  {statusOptions &&
                                    statusOptions.filter(option => option.id === data[key].value)[0]
                                      .label}
                                </React.Fragment>
                              ) : (
                                data[key].value
                              )}
                            </React.Fragment>
                          )}
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  ) : (
                    <span style={{ color: 'rgba(37, 53, 81, 0.35)' }}>{data[key].placeholder}</span>
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export class LeadEditDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldTypeValue: '',
      filedTypeOptions: [
        { id: '1', label: 'Field One' },
        { id: '2', label: 'Field Two' },
        { id: '3', label: 'Field Three' },
      ],
      headerFieldValues: [{ id: 1, value: '' }],
      activeTab: 0,
      leadDetailsColumns: ['firstName', 'lastName', 'leadSource', 'tags', 'leadStatus', 'email'],
      leadsDetails: {
        firstName: { label: 'First Name', value: '', placeholder: 'Arindam', heirarchyValue: '' },
        lastName: { label: 'Last Name', value: '', placeholder: 'De', heirarchyValue: '' },
        leadSource: {
          label: 'Lead Source',
          value: '',
          placeholder: 'Lead Company',
          heirarchyValue: '',
        },
        tags: { label: 'Tags', value: '', placeholder: 'Tag 01', heirarchyValue: '' },
        leadStatus: {
          label: 'Lead Status',
          value: '',
          placeholder: 'Status 01',
          heirarchyValue: '',
        },
        email: { label: 'Email Address', value: '', placeholder: 'Arindam', heirarchyValue: '' },
      },
      heirarchyOptions: [
        { id: 1, label: 'Level 1' },
        { id: 2, label: 'Level 2' },
        { id: 3, label: 'Level 3' },
        { id: 4, label: 'Level 4' },
      ],
      statusOptions: [
        { id: 1, label: 'Status One' },
        { id: 2, label: 'Status Two' },
        { id: 3, label: 'Status Three' },
      ],
      tagOptions: [
        { id: 1, label: 'Tag One' },
        { id: 2, label: 'Tag Two' },
        { id: 3, label: 'Tag Three' },
      ],
      leadSourceOptions: [
        { id: 1, label: 'Company One' },
        { id: 2, label: 'Company Two' },
        { id: 3, label: 'Company Three' },
      ],
    };
  }
  static propTypes = {
    leads: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  handleHierarchy = str => e => {
    this.setState(state => {
      let val = state.leadsDetails;
      val[str].heirarchyValue = e.target.value;
      return { leadsDetails: val };
    });
  };
  closeDialog = () => {
    this.props.closeDialog();
  };
  handleDropDownChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  _DropDownChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState(state => {
      let obj = state.leadsDetails;
      obj[name].value = value;
      return { leadsDetails: obj };
    });
  };
  handleChangeHeaderTextField = index => e => {
    const val = e.target.value;
    this.setState(state => {
      let arr = state.headerFieldValues;
      arr[index].value = val;
      return {
        headerFieldValues: arr,
      };
    });
  };
  handleChangeTab = str => (e, val) => {
    this.setState({ [str]: val });
  };
  a11yProps = index => {
    return {
      id: `lead-details-details-tab-${index}`,
      'aria-controls': `lead-details-tabpanel-${index}`,
    };
  };
  handleTextChange = key => e => {
    const value = e.target.value;
    this.setState(state => {
      let obj = state.leadsDetails;
      obj[key].value = value;
      return { leadsDetails: obj };
    });
  };

  render() {
    const {
      heirarchyOptions,
      headerFieldValues,
      filedTypeOptions,
      fieldTypeValue,
      activeTab,
      leadDetailsColumns,
      statusOptions,
      tagOptions,
      leadSourceOptions,
    } = this.state;
    const { open } = this.props;
    return (
      <div className="leads-lead-edit-dialog">
        <Dialog
          disableBackdropClick={true}
          onClose={this.handleClose}
          open={open}
          classes={{ paper: 'leads-homepage-filter-popup' }}
        >
          <div className="lead-edit-dialog-header">
            <div className="close-icon-div">
              <CloseIcon className="close-icon" onClick={this.closeDialog} />
            </div>
            <div className="dialog-title-container flex-column align-items-center">
              <Typography classes={{ root: 'dialog-title' }}>Edit Field</Typography>
              <div className="header-input-container">
                <div className="input-row">
                  <FormControl classes={{ root: 'form-control-root' }}>
                    <Select
                      disableUnderline
                      value={fieldTypeValue}
                      onChange={this.handleDropDownChange}
                      inputProps={{
                        name: 'fieldTypeValue',
                        id: 'fieldTypeValue-dropdown',
                      }}
                      displayEmpty
                      classes={{ root: 'root-select', icon: 'select-icon' }}
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
                    >
                      <MenuItem value="" disabled>
                        Field Type
                      </MenuItem>
                      {filedTypeOptions.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                {headerFieldValues.map((field, index) => (
                  <div className="input-row" key={index}>
                    <TextField
                      id={`headr-input-field-${index}`}
                      value={field.value}
                      InputProps={{
                        disableUnderline: true,
                        classes: { root: 'text-field-root', input: 'text-field-input' },
                      }}
                      classes={{ root: 'textfield-root' }}
                      placeholder="Add Field Name"
                      onChange={this.handleChangeHeaderTextField(index)}
                    />
                  </div>
                ))}
                <div className="input-row d-flex justify-content-center">
                  <IconButton classes={{ root: 'header-icon-btn' }}>
                    <AddCircleIcon classes={{ root: 'add-circe-icon' }} />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <DialogContent className="lead-edit-dialog-content">
            <section className="lead-edit-dialog d-flex-col-reverse">
              <Box className="leads-detail-tabspanels-section no-shadow">
                <TabPanel value={activeTab} index={0}>
                  <div className="d-flex">
                    <PersonalDetail
                      data={this.state.leadsDetails}
                      handleHierarchy={this.handleHierarchy}
                      heirarchyOptions={heirarchyOptions}
                      leadDetailsColumns={leadDetailsColumns}
                      statusOptions={statusOptions}
                      tagOptions={tagOptions}
                      leadSourceOptions={leadSourceOptions}
                      handleTextChange={this.handleTextChange}
                      _DropDownChange={this._DropDownChange}
                    />
                  </div>
                </TabPanel>
                <TabPanel value={activeTab} index={1}>
                  <div className="d-flex">
                    <PersonalDetail
                      data={this.state.leadsDetails}
                      handleHierarchy={this.handleHierarchy}
                      heirarchyOptions={heirarchyOptions}
                      leadDetailsColumns={leadDetailsColumns}
                      statusOptions={statusOptions}
                      tagOptions={tagOptions}
                      leadSourceOptions={leadSourceOptions}
                      handleTextChange={this.handleTextChange}
                      _DropDownChange={this._DropDownChange}
                    />
                  </div>
                </TabPanel>
                <TabPanel value={activeTab} index={2}>
                  <div className="d-flex">
                    <PersonalDetail
                      data={this.state.leadsDetails}
                      handleHierarchy={this.handleHierarchy}
                      heirarchyOptions={heirarchyOptions}
                      leadDetailsColumns={leadDetailsColumns}
                      statusOptions={statusOptions}
                      tagOptions={tagOptions}
                      leadSourceOptions={leadSourceOptions}
                      handleTextChange={this.handleTextChange}
                      _DropDownChange={this._DropDownChange}
                    />
                  </div>
                </TabPanel>
                <TabPanel value={activeTab} index={3}>
                  <div className="d-flex">
                    <PersonalDetail
                      data={this.state.leadsDetails}
                      handleHierarchy={this.handleHierarchy}
                      heirarchyOptions={heirarchyOptions}
                      leadDetailsColumns={leadDetailsColumns}
                      statusOptions={statusOptions}
                      tagOptions={tagOptions}
                      leadSourceOptions={leadSourceOptions}
                      handleTextChange={this.handleTextChange}
                      _DropDownChange={this._DropDownChange}
                    />
                  </div>
                </TabPanel>
              </Box>
              <Tabs
                variant="fullWidth"
                classes={{
                  root: 'leads-details-tabs-style',
                  indicator: 'leads-details-custom-indications',
                }}
                value={activeTab}
                onChange={this.handleChangeTab('activeTab')}
                aria-label="Vertical tabs example"
              >
                <Tab
                  disableRipple
                  classes={{
                    selected: 'leads-table-selected-tab',
                    root: 'leads-details-tab-style',
                  }}
                  label="Personal Details"
                  {...this.a11yProps(0)}
                />
                <Tab
                  disableRipple
                  classes={{
                    selected: 'leads-table-selected-tab',
                    root: 'leads-details-tab-style',
                  }}
                  label="Company Details"
                  {...this.a11yProps(1)}
                />
                <Tab
                  disableRipple
                  classes={{
                    selected: 'leads-table-selected-tab',
                    root: 'leads-details-tab-style',
                  }}
                  label="Personal Details"
                  {...this.a11yProps(2)}
                />
                <Tab
                  disableRipple
                  classes={{
                    selected: 'leads-table-selected-tab',
                    root: 'leads-details-tab-style',
                  }}
                  label="Company Details"
                  {...this.a11yProps(3)}
                />
              </Tabs>
            </section>
            <div className="dialog-last-section flex-column align-items-center">
              <Button className="dialog-save-btn" onClick={this.closeDialog}>
                save
              </Button>
              <Typography classes={{ root: 'dialog-api-link-text' }}>
                Export API Field Name
              </Typography>
            </div>
          </DialogContent>
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
)(LeadEditDialog);
