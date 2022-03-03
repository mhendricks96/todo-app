import React from 'react';
import ToDo from './components/Todo';

import Main from './components/Main'
import SiteContextProvider from './context/SiteContext';
// import '@blueprintjs/core/lib/css/blueprint.css';

export default class App extends React.Component {
  render() {
    return (
        <SiteContextProvider>
          <Main />
        </SiteContextProvider>
    );
  }
}


