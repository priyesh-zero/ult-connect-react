import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { NavLink, withRouter } from 'react-router-dom';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import configurationIcon from '../../images/sidebar/configuration.png';
import dashboardIcon from '../../images/sidebar/dashboard.png';
import hierarchyIcon from '../../images/sidebar/hierarchy.png';
import leadsIcon from '../../images/sidebar/leads.png';
import manageIcon from '../../images/sidebar/manage.png';
import referralIcon from '../../images/sidebar/referral.png';
import reportingIcon from '../../images/sidebar/reporting.png';
import settingsIcon from '../../images/sidebar/settings.png';
import taskIcon from '../../images/sidebar/task.png';
import messagesIcon from '../../images/sidebar/messages.png';

import ultConnectIcon from '../../images/sidebar/ultconnet-icon.png';

const NavLinkCustom = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

const styles = theme => {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    y = w.innerHeight || e.clientHeight || g.clientHeight;
  return {
    paperAnchor: {
      border: '0',
      boxShadow: `rgba(0, 0, 0, 0.06) 1px ${110 - y}px 5px 3px,
                  rgba(0, 0, 0, 0.06) 1px ${150}px 5px 3px`,
      '&::-webkit-scrollbar': {
        width: '4px',
      },
      '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(58, 120, 233, 0.5)',
        outline: '1px solid slategrey',
      },
    },
  };
};

class LeftDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true,
      dashLinks: [
        { active: false, id: 'leads', title: 'Leads', icon: leadsIcon },
        { active: false, id: 'messages', title: 'Messages', icon: messagesIcon },
        { active: false, id: 'referrals', title: 'Refereals', icon: referralIcon },
        { active: false, id: 'task', title: 'Task', icon: taskIcon },
        { active: false, id: 'dashboard', title: 'Dashboard', icon: dashboardIcon },
        {
          id: 'configuration',
          title: 'Configuration',
          icon: configurationIcon,
          expand: false,
          list: [
            { active: false, id: 'signature', title: 'Signature' },
            { active: false, id: 'template-menu', title: 'Template Menu' },
            { active: false, id: 'template-creation', title: 'Template Creation' },
            { active: false, id: 'campaign', title: 'Campaign' },
          ],
        },
        {
          id: 'manage',
          title: 'Manage',
          icon: manageIcon,
          expand: false,
          list: [
            { active: false, id: 'status-management', title: 'Status Management' },
            { active: false, id: 'manage-lead-source', title: 'Manage Lead Source' },
            { active: false, id: 'webhook-management', title: 'Webhook Management' },
            { active: false, id: 'distribution-and-tags', title: 'Distribution & Tags' },
          ],
        },
        { active: false, id: 'settings', title: 'Settings', icon: settingsIcon },
        {
          id: 'reporting',
          title: 'Reporting',
          icon: reportingIcon,
          expand: false,
          list: [
            { active: false, id: 'call-history', title: 'Call History' },
            { active: false, id: 'activity-report', title: 'Activity Report' },
            { active: false, id: 'performance-reporting', title: 'Performance Reporting' },
            { active: false, id: 'inbounce-ivr-reporting', title: 'Inbounce IVR Reporting' },
            { active: false, id: 'predictive-ivr-reporting', title: 'Predictive IVR Reporting' },
          ],
        },
        { id: 'hierarchy', title: 'Hierarchy', icon: hierarchyIcon },
      ],
    };
  }
  toggleSubMenu = index => e => {
    this.setState(state => {
      let list = [];
      list.push(
        state.dashLinks.map((link, i) => {
          if (i === index) {
            link.expand = !link.expand;
          }
          return link;
        }),
      );
      return { list };
    });
  };

  static propTypes = {
    sidebar: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { drawerStatus, classes } = this.props;
    const { dashLinks } = this.state;
    return (
      <div className="sidebar-left-drawer">
        <Drawer
          classes={{
            paper: 'left-drawer',
            paperAnchorLeft: classes.paperAnchor,
          }}
          variant="persistent"
          anchor="left"
          className={classes.customScroll}
          open={drawerStatus}
        >
          <div className="dash-logo-container">
            <div className="dash-logo-fragment">
              <img className="dash-logo-icon" src={ultConnectIcon} alt="" />
              <Typography classes={{ root: 'dash-ultconnect-icon-ult' }}>Ult</Typography>
              <Typography classes={{ root: 'dash-ultconnect-icon-connect' }}>Connect</Typography>
            </div>
          </div>
          <List classes={{ root: 'dash-list-root' }}>
            {dashLinks.map((dash, index) => (
              <React.Fragment key={dash.id}>
                {dash.expand !== undefined ? (
                  <React.Fragment>
                    <ListItem
                      onClick={this.toggleSubMenu(index)}
                      classes={{ root: 'dash-item', gutters: 'dash-gutters' }}
                      button
                      key={dash.id}
                    >
                      <ListItemIcon classes={{ root: 'dash-icons-container' }}>
                        <img className="dash-link-icon" src={dash.icon} alt="" />
                      </ListItemIcon>
                      <ListItemText classes={{ primary: 'dash-link-text' }} primary={dash.title} />
                      {dash.expand ? <ExpandLess /> : <ChevronRightIcon />}
                    </ListItem>
                    <Collapse component="li" in={dash.expand} timeout="auto" unmountOnExit>
                      {dash.list.map(item => (
                        <ListItem
                          classes={{ root: 'dash-item', gutters: 'dash-gutters' }}
                          button
                          key={item.id}
                          component={NavLinkCustom}
                          to={`/${dash.id}/${item.id}`}
                          activeStyle={{
                            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
                            color: 'rgba(58, 120, 233, 1)',
                            backgroundColor: 'rgba(58, 120, 233, 0.05)',
                          }}
                        >
                          <ListItemIcon classes={{ root: 'dash-icons-container' }}>
                            <span
                              style={{ width: '29px', height: '22px' }}
                              className="dash-link-icon"
                            />
                          </ListItemIcon>

                          <ListItemText
                            classes={{ primary: 'dash-link-text' }}
                            primary={item.title}
                          />
                        </ListItem>
                      ))}
                    </Collapse>
                  </React.Fragment>
                ) : (
                  <ListItem
                    classes={{ root: 'dash-item', gutters: 'dash-gutters' }}
                    button
                    component={NavLinkCustom}
                    to={`/${dash.id}/`}
                    key={dash.id}
                    activeStyle={{
                      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
                      color: 'rgba(58, 120, 233, 1)',
                      backgroundColor: 'rgba(58, 120, 233, 0.05)',
                    }}
                  >
                    <ListItemIcon classes={{ root: 'dash-icons-container' }}>
                      <img className="dash-link-icon" src={dash.icon} alt="" />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: 'dash-link-text' }} primary={dash.title} />
                  </ListItem>
                )}
              </React.Fragment>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    sidebar: state.sidebar,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withStyles(styles)(LeftDrawer)),
);
