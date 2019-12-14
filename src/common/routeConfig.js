import { App } from '../features/home';
import { PageNotFound } from '../features/common';
import homeRoute from '../features/home/route';
import commonRoute from '../features/common/route';
import _ from 'lodash';
import sidebarRoute from '../features/sidebar/route';
import dashboardRoute from '../features/dashboard/route';
import topbarRoute from '../features/topbar/route';
import leadsRoute from '../features/leads/route';
import messagesRoute from '../features/messages/route';
import referralsRoute from '../features/referrals/route';
import taskRoute from '../features/task/route';
import configurationRoute from '../features/configuration/route';
import manageRoute from '../features/manage/route';
import settingsRoute from '../features/settings/route';
import reportingRoute from '../features/reporting/route';
import hierarchyRoute from '../features/hierarchy/route';
import testRoute from '../features/test/route';

// NOTE: DO NOT CHANGE the 'childRoutes' name and the declaration pattern.
// This is used for Rekit cmds to register routes config for new features, and remove config when remove features, etc.
const childRoutes = [
  homeRoute,
  commonRoute,
  sidebarRoute,
  dashboardRoute,
  topbarRoute,
  leadsRoute,
  messagesRoute,
  referralsRoute,
  taskRoute,
  configurationRoute,
  manageRoute,
  settingsRoute,
  reportingRoute,
  hierarchyRoute,
  testRoute,
];

const routes = [{
  path: '/',
  component: App,
  childRoutes: [
    ...childRoutes,
    { path: '*', name: 'Page not found', component: PageNotFound },
  ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)),
}];

// Handle isIndex property of route config:
//  Dupicate it and put it as the first route rule.
function handleIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  const indexRoute = _.find(route.childRoutes, (child => child.isIndex));
  if (indexRoute) {
    const first = { ...indexRoute };
    first.path = '';
    first.exact = true;
    first.autoIndexRoute = true; // mark it so that the simple nav won't show it.
    route.childRoutes.unshift(first);
  }
  route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);
export default routes;
