import React, { Component } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import LeftDrawer from '../sidebar/LeftDrawer';
import Topbar from '../topbar/Topbar';
import Bottombar from '../Bottombar'

import Leads from '../leads/Homepage';
import LeadDetails from '../leads/LeadDetails';
import Messages from '../messages/Homepage';
import Referrals from '../referrals/Homepage';
import Task from '../task/Homepage';
import Dashboard from '../dashboard/Homepage';
import Settings from '../settings/Homepage';
import Hierarchy from '../hierarchy/Homepage';
import PricingPage from '../pricing'
import ManualDial from '../leads/ManualDial'

const Hamburger = props => {
  let margin = '0px';
  if (props.opened) {
    margin = '260px';
  }
  const theme = useTheme();
  return (
    <React.Fragment>
      <div
        onClick={props.opened ? props.handleDrawerClose : props.handleDrawerOpen}
        style={{
          cursor: 'pointer',
          width: '15px',
          height: '20px',
          background: '#fefefe',
          boxShadow: 'rgba(0, 0, 0, 0.06) 1px 0px 5px 3px',
          position: 'fixed',
          padding: '7px',
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px',
          marginTop: '0px',
          zIndex: '1201',
          marginLeft: margin,
          transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              height: '3px',
              backgroundColor: 'rgba(58, 120, 233, 1)',
              marginBottom: '5px',
              width: '100%',
            }}
          ></div>
          <div
            style={{
              height: '3px',
              backgroundColor: 'rgba(58, 120, 233, 1)',
              marginBottom: '5px',
              width: '100%',
            }}
          ></div>
          <div
            style={{
              height: '3px',
              backgroundColor: 'rgba(58, 120, 233, 1)',
              marginBottom: '5px',
              width: '100%',
            }}
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Content = props => {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;
  // y = w.innerHeight || e.clientHeight || g.clientHeight;
  let margin = '0px';
  if (props.opened) {
    margin = '260px';
    x -= 260;
  }
  const theme = useTheme();
  return (
    <div
      style={{
        width: x - 60 + 'px',
        marginTop: '100px',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '30px',
        paddingRight: '10px',
        marginLeft: margin,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      <Router>
        <Switch>
          <Route path="/leads" render={() => (<Leads togglePopup={props.togglePopup} />)} exact />
          <Route path="/lead/details/:id" component={LeadDetails} exact />
          <Route path="/messages" component={Messages} exact />
          <Route path="/referrals" component={Referrals} exact />
          <Route path="/task" component={Task} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/settings" component={Settings} exact />
          <Route path="/hierarchy" component={Hierarchy} exact />
          <Route path="/" component={PricingPage} exact />
        </Switch>
      </Router>
    </div>
  );
};

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true,
      popup: false
    };
  }
  static propTypes = {};
  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };
  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };
  togglePopup = (state) => {
    this.setState({ popup: state})
  }
  render() {
    const { drawerOpen, popup } = this.state;
    return (
      <div className="home-homepage">
        <LeftDrawer drawerStatus={drawerOpen} />
        <Hamburger
          opened={drawerOpen}
          handleDrawerOpen={this.handleDrawerOpen}
          handleDrawerClose={this.handleDrawerClose}
        />
        <React.Fragment>
          <Topbar opened={drawerOpen} />
          <Content opened={drawerOpen} togglePopup={this.togglePopup} />
          <Bottombar
            togglePopup={this.togglePopup}
           />
          <ManualDial
            popup={popup}
            togglePopup={this.togglePopup}
           />
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(Homepage);
