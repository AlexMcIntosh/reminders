import React from 'react';
import Home from './components/Home/Home';
import Reminders from './components/Reminders/Reminders';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faClock, faFlag, faInbox } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.scss';

// Add icons that will be used through the app into fa library
library.add(faCalendar, faClock, faFlag, faInbox);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reminders/:listId" component={Reminders} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
