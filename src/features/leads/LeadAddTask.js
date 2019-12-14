import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export class LeadAddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      taskMonthValue: '',
      months: [
        { id: 'jan', label: 'January' },
        { id: 'feb', label: 'February' },
        { id: 'mar', label: 'March' },
        { id: 'apr', label: 'April' },
        { id: 'may', label: 'May' },
        { id: 'jun', label: 'June' },
        { id: 'july', label: 'July' },
        { id: 'aug', label: 'August' },
        { id: 'sep', label: 'September' },
        { id: 'oct', label: 'October' },
        { id: 'nov', label: 'November' },
        { id: 'dec', label: 'December' },
      ],
      taskDateValue: '',
      taskTimeValue: '',
      taskAddedBy: '',
      agents: [
        { id: 1, label: 'Arindam De' },
        { id: 2, label: 'Arindam De' },
        { id: 3, label: 'Arindam De' },
        { id: 4, label: 'Arindam De' },
        { id: 5, label: 'Arindam De' },
        { id: 6, label: 'Arindam De' },
      ],
      taskLocationValue: '',
      taskDescriptionValue: '',
      taskGuests: [''],
    };
  }
  static propTypes = {
    leads: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  handleClose = () => {
    this.props.closeDialog();
  };
  handleTextfieldChange = str => e => {
    const value = e.target.value;
    this.setState({
      [str]: value,
    });
  };
  handleGuestsText = index => e => {
    const value = e.target.value;
    this.setState(state => {
      let arr = state.taskGuests;
      arr[index] = value;
      return {
        taskGuests: arr,
      };
    });
  };
  handleRemoveGuest = index => e => {
    this.setState(state => {
      let arr = state.taskGuests;
      arr = arr.filter((item, ind) => ind !== index);
      return { taskGuests: arr };
    });
  };
  handleAddGuest = e => {
    this.setState(state => {
      let arr = state.taskGuests;
      arr.push('');
      return { taskGuests: arr };
    });
  };
  handleDropdownChange = e => {
    const val = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: val });
  };
  handleSaveBtn = e => {
    this.props.closeDialog();
  };
  render() {
    const { open } = this.props;
    const {
      taskDateValue,
      taskTimeValue,
      months,
      taskName,
      taskMonthValue,
      taskAddedBy,
      agents,
      taskLocationValue,
      taskDescriptionValue,
      taskGuests,
    } = this.state;
    return (
      <div className="leads-lead-add-task">
        <Dialog
          disableBackdropClick={true}
          onClose={this.handleClose}
          open={open}
          classes={{ paper: 'lead-add-task-dialog' }}
        >
          <div className="dialog-header d-flex justify-content-center">
            <Typography classes={{ root: 'header-text' }}>Create Task</Typography>
            <CloseIcon className="close-icon" onClick={this.handleClose} />
          </div>
          <DialogContent classes={{ root: 'dialog-content' }}>
            <div className="content-row">
              <Typography classes={{ root: 'text-input-label' }}>Task Name</Typography>
              <TextField
                InputProps={{ disableUnderline: true, classes: { root: 'add-task-input' } }}
                id="task-name-create-task"
                classes={{ root: 'add-task-text-field' }}
                placeholder="Task Name"
                value={taskName}
                onChange={this.handleTextfieldChange('taskName')}
              />
            </div>
            <div className="content-row">
              <Typography classes={{ root: 'text-input-label' }}>Teams Date</Typography>
              <div className="three-columns">
                <div style={{ paddingRight: '5px' }}>
                  <FormControl className="add-task-dropdown">
                    <Select
                      disableUnderline
                      classes={{
                        root: 'select-style',
                        icon: 'icon-style',
                      }}
                      value={taskMonthValue}
                      onChange={this.handleDropdownChange}
                      inputProps={{
                        name: `taskMonthValue`,
                        id: 'dropdown-taskMonthValue',
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
                        Month
                      </MenuItem>
                      {months.map(option => (
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
                <div style={{ paddingRight: '5px', paddingLeft: '5px' }}>
                  <TextField
                    InputProps={{ disableUnderline: true, classes: { root: 'add-task-input' } }}
                    id="add-task-date"
                    classes={{ root: 'add-task-text-field' }}
                    value={taskDateValue}
                    onChange={this.handleTextfieldChange('taskDateValue')}
                  />
                </div>
                <div style={{ paddingLeft: '5px' }}>
                  <TextField
                    InputProps={{ disableUnderline: true, classes: { root: 'add-task-input' } }}
                    id="add-task-time"
                    type="time"
                    classes={{ root: 'add-task-text-field' }}
                    value={taskTimeValue}
                    onChange={this.handleTextfieldChange('taskTimeValue')}
                  />
                </div>
              </div>
            </div>
            <div className="content-row d-flex">
              <div style={{ paddingRight: '10px', width: '100%' }}>
                <Typography classes={{ root: 'text-input-label' }}>Task Added By</Typography>
                <FormControl className="add-task-dropdown">
                  <Select
                    disableUnderline
                    classes={{
                      root: 'select-style',
                      icon: 'icon-style',
                    }}
                    value={taskAddedBy}
                    onChange={this.handleDropdownChange}
                    inputProps={{
                      name: `taskAddedBy`,
                      id: 'dropdown-taskAddedBy',
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
                      Choose
                    </MenuItem>
                    {agents.map(option => (
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
              <div style={{ paddingLeft: '10px', width: '100%' }}>
                <Typography classes={{ root: 'text-input-label' }}>Location</Typography>
                <TextField
                  InputProps={{ disableUnderline: true, classes: { root: 'add-task-input' } }}
                  id="add-task-location"
                  placeholder="Google Maps API"
                  classes={{ root: 'add-task-text-field' }}
                  value={taskLocationValue}
                  onChange={this.handleTextfieldChange('taskLocationValue')}
                />
              </div>
            </div>
            <div className="content-row">
              <Typography classes={{ root: 'text-input-label' }}>Description</Typography>
              <TextField
                InputProps={{ disableUnderline: true, classes: { root: 'add-task-input' } }}
                id="add-task-description"
                placeholder="Description"
                classes={{ root: 'add-task-text-field' }}
                multiline
                rows={8}
                value={taskDescriptionValue}
                onChange={this.handleTextfieldChange('taskDescriptionValue')}
              />
            </div>
            <div className="content-row">
              <Typography classes={{ root: 'text-input-label' }}>Add Guests</Typography>
              {taskGuests.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className="d-flex align-items-center"
                    style={{ marginBottom: taskGuests.length > 1 ? '10px' : '0' }}
                  >
                    <TextField
                      InputProps={{ disableUnderline: true, classes: { root: 'add-task-input' } }}
                      id="add-guest"
                      placeholder={`Guest ${index + 1}`}
                      classes={{ root: 'add-task-text-field' }}
                      value={item}
                      onChange={this.handleGuestsText(index)}
                    />
                    {taskGuests.length > 1 ? (
                      <IconButton
                        classes={{ root: 'add-icon-root' }}
                        onClick={this.handleRemoveGuest(index)}
                      >
                        <RemoveIcon classes={{ root: 'add-icon' }} />
                      </IconButton>
                    ) : null}
                    <IconButton classes={{ root: 'add-icon-root' }} onClick={this.handleAddGuest}>
                      <AddIcon classes={{ root: 'add-icon' }} />
                    </IconButton>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="content-row d-flex justify-content-center">
              <Button
                disableFocusRipple
                classes={{ root: 'add-task-button' }}
                onClick={this.handleSaveBtn}
              >
                Save
              </Button>
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
)(LeadAddTask);
