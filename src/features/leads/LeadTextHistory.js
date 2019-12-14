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
import chatIcon from '../../images/leads/homepage/chatIcon.png';
export class LeadTextHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { id: 'date', label: 'Date' },
        { id: 'agentName', label: 'Agent Name' }, // string value in seconds
        { id: 'smsText', label: 'SMS / MMS' },
      ],
      data: [
        {
          id: 1,
          date: '20 Sep 2019',
          agentName: 'Ryan',
          smsText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 2,
          date: '20 Sep 2019',

          agentName: 'Ryan',
          smsText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 3,
          date: '20 Sep 2019',

          agentName: 'Ryan',
          smsText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 4,
          date: '20 Sep 2019',

          agentName: 'Ryan',
          smsText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 5,
          date: '20 Sep 2019',

          agentName: 'Ryan',
          smsText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
      ],
    };
  }
  static propTypes = {
    leads: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { columns, data } = this.state;
    return (
      <div className="leads-lead-text-history">
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <React.Fragment key={column.id}>
                  {index === 0 ? (
                    <TableCell
                      style={{
                        textAlign: column.id === 'smsText' ? 'left' : 'center',
                      }}
                      className="table-head-cell table-first-cell"
                    >
                      {column.id === 'separator' ? '---' : column.label}
                    </TableCell>
                  ) : (
                    <React.Fragment>
                      {index + 1 === columns.length ? (
                        <TableCell
                          style={{
                            textAlign: column.id === 'smsText' ? 'left' : 'center',
                          }}
                          className="table-head-cell table-last-cell"
                        >
                          {column.id === 'separator' ? '---' : column.label}
                        </TableCell>
                      ) : (
                        <TableCell
                          style={{
                            textAlign: column.id === 'smsText' ? 'left' : 'center',
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
            {data.map((dataRow, dataIndex) => (
              <React.Fragment key={dataIndex}>
                <TableRow>
                  {columns.map((column, colIndex) => (
                    <React.Fragment key={`${column.id}-${dataIndex}-${colIndex}`}>
                      {colIndex === 0 ? (
                        <TableCell
                          style={{
                            background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                            textAlign: column.id === 'smsText' ? 'left' : 'center',
                          }}
                          className="table-body-cell table-first-cell"
                        >
                          {dataRow[column.id]}
                        </TableCell>
                      ) : (
                        <React.Fragment>
                          {colIndex + 1 === columns.length ? (
                            <TableCell
                              style={{
                                background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                                textAlign: column.id === 'smsText' ? 'left' : 'center',
                              }}
                              className="table-body-cell table-last-cell"
                            >
                              {dataRow[column.id]}
                            </TableCell>
                          ) : (
                            <TableCell
                              style={{
                                background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                                textAlign: column.id === 'smsText' ? 'left' : 'center',
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
              <div className="chat-icon-button d-flex align-items-center justify-content-center">
                <img src={chatIcon} alt="larger chat icon" className="chat-icon-img" />
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
)(LeadTextHistory);
