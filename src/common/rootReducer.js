import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';
import sidebarReducer from '../features/sidebar/redux/reducer';
import dashboardReducer from '../features/dashboard/redux/reducer';
import topbarReducer from '../features/topbar/redux/reducer';
import leadsReducer from '../features/leads/redux/reducer';
import messagesReducer from '../features/messages/redux/reducer';
import referralsReducer from '../features/referrals/redux/reducer';
import taskReducer from '../features/task/redux/reducer';
import configurationReducer from '../features/configuration/redux/reducer';
import manageReducer from '../features/manage/redux/reducer';
import settingsReducer from '../features/settings/redux/reducer';
import reportingReducer from '../features/reporting/redux/reducer';
import hierarchyReducer from '../features/hierarchy/redux/reducer';
import testReducer from '../features/test/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage them.

const reducerMap = {
  router: routerReducer,
  home: homeReducer,
  common: commonReducer,
  sidebar: sidebarReducer,
  dashboard: dashboardReducer,
  topbar: topbarReducer,
  leads: leadsReducer,
  messages: messagesReducer,
  referrals: referralsReducer,
  task: taskReducer,
  configuration: configurationReducer,
  manage: manageReducer,
  settings: settingsReducer,
  reporting: reportingReducer,
  hierarchy: hierarchyReducer,
  test: testReducer,
};

export default combineReducers(reducerMap);
