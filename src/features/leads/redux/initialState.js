// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
const initialState = {
  tableData: [
    {
      id: '1',
      created: '3 Jan 2020',
      name: 'Arindam De',
      email: 'cfo.pixerweb@gmail.com',
      phone: '01 123 456 789',
      company: 'Hyundai',
      custom: 'Married',
      lastActivityType: 'called',
      leadStatus: 'called',
      leadOwnership: '1',
      lastActivity: '12 July 2019',
    },
    {
      id: '2',
      created: '6 Dec 2018',
      name: 'Arindam De',
      email: 'cfo.pixerweb@gmail.com',
      phone: '01 123 456 789',
      company: 'Hyundai',
      custom: 'Married',
      lastActivityType: 'called',
      leadStatus: 'called',
      leadOwnership: '1',
      lastActivity: '3 Jan 2020',
    },
    {
      id: '3',
      created: '6 Dec 2019',
      name: 'Arindam De',
      email: 'cfo.pixerweb@gmail.com',
      phone: '01 123 456 789',
      company: 'Hyundai',
      custom: 'Married',
      lastActivityType: 'called',
      leadStatus: 'called',
      leadOwnership: '1',
      lastActivity: '12 July 2019',
    },
    {
      id: '4',
      created: '6 Nov 2019',
      name: 'Arindam De',
      email: 'cfo.pixerweb@gmail.com',
      phone: '01 123 456 789',
      company: 'Hyundai',
      custom: 'Married',
      lastActivityType: 'called',
      leadStatus: 'called',
      leadOwnership: '1',
      lastActivity: '6 Dec 2019',
    },
  ],
  upcomingTasksCols: [
    { id: 'date', label: 'Task Date' },
    { id: 'personAddedTask', label: 'Task Added By Person' }, // string value in seconds
    { id: 'taskText', label: 'Task' },
  ],
  upcomingTasksData: [
    {
      id: 1,
      title:'Task 1',
      date: '20 Sep 2019',
      time: '10:10 AM',
      location: 'India',
      guests: [
        { id: 1, name: 'cfo@gmail.com' },
        { id: 2, name: 'Paul@gmail.com' },
        { id: 3, name: 'cfo@gmail.com' },
        { id: 4, name: 'Paul@gmail.com' },
      ],
      personAddedTask: 'Ryan',
      taskText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
    },

    {
      id: 2,
      title:'Task 2',
      date: '20 Sep 2019',
      time: '10:10 AM',
      location: 'India',
      guests: [
        { id: 1, name: 'cfo@gmail.com' },
        { id: 2, name: 'Paul@gmail.com' },
        { id: 3, name: 'cfo@gmail.com' },
        { id: 4, name: 'Paul@gmail.com' },
      ],
      personAddedTask: 'Ryan',
      taskText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
    },
    {
      id: 3,
      title:'Task 3',
      date: '20 Sep 2019',
      time: '10:10 AM',
      location: 'India',
      guests: [
        { id: 1, name: 'cfo@gmail.com' },
        { id: 2, name: 'Paul@gmail.com' },
        { id: 3, name: 'cfo@gmail.com' },
        { id: 4, name: 'Paul@gmail.com' },
      ],
      personAddedTask: 'Ryan',
      taskText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, tenetur.',
    },
  ],
};

export default initialState;
