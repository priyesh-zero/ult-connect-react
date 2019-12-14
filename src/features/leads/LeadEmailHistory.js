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
import letterIcon from '../../images/leads/homepage/letterIcon.png';

export class LeadEmailHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { id: 'date', label: 'Date' },
        { id: 'agentName', label: 'Sender Agent Name' },
        { id: 'emailFrom', label: 'Email From' },
        { id: 'emailTo', label: 'Email To' },
        { id: 'separator', label: 'null' },
        { id: 'mailText', label: 'Email Message' },
      ],
      data: [
        {
          id: 1,
          date: '20 Sep 2019',
          agentName: 'Ryan',
          emailFrom: 'cfo.pixerweb@gmail.com',
          emailTo: 'info.james@gmail.com',
          mailText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 2,
          date: '20 Sep 2019',
          agentName: 'Ryan',
          emailFrom: 'cfo.pixerweb@gmail.com',
          emailTo: 'info.james@gmail.com',
          mailText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 3,
          date: '20 Sep 2019',
          agentName: 'Ryan',
          emailFrom: 'cfo.pixerweb@gmail.com',
          emailTo: 'info.james@gmail.com',
          mailText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 4,
          date: '20 Sep 2019',
          agentName: 'Ryan',
          emailFrom: 'cfo.pixerweb@gmail.com',
          emailTo: 'info.james@gmail.com',
          mailText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
        },
        {
          id: 5,
          date: '20 Sep 2019',
          agentName: 'Ryan',
          emailFrom: 'cfo.pixerweb@gmail.com',
          emailTo: 'info.james@gmail.com',
          mailText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
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
      <div className="leads-lead-email-history">
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <React.Fragment key={column.id}>
                  {index === 0 ? (
                    <TableCell
                      style={{
                        textAlign: column.id === 'mailText' ? 'left' : 'center',
                      }}
                      className="table-head-cell table-first-cell"
                    >
                      {this.displayRowData(column.id, column.label, 'head')}
                    </TableCell>
                  ) : (
                    <React.Fragment>
                      {index + 1 === columns.length ? (
                        <TableCell
                          style={{
                            textAlign: column.id === 'mailText' ? 'left' : 'center',
                          }}
                          className="table-head-cell table-last-cell"
                        >
                          {this.displayRowData(column.id, column.label, 'head')}
                        </TableCell>
                      ) : (
                        <TableCell
                          style={{
                            textAlign: column.id === 'mailText' ? 'left' : 'center',
                          }}
                          className="table-head-cell"
                        >
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
                          style={{
                            background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                            textAlign: column.id === 'mailText' ? 'left' : 'center',
                          }}
                          className="table-body-cell table-first-cell"
                        >
                          {this.displayRowData(column.id, dataRow[column.id])}
                        </TableCell>
                      ) : (
                        <React.Fragment>
                          {colIndex + 1 === columns.length ? (
                            <TableCell
                              style={{
                                background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                                textAlign: column.id === 'mailText' ? 'left' : 'center',
                              }}
                              className="table-body-cell table-last-cell"
                            >
                              {this.displayRowData(column.id, dataRow[column.id])}
                            </TableCell>
                          ) : (
                            <TableCell
                              style={{
                                background: dataIndex % 2 === 0 ? '#F3F3F3' : '#FCFCFC',
                                textAlign: column.id === 'mailText' ? 'left' : 'center',
                              }}
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
              <div className="mail-icon-button d-flex align-items-center justify-content-center">
                <img src={letterIcon} alt="larger mail icon" className="mail-icon-img" />
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
)(LeadEmailHistory);
