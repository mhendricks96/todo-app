import React from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  let state = {
    displayCompleted: false,
    displayMax: 3,
  }
  return (
    <SettingsContext.Provider value={state}>{props.children}</SettingsContext.Provider>
  )
}

export default SettingsProvider;
