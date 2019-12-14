import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export class LeadStatusHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { id: 'dateStatusChanged', label: 'Date Staus Changed' },
        { id: 'statusChangeTime', label: 'Status Changed From' },
        { id: 'agentName', label: 'Agent Name' }, // string value in seconds
        { id: 'statusUpdatedFrom', label: 'Status Changed From' },
        { id: 'separator', label: 'null' },
        { id: 'statusUpdatedTo', label: 'Status Updated To' },
      ],
      data: [
        {
          id: 1,
          dateStatusChanged: '20 Sep 2019',
          statusChangeTime: '4:30 pm',
          agentName: 'Ryan',
          statusUpdatedFrom: 'Not Statused',
          statusUpdatedTo: 'Statused',
        },
        {
          id: 2,
          dateStatusChanged: '20 Sep 2019',
          statusChangeTime: '4:30 pm',
          agentName: 'Ryan',
          statusUpdatedFrom: 'Not Statused',
          statusUpdatedTo: 'Statused',
        },
        {
          id: 3,
          dateStatusChanged: '20 Sep 2019',
          statusChangeTime: '4:30 pm',
          agentName: 'Ryan',
          statusUpdatedFrom: 'Not Statused',
          statusUpdatedTo: 'Statused',
        },
        {
          id: 4,
          dateStatusChanged: '20 Sep 2019',
          statusChangeTime: '4:30 pm',
          agentName: 'Ryan',
          statusUpdatedFrom: 'Not Statused',
          statusUpdatedTo: 'Statused',
        },
        {
          id: 5,
          dateStatusChanged: '20 Sep 2019',
          statusChangeTime: '4:30 pm',
          agentName: 'Ryan',
          statusUpdatedFrom: 'Not Statused',
          statusUpdatedTo: 'Statused',
        },
      ],
    };
  }
  static propTypes = {
    leads: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  displayRowData = (id, data, type = 'row') => {
    return id === 'separator' ? (
      <div className="d-flex align-items-center justify-content-center">
        <span
          style={{ height: '1px', background: type === 'row' ? '#000' : '#fff', width: '10px' }}
        ></span>
      </div>
    ) : (
      data
    );
  };
  render() {
    const { columns, data } = this.state;
    return (
      <div className="leads-lead-status-history">
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <React.Fragment key={column.id}>
                  {index === 0 ? (
                    <TableCell className="table-head-cell table-first-cell">
                      {this.displayRowData(column.id, column.label, 'head')}
                    </TableCell>
                  ) : (
                    <React.Fragment>
                      {index + 1 === columns.length ? (
                        <TableCell className="table-head-cell table-last-cell">
                          {this.displayRowData(column.id, column.label, 'head')}
                        </TableCell>
                      ) : (
                        <TableCell className="table-head-cell">
                          {this.displayRowData(column.id, column.label, 'head')}
                        </TableCell>
                      )}
                    </React.Fragment>
                  )}
                </React.Fragment>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((dataRow, dataIndex) => (
              <React.Fragment key={dataIndex}>
                <TableRow>
                  {columns.map((column, colIndex) => (
                    <React.Fragment key={`${column.id}-${dataIndex}-${colIndex}`}>
                      {colIndex === 0 ? (
                        <TableCell
                          style={{ background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC' }}
                          className="table-body-cell table-first-cell"
                        >
                          {this.displayRowData(column.id, dataRow[column.id])}
                        </TableCell>
                      ) : (
                        <React.Fragment>
                          {colIndex + 1 === columns.length ? (
                            <TableCell
                              style={{ background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC' }}
                              className="table-body-cell table-last-cell"
                            >
                              {this.displayRowData(column.id, dataRow[column.id])}
                            </TableCell>
                          ) : (
                            <TableCell
                              style={{ background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC' }}
                              className="table-body-cell"
                            >
                              {this.displayRowData(column.id, dataRow[column.id])}
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
)(LeadStatusHistory);
