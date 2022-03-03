import React, { useContext } from 'react';
import { When } from 'react-if';

import { LoginContext } from '../../context/LoginContext';

const Auth = (props) => {

  const login = useContext(LoginContext)

  const can = (capability) => {
    return login?.user?.capabilities?.includes(capability);
  }
  
    const isLoggedIn = login.loggedIn;
    const canDo = login ? can(props.capability) : true;
    const isAllowed = isLoggedIn && canDo;

    return (
      <When condition={isAllowed}>
        {props.children}
      </When>
    );
}

export default Auth;