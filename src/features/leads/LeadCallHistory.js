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

import largePhoneIcon from '../../images/leads/homepage/largePhoneIcon.png';

export class LeadCallHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { id: 'callDate', label: 'Call Date' },
        { id: 'agentName', label: 'Agent Called Name' },
        { id: 'callDuration', label: 'How Long Call Lasted' }, // string value in seconds
        { id: 'leadStatusWhenCalled', label: 'Lead Status When Called' },
      ],
      data: [
        {
          id: 1,
          callDate: '20 Sep 2019',
          agentName: 'Arindam De',
          callDuration: '25',
          leadStatusWhenCalled: 'Not Statused',
        },
        {
          id: 2,
          callDate: '20 Sep 2019',
          agentName: 'Arindam De',
          callDuration: '125',
          leadStatusWhenCalled: 'Not Statused',
        },
        {
          id: 3,
          callDate: '20 Sep 2019',
          agentName: 'Arindam De',
          callDuration: '3680',
          leadStatusWhenCalled: 'Not Statused',
        },
        {
          id: 4,
          callDate: '20 Sep 2019',
          agentName: 'Arindam De',
          callDuration: '25',
          leadStatusWhenCalled: 'Not Statused',
        },
      ],
    };
  }
  static propTypes = {
    leads: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  getTime = d => {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);

    let hDisplay = h > 0 ? (h < 10 ? '0' : '') + h + ':' : '';
    let mDisplay = m > 0 ? (m < 10 ? '0' : '') + m + ':' : '00:';
    let sDisplay = s > 0 ? (s < 10 ? '0' : '') + s + ' sec' : '';
    return hDisplay + mDisplay + sDisplay;
  };

  displayRowData = (id, val) => {
    return id === 'callDuration' ? this.getTime(val) : val;
  };

  render() {
    const { data, columns } = this.state;
    return (
      <div className="leads-lead-call-history">
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <React.Fragment key={column.id}>
                  {index === 0 ? (
                    <TableCell className="table-head-cell table-first-cell">
                      {column.label}
                    </TableCell>
                  ) : (
                    <React.Fragment>
                      {index + 1 === columns.length ? (
                        <TableCell className="table-head-cell table-last-cell">
                          {column.label}
                        </TableCell>
                      ) : (
                        <TableCell className="table-head-cell">{column.label}</TableCell>
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
              <div className="phone-icon-button d-flex align-items-center justify-content-center">
                <img src={largePhoneIcon} alt="larger phone icon" className="phone-icon-img" />
              </div>
            </div>
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
)(LeadCallHistory);
