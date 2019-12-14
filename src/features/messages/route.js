// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  Messages,
  Voicemail,
} from './';

export default {
  path: 'messages',
  name: 'Messages',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'messages-home', name: 'Messages', component: Messages },
    { path: 'voice-mail', name: 'Voicemail', component: Voicemail },
  ],
};
