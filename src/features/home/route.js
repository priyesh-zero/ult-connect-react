import { Homepage } from './';
export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: Homepage, isIndex: true },
    { path: "leads", name: "Leads Homepage", component: Homepage },
    { path: "lead/details/:id", name: "Leads Details", component: Homepage },
    { path: "messages", name: "Messages Homepage", component: Homepage },
    { path: "referrals", name: "Referrals Homepage", component: Homepage },
    { path: "task", name: "Task Homepage", component: Homepage },
    { path: "dashboard", name: "Dashboard Homepage", component: Homepage },
    { path: "settings", name: "Settings Homepage", component: Homepage },
    { path: "hierarchy", name: "Hierarchy Homepage", component: Homepage },
  ],
};
