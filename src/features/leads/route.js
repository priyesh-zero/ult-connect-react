// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Homepage,
  LeadsTable,
  LeadDetails,
} from './';

export default {
  path: 'leads',
  name: 'Leads',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: Homepage, isIndex: true },
    {path:'leadstable',component:LeadsTable},
    { path: 'lead-details', name: 'Lead details', component: LeadDetails }
  ],
};
