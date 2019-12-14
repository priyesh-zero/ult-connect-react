import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Popover from '@material-ui/core/Popover';

import LeadAddTask from './LeadAddTask';

import trashIcon from '../../images/leads/homepage/trashIcon.png';
import pencilIcon from '../../images/leads/homepage/pencil.png';
const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      className="tab-panel"
    >
      {children}
    </div>
  );
};
export class LeadTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      pastTasksCols: [
        { id: 'date', label: 'Task Date' },
        { id: 'personAddedTask', label: 'Task Added By Person' }, // string value in seconds
        { id: 'taskText', label: 'Task' },
      ],
      pastTasksData: [
        {
          id: 1,
          date: '20 Sep 2019',
          personAddedTask: 'Ryan',
          taskText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 2,
          date: '20 Sep 2019',

          personAddedTask: 'Ryan',
          taskText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 3,
          date: '20 Sep 2019',

          personAddedTask: 'Ryan',
          taskText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 4,
          date: '20 Sep 2019',

          personAddedTask: 'Ryan',
          taskText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 5,
          date: '20 Sep 2019',

          personAddedTask: 'Ryan',
          taskText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
      ],
      tasksAnchors: null,
      componentMounted: false,
      activePopover: 0,
      openAddTask: false,
    };
  }

  openAddTaskDialog = e => {
    console.log('set opendadd tasd to true;');
    this.setState({
      openAddTask: true,
    });
  };
  closeAddTaskDialog = e => {
    this.setState({
      openAddTask: false,
    });
  };
  createTaskPopOverAnchors = () => {
    const len = this.props.leads.upcomingTasksData.length;
    let arr = [];
    for (let i = 0; i < len; ++i) arr.push(null);
    this.setState({
      tasksAnchors: arr,
    });
  };
  componentDidMount() {
    this.createTaskPopOverAnchors();
    this.setState({
      componentMounted: true,
    });
  }
  handleClosePopover = index => e => {
    console.log('target close');
    this.setState(state => {
      let arr = state.tasksAnchors;
      arr[index] = null;
      return { tasksAnchors: arr, activePopover: 0 };
    });
  };
  openPopover = index => e => {
    const target = e.currentTarget;
    this.setState(state => {
      let arr = state.tasksAnchors;
      arr[index] = target;
      return { tasksAnchors: [...arr], activePopover: index };
    });
  };
  static propTypes = {
    leads: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  a11yProps = index => {
    return {
      id: `lead-tasks-tab-${index}`,
      'aria-controls': `lead-tasks-tabpanel-${index}`,
    };
  };
  handleChangeTab = str => (e, val) => {
    this.setState({ [str]: val });
  };
  render() {
    const {
      activePopover,
      activeTab,
      pastTasksCols,
      pastTasksData,
      componentMounted,
      tasksAnchors,
    } = this.state;
    const { upcomingTasksCols, upcomingTasksData } = this.props.leads;
    return (
      <div className="leads-lead-tasks">
        <Typography classes={{ root: 'lead-tasks-Heading' }}>Notes</Typography>
        <div className="d-flex-col-reverse">
          <Box className="tabspanels-section">
            <TabPanel value={activeTab} index={0}>
              <Table>
                <TableHead>
                  <TableRow>
                    {upcomingTasksCols.map((column, index) => (
                      <React.Fragment key={index}>
                        {index === 0 ? (
                          <TableCell
                            style={{
                              textAlign: column.id === 'taskText' ? 'left' : 'center',
                            }}
                            className="table-head-cell table-first-cell"
                          >
                            {column.id === 'separator' ? '---' : column.label}
                          </TableCell>
                        ) : (
                          <React.Fragment>
                            {index + 1 === upcomingTasksCols.length ? (
                              <TableCell
                                style={{
                                  textAlign: column.id === 'taskText' ? 'left' : 'center',
                                }}
                                className="table-head-cell table-last-cell"
                              >
                                {column.id === 'separator' ? '---' : column.label}
                              </TableCell>
                            ) : (
                              <TableCell
                                style={{
                                  textAlign: column.id === 'taskText' ? 'left' : 'center',
                                }}
                                className="table-head-cell"
                              >
                                {column.id === 'separator' ? '---' : column.label}
                              </TableCell>
                            )}
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {upcomingTasksData.map((dataRow, dataIndex) => (
                    <React.Fragment key={dataIndex}>
                      <TableRow
                        // id={`table-tasks-row-${dataIndex}`}
                        classes={{ root: 'cursor-pointer' }}
                        onClick={this.openPopover(dataIndex)}
                      >
                        {upcomingTasksCols.map((column, colIndex) => (
                          <React.Fragment key={`${column.id}-${dataIndex}-${colIndex}`}>
                            {colIndex === 0 ? (
                              <TableCell
                                style={{
                                  background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                                  textAlign: column.id === 'taskText' ? 'left' : 'center',
                                }}
                                className="table-body-cell table-first-cell"
                              >
                                {dataRow[column.id]}
                              </TableCell>
                            ) : (
                              <React.Fragment>
                                {colIndex + 1 === upcomingTasksCols.length ? (
                                  <TableCell
                                    style={{
                                      background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                                      textAlign: column.id === 'taskText' ? 'left' : 'center',
                                    }}
                                    className="table-body-cell table-last-cell"
                                  >
                                    {dataRow[column.id]}
                                  </TableCell>
                                ) : (
                                  <TableCell
                                    style={{
                                      background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                                      textAlign: column.id === 'taskText' ? 'left' : 'center',
                                    }}
                                    className="table-body-cell"
                                  >
                                    {dataRow[column.id]}
                                  </TableCell>
                                )}
                              </React.Fragment>
                            )}
                          </React.Fragment>
                        ))}
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
              <div className="d-flex-reverse">
                <span className="d-flex align-items-center">
                  <div style={{ padding: '5px', paddingTop: '10px' }}>
                    <div className="expand-icon-button d-flex align-items-center justify-content-center">
                      <ExpandMoreIcon />
                    </div>
                  </div>
                  <div style={{ padding: '5px', paddingTop: '10px' }}>
                    <div className="expand-icon-button d-flex align-items-center justify-content-center">
                      <ExpandLessIcon />
                    </div>
                  </div>
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  disableFocusRipple
                  classes={{ root: 'lead-tasks-add-btn-root' }}
                  onClick={this.openAddTaskDialog}
                >
                  Add Your Tasks
                </Button>
              </div>
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
              <Table>
                <TableHead>
                  <TableRow>
                    {pastTasksCols.map((column, index) => (
                      <React.Fragment key={index}>
                        {index === 0 ? (
                          <TableCell
                            style={{
                              textAlign: column.id === 'taskText' ? 'left' : 'center',
                            }}
                            className="table-head-cell table-first-cell"
                          >
                            {column.id === 'separator' ? '---' : column.label}
                          </TableCell>
                        ) : (
                          <React.Fragment>
                            {index + 1 === pastTasksCols.length ? (
                              <TableCell
                                style={{
                                  textAlign: column.id === 'taskText' ? 'left' : 'center',
                                }}
                                className="table-head-cell table-last-cell"
                              >
                                {column.id === 'separator' ? '---' : column.label}
                              </TableCell>
                            ) : (
                              <TableCell
                                style={{
                                  textAlign: column.id === 'taskText' ? 'left' : 'center',
                                }}
                                className="table-head-cell"
                              >
                                {column.id === 'separator' ? '---' : column.label}
                              </TableCell>
                            )}
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pastTasksData.map((dataRow, dataIndex) => (
                    <React.Fragment key={dataIndex}>
                      <TableRow>
                        {pastTasksCols.map((column, colIndex) => (
                          <React.Fragment key={`${column.id}-${dataIndex}-${colIndex}`}>
                            {colIndex === 0 ? (
                              <TableCell
                                style={{
                                  background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                                  textAlign: column.id === 'taskText' ? 'left' : 'center',
                                }}
                                className="table-body-cell table-first-cell"
                              >
                                {dataRow[column.id]}
                              </TableCell>
                            ) : (
                              <React.Fragment>
                                {colIndex + 1 === pastTasksCols.length ? (
                                  <TableCell
                                    style={{
                                      background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                                      textAlign: column.id === 'taskText' ? 'left' : 'center',
                                    }}
                                    className="table-body-cell table-last-cell"
                                  >
                                    {dataRow[column.id]}
                                  </TableCell>
                                ) : (
                                  <TableCell
                                    style={{
                                      background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                                      textAlign: column.id === 'taskText' ? 'left' : 'center',
                                    }}
                                    className="table-body-cell"
                                  >
                                    {dataRow[column.id]}
                                  </TableCell>
                                )}
                              </React.Fragment>
                            )}
                          </React.Fragment>
                        ))}
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
              <div className="d-flex-reverse">
                <span className="d-flex align-items-center">
                  <div style={{ padding: '5px', paddingTop: '10px' }}>
                    <div className="expand-icon-button d-flex align-items-center justify-content-center">
                      <ExpandMoreIcon />
                    </div>
                  </div>
                  <div style={{ padding: '5px', paddingTop: '10px' }}>
                    <div className="expand-icon-button d-flex align-items-center justify-content-center">
                      <ExpandLessIcon />
                    </div>
                  </div>
                </span>
              </div>
            </TabPanel>
          </Box>
          <Tabs
            classes={{
              indicator: 'custom-indications',
            }}
            value={activeTab}
            onChange={this.handleChangeTab('activeTab')}
            aria-label="Vertical tabs example"
          >
            <Tab
              disableRipple
              classes={{ selected: 'selected-tab', root: 'tab-style' }}
              label="Upcoming Tasks"
              {...this.a11yProps(0)}
            />
            <Tab
              disableRipple
              classes={{ selected: 'selected-tab', root: 'tab-style' }}
              label="Past Tasks"
              {...this.a11yProps(1)}
            />
          </Tabs>
        </div>
        {componentMounted &&
          tasksAnchors.map((anchor, index) => (
            <Popover
              key={index}
              open={Boolean(anchor)}
              anchorEl={anchor}
              onClose={this.handleClosePopover(index)}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              classes={{
                paper: 'lead-tasks-popover-paper',
              }}
              getContentAnchorEl={null}
            >
              <div className="task-detail-heading-container d-flex justify-content-space-between align-items-center">
                <Typography classes={{ root: 'task-details-text' }}>
                  {upcomingTasksData[activePopover].title}
                </Typography>
                <span className="d-flex">
                  <div className="pencil-btn d-flex align-items-center justify-content-center cursor-pointer">
                    <img className="pencil-img" src={pencilIcon} alt="" />
                  </div>
                  <div className="trash-btn d-flex align-items-center justify-content-center cursor-pointer">
                    <img className="trash-img" src={trashIcon} alt="" />
                  </div>
                </span>
              </div>

              <div className="lead-details-table">
                <table className="lead-details-table ">
                  <tbody>
                    {upcomingTasksData[activePopover].date && (
                      <tr className="lead-details-row">
                        <td className="lead-details-left">
                          <Typography classes={{ root: 'text' }}>Task Date</Typography>
                        </td>
                        <td className="lead-details-right">
                          <Typography classes={{ root: 'text' }}>
                            {upcomingTasksData[activePopover].date}
                          </Typography>
                        </td>
                      </tr>
                    )}
                    {upcomingTasksData[activePopover].time && (
                      <tr className="lead-details-row">
                        <td className="lead-details-left">
                          <Typography classes={{ root: 'text' }}>Task Time</Typography>
                        </td>
                        <td className="lead-details-right">
                          <Typography classes={{ root: 'text' }}>
                            {upcomingTasksData[activePopover].time}
                          </Typography>
                        </td>
                      </tr>
                    )}
                    {upcomingTasksData[activePopover].personAddedTask && (
                      <tr className="lead-details-row">
                        <td className="lead-details-left">
                          <Typography classes={{ root: 'text' }}>Task Added By</Typography>
                        </td>
                        <td className="lead-details-right">
                          <Typography classes={{ root: 'text' }}>
                            {upcomingTasksData[activePopover].personAddedTask}
                          </Typography>
                        </td>
                      </tr>
                    )}
                    {upcomingTasksData[activePopover].location && (
                      <tr className="lead-details-row">
                        <td className="lead-details-left">
                          <Typography classes={{ root: 'text' }}>Location</Typography>
                        </td>
                        <td className="lead-details-right">
                          <Typography classes={{ root: 'text' }}>
                            {upcomingTasksData[activePopover].location}
                          </Typography>
                        </td>
                      </tr>
                    )}
                    {upcomingTasksData[activePopover].taskText && (
                      <tr className="lead-details-row">
                        <td className="lead-details-left">
                          <Typography classes={{ root: 'text' }}>Description</Typography>
                        </td>
                        <td className="lead-details-right">
                          <Typography classes={{ root: 'text' }}>
                            {upcomingTasksData[activePopover].taskText}
                          </Typography>
                        </td>
                      </tr>
                    )}
                    {upcomingTasksData[activePopover].guests && (
                      <tr className="lead-details-row">
                        <td className="lead-details-left">
                          <Typography classes={{ root: 'text' }}>Guests</Typography>
                        </td>
                        <td className="lead-details-right">
                          {upcomingTasksData[activePopover].guests.map(guest => (
                            <Typography key={guest.id} classes={{ root: 'text' }}>
                              {guest.name}
                            </Typography>
                          ))}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-center">
                <Button classes={{ root: 'mark-complete-btn' }}>Mark AS Complete</Button>
              </div>
            </Popover>
          ))}
        <LeadAddTask open={this.state.openAddTask} closeDialog={this.closeAddTaskDialog} />
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
)(LeadTasks);
