import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';

import ImportCsvImage from '../../images/leads/homepage/import_csv.png';
import ImportLeadsManually from '../../images/leads/homepage/import_leads_manually.png';
import ImportSource from '../../images/leads/homepage/import_source.png';
import EyeIcon from '../../images/leads/homepage/EyeIcon.png';

import LeadsTable from './LeadsTable';
import LeadsFitlerDialog from './LeadsFilterDialog';

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leadFilterOpen: false,
      searchValue: '',
      filterValue: '',
      filterOptions: [
        { id: '1', label: 'Filter 01' },
        { id: '2', label: 'Filter 02' },
        { id: '3', label: 'Filter 03' },
      ],
      leadStatusOptions: [
        { id: 'notStatused', label: 'Not Statused' },
        { id: 'called', label: 'Called' },
        { id: 'status1', label: 'Status 01' },
        { id: 'status2', label: 'Status 02' },
      ],
      leadOwnerShipOptions: [
        { id: '1', label: 'Niladri' },
        { id: '2', label: 'Ryan Mier' },
        { id: '3', label: 'Arindam De' },
        { id: '4', label: 'Shashikant Sharma' },
      ],
      leadStatusValue: '',
      leadOwnershipValue: '',
      editRows: false,
      editVisibility: false,
      maunalImportLeads: false,
      csvImportFile: false,
      importFromSource: false,
    };
    this.child = React.createRef();
  }
  componentDidMount() {
    // making sure that the homepage initialy shows the defaul homepage
    this.setState({ maunalImportLeads: false, csvImportFile: false, importFromSource: false });
  }
  enableImportComponent = str => e => {
    this.setState({ [str]: true });
  };
  enableVisibliltyClick = e => {
    if (this.state.editRows === false) {
      this.setState({ editVisibility: true }, () => {});
    }
  };
  closeVisibliltyClick = e => {
    this.setState({ editVisibility: false });
  };
  handleDropDownChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  static propTypes = {
    leads: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  handleChangeText = str => e => {
    this.setState({ [str]: e.target.value });
  };

  openFilterDialog = e => {
    this.setState({ leadFilterOpen: true });
  };
  closeFilterDialog = prop => {
    this.setState({ leadFilterOpen: false });
  };
  handleEditClick = () => {
    if (!this.state.editVisibility) {
      this.setState({
        editRows: true,
      });
    }
  };
  closeEdit = () => {
    this.setState({
      editRows: false,
    });
  };
  render() {
    const {
      leadStatusOptions,
      leadOwnerShipOptions,
      leadStatusValue,
      leadOwnershipValue,
      searchValue,
      leadFilterOpen,
      editRows,
      editVisibility,
      maunalImportLeads,
      csvImportFile,
      importFromSource,
    } = this.state;
    return (
      <div className="leads-homepage">
        <section className="leads-homepage-top-btns">
          <Button
            disableRipple
            classes={{ root: 'leads-homepage-top-btn', label: 'leads-homepage-top-btn-label' }}
          >
            <img src={ImportLeadsManually} alt="" />
            <Typography className="leads-homepage-top-btn-text">Import Leads Manually</Typography>
          </Button>
          <Button
            disableRipple
            classes={{ root: 'leads-homepage-top-btn', label: 'leads-homepage-top-btn-label' }}
          >
            <img src={ImportCsvImage} alt="" />
            <Typography className="leads-homepage-top-btn-text">Import A CSV File</Typography>
          </Button>
          <Button
            disableRipple
            classes={{ root: 'leads-homepage-top-btn', label: 'leads-homepage-top-btn-label' }}
          >
            <img src={ImportSource} alt="" />
            <Typography className="leads-homepage-top-btn-text">Import From A Source</Typography>
          </Button>
        </section>
        {maunalImportLeads || csvImportFile || importFromSource ? (
          'other'
        ) : (
          <React.Fragment>
            <section className="leads-homepage-action-btns">
              <div className="leads-homepage-search-paper">
                <InputBase
                  placeholder="Search Lead Here"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchValue}
                  className="leads-homepage-search-input-base"
                  onChange={this.handleChangeText('searchValue')}
                />
                <IconButton aria-label="search" className="leads-homepage-search-btn">
                  <SearchIcon />
                </IconButton>
              </div>
              <div>
                {/* Filter */}
                <FormControl variant="filled" className="leads-homepage-filter-options">
                  <Select
                    disableUnderline
                    classes={{ root: 'select-root', icon: 'select-head-icon' }}
                    value={this.state.filterValue}
                    onChange={this.handleDropDownChange}
                    inputProps={{
                      name: `filterValue`,
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
                      classes: { list: 'filter-list-root', paper: 'dropdown-paper' },
                    }}
                    displayEmpty
                  >
                    <MenuItem classes={{ root: 'dropdown-item' }} value="">
                      Filter
                    </MenuItem>
                    {this.state.filterOptions.map(option => (
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
                {/* Plus icon */}
                <IconButton
                  disableRipple
                  aria-label="search"
                  className="leads-homepage-add-btn"
                  onClick={this.openFilterDialog}
                >
                  <AddIcon />
                </IconButton>
                {/* Pencil Icon */}
                <IconButton
                  disableRipple
                  aria-label="search"
                  className={
                    editRows
                      ? 'bg-blue leads-homepage-actions-btn'
                      : 'bg-dark-blue leads-homepage-actions-btn'
                  }
                  onClick={this.handleEditClick}
                >
                  <CreateIcon />
                </IconButton>
                {/* Eye Icon */}
                <IconButton
                  disableRipple
                  aria-label="search"
                  className={
                    editVisibility
                      ? 'bg-blue leads-homepage-actions-btn'
                      : 'bg-dark-blue leads-homepage-actions-btn'
                  }
                  onClick={this.enableVisibliltyClick}
                >
                  <img src={EyeIcon} alt="" />
                </IconButton>
              </div>
            </section>
            <section className="leads-homepage-leads-table">
              <LeadsTable
                editRows={editRows}
                leadStatusOptions={leadStatusOptions}
                leadOwnerShipOptions={leadOwnerShipOptions}
                leadStatusValue={leadStatusValue}
                leadOwnershipValue={leadOwnershipValue}
                editVisibility={editVisibility}
                handleDropDownChange={this.handleDropDownChange}
                closeEdit={this.closeEdit}
                closeVisibliltyClick={this.closeVisibliltyClick}
                togglePopup={this.props.togglePopup}
              />
            </section>
          </React.Fragment>
        )}
        <LeadsFitlerDialog
          open={leadFilterOpen}
          onClose={this.closeFilterDialog}
          handleChangeText={this.handleChangeText}
          setDate={this.handleDateChange}
          handleDropDownChange={this.handleDropDownChange}
        />
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
)(Homepage);
