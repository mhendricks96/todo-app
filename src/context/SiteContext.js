import React, { useState } from "react";
export const SiteContext = React.createContext();

const SiteContextProvider = (props) => {
  
  const setNumDisplay = (num) => {
    setState(prevState =>({...prevState, numToDisplay: num}))
  }
  
  const toggleDisplay = () => {
    setState(prevState =>({...prevState, displayComplete: !prevState.displayComplete}))
  }

  let initialState = {
    displayComplete: true,
    numItemsToDisplay: 4,
    defaultSort: 'Alpha',
    toggleDisplay: toggleDisplay,
    setNumDisplay: setNumDisplay
  };
  // Reducer
  let [state, setState] = useState(initialState);

  return (
    <SiteContext.Provider value={{state: state}}>{props.children}</SiteContext.Provider>
  );
};

export default SiteContextProvider;