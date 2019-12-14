import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Popover from '@material-ui/core/Popover';
export class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: null,
    };
  }
  static propTypes = {
    test: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  handleClick = event => {
    console.log('console log', event.currentTarget);
    this.setState({ anchor: event.currentTarget });
  };
  handleClose = e => {
    this.setState({ anchor: null });
  };
  render() {
    const { toggleValue } = this.state;
    return (
      <div className="test-default-page" style={{ padding: '40px', background: '#ffffff' }}>
        <button onClick={this.handleClick}>click heree</button>
        <Popover
          open={Boolean(this.state.anchor)}
          anchorEl={this.state.anchor}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          popover
        </Popover>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    test: state.test,
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
)(DefaultPage);
