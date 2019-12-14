import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { Typography } from '@material-ui/core';

export class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgShortDesc: [
        { id: 1, name: 'Arindam De', date: '23 Aug', notification: 'Email Message Received' },
        { id: 2, name: 'Shashikant', date: '23 Aug', notification: 'Email Message Received' },
        { id: 3, name: 'Arindam De', date: '23 Aug', notification: 'Email Message Received' },
        { id: 4, name: 'Arindam De', date: '23 Aug', notification: 'Email Message Received' },
        { id: 5, name: 'Arindam De', date: '23 Aug', notification: 'Email Message Received' },
        { id: 6, name: 'Arindam De', date: '23 Aug', notification: 'Email Message Received' },
        { id: 7, name: 'Arindam De', date: '23 Aug', notification: 'Email Message Received' },
      ],
      chatDetails: null,
      componentMounted: false,
      activeChat: 2,
    };
  }
  componentDidMount() {
    this.getChatData(this.state.activeChat);
    this.setState({ componentMounted: true });
  }
  getChatData = async id => {
    await this.props.actions.getChat(id);
    const query = this.props.messages.activeChat[0];
    this.setState({ chatDetails: query });
  };
  static propTypes = {
    messages: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  setActiveChat = index => e => {
    this.setState({ activeChat: index });
    this.getChatData(index);
  };
  render() {
    const { msgShortDesc, activeChat, chatDetails, componentMounted } = this.state;

    return (
      <div className="messages-messages">
        <section className="chat-app d-flex">
          <div className="left-section flex-column">
            {msgShortDesc.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  onClick={this.setActiveChat(item.id)}
                  className={activeChat === item.id ? 'active contact-box' : 'contact-box'}
                >
                  <span className="arrow"></span>
                  <span>
                    <Typography classes={{ root: 'user-name' }}>{item.name}</Typography>
                    <Typography classes={{ root: 'chat-notification' }}>
                      {item.notification}
                    </Typography>
                    <Typography classes={{ root: 'notification-date' }}>{item.date}</Typography>
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="right-section">
            {componentMounted === true && chatDetails !== null ? (
              <React.Fragment>
                <Typography classes={{ root: 'username-heading' }}>{chatDetails.name}</Typography>
                <div className="d-flex">
                  <div className="chat-bubble d-flex text-out">
                    <div className="indicator-container">
                      <div className="indicator"></div>
                    </div>
                    <div className="message-body">
                      <Typography classes={{ root: 'message-heading' }}>Textr rec</Typography>
                    </div>
                  </div>
                </div>

                {/* {chatDetails.history.map((item, index) => (
                  <React.Fragment key={index}>
                    
                  </React.Fragment>
                ))} */}
              </React.Fragment>
            ) : null}
          </div>
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
)(Messages);
