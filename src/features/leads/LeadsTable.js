import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import sortIcon from '../../images/leads/homepage/sortIcon.png';
import letterIcon from '../../images/leads/homepage/letterIcon.png';
import phoneIcon from '../../images/leads/homepage/phoneIcon.png';
import chatIcon from '../../images/leads/homepage/chatIcon.png';
import trashIcon from '../../images/leads/homepage/trashIcon.png';
import { IconButton } from '@material-ui/core';

const ToggleButton = props => {
  const classesLeftString =
    'leads-table-toggle-btn-section leads-table-toggle-left d-flex align-items-center justify-content-center leads-table-toggle-inactive';
  const classesLeftActiveString =
    'leads-table-toggle-btn-section leads-table-toggle-left d-flex align-items-center justify-content-center leads-table-toggle-active';
  const classesRightString =
    'leads-table-toggle-btn-section leads-table-toggle-right d-flex align-items-center justify-content-center leads-table-toggle-active';
  const classesRightActiveString =
    'leads-table-toggle-btn-section leads-table-toggle-right d-flex align-items-center justify-content-center leads-table-toggle-inactive';

  const handleClick = str => e => {
    if (str === 'yes' && props.value === false) props.handleToggle(props.index);
    else if (str === 'no' && props.value === true) props.handleToggle(props.index);
  };
  return (
    <div className="leads-table-toggle-btn-base d-flex" id={`${props.value}`}>
      <div
        onClick={handleClick('yes')}
        className={props.value === true ? classesLeftActiveString : classesLeftString}
      >
        Yes
      </div>
      <div
        onClick={handleClick('no')}
        className={props.value === true ? classesRightActiveString : classesRightString}
      >
        No
      </div>
    </div>
  );
};

export class LeadsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forceVisible: false,
      createdSort: null,
      lastActivitySort: null,
      columns: [
        { id: 'created', label: 'Created Date', visible: true },
        { id: 'name', label: 'Name', visible: true },
        { id: 'email', label: 'Email Address', visible: true },
        { id: 'phone', label: 'Phone Number', visible: true },
        { id: 'company', label: 'Company Name', visible: true },
        { id: 'custom', label: 'Custom Field', visible: true },
        { id: 'lastActivityType', label: 'Last Activity Type', expandable: true, visible: true },
        { id: 'leadStatus', label: 'Lead Status', expandable: true, visible: true },
        { id: 'leadOwnership', label: 'Lead Ownership', expandable: true, visible: true },
        { id: 'lastActivity', label: 'Last Activity', visible: true },
      ],
      tableData: this.props.leads.tableData,
      tableDataSelectedRow: null,
      componentMounted: false,
      editSelectAll: false,
      lastActivityOptions: [
        { id: 'called', label: 'Called' },
        { id: 'activity1', label: 'Activity 01' },
        { id: 'activity2', label: 'Activity 02' },
        { id: 'activity3', label: 'Activity 03' },
      ],
      lastActivityTypeValue: '',
    };
  }
  componentDidMount() {
    this.createSelectedRows();
    this.setState({
      componentMounted: true,
    });
  }
  createSelectedRows = () => {
    const len = this.props.leads.tableData.length;
    let arr = [];
    for (let i = 0; i < len; ++i) arr.push(false);
    this.setState({
      tableDataSelectedRow: arr,
    });
  };

  tableHeadClass = (index, length) => {
    let cl = 'table-head-cell';
    if (this.props.editVisibility) cl += ' h-70px';
    if (index === 0) cl += ' table--first-cell';
    else if (index + 1 === length) cl += ' table--last-cell';
    return cl;
  };
  checkTableRow = index => e => {
    this.setState(state => {
      let arr = state.tableDataSelectedRow;

      arr[index] = !arr[index];
      let T = true;
      for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== true) {
          T = false;
          break;
        }
      }
      return { tableDataSelectedRow: arr, editSelectAll: T ? true : false };
    });
  };
  resetVisibility = e => {
    this.setState(state => {
      let arr = state.columns;
      arr.forEach((item, index) => {
        item.visible = true;
      });
      return { columns: arr };
    });
  };
  applyVisibility = e => {
    this.props.closeVisibliltyClick();
  };
  handleVisibilityToggle = index => {
    this.setState(state => {
      let arr = state.columns;
      arr[index].visible = !arr[index].visible;
      return { columns: arr };
    });
  };
  resetSelectedRows = e => {
    this.setState(state => {
      let arr = state.tableDataSelectedRow;
      arr.map((item, i) => {
        arr[i] = false;
        return arr[i];
      });
      return { tableDataSelectedRow: arr, editSelectAll: false };
    });
  };
  applySelectedRows = e => {
    this.resetSelectedRows();
    this.props.closeEdit();
  };
  selectAllRows = e => {
    if (this.state.editSelectAll === true) {
      this.setState(state => {
        let arr = state.tableDataSelectedRow;
        arr.map((item, i) => {
          arr[i] = false;
          return arr[i];
        });
        return { tableDataSelectedRow: arr, editSelectAll: false };
      });
    } else {
      this.setState(state => {
        let arr = state.tableDataSelectedRow;
        arr.map((item, i) => {
          arr[i] = true;
          return arr[i];
        });
        return { tableDataSelectedRow: arr, editSelectAll: true };
      });
    }
  };
  handleDeleteButton = async e => {
    const { editSelectAll, tableDataSelectedRow } = this.state;
    if (editSelectAll) {
      await this.props.actions.removeAllLeads();
      this.setState(
        {
          tableData: this.props.leads.tableData,
          editSelectAll: false,
        },
        () => {
          this.createSelectedRows();
        },
      );
    } else {
      const len = tableDataSelectedRow.length;
      for (let i = 0; i < len; ++i) {
        if (tableDataSelectedRow[i]) await this.props.actions.removeSelectedLead(i);
      }
      this.setState(
        {
          tableData: this.props.leads.tableData,
        },
        () => {
          this.createSelectedRows();
        },
      );
    }
  };
  getRowClass = (index, length) => {
    if (length) {
      let cl = 'table-row-cell';
      if (index === 0) cl += ' table--first-cell';
      else if (index + 1 === length) cl += ' table--last-cell';
      return cl;
    }
    let cl = 'table-row';
    if (index + 1 === 1 || (index + 1) % 2 !== 0) cl += ' table-odd-row';
    else if ((index + 1) % 2 === 0) cl += ' table-even-row';
    return cl;
  };

  handleChangeDropDown = dataIndex => event => {
    this.setState(state => {
      let data = state.tableData;
      data[dataIndex][event.target.name] = event.target.value;
      return { tableData: data };
    });
  };

  displayVariableData = (columnIndex, dataIndex, columnId, length) => {
    switch (columnId) {
      case 'lastActivityType':
        return (
          <TableCell style={{ color: '#3a78e9' }} className={this.getRowClass(columnIndex, length)}>
            {this.state.tableData[dataIndex][columnId]}
          </TableCell>
        );
      case 'leadStatus':
        return (
          <TableCell style={{ color: '#3a78e9' }} className={this.getRowClass(columnIndex, length)}>
            <FormControl variant="filled" className="table-form-control-lead-status">
              <Select
                disableUnderline
                classes={{ root: 'select-root', icon: 'select-icon' }}
                value={this.state.tableData[dataIndex]['leadStatus']}
                onChange={this.handleChangeDropDown(dataIndex)}
                inputProps={{
                  name: `leadStatus`,
                  id: `leadStatus-${dataIndex}`,
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
                  classes: { list: 'list-root', paper: 'dropdown-paper' },
                }}
              >
                {this.props.leadStatusOptions.map(option => (
                  <MenuItem
                    key={option.id}
                    disableRipple
                    classes={{ root: 'dropdown-item' }}
                    value={option.id}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </TableCell>
        );
      case 'leadOwnership':
        return (
          <TableCell style={{ color: '#3a78e9' }} className={this.getRowClass(columnIndex, length)}>
            <FormControl variant="filled" className="table-form-control-lead-ownership">
              <Select
                disableUnderline
                classes={{ root: 'select-root', icon: 'select-icon' }}
                value={this.state.tableData[dataIndex]['leadOwnership']}
                onChange={this.handleChangeDropDown(dataIndex)}
                inputProps={{
                  name: `leadOwnership`,
                  id: `leadOwnership-${dataIndex}`,
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
                  classes: { list: 'list-root', paper: 'dropdown-paper' },
                }}
              >
                {this.props.leadOwnerShipOptions.map(option => (
                  <MenuItem key={option.id} classes={{ root: 'dropdown-item' }} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </TableCell>
        );
      default:
        return 'rest';
    }
  };
  handleChangeHeadDropdown = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getHeadingDropdowns = (index, columnId, length) => {
    switch (columnId) {
      case 'lastActivityType':
        return (
          <React.Fragment>
            {this.props.editRows ? (
              <TableCell className={this.tableHeadClass(index, length)}>
                <div className="flex-cel">Last Activity Type</div>
              </TableCell>
            ) : (
              <TableCell
                style={{ color: '#3a78e9' }}
                className={this.tableHeadClass(index, length)}
              >
                <div className="flex-cell flex-column align-items-center justify-content-space-between">
                  <FormControl
                    variant="filled"
                    className="table-form-control-last-activity-type-value"
                  >
                    <Select
                      disableUnderline
                      classes={{ root: 'select-root', icon: 'select-head-icon' }}
                      value={this.state.lastActivityTypeValue}
                      onChange={this.handleChangeHeadDropdown}
                      inputProps={{
                        name: `lastActivityTypeValue`,
                        id: `last-activity-type-value`,
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
                        classes: { list: 'list-head-root', paper: 'dropdown-paper' },
                      }}
                      displayEmpty
                    >
                      <MenuItem classes={{ root: 'dropdown-item' }} value="">
                        Last Activity Type
                      </MenuItem>
                      {this.state.lastActivityOptions.map(option => (
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
                  {this.props.editVisibility ? (
                    <ToggleButton
                      value={this.state.columns[index].visible}
                      handleToggle={this.handleVisibilityToggle}
                      index={index}
                    />
                  ) : null}
                </div>
              </TableCell>
            )}
          </React.Fragment>
        );
      case 'leadStatus':
        return (
          <React.Fragment>
            {this.props.editRows ? (
              <TableCell className={this.tableHeadClass(index, length)}>
                <div className="flex-cel">Lead Status</div>
              </TableCell>
            ) : (
              <TableCell
                style={{ color: '#3a78e9' }}
                className={this.tableHeadClass(index, length)}
              >
                <div className="flex-cell flex-column align-items-center justify-content-space-between">
                  <FormControl
                    variant="filled"
                    className="table-form-control-last-activity-type-value"
                  >
                    <Select
                      disableUnderline
                      classes={{ root: 'select-root', icon: 'select-head-icon' }}
                      value={this.props.leadStatusValue}
                      onChange={this.props.handleDropDownChange}
                      inputProps={{
                        name: `leadStatusValue`,
                        id: `lead-status-value`,
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
                        classes: { list: 'list-head-root', paper: 'dropdown-paper' },
                      }}
                      displayEmpty
                    >
                      <MenuItem classes={{ root: 'dropdown-item' }} value="">
                        Lead Status
                      </MenuItem>
                      {this.props.leadStatusOptions.map(option => (
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
                  {this.props.editVisibility ? (
                    <ToggleButton
                      value={this.state.columns[index].visible}
                      handleToggle={this.handleVisibilityToggle}
                      index={index}
                    />
                  ) : null}
                </div>
              </TableCell>
            )}
          </React.Fragment>
        );
      case 'leadOwnership':
        return (
          <React.Fragment>
            {this.props.editRows ? (
              <TableCell className={this.tableHeadClass(index, length)}>
                <div className="flex-cell">Lead Ownership</div>
              </TableCell>
            ) : (
              <TableCell
                style={{ color: '#3a78e9' }}
                className={this.tableHeadClass(index, length)}
              >
                <div className="flex-cell flex-column align-items-center justify-content-space-between">
                  <FormControl
                    variant="filled"
                    className="table-form-control-last-activity-type-value"
                  >
                    <Select
                      disableUnderline
                      classes={{ root: 'select-root', icon: 'select-head-icon' }}
                      value={this.props.leadOwnershipValue}
                      onChange={this.props.handleDropDownChange}
                      inputProps={{
                        name: `leadOwnershipValue`,
                        id: `lead-ownership-value`,
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
                        classes: { list: 'list-head-root', paper: 'dropdown-paper' },
                      }}
                      displayEmpty
                    >
                      <MenuItem classes={{ root: 'dropdown-item' }} value="">
                        Lead Ownership
                      </MenuItem>
                      {this.props.leadOwnerShipOptions.map(option => (
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
                  {this.props.editVisibility ? (
                    <ToggleButton
                      value={this.state.columns[index].visible}
                      handleToggle={this.handleVisibilityToggle}
                      index={index}
                    />
                  ) : null}
                </div>
              </TableCell>
            )}
          </React.Fragment>
        );

      default:
        return 'default';
    }
  };
  compareFunction = str => (a, b) => {
    if (Date.parse(a[str]) < Date.parse(b[str])) {
      return -1;
    }
    if (Date.parse(a[str]) > Date.parse(b[str])) {
      return 1;
    }
    return 0;
  };
  sortTable = str => e => {
    let data = this.state.tableData;
    data = data.sort(this.compareFunction(str));
    this.setState({ tableData: data });
  };
  displaySortButton = (index, columnId, dataLength) => {
    if (index === 0) {
      return (
        <img
          src={sortIcon}
          className="sort-icon"
          onClick={this.sortTable('created')}
          alt="sort icon"
        />
      );
    } else if (index + 1 === dataLength)
      return (
        <img
          src={sortIcon}
          className="sort-icon"
          onClick={this.sortTable('lastActivity')}
          alt="sort icon"
        />
      );
    return '';
  };
  static propTypes = {
    leads: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  togglePopup = () => {
    this.props.togglePopup(true)
  }
  displayIcons = (colIndex, colId) => {
    switch (colId) {
      case 'email':
        return (
          <div className="short-icon">
            <img className="short-icon-img" src={letterIcon} alt="" />
          </div>
        );
      case 'phone':
        return (
          <React.Fragment>
            <div className="short-icon">
              <img className="short-icon-img" onClick={this.togglePopup} src={phoneIcon} alt="" />
            </div>
            <div className="short-icon">
              <img className="short-icon-img" src={chatIcon} alt="" />
            </div>
          </React.Fragment>
        );
      default:
        return '';
    }
  };
  render() {
    const {
      columns,
      tableData,
      editSelectAll,
      tableDataSelectedRow,
      componentMounted,
    } = this.state;
    const { editRows, editVisibility } = this.props;
    return (
      <div className="leads-leads-table">
        <Table classes={{ root: 'table-root' }}>
          {editRows ? (
            <Fade in={editRows}>
              <TableHead className="table-head">
                <TableRow className="leads-table-edit-bar">
                  {columns.map(column => (
                    <React.Fragment key={column.id}>
                      <React.Fragment>
                        {column.id === 'created' ? (
                          <TableCell className="leads-table-edit-cell" colSpan={7}>
                            <FormControlLabel
                              classes={{ label: 'leads-table-checkbox-label' }}
                              control={
                                <Checkbox
                                  color="primary"
                                  checked={editSelectAll}
                                  onChange={this.selectAllRows}
                                />
                              }
                              label="Select All"
                            />
                          </TableCell>
                        ) : (
                          <React.Fragment>
                            {column.id === 'leadStatus' ? (
                              <TableCell className="leads-table-edit-cell">
                                {column.visible ? (
                                  <div className="d-flex justify-content-center">
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
                                        value={this.props.leadStatusValue}
                                        onChange={this.props.handleDropDownChange}
                                        inputProps={{
                                          name: `leadStatusValue`,
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
                                            list: 'filter-list-root',
                                            paper: 'dropdown-paper',
                                          },
                                        }}
                                        displayEmpty
                                      >
                                        <MenuItem classes={{ root: 'dropdown-item' }} value="">
                                          Lead Status
                                        </MenuItem>
                                        {this.props.leadStatusOptions.map(option => (
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
                                ) : null}
                              </TableCell>
                            ) : (
                              <React.Fragment>
                                {column.id === 'leadOwnership' ? (
                                  <TableCell className="leads-table-edit-cell">
                                    {column.visible ? (
                                      <div className="d-flex justify-content-center">
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
                                            value={this.props.leadOwnershipValue}
                                            onChange={this.props.handleDropDownChange}
                                            inputProps={{
                                              name: `leadOwnershipValue`,
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
                                                list: 'filter-list-root',
                                                paper: 'dropdown-paper',
                                              },
                                            }}
                                            displayEmpty
                                          >
                                            <MenuItem
                                              classes={{ root: 'dropdown-item' }}
                                              value=""
                                              disabled
                                            >
                                              Lead Ownership
                                            </MenuItem>
                                            {this.props.leadOwnerShipOptions.map(option => (
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
                                    ) : null}
                                  </TableCell>
                                ) : (
                                  <React.Fragment>
                                    {column.id === 'lastActivity' ? (
                                      <TableCell className="leads-table-edit-cell">
                                        <div className="d-flex justify-content-end">
                                          <IconButton
                                            className="leads-table-trash-icon"
                                            onClick={this.handleDeleteButton}
                                          >
                                            <img
                                              className="lead-table-trash-icon-img"
                                              src={trashIcon}
                                              alt=""
                                            />
                                          </IconButton>
                                        </div>
                                      </TableCell>
                                    ) : null}
                                  </React.Fragment>
                                )}
                              </React.Fragment>
                            )}
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    </React.Fragment>
                  ))}
                </TableRow>
              </TableHead>
            </Fade>
          ) : null}

          <TableHead className="table-head">
            <TableRow className="table-head-row">
              {columns
                .filter(el => el.visible || editVisibility)
                .map((column, index) => (
                  <React.Fragment key={column.id}>
                    {column.expandable ? (
                      <React.Fragment>
                        {this.getHeadingDropdowns(
                          index,
                          column.id,
                          columns.filter(el => el.visible || editVisibility).length,
                        )}
                      </React.Fragment>
                    ) : (
                      <TableCell
                        className={this.tableHeadClass(
                          index,
                          columns.filter(el => el.visible || editVisibility).length,
                        )}
                      >
                        <div className="flex-cell flex-column justify-content-space-between align-items-center">
                          <div className="d-flex align-items-center">
                            {column.label}
                            {this.displaySortButton(
                              index,
                              column.id,
                              columns.filter(el => el.visible || editVisibility).length,
                            )}
                          </div>
                          {editVisibility ? (
                            <ToggleButton
                              value={column.visible}
                              handleToggle={this.handleVisibilityToggle}
                              index={index}
                            />
                          ) : null}
                        </div>
                      </TableCell>
                    )}
                  </React.Fragment>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((dataRow, index) => (
              <TableRow key={dataRow.id} className={this.getRowClass(index)}>
                {columns
                  .filter(el => el.visible || editVisibility)
                  .map((column, columnIndex) => (
                    <React.Fragment key={column.id}>
                      {column.expandable ? (
                        <React.Fragment>
                          {this.displayVariableData(
                            columnIndex,
                            index,
                            column.id,
                            columns.filter(el => el.visible || editVisibility).length,
                          )}
                        </React.Fragment>
                      ) : (
                        <TableCell
                          className={this.getRowClass(
                            columnIndex,
                            columns.filter(el => el.visible || editVisibility).length,
                          )}
                        >
                          <div className="d-inline-flex align-items-center justify-content-center">
                            {this.props.editRows ? (
                              <React.Fragment>
                                {columnIndex === 0 ? (
                                  <FormControlLabel
                                    classes={{ root: 'leads-table-single-select-root' }}
                                    control={
                                      <Checkbox
                                        classes={{ root: 'leads-table-single-checkbox-root' }}
                                        color="primary"
                                        checked={
                                          componentMounted
                                            ? tableDataSelectedRow[index]
                                            : componentMounted
                                        }
                                        onChange={this.checkTableRow(index)}
                                      />
                                    }
                                  />
                                ) : null}
                              </React.Fragment>
                            ) : null}
                            <span style={{ display: 'inline ' }}>
                              {column.id === 'name' ? (
                                <Link
                                  className="leads-table-link"
                                  to={`/lead/details/${dataRow['id']}`}
                                >
                                  {dataRow[column.id]}
                                </Link>
                              ) : (
                                dataRow[column.id]
                              )}
                            </span>
                          </div>
                          {this.displayIcons(columnIndex, column.id)}
                        </TableCell>
                      )}
                    </React.Fragment>
                  ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {editRows ? (
          <Fade in={editRows}>
            <div className="d-flex justify-content-end align-items-center">
              <div className="leads-table-edit-section-">
                <Button
                  onClick={this.resetSelectedRows}
                  disableRipple
                  classes={{ root: 'leads-table-bottom-btn-style bg-dark-blue' }}
                >
                  <Typography classes={{ root: 'leads-table-bottom-btn-text' }}>Reset</Typography>
                </Button>
                <Button
                  onClick={this.applySelectedRows}
                  disableRipple
                  classes={{ root: 'leads-table-bottom-btn-style bg-blue' }}
                >
                  <Typography classes={{ root: 'leads-table-bottom-btn-text' }}>Apply</Typography>
                </Button>
              </div>
            </div>
          </Fade>
        ) : null}
        {editVisibility ? (
          <Fade in={editVisibility}>
            <div className="d-flex justify-content-end align-items-center">
              <div className="leads-table-edit-section-">
                <Button
                  onClick={this.resetVisibility}
                  disableRipple
                  classes={{ root: 'leads-table-bottom-btn-style bg-dark-blue' }}
                >
                  <Typography classes={{ root: 'leads-table-bottom-btn-text' }}>Reset</Typography>
                </Button>
                <Button
                  onClick={this.applyVisibility}
                  disableRipple
                  classes={{ root: 'leads-table-bottom-btn-style bg-blue' }}
                >
                  <Typography classes={{ root: 'leads-table-bottom-btn-text' }}>Apply</Typography>
                </Button>
              </div>
            </div>
          </Fade>
        ) : null}
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
)(LeadsTable);
