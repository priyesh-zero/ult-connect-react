import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Voicemail extends Component {
  static propTypes = {
    messages: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="messages-voicemail">
        Page Content: messages/Voicemail
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
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Voicemail);
