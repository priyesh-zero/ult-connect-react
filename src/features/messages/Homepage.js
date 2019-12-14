import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { Typography, Button, MenuItem, FormControl, Select } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Messages from './Messages';
import Voicemail from './Voicemail';

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 1, // 1 fro messages , 2 for voice mail
      branchValue: '',
      teamValue: '',
      agentValue: '',
      branchOptions: [
        { id: 1, label: 'Branch One' },
        { id: 2, label: 'Branch Two' },
        { id: 3, label: 'Branch Three' },
      ],
      teamOptions: [
        { id: 1, label: 'Team One' },
        { id: 2, label: 'Team Two' },
        { id: 3, label: 'Team Three' },
      ],
      agentOptions: [
        { id: 1, label: 'Agent One' },
        { id: 2, label: 'Agent Two' },
        { id: 3, label: 'Agent Three' },
      ],
    };
  }
  static propTypes = {
    messages: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  handleChangeDropdown = e => {
    const target = e.target.name;
    const value = e.target.value;
    this.setState({ [target]: value });
  };
  changeViewComponet = val => e => {
    this.setState({ activeComponent: val });
  };
  render() {
    const {
      activeComponent,
      branchValue,
      teamValue,
      agentValue,
      agentOptions,
      branchOptions,
      teamOptions,
    } = this.state;
    return (
      <div className="messages-homepage">
        <div className="top-heading">
          <Typography classes={{ root: 'component-heading-text' }}>All Messages</Typography>
        </div>
        <section className="top-btns-section">
          <Button
            disableFocusRipple
            className={activeComponent === 1 ? 'active' : ''}
            onClick={this.changeViewComponet(1)}
            classes={{ root: 'top-component-btn' }}
          >
            Messages
          </Button>
          <Button
            disableFocusRipple
            className={activeComponent === 2 ? 'active' : ''}
            onClick={this.changeViewComponet(2)}
            classes={{ root: 'top-component-btn' }}
          >
            VoiceMail
          </Button>
        </section>
        <section className="filters-section flex-column">
          <span className="d-flex">
            <div className="filter-box">
              <Typography classes={{ root: 'filter-label' }}>Select Branch</Typography>
              <FormControl className="form-control-root">
                <Select
                  disableUnderline
                  classes={{
                    root: 'select-root',
                    icon: 'icon-root',
                  }}
                  value={branchValue}
                  onChange={this.handleChangeDropdown}
                  inputProps={{
                    name: `branchValue`,
                    id: 'dropdown-branchValue',
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
                    Select Branch
                  </MenuItem>
                  {branchOptions.map(option => (
                    <MenuItem key={option.id} classes={{ root: 'dropdown-item' }} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="filter-box">
              <Typography classes={{ root: 'filter-label' }}>Select Team</Typography>
              <FormControl className="form-control-root">
                <Select
                  disableUnderline
                  classes={{
                    root: 'select-root',
                    icon: 'icon-root',
                  }}
                  value={teamValue}
                  onChange={this.handleChangeDropdown}
                  inputProps={{
                    name: `teamValue`,
                    id: 'dropdown-teamValue',
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
                    Select Team
                  </MenuItem>
                  {teamOptions.map(option => (
                    <MenuItem key={option.id} classes={{ root: 'dropdown-item' }} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="filter-box">
              <Typography classes={{ root: 'filter-label' }}>Select Agent</Typography>
              <FormControl className="form-control-root">
                <Select
                  disableUnderline
                  classes={{
                    root: 'select-root',
                    icon: 'icon-root',
                  }}
                  value={agentValue}
                  onChange={this.handleChangeDropdown}
                  inputProps={{
                    name: `agentValue`,
                    id: 'dropdown-agentValue',
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
                    Select Agent
                  </MenuItem>
                  {agentOptions.map(option => (
                    <MenuItem key={option.id} classes={{ root: 'dropdown-item' }} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </span>
          <Typography classes={{ root: 'blue-note-text' }}>
            Please Select a branch and tea to view upcoming tasks.
          </Typography>
        </section>
        <section className="main-component">
          {activeComponent === 1 ? (
            <Messages />
          ) : (
            <React.Fragment>{activeComponent === 2 ? <Voicemail /> : null}</React.Fragment>
          )}
        </section>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    messages: state.messages,
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
)(Homepage);
