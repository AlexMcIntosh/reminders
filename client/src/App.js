import React from 'react';
import { Home } from './components/Home/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faClock, faFlag, faInbox} from '@fortawesome/free-solid-svg-icons';

import './App.scss';

// Add icons that will be used through the app into fa library
library.add(faCalendar, faClock, faFlag, faInbox);

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
